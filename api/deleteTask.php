<?php 
require 'connect.php';

$id = $_POST['id'];

$sql = "DELETE FROM task WHERE id=$id";

$result = mysqli_query($conn, $sql);
mysqli_close($conn);