<?php
// Bayan Alharbi - 2305950
// Lab 6 page, moved into the views folder and turned into PHP.
$pageTitle = "Lab 6: Like & Dislike";
$active = "labs";
$extraCss = ["lab6.css"];
$extraJs = ["lab6.js"];
require __DIR__ . "/partials/header.php";
?>

    <main class="single">
        <div class="content">
            <section class="vote-card">
                <h2>Lab 6: Like or dislike</h2>
                <p class="status" id="status" aria-live="polite">Pick one. You can vote once, and reset to vote again.</p>

                <div class="vote-buttons">
                    <button type="button" id="like-btn" class="vote like" aria-pressed="false">
                        <span class="emoji" aria-hidden="true">&#128077;</span>
                        <span id="like-count" class="count">100</span>
                        <span class="sr-only">Like</span>
                    </button>
                    <button type="button" id="dislike-btn" class="vote dislike" aria-pressed="false">
                        <span class="emoji" aria-hidden="true">&#128078;</span>
                        <span id="dislike-count" class="count">20</span>
                        <span class="sr-only">Dislike</span>
                    </button>
                </div>
            </section>

            <section>
                <h2>Comments</h2>
                <form id="comment-form">
                    <label for="comment-input" class="sr-only">Write a comment</label>
                    <textarea id="comment-input" maxlength="300" placeholder="Write a comment..."></textarea>
                    <p class="char-count"><span id="char-count">0</span>/300</p>
                    <div class="form-buttons">
                        <button type="submit" id="submit-btn">Submit</button>
                        <button type="button" id="clear-btn" class="secondary">Clear</button>
                    </div>
                </form>

                <ul id="comments-list" class="comments"></ul>
            </section>

            <section>
                <button type="button" id="reset-btn" class="reset-btn">Reset my vote &amp; comment</button>
            </section>

            <p><a href="labs.php">&larr; Back to Labs</a></p>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
