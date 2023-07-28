$(document).ready(function(){
    
    $("#addtask-button").click(function(){
        let taskName = $("#addtask-textbox").val();
        if(taskName == ""){
            alert("Por favor escreva um nome.");
            return;
        } 
        $.post("../api/createtask.php", {task: taskName}, function(data){
            let taskId = JSON.parse(data).id;
            let taskDate = JSON.parse(data).date;

            $("#addtask-textbox").val("");

            if($("#tasklist-pending").children("#hidden").val() == 1){
                $("#tasklist-pending").append(
                    "<div class='tasklist-item'id='"+ taskId +"' style='display: none;'>"+
                        "<p class='tasklist-item-text'>" + taskName + "</p>"+  
                        "<input type='checkbox' class='tasklist-item-button'/>"+
                        "<input type='hidden' class='tasklist-item-description' value=''/>"+
                        "<input type='hidden' class='tasklist-item-date' value='"+taskDate+"'/>"+
                    "</div>"
                );
            } else{
                $("#tasklist-pending").append(
                    "<div class='tasklist-item'id='"+ taskId +"'>"+
                        "<p class='tasklist-item-text'>" + taskName + "</p>"+  
                        "<input type='checkbox' class='tasklist-item-button'/>"+
                        "<input type='hidden' class='tasklist-item-description' value=''/>"+
                        "<input type='hidden' class='tasklist-item-date' value='"+taskDate+"'/>"+
                    "</div>"
                );
            }
            alert("Task created!");
        });
    });
});