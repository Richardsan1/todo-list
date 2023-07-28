<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "TODOLIST";

try{
    $conn = new mysqli($servername, $username, $password, $dbname);
}
catch(Exception $e){
    header('Content-Type: application/json; charset=utf-8', true, 500);
    die("Connection failed: " . $e->getMessage());
}
?>