
$(document).ready(function () {

    $("#submitButton").on("click", function (event) {
        // preventing default 
        event.preventDefault();
        // Let's grab some user input. These numbers will come from our quiz. 
        var userClimate;
        var userVariable2;
        var userVariable3;
        var userVariable4;
       
    //    .val should work for these drop downs. But if they DON'T work, use the "option:selected" method used in the NYT section. 
        userClimate = $("#Climate Result").val();
        console.log(userClimate);
        userVariable2 = $("#Var2").val();
        console.log(userVariable2);
        userVariable3 = $("#Var3").val();
        console.log(userVariable3);
        userVariable4 = $("#Var4").val();
        console.log(userVariable4);
    });
});
