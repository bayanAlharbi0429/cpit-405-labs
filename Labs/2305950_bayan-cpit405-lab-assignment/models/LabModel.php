<?php
// Bayan Alharbi - 2305950
// Model for the `labs` table. Only this file touches that table.

require_once __DIR__ . "/Database.php";

class LabModel
{
    // get every lab, in lab-number order, for the Labs page
    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM labs ORDER BY lab_number");
        return $stmt->fetchAll();
    }

    public static function getById($id)
    {
        $stmt = Database::connect()->prepare("SELECT * FROM labs WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    // change the status text, e.g. from "In progress" to "Completed"
    public static function updateStatus($id, $status)
    {
        $stmt = Database::connect()->prepare("UPDATE labs SET status = ? WHERE id = ?");
        return $stmt->execute([$status, $id]);
    }

    public static function delete($id)
    {
        $stmt = Database::connect()->prepare("DELETE FROM labs WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
