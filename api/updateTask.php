<?php
require 'connect.php';

if(!isset($_POST['done'])){
    $id = $_POST['id'];
    $task = $_POST['task'];
    $description = $_POST['description'];
    $date = $_POST['date'];
    
    $sql = "UPDATE task SET name='$task', description='$description', date='$date' WHERE id='$id'";
} else{
    $id = $_POST['id'];
    $done = $_POST['done'];

    $sql = "UPDATE task SET done='$done' WHERE id='$id'";
} 
$result = mysqli_query($conn, $sql);

if ($result) {
    echo "Task updated successfully";
} else {
    echo "Error updating task: " . mysqli_error($conn);
}

mysqli_close($conn);
?>