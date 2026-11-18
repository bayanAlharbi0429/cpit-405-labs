<?php
// Bayan Alharbi - 2305950
// Home page. The CV information is not typed here, it comes from the database through the models.

require_once __DIR__ . "/../models/EducationModel.php";
require_once __DIR__ . "/../models/ExperienceModel.php";
require_once __DIR__ . "/../models/AchievementModel.php";
require_once __DIR__ . "/../models/SkillModel.php";

$pageTitle = "CPIT405 Portfolio";
$active = "home";

try {
    $education = EducationModel::getAll();
    $experience = ExperienceModel::getAll();
    $achievements = AchievementModel::getAll();
    $skills = SkillModel::getGrouped();
    $dbError = false;
} catch (Exception $e) {
    // if the database is off I still want the page to open with a clear message
    $education = $experience = $achievements = $skills = [];
    $dbError = true;
}

require __DIR__ . "/partials/header.php";
?>

    <main>
        <aside>
            <img class="avatar" src="../images/Profile_Picture.jpeg" alt="Portrait of Bayan Alharbi">
            <ul class="side-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
            <h2>Info</h2>
            <ul class="info">
                <li><strong>Name:</strong> Bayan Ahmad Alharbi</li>
                <li><strong>ID:</strong> 2305950</li>
                <li><strong>Email:</strong> <a href="mailto:balharbi0429@stu.kau.edu.sa">balharbi0429@stu.kau.edu.sa</a></li>
                <li><strong>Phone:</strong> <a href="tel:+966565396577">+966 56 539 6577</a></li>
                <li><a href="https://www.linkedin.com/in/bayan-alharbi-2350b9365" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://github.com/bayanAlharbi0429" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
        </aside>

        <div class="content">
            <?php if ($dbError): ?>
            <p class="db-error">The database is not available. Start MySQL in XAMPP and import Documents/db-install-statements.sql.</p>
            <?php endif; ?>

            <section id="about">
                <h2>About Me</h2>
                <p class="lead">Welcome to my CPIT-405 portfolio!</p>
                <p>I am Bayan Alharbi (ID: 2305950), an Information Technology student at King Abdulaziz University with a GPA of 4.82. I am a UI/UX designer and community builder. I have completed two design internships, delivered 50+ production-ready screens, led a 90+ member student tech community, and co-founded Forsah, a platform that connects students with tech opportunities.</p>
                <p>On this site you can find my CV, the labs I completed in this course, and a way to contact me.</p>
            </section>

            <section id="education">
                <h2>Education</h2>
                <?php foreach ($education as $row): ?>
                <div class="item">
                    <h3><?= e($row["degree"]) ?></h3>
                    <p class="meta"><?= e($row["university"]) ?> | <?= e($row["period"]) ?> | GPA: <?= e($row["gpa"]) ?></p>
                </div>
                <?php endforeach; ?>
            </section>

            <section id="experience">
                <h2>Experience</h2>
                <?php foreach ($experience as $row): ?>
                <div class="item">
                    <h3><?= e($row["title"]) ?>, <?= e($row["organization"]) ?></h3>
                    <p class="meta"><?= e($row["period"]) ?></p>
                    <p><?= e($row["description"]) ?></p>
                </div>
                <?php endforeach; ?>
            </section>

            <section id="achievements">
                <h2>Achievements</h2>
                <ul class="plain">
                    <?php foreach ($achievements as $row): ?>
                    <li><?= e($row["text"]) ?></li>
                    <?php endforeach; ?>
                </ul>
            </section>

            <section id="skills">
                <h2>Technical Skills</h2>
                <?php foreach ($skills as $category => $names): ?>
                <div class="skill-group">
                    <h3><?= e($category) ?></h3>
                    <ul class="tags">
                        <?php foreach ($names as $skill): ?>
                        <li><?= e($skill) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </section>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
