
var cities = [
    {
        location: "Maui, HI",
        nightLifeWeight: 3,
        tropicalWeight: 3,

    },
    {
        location: "San Juan, Puerto Rico",
        nightLifeWeight: 2,
        tropicalWeight: 3,
    },
    {
        location: "Miami, FL",
        nightLifeWeight: 1,
        tropicalWeight: 3,
    },
    {
        location: "Manila, Phillipines",
        nightLifeWeight: 3,
        tropicalWeight: 2,
    },
    {
        location: "Cancun, Mexico",
        nightLifeWeight: 2,
        tropicalWeight: 2,
    },
    {
        location: "Big Sur, CA",
        nightLifeWeight: 1,
        tropicalWeight: 2,
    },
    {
        location: "Phoenix, AZ",
        nightLifeWeight: 3,
        tropicalWeight: 1,
    },
    {
        location: "Zagora, Morocco",
        nightLifeWeight: 2,
        tropicalWeight: 1,
    },
    {
        location: "Anchorage, AK",
        nightLifeWeight: 1,
        tropicalWeight: 1,
    },
]

$(document).ready(function () {


    $("Button").on("click", function (event) {
        // preventing default 
        event.preventDefault();
        // Let's grab some user input. These numbers will come from our quiz. 
        var tropical;
        var nightLife;


        // Grabbing Input. 
        tropical = parseInt($("#climate").val());
        console.log(tropical);
        nightLife = parseInt($("#nightLife").val());
        console.log(nightLife);


        // Pushing the value to somewhere on the page. 
        $(".climateResult").text(tropical);
        $(".nightLifeResult").text(nightLife);

        var bestTropicalMatches = [];


        for (var i = 0; i < cities.length; i++) {
            // console.log ("I love " + cities[i].location);

            if (cities[i].tropicalWeight === tropical) {
                bestTropicalMatches.push(cities[i]);
                console.log("THIS MATCHES")
                console.log("These are the cities that match " + tropical)
                console.log(cities[i]);
            };
            console.log(bestTropicalMatches);
        };
    

        for (var i = 0; i < bestTropicalMatches.length; i++) {
            if (bestTropicalMatches[i].nightLifeWeight === nightLife) {
                console.log("THIS MATCHES FOR NIGHTLIFE")
                console.log("This is the city you chose " + bestTropicalMatches[i].location);
                $(".youChose").html("You Chose: " + bestTropicalMatches[i].location);
            }
            
        }

    });

});





