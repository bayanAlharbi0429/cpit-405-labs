<?php
// Bayan Alharbi - 2305950
// Model for the `education` table.

require_once __DIR__ . "/Database.php";

class EducationModel
{
    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM education ORDER BY id");
        return $stmt->fetchAll();
    }
}
