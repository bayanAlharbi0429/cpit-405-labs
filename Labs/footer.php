<?php
// Bayan Alharbi - 2305950
// Shared bottom part of the pages. $extraJs is a list of files from the js folder.
$extraJs = $extraJs ?? [];
?>
    <footer>
        <p>&copy; 2026 Bayan Alharbi - CPIT 405 Portfolio</p>
    </footer>
    <?php foreach ($extraJs as $js): ?>
    <script src="../js/<?= e($js) ?>"></script>
    <?php endforeach; ?>
</body>
</html>
