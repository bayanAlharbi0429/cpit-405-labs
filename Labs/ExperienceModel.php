<?php
// Bayan Alharbi - 2305950
// Model for the `experience` table (internships and Forsah).

require_once __DIR__ . "/Database.php";

class ExperienceModel
{
    // newest job first, I control the order with the sort_order column
    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM experience ORDER BY sort_order");
        return $stmt->fetchAll();
    }
}
