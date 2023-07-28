$(document).ready(function () {
    $(document).on('click', '.tasklist-item-button', function () {
        if($(this).prop('checked')){
            $(this).parent().appendTo("#tasklist-completed");
            $(this).parent().removeClass("tasklist-item");
            $(this).parent().addClass("tasklist-item-complete");

            if($("#tasklist-completed").children("#hidden").val() == 0){
                $(this).parent().css("display", "flex");
            } else {
                $(this).parent().css("display", "none");
            }
            $.post("../api/updateTask.php", {
                id: $(this).parent().attr("id"),
                done: 1
            }, 
            function (data, status) {
                console.log(data);
                console.log(status);
            });
        } else {
            $(this).parent().appendTo("#tasklist-pending");
            $(this).parent().removeClass("tasklist-item-complete");
            $(this).parent().addClass("tasklist-item");

            if($("#tasklist-pending").children("#hidden").val() == 0){
                $(this).parent().css("display", "flex");
            } else {
                $(this).parent().css("display", "none");
            }

            $.post("../api/updateTask.php", {
                id: $(this).parent().attr("id"),
                done: 0
            },
            function (data, status) {
                    console.log(data);
                    console.log(status);
                });
        }
    });
});