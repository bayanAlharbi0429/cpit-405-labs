<?php
// Bayan Alharbi - 2305950
// Lab 5 page, moved into the views folder and turned into PHP.
$pageTitle = "Lab 5: NBA Player Stats";
$active = "labs";
$extraCss = ["lab5.css"];
$extraJs = ["lab5.js"];
require __DIR__ . "/partials/header.php";
?>

    <main class="single">
        <div class="content">
            <section>
                <div class="lab-head">
                    <h2>NBA Player Stats Dashboard</h2>
                    <button type="button" id="dark-mode-toggle" class="toggle-btn" aria-pressed="false">Toggle Dark Mode</button>
                </div>

                <div class="table-filters">
                    <input type="text" id="search" placeholder="Search players..." aria-label="Search players">
                    <select id="team-filter" aria-label="Filter by team">
                        <option value="all">All</option>
                        <!-- Teams are added by lab5.js -->
                    </select>
                    <span id="result-count" class="result-count" aria-live="polite"></span>
                </div>

                <div class="table-wrap">
                    <table id="player-stats">
                        <thead>
                            <tr>
                                <th data-key="name">Name</th>
                                <th data-key="code">Team</th>
                                <th data-key="points">Points</th>
                                <th data-key="rebounds">Rebounds</th>
                                <th data-key="assists">Assists</th>
                            </tr>
                        </thead>
                        <tbody id="player-rows">
                            <!-- Rows are added by lab5.js -->
                        </tbody>
                    </table>
                </div>
                <p class="hint">Tip: click a column header to sort.</p>
            </section>

            <p><a href="labs.php">&larr; Back to Labs</a></p>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
