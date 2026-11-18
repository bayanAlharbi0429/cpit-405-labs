<?php
// Bayan Alharbi - 2305950
// Shared top part of the pages (head + header + nav).
// Each page sets $pageTitle, $active and $extraCss before including this file.

$extraCss = $extraCss ?? [];

// short helper so I don't repeat htmlspecialchars everywhere
if (!function_exists("e")) {
    function e($text)
    {
        return htmlspecialchars((string) $text, ENT_QUOTES, "UTF-8");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle) ?> | Bayan Alharbi</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <?php foreach ($extraCss as $css): ?>
    <link rel="stylesheet" href="../css/<?= e($css) ?>">
    <?php endforeach; ?>
</head>
<body>
    <header>
        <div class="header-inner">
            <div class="brand">
                <h1>Bayan Alharbi</h1>
                <p>IT Student | UI/UX Designer</p>
            </div>
            <nav aria-label="Main navigation">
                <ul>
                    <li><a <?= $active === "home" ? 'class="active" ' : "" ?>href="index.php">Home</a></li>
                    <li><a <?= $active === "labs" ? 'class="active" ' : "" ?>href="labs.php">Labs</a></li>
                    <li><a <?= $active === "contact" ? 'class="active" ' : "" ?>href="contact.php">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
