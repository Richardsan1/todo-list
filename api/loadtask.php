<?php
require 'connect.php';
header('Content-Type: application/json; charset=utf-8');
if ($_GET['done'] == "false"){
    $query = mysqli_query($conn, "SELECT * FROM task WHERE done = FALSE ORDER BY date ");
} else{
    $query = mysqli_query($conn, "SELECT * FROM task WHERE done = TRUE ORDER BY date DESC");
}
echo json_encode(mysqli_fetch_all($query));

mysqli_free_result($query);
mysqli_close($conn);
?>
    