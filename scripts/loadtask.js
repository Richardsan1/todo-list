// <?php
//             $result = mysqli_query($conn, "SELECT * FROM task WHERE done = FALSE");
//             while($row = mysqli_fetch_assoc($result)) {
//                 echo "<div class='tasklist-item'>";
//                 echo "  <p class='tasklist-item-text'>" . $row['name'] . "</p>";
//                 echo "  <input type='checkbox' class='tasklist-item-button'/>";
//                 echo "</div>";
//             }
//         ?>
$(document).ready(function() {
    $.ajax({
        url: "../api/loadtask.php",
        type: "GET",
        data: {'done': false},
        success: function(data) {
            let i = 0;
            while(i < data.length){
                $("#tasklist-pending").append(formatTask(data[i]));
                i++;
            }
        }
    });
    $.ajax({
        url: "../api/loadtask.php",
        type: "GET",
        data: {'done': true},
        success: function(data) {
            let i = 0;
            while(i < data.length){
                $("#tasklist-completed").append(formatTask(data[i], true));
                i++;
            }
        }
    });
});

function formatTask(data, done = false) {
    let taskid = data[0];
    let taskName = data[1];
    let taskdesc = data[2];
    let taskdate = data[3];
    if (taskdesc == null) {
        taskdesc = "";
    }
    let taskHTML;
    if (done) {
        taskHTML = "<div class='tasklist-item-complete' id='"+taskid+"'>";
        taskHTML += "  <p class='tasklist-item-text'>" + taskName + "</p>";
        taskHTML += "  <input type='checkbox' class='tasklist-item-button' checked='true'/>";
    } else {
        taskHTML = "<div class='tasklist-item' id='"+taskid+"'>";
        taskHTML += "  <p class='tasklist-item-text'>" + taskName + "</p>";
        taskHTML += "  <input type='checkbox' class='tasklist-item-button'/>";
    }
    
    taskHTML += "  <input type='hidden' class='tasklist-item-description' value='"+ taskdesc +"'/>";
    taskHTML += "  <input type='hidden' class='tasklist-item-date' value='"+ taskdate +"'/>";
    taskHTML += "</div>";

    return taskHTML;
}