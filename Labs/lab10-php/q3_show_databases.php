<?php
// Bayan Alharbi - 2305950
// Lab 10, question 3: connect to the database and show the names of all databases.

$host = "localhost";
$user = "root";
$pass = ""; // XAMPP's default root has no password, change it if yours has one

// connect to MariaDB, and stop with a message if it fails
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// the query the lab asks for
$result = $conn->query("SHOW DATABASES;");
if (!$result) {
    die("Query failed: " . $conn->error);
}

echo "<h2>Databases on this server</h2><ul>";
// every row has one column, the database name
while ($row = $result->fetch_array()) {
    echo "<li>" . htmlspecialchars($row[0]) . "</li>";
}
echo "</ul>";

$conn->close();
