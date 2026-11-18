<?php
// Bayan Alharbi - 2305950
// Lab 7 page, moved into the views folder and turned into PHP.
$pageTitle = "Lab 7: Unsplash API";
$active = "labs";
$extraCss = ["lab7.css"];
$extraJs = ["lab7.js"];
require __DIR__ . "/partials/header.php";
?>

    <main class="single">
        <div class="content">
            <section>
                <h2>Unsplash API</h2>

                <form id="search-form" class="toolbar" role="search">
                    <label for="query" class="sr-only">Search photos</label>
                    <input type="text" id="query" value="Makkah" placeholder="Search photos...">
                    <button type="button" id="btn-xhr">Search using XHR</button>
                    <button type="button" id="btn-promises">Search using fetch (promises)</button>
                    <button type="submit" id="btn-async">Search using fetch (async/await)</button>
                </form>
                <p class="hint">Press Enter in the search box to search with async/await.</p>

                <p id="message" class="message" role="status" aria-live="polite"></p>
                <div id="gallery" class="gallery"></div>
            </section>

            <p><a href="labs.php">&larr; Back to Labs</a></p>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
