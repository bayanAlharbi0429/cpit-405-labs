/* Lab 6: like / dislike + comments, managed with cookies */

// Starting totals (as in the lab's example). There is no server, so these are
// fixed; the visitor's own vote is added on top of them.
const BASE_LIKES = 100;
const BASE_DISLIKES = 20;

const VOTE_COOKIE = "lab6_vote";        // "like" | "dislike"
const COMMENT_COOKIE = "lab6_comments"; // JSON array of strings
const COOKIE_DAYS = 365;

/* ---------- Cookie helpers ---------- */
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) +
        "; expires=" + expires + "; SameSite=Lax";
}

function getCookie(name) {
    const parts = document.cookie.split("; ");
    for (let i = 0; i < parts.length; i++) {
        const pair = parts[i].split("=");
        if (pair[0] === name) {
            return decodeURIComponent(pair.slice(1).join("="));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
}

/* ---------- State ---------- */
let likes = BASE_LIKES;
let dislikes = BASE_DISLIKES;
let comments = [];
let vote = null;

/* ---------- DOM ---------- */
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");
const statusEl = document.getElementById("status");
const form = document.getElementById("comment-form");
const input = document.getElementById("comment-input");
const charCount = document.getElementById("char-count");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("comments-list");
const resetBtn = document.getElementById("reset-btn");

/* ---------- Rendering ---------- */
function renderVotes() {
    likes = BASE_LIKES + (vote === "like" ? 1 : 0);
    dislikes = BASE_DISLIKES + (vote === "dislike" ? 1 : 0);
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;

    const voted = vote !== null;
    likeBtn.disabled = voted;
    dislikeBtn.disabled = voted;
    likeBtn.classList.toggle("chosen", vote === "like");
    dislikeBtn.classList.toggle("chosen", vote === "dislike");
    likeBtn.setAttribute("aria-pressed", String(vote === "like"));
    dislikeBtn.setAttribute("aria-pressed", String(vote === "dislike"));
}

function renderComments() {
    list.replaceChildren();
    if (comments.length === 0) {
        const li = document.createElement("li");
        li.className = "empty";
        li.textContent = "No comments yet. Be the first to write one.";
        list.appendChild(li);
    } else {
        comments.forEach(function (text) {
            const li = document.createElement("li");
            li.textContent = text; // textContent, not innerHTML: comments can't inject HTML
            list.appendChild(li);
        });
    }
    // One comment per visitor: lock the form once a comment exists.
    const locked = comments.length > 0;
    input.disabled = locked;
    submitBtn.disabled = locked;
    clearBtn.disabled = locked;
    input.placeholder = locked ? "You already commented. Reset to comment again." : "Write a comment...";
}

function showStatus(message) {
    statusEl.textContent = message;
    statusEl.classList.remove("flash");
    void statusEl.offsetWidth; // restart the animation
    statusEl.classList.add("flash");
}

/* ---------- Load saved state from cookies ---------- */
function loadState() {
    const savedVote = getCookie(VOTE_COOKIE);
    vote = savedVote === "like" || savedVote === "dislike" ? savedVote : null;

    try {
        const saved = JSON.parse(getCookie(COMMENT_COOKIE) || "[]");
        comments = Array.isArray(saved) ? saved.filter(function (c) { return typeof c === "string"; }) : [];
    } catch (e) {
        comments = [];
    }

    renderVotes();
    renderComments();
    if (vote) {
        showStatus("You voted " + vote + ". Reset to vote again.");
    }
}

/* ---------- Events ---------- */
function castVote(choice) {
    if (vote !== null) return; // already voted
    vote = choice;
    setCookie(VOTE_COOKIE, vote, COOKIE_DAYS);
    renderVotes();
    showStatus("Thanks! Your " + choice + " was counted.");
}
likeBtn.addEventListener("click", function () { castVote("like"); });
dislikeBtn.addEventListener("click", function () { castVote("dislike"); });

input.addEventListener("input", function () {
    charCount.textContent = input.value.length;
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (comments.length > 0) return; // already commented
    const text = input.value.trim();
    if (text === "") {
        showStatus("Write something before you submit.");
        input.focus();
        return;
    }
    comments.push(text);
    setCookie(COMMENT_COOKIE, JSON.stringify(comments), COOKIE_DAYS);
    input.value = "";
    charCount.textContent = "0";
    renderComments();
    showStatus("Comment saved.");
});

// Clear only empties the text box (nothing is saved yet).
clearBtn.addEventListener("click", function () {
    input.value = "";
    charCount.textContent = "0";
    input.focus();
});

// Reset: remove both cookies, restore counters, empty the comments array.
resetBtn.addEventListener("click", function () {
    deleteCookie(VOTE_COOKIE);
    deleteCookie(COMMENT_COOKIE);
    vote = null;
    comments = [];
    input.value = "";
    charCount.textContent = "0";
    renderVotes();
    renderComments();
    showStatus("Your vote and comment were reset. You can vote again.");
});

loadState();
