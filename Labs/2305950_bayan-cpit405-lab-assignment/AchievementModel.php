<?php
// Bayan Alharbi - 2305950
// Model for the `achievements` table.

require_once __DIR__ . "/Database.php";

class AchievementModel
{
    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM achievements ORDER BY id");
        return $stmt->fetchAll();
    }
}
