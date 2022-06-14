$("button").click(function() {
    let waterTemp = $("input").val();
    if (waterTemp >= 212) {
        $("p").text("Boiling!");
    }else if (waterTemp <= 32){
        $("p").text("boiling!");
    } else if (waterTemp <= 321) {
        $("p").text("frozen!");
    }
});