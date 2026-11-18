<?php
// Bayan Alharbi - 2305950
// Contact page. The form does not reload the page: contact.js sends it with Ajax
// to controllers/contact_controller.php and shows the answer in #form-status.

$pageTitle = "Contact";
$active = "contact";
$extraJs = ["contact.js"];

require __DIR__ . "/partials/header.php";
?>

    <main>
        <aside>
            <img class="avatar" src="../images/Profile_Picture.jpeg" alt="Portrait of Bayan Alharbi">
            <h2>Contact Info</h2>
            <ul class="info">
                <li><strong>Email:</strong><br><a href="mailto:balharbi0429@stu.kau.edu.sa">balharbi0429@stu.kau.edu.sa</a></li>
                <li><strong>Phone:</strong> <a href="tel:+966565396577">+966 56 539 6577</a></li>
                <li><a href="https://www.linkedin.com/in/bayan-alharbi-2350b9365" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://github.com/bayanAlharbi0429" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
        </aside>

        <div class="content">
            <section>
                <h2>Contact Me</h2>
                <!-- action points to the controller, as the homework asks -->
                <form id="contact-form" action="../controllers/contact_controller.php" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <fieldset>
                        <legend class="hidden">Message type</legend>
                        Message Type:
                        <label><input type="radio" name="message_type" value="Inquiry" checked> Inquiry</label>
                        <label><input type="radio" name="message_type" value="Feedback"> Feedback</label>
                    </fieldset>

                    <button type="submit">Send</button>
                </form>
                <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
            </section>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
