<?php
// Bayan Alharbi - 2305950
// Model for the `messages` table. The contact form saves into it.

require_once __DIR__ . "/Database.php";

class MessageModel
{
    // save one message from the contact form
    public static function add($name, $email, $message, $type)
    {
        $stmt = Database::connect()->prepare(
            "INSERT INTO messages (name, email, message, message_type) VALUES (?, ?, ?, ?)"
        );
        return $stmt->execute([$name, $email, $message, $type]);
    }

    public static function getAll()
    {
        $stmt = Database::connect()->query("SELECT * FROM messages ORDER BY id DESC");
        return $stmt->fetchAll();
    }

    public static function delete($id)
    {
        $stmt = Database::connect()->prepare("DELETE FROM messages WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
