const ACCESS_KEY = "60a5bYnMUzIOpbYg97O7hPvHPUhDcTZTqeiz0T7Vw8s";

const API_URL = "https://api.unsplash.com/search/photos";
const PER_PAGE = 12;

const queryInput = document.getElementById("query");
const form = document.getElementById("search-form");
const btnXhr = document.getElementById("btn-xhr");
const btnPromises = document.getElementById("btn-promises");
const gallery = document.getElementById("gallery");
const message = document.getElementById("message");

// Only the newest request may update the page (ignores slow, outdated responses).
let latestRequest = 0;

function buildUrl(query) {
    const params = new URLSearchParams({
        query: query,
        per_page: PER_PAGE,
        orientation: "portrait"
    });
    return API_URL + "?" + params.toString();
}

/* ---------- Shared UI helpers ---------- */
function setMessage(text, isError) {
    message.textContent = text;
    message.classList.toggle("error", Boolean(isError));
}

function getQuery() {
    const query = queryInput.value.trim();
    if (query === "") {
        setMessage("Type something to search for.", true);
        queryInput.focus();
        return null;
    }
    if (ACCESS_KEY === "" || ACCESS_KEY === "") {
        setMessage("Add your Unsplash Access Key at the top of lab7.js first.", true);
        return null;
    }
    return query;
}

function startLoading(method) {
    gallery.replaceChildren();
    setMessage("Searching with " + method + "...", false);
    return ++latestRequest;
}

// Build one photo card with the DOM API.
function createCard(photo) {
    const figure = document.createElement("figure");
    figure.className = "photo";

    const link = document.createElement("a");
    link.href = photo.links.html;
    link.target = "_blank";
    link.rel = "noopener";

    const img = document.createElement("img");
    img.src = photo.urls.small;
    img.alt = photo.alt_description || "Photo by " + photo.user.name;
    img.loading = "lazy";
    link.appendChild(img);

    // Unsplash asks apps to credit the photographer.
    const caption = document.createElement("figcaption");
    const credit = document.createElement("a");
    credit.href = photo.user.links.html;
    credit.target = "_blank";
    credit.rel = "noopener";
    credit.textContent = photo.user.name;
    caption.append("Photo by ", credit);

    figure.append(link, caption);
    return figure;
}

function render(data, query) {
    gallery.replaceChildren();
    const photos = data.results || [];
    if (photos.length === 0) {
        setMessage('No photos found for "' + query + '".', false);
        return;
    }
    const fragment = document.createDocumentFragment();
    photos.forEach(function (photo) { fragment.appendChild(createCard(photo)); });
    gallery.appendChild(fragment);
    setMessage("Showing " + photos.length + ' photos for "' + query + '".', false);
}

function showError(error) {
    gallery.replaceChildren();
    setMessage("Something went wrong: " + error.message, true);
}

/* ---------- 1) XMLHttpRequest ---------- */
function searchWithXHR(query) {
    const id = startLoading("XHR");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", buildUrl(query));
    xhr.setRequestHeader("Authorization", "Client-ID " + ACCESS_KEY);

    xhr.onload = function () {
        if (id !== latestRequest) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                render(JSON.parse(xhr.responseText), query);
            } catch (e) {
                showError(e);
            }
        } else {
            showError(new Error("HTTP " + xhr.status));
        }
    };
    xhr.onerror = function () {
        if (id === latestRequest) showError(new Error("network error"));
    };
    xhr.send();
}

/* ---------- 2) fetch with promises ---------- */
function searchWithPromises(query) {
    const id = startLoading("fetch (promises)");
    fetch(buildUrl(query), { headers: { Authorization: "Client-ID " + ACCESS_KEY } })
        .then(function (response) {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.json();
        })
        .then(function (data) {
            if (id === latestRequest) render(data, query);
        })
        .catch(function (error) {
            if (id === latestRequest) showError(error);
        });
}

/* ---------- 3) fetch with async/await ---------- */
async function searchWithAsync(query) {
    const id = startLoading("fetch (async/await)");
    try {
        const response = await fetch(buildUrl(query), {
            headers: { Authorization: "Client-ID " + ACCESS_KEY }
        });
        if (!response.ok) throw new Error("HTTP " + response.status);
        const data = await response.json();
        if (id === latestRequest) render(data, query);
    } catch (error) {
        if (id === latestRequest) showError(error);
    }
}

/* ---------- Events ---------- */
btnXhr.addEventListener("click", function () {
    const query = getQuery();
    if (query) searchWithXHR(query);
});

btnPromises.addEventListener("click", function () {
    const query = getQuery();
    if (query) searchWithPromises(query);
});

// Submitting the form (third button, or pressing Enter in the input) uses async/await.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = getQuery();
    if (query) searchWithAsync(query);
});

// Mouse events: dim the other photos while one is hovered (event delegation on the gallery).
gallery.addEventListener("mouseover", function (event) {
    const photo = event.target.closest(".photo");
    gallery.classList.toggle("hovering", Boolean(photo));
    gallery.querySelectorAll(".photo.active").forEach(function (el) { el.classList.remove("active"); });
    if (photo) photo.classList.add("active");
});
gallery.addEventListener("mouseleave", function () {
    gallery.classList.remove("hovering");
    gallery.querySelectorAll(".photo.active").forEach(function (el) { el.classList.remove("active"); });
});

setMessage("Choose a search method to load photos.", false);
