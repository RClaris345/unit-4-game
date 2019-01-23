$(document).ready(function(){
    // Generate random number to guess
    var randomValue = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    // grab the element with id = "counter" and make its text the random value
    setup();
    
    $(".crystal").on("click", function(){
        var value = $(this).attr("data-value");
        counter += parseInt(value);
        $("#counter").text(counter);
        
        if(counter === randomValue){
            wins++;
            $("#wins").text(wins);
            setup();
        }

        if(counter > randomValue){
            losses++;
            $("#losses").text(losses);
            setup();
        }
    });

    function setup(){
        counter = 0;
        randomValue = Math.floor((Math.random() * 100) + 1);

        $("#counter").text(counter);
        $("#random").text(randomValue);
        $(".crystal").each(function(){
            var random = Math.floor((Math.random() * 10) + 1);
            $(this).attr("data-value", random);
        });

    }

});