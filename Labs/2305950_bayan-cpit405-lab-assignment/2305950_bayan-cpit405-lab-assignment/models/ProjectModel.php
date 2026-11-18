<?php
// Bayan Alharbi - 2305950
// Model for the `projects` table (Bonat, Boat Monitoring System).

require_once __DIR__ . "/Database.php";

class ProjectModel
{
    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM projects ORDER BY id");
        return $stmt->fetchAll();
    }

    public static function add($name, $description, $link)
    {
        $stmt = Database::connect()->prepare(
            "INSERT INTO projects (name, description, link) VALUES (?, ?, ?)"
        );
        return $stmt->execute([$name, $description, $link]);
    }

    public static function delete($id)
    {
        $stmt = Database::connect()->prepare("DELETE FROM projects WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
