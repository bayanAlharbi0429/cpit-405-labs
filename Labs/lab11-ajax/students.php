<?php
// Bayan Alharbi - 2305950
// Lab 11: the table from the lab stored as an array with keys, then sent as JSON.

$students = [
    ["name" => "Mohammad", "total" => 4],
    ["name" => "Fahad", "total" => 3.5],
];

// tell the browser the answer is JSON, then convert the array with json_encode
header("Content-Type: application/json");
echo json_encode($students);
