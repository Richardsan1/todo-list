$(document).ready(function() {
    $("#tasklist-pending").children(".tasklist-title-div").click(function() {
        if($(".tasklist-item").css("display") == "none"){
            $(".tasklist-item").css("display", "flex");
            $("#tasklist-pending").children("#hidden").val("0");
            $("#tasklist-pending").children(".tasklist-title-div").children(".accordion-symbol").css("transform", "rotate(270deg)");
        }else {
            $(".tasklist-item").css("display", "none");
            $("#tasklist-pending").children("#hidden").val("1");
            $("#tasklist-pending").children(".tasklist-title-div").children(".accordion-symbol").css("transform", "rotate(180deg)");
        }
    });
    $("#tasklist-completed").children(".tasklist-title-div").click(function() {
        if($(".tasklist-item-complete").css("display") == "none"){
            $(".tasklist-item-complete").css("display", "flex");
            $("#tasklists").css('justify-content', 'flex-start');
            $("#tasklist-completed").children("#hidden").val("0");
            $("#tasklist-completed").children(".tasklist-title-div").children(".accordion-symbol").css("transform", "rotate(270deg)");
        }else {
            $(".tasklist-item-complete").css("display", "none");
            $("#tasklists").css('justify-content', 'space-between');
            $("#tasklist-completed").children("#hidden").val("1");
            $("#tasklist-completed").children(".tasklist-title-div").children(".accordion-symbol").css("transform", "rotate(180deg)");
        }
    });
});