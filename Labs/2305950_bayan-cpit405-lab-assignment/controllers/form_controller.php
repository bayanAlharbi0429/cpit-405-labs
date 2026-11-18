<?php
// Bayan Alharbi - 2305950
// Handler for the small login form from Lab 2. The form action points here.
// It only shows what was typed, nothing is saved (and I never print the password).

$login = htmlspecialchars($_POST["login"] ?? "", ENT_QUOTES, "UTF-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Form received</title>
</head>
<body>
    <h1>Form received</h1>
    <?php if ($login !== ""): ?>
        <p>Login: <?= $login ?></p>
    <?php else: ?>
        <p>No login was sent.</p>
    <?php endif; ?>
    <p><a href="../views/lab2.php">Back to Lab 2</a></p>
</body>
</html>
