<?php
// Bayan Alharbi - 2305950
// Controller for the contact form. contact.js sends the form here with Ajax (POST).
// I check the data, ask MessageModel to save it, and answer with JSON.

require_once __DIR__ . "/../models/MessageModel.php";

header("Content-Type: application/json; charset=utf-8");

// the form must be sent with POST, anything else is rejected
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Please use the contact form."]);
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");
$type = $_POST["message_type"] ?? "Inquiry";

// only these two types exist in the form
if ($type !== "Inquiry" && $type !== "Feedback") {
    $type = "Inquiry";
}

if ($name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in a name, a valid email and a message."]);
    exit;
}

try {
    MessageModel::add($name, $email, $message, $type);
    echo json_encode(["success" => true, "message" => "Thank you " . $name . ", your message was saved."]);
} catch (Exception $e) {
    // I don't print the real error to the visitor, only a simple message
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Sorry, the message could not be saved."]);
}
