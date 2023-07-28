$(document).ready(function () {
    let id;
    $(document).on("click", ".tasklist-item-text", function () {
        id = $(this).parent().attr("id");
        loadTask(id);
    });
    $(document).on("click", "#taskview-save", function () {
        saveTask(id);
    });
    $(document).on("click", "#taskview-delete", function(){
        deleteTask(id);
        $("#tasklist").css('display', 'flex');
    });
    $(document).on("click", "#taskview-goback", function(){
        $("#taskview").remove();
        $("#tasklist").css('display', 'flex');
    });

});

function deleteTask(id){
    $.post("../api/deleteTask.php", {
        id: id,
    }, 
    function (data, status) {
        $("#taskview").remove();
        $("main").css("justify-content", "center");
        $("#"+id).remove();
        
        console.log(data);
    });
}
function saveTask(id){
    $.post("../api/updateTask.php", {
        id: id,
        task: $("#taskview-title").val(),
        description: $("#taskview-description").val(),
        date: $("#taskview-date").val()
    }, 
    function (data, status) {
        $("#"+id).children(".tasklist-item-description").val($("#taskview-description").val());
        $("#"+id).children(".tasklist-item-text").text($("#taskview-title").val());
        $("#"+id).children(".tasklist-item-date").val($("#taskview-date").val());
        alert('Atualizado com sucesso!');
    });
}

function loadTask(id) {
    let date = new Date($("#"+id).children(".tasklist-item-date").val());
    date.setHours(date.getHours() - 3);
    $("#tasklist").css('display', 'none');
    $("main").append(
        "<div id='taskview'>"+
            "<input id='taskview-title' value='"+ $("#"+id).children(".tasklist-item-text").text() +"'/>"+
            "<input type='datetime-local' id='taskview-date' value='"+date.toISOString().substring(0, 16)+"'/>"+
            "<textarea id='taskview-description' placeholder='descrição da tarefa...'>"+ $("#"+id).children(".tasklist-item-description").val() +"</textarea>"+

            "<div id='taskview-buttons'>"+
                "<button class='taskview-button' id='taskview-save'>Salvar</button>"+
                "<button class='taskview-button' id='taskview-delete'>Excluir</button>"+
                "<button class='taskview-button' id='taskview-goback'>Voltar</button>"+
            "</div>"+
        "</div>"
    );
}