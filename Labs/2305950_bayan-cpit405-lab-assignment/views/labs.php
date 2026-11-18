<?php
// Bayan Alharbi - 2305950
// Labs page. Both tables are filled from the database (labs and projects models).

require_once __DIR__ . "/../models/LabModel.php";
require_once __DIR__ . "/../models/ProjectModel.php";

$pageTitle = "Labs & Projects";
$active = "labs";

try {
    $labs = LabModel::getAll();
    $projects = ProjectModel::getAll();
    $dbError = false;
} catch (Exception $e) {
    $labs = $projects = [];
    $dbError = true;
}

require __DIR__ . "/partials/header.php";
?>

    <main>
        <aside>
            <img class="avatar" src="../images/Profile_Picture.jpeg" alt="Portrait of Bayan Alharbi">
            <h2>Quick Links</h2>
            <ul class="side-links">
                <li><a href="#labs">Completed Labs</a></li>
                <li><a href="#projects">Completed Projects</a></li>
                <li><a href="index.php">View CV</a></li>
                <li><a href="contact.php">Contact Me</a></li>
            </ul>
        </aside>

        <div class="content">
            <?php if ($dbError): ?>
            <p class="db-error">The database is not available. Start MySQL in XAMPP and import Documents/db-install-statements.sql.</p>
            <?php endif; ?>

            <section id="labs">
                <h2>Completed Labs</h2>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr><th>Lab</th><th>Topic</th><th>Status</th><th>Link</th></tr>
                        </thead>
                        <tbody>
                            <?php foreach ($labs as $lab): ?>
                            <tr>
                                <td>Lab <?= e($lab["lab_number"]) ?></td>
                                <td><?= e($lab["topic"]) ?></td>
                                <td><?= e($lab["status"]) ?></td>
                                <td><a href="<?= e($lab["link"]) ?>"<?= strpos($lab["link"], "http") === 0 ? ' target="_blank" rel="noopener"' : "" ?>><?= e($lab["link_text"]) ?></a></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="projects">
                <h2>Completed Projects</h2>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr><th>Project</th><th>Description</th><th>Link</th></tr>
                        </thead>
                        <tbody>
                            <?php foreach ($projects as $project): ?>
                            <tr>
                                <td><?= e($project["name"]) ?></td>
                                <td><?= e($project["description"]) ?></td>
                                <td><a href="<?= e($project["link"]) ?>" target="_blank" rel="noopener">View</a></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </main>

<?php require __DIR__ . "/partials/footer.php"; ?>
