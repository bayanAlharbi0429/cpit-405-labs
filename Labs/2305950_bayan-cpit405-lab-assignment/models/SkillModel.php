<?php
// Bayan Alharbi - 2305950
// Model for the `skills` table. Each skill belongs to a category
// (Programming or UI/UX), so I join with skill_categories.

require_once __DIR__ . "/Database.php";

class SkillModel
{
    // returns something like ["Programming" => ["Java", "Python"], "UI/UX" => ["Figma"]]
    // so the page can print one group at a time
    public static function getGrouped()
    {
        $sql = "SELECT c.name AS category, s.name AS skill
                FROM skills s
                JOIN skill_categories c ON c.id = s.category_id
                ORDER BY c.id, s.id";
        $rows = Database::connect()->query($sql)->fetchAll();

        $groups = [];
        foreach ($rows as $row) {
            $groups[$row["category"]][] = $row["skill"];
        }
        return $groups;
    }
}
