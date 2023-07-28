<?php
require 'connect.php';

$task = $_POST['task'];
// header('Content-Type: application/json; charset=utf-8');
mysqli_begin_transaction($conn);
$stmt = mysqli_stmt_init($conn);

mysqli_stmt_prepare($stmt, "INSERT INTO task (name) VALUES (?)");
mysqli_stmt_bind_param($stmt, "s", $task);

mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

$query = mysqli_query($conn, "SELECT id, date FROM task WHERE name = '$task' ORDER BY id DESC LIMIT 1");
$return= mysqli_fetch_assoc($query);

echo json_encode($return);

mysqli_commit($conn);
mysqli_close($conn);