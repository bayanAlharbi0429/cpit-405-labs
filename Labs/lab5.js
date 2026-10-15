const data = [
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers (PHI)",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "New York Knicks (NYK)",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder (OKC)",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "Philadelphia 76ers (PHI)",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers (CAVS)",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks (DAL)",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets (DEN)",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves (MIN)",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns (PHX)",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "Orlando Magic (ORL)",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns (PHX)",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics (BOS)",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "Milwaukee Bucks (MIL)",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "Boston Celtics (BOS)",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "Miami Heat (MIA)",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks (DAL)",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "Indiana Pacers (IND)",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers (LAC)",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "Denver Nuggets (DEN)",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "Los Angeles Clippers (LAC)",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves (MIN)",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "Orlando Magic (ORL)",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "Oklahoma City Thunder (OKC)",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "Indiana Pacers (IND)",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "New York Knicks (NYK)",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "New Orleans Pelicans (NOP)",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "Milwaukee Bucks (MIL)",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "Indiana Pacers (IND)",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "Los Angeles Lakers (LAL)",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "Miami Heat (MIA)",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "Boston Celtics (BOS)",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "Milwaukee Bucks (MIL)",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns (PHX)",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "Los Angeles Clippers (LAC)",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "Cleveland Cavaliers (CAVS)",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "Denver Nuggets (DEN)",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "Cleveland Cavaliers (CAVS)",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "Oklahoma City Thunder (OKC)",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "Indiana Pacers (IND)",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "Orlando Magic (ORL)",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "New York Knicks (NYK)",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "New Orleans Pelicans (NOP)",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "Denver Nuggets (DEN)",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "New Orleans Pelicans (NOP)",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "Los Angeles Lakers (LAL)",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "Philadelphia 76ers (PHI)",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "Boston Celtics (BOS)",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];







/* ===================== Lab 5: NBA Player Stats Dashboard ===================== */

// Pull the short code out of "Philadelphia 76ers (PHI)" -> "PHI".
// The starter data uses "CAVS" for Cleveland; the official code is "CLE".
function getTeamCode(team) {
    const match = team.match(/\(([^)]+)\)/);
    const code = match ? match[1] : team;
    return code === "CAVS" ? "CLE" : code;
}

// Normalize the data once: add a `code` field so we never re-parse strings.
const players = data.map(function (p) {
    return Object.assign({}, p, { code: getTeamCode(p.team) });
});
const maxPoints = Math.max.apply(null, players.map(function (p) { return p.points; }));

// DOM references
const searchInput = document.getElementById("search");
const teamFilter = document.getElementById("team-filter");
const tbody = document.getElementById("player-rows");
const thead = document.querySelector("#player-stats thead");
const darkToggle = document.getElementById("dark-mode-toggle");
const resultCount = document.getElementById("result-count");

// Current UI state
let sortKey = null;
let sortAsc = true;

/* ---------- 1. Populate the team dropdown from the data ---------- */
function populateTeamFilter() {
    const teams = Array.from(new Set(players.map(function (p) { return p.code; }))).sort();
    teams.forEach(function (code) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = code;
        teamFilter.appendChild(option);
    });
}

/* ---------- 2. Build one table row with the DOM API ---------- */
function createRow(player) {
    const tr = document.createElement("tr");
    tr.title = player.team;

    const nameTd = document.createElement("td");
    nameTd.textContent = player.name;

    const teamTd = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "team-badge";
    badge.textContent = player.code;
    teamTd.appendChild(badge);

    // Points cell doubles as a tiny bar chart (data visualization).
    const pointsTd = document.createElement("td");
    const bar = document.createElement("div");
    bar.className = "bar";
    const fill = document.createElement("span");
    fill.className = "bar-fill";
    fill.style.width = (player.points / maxPoints * 100) + "%"; // dynamic styling from JS
    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = player.points;
    bar.appendChild(fill);
    bar.appendChild(value);
    pointsTd.appendChild(bar);

    const reboundsTd = document.createElement("td");
    reboundsTd.textContent = player.rebounds;

    const assistsTd = document.createElement("td");
    assistsTd.textContent = player.assists;

    tr.append(nameTd, teamTd, pointsTd, reboundsTd, assistsTd);
    return tr;
}

/* ---------- 3. Filter + sort + render ---------- */
function getVisiblePlayers() {
    const query = searchInput.value.trim().toLowerCase();
    const team = teamFilter.value;

    let list = players.filter(function (p) {
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesTeam = team === "all" || p.code === team;
        return matchesName && matchesTeam;
    });

    if (sortKey) {
        list = list.slice().sort(function (a, b) {
            const x = a[sortKey];
            const y = b[sortKey];
            const result = typeof x === "string" ? x.localeCompare(y) : x - y;
            return sortAsc ? result : -result;
        });
    }
    return list;
}

function renderTable() {
    const list = getVisiblePlayers();
    tbody.replaceChildren();

    if (list.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 5;
        td.className = "empty";
        td.textContent = "No players match your search.";
        tr.appendChild(td);
        tbody.appendChild(tr);
    } else {
        const fragment = document.createDocumentFragment();
        list.forEach(function (p) { fragment.appendChild(createRow(p)); });
        tbody.appendChild(fragment);
    }
    resultCount.textContent = "Showing " + list.length + " of " + players.length + " players";
}

/* ---------- 4. Events ---------- */

// Search: fires on every keystroke
searchInput.addEventListener("input", renderTable);

// Filter: fires when the dropdown value changes
teamFilter.addEventListener("change", renderTable);

// Dark mode: click toggles a class on <body>
function applyDarkMode(on) {
    document.body.classList.toggle("dark-mode", on);
    darkToggle.textContent = on ? "Toggle Light Mode" : "Toggle Dark Mode";
    darkToggle.setAttribute("aria-pressed", String(on));
}
darkToggle.addEventListener("click", function () {
    const on = !document.body.classList.contains("dark-mode");
    applyDarkMode(on);
    try { localStorage.setItem("lab5-dark", on ? "1" : "0"); } catch (e) { /* storage unavailable */ }
});

// Event delegation (1): ONE mouseover listener on <tbody> highlights the hovered row,
// instead of attaching a listener to every row.
let hoveredRow = null;
tbody.addEventListener("mouseover", function (event) {
    const row = event.target.closest("tr");
    if (!row || row === hoveredRow) return;
    if (hoveredRow) hoveredRow.classList.remove("row-hover");
    row.classList.add("row-hover");
    hoveredRow = row;
});
tbody.addEventListener("mouseleave", function () {
    if (hoveredRow) hoveredRow.classList.remove("row-hover");
    hoveredRow = null;
});

// Event delegation (2) [OPTIONAL sorting]: ONE click listener on <thead>.
thead.addEventListener("click", function (event) {
    const th = event.target.closest("th");
    if (!th) return;
    const key = th.dataset.key;

    if (sortKey === key) {
        sortAsc = !sortAsc;
    } else {
        sortKey = key;
        sortAsc = key === "name" || key === "code"; // text A-Z first, numbers high-to-low first
    }

    thead.querySelectorAll("th").forEach(function (cell) {
        cell.classList.remove("sorted-asc", "sorted-desc");
        cell.removeAttribute("aria-sort");
    });
    th.classList.add(sortAsc ? "sorted-asc" : "sorted-desc");
    th.setAttribute("aria-sort", sortAsc ? "ascending" : "descending");
    renderTable();
});

/* ---------- 5. Start ---------- */
populateTeamFilter();
renderTable();
try { applyDarkMode(localStorage.getItem("lab5-dark") === "1"); } catch (e) { /* ignore */ }
