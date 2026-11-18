<?php
// Bayan Alharbi - 2305950
// CPIT-405 homework: this file only opens the connection to MariaDB.
// All the models call Database::connect() so the password lives in one place.

class Database
{
    // if your XAMPP MariaDB has a password, write it here
    private const HOST = "localhost";
    private const NAME = "cpit405_portfolio";
    private const USER = "root";
    private const PASS = "";

    private static $pdo = null;

    public static function connect()
    {
        // I reuse the same connection so I don't open a new one for every query
        if (self::$pdo === null) {
            $dsn = "mysql:host=" . self::HOST . ";dbname=" . self::NAME . ";charset=utf8mb4";
            self::$pdo = new PDO($dsn, self::USER, self::PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        }
        return self::$pdo;
    }
}
