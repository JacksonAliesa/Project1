
var cities = [
    {
        loc: "Maui, HI",
        nightLifeWeight: 3,
        tropicalWeight: 3,

    },
    {
        loc: "San Juan, Puerto Rico",
        nightLifeWeight: 2,
        tropicalWeight: 3,
    },
    {
        loc: "Miami, FL",
        nightLifeWeight: 1,
        tropicalWeight: 3,
    },
    {
        loc: "Manila, Phillipines",
        nightLifeWeight: 3,
        tropicalWeight: 2,
    },
    {
        loc: "Cancun, Mexico",
        nightLifeWeight: 2,
        tropicalWeight: 2,
    },
    {
        loc: "Big Sur, CA",
        nightLifeWeight: 1,
        tropicalWeight: 2,
    },
    {
        loc: "Phoenix, AZ",
        nightLifeWeight: 3,
        tropicalWeight: 1,
    },
    {
        loc: "Reston, Virginia",
        nightLifeWeight: 2,
        tropicalWeight: 1,
    },
    {
        loc: "Anchorage, Alaska",
        nightLifeWeight: 1,
        tropicalWeight: 1
    }
]

$(document).ready(function () {

    $("#submitBtn").on("click", function (event) {
        $("#events").empty();
        $("#restaurants").empty();
        $("#streetview").empty();
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
            // console.log ("I love " + cities[i].loc);
            if (cities[i].tropicalWeight === tropical) {
                bestTropicalMatches.push(cities[i]);
                console.log("THIS MATCHES")
                console.log("These are the cities that match " + tropical)
                console.log(cities[i]);
            };
            console.log(bestTropicalMatches);
        };

        var apiCity = ""

        for (var i = 0; i < 3; i++) {
            console.log("we're in the loop");
            console.log(bestTropicalMatches[i].nightLifeWeight + " is being compared to " + nightLife);
            if (bestTropicalMatches[i].nightLifeWeight === nightLife) {
                console.log("THIS MATCHES FOR NIGHTLIFE")
                apiCity = bestTropicalMatches[i].loc;
                console.log("This is the city you chose " + apiCity);
                $(".youChose").html("" + apiCity);
                console.log(apiCity);
                console.log("API CITY" + apiCity);
            }

        }

        var yelpEventQueryURL =
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=" +
            apiCity;
        var yelpResturantQueryURL =
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
            apiCity +
            "&term=food";


        //ajax function to find events in the area provided 
        $.ajax({
            url: yelpEventQueryURL,
            method: "GET",
            headers: {
                Authorization:
                    "Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx"
            }
        }).then(function (response) {
            $("#events").empty();
            $("#restaurants").empty();
            $("#streetview").empty();
            for (let j = 0; j < 2; j++) {
                console.log(response.events[j].name);
                {

                    // Creating and storing a div tag
                    var eventDiv = $("<div>");

                    // Creating a paragraph tag
                    var par = $("<p>").text(response.events[j].name);

                    // Creating and storing an image tag

                    var eventImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item


                    eventImage.attr("src", response.events[j].image_url);
                    eventImage.addClass("eventStyle");


                    // Appending the paragraph and image tag
                    eventDiv.append(par);
                    eventDiv.append(eventImage);

                    // Prependng 
                    $("#events").prepend(eventDiv);

                }
            }
        });

        //ajax function to find resutarunts in the area provided
        $.ajax({
            url: yelpResturantQueryURL,
            method: "GET",
            headers: {
                Authorization:
                    "Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx"
            }
        }).then(function (response) {
           
            $("#restaurants").empty();
          
            for (let i = 0; i < 2; i++) {
                console.log(response.businesses[i])
                // Creating and storing a div tag
                var bizDiv = $("<div>");

                // Creating a paragraph tag
                var p = $("<p>").text(response.businesses[i].name);

                // Creating and storing an image tag
                var bizImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                bizImage.attr("src", response.businesses[i].image_url);
                bizImage.addClass("eventStyle");

                // Appending the paragraph and image tag
                bizDiv.append(p);
                bizDiv.append(bizImage);

                // Prependng 
                $("#restaurants").prepend(bizDiv);
            }
        });
        //function to find street image views of the area provided 
        //these need to be specific and verfified
        //in later versions coordinates can be provided

        jQuery(
            function ($) {
                $("#streetview")
                    .attr("src", 'https://maps.googleapis.com/maps/api/streetview?' + $.param({
                        size: "600x300",
                        location: apiCity,
                        heading: "151.78",
                        pitch: "-0.76",
                        key: "AIzaSyCsRUeYJwQ2sprNWL0rDSCk4o6o7c9eFi8"
                    })).show();
            }

        );
        console.log(apiCity);
        // V This closes the onclick function. 
    });

    function imgError(image) {
        image.onerror = "";
        image.src = "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png";
        return true;
     }

    function philadelphia() {

        apiCity = "Philadelphia";
        var yelpEventQueryURL =
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=" +
            apiCity;
        var yelpResturantQueryURL =
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
            apiCity +
            "&term=food";


        //ajax function to find events in the area provided 
        $.ajax({
            url: yelpEventQueryURL,
            method: "GET",
            headers: {
                Authorization:
                    "Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx"
            }
        }).then(function (response) {
            $("#events").empty();
            $("#streetview").empty();
            for (let j = 0; j < 2; j++) {
                console.log(response.events[j]);
                {

                    // Creating and storing a div tag
                    var eventDiv = $("<div>");

                    // Creating a paragraph tag
                    var par = $("<p>").text(response.events[j].name);

                    // Creating and storing an image tag

                    var eventImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item

                    eventImage.attr("src", response.events[j].image_url);
                    eventImage.attr("alt", response.events[j].name);
                    eventImage.attr("onError", "this.onerror=null;this.src='http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png';");
                    eventImage.addClass("eventStyle");


                    // Appending the paragraph and image tag
                    eventDiv.append(par);
                    eventDiv.append(eventImage);

                    // Prependng 
                    $("#events").prepend(eventDiv);

                }
            }
        });

        //ajax function to find resutarunts in the area provided
        $.ajax({
            url: yelpResturantQueryURL,
            method: "GET",
            headers: {
                Authorization:
                    "Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx"
            }
        }).then(function (response) {
            $("#restaurants").empty();
            $("#streetview").empty();
            for (let i = 0; i < 2; i++) {
                console.log(response.businesses[i])
                // Creating and storing a div tag
                var bizDiv = $("<div>");

                // Creating a paragraph tag
                var p = $("<p>").text(response.businesses[i].name);

                // Creating and storing an image tag
                var bizImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                bizImage.attr("src", response.businesses[i].image_url);
                bizImage.addClass("eventStyle");

                // Appending the paragraph and image tag
                bizDiv.append(p);
                bizDiv.append(bizImage);

                // Prependng 
                $("#restaurants").prepend(bizDiv);

            }
        });
        //function to find street image views of the area provided 
        //these need to be specific and verfified
        //in later versions coordinates can be provided

        jQuery(
            function ($) {
                $("#streetview")
                    .attr("src", 'https://maps.googleapis.com/maps/api/streetview?' + $.param({
                        size: "600x300",
                        location: apiCity,
                        heading: "151.78",
                        pitch: "-0.76",
                        key: "AIzaSyCsRUeYJwQ2sprNWL0rDSCk4o6o7c9eFi8"
                    })).show();
            }

        );

    }
    // ADDING the AJAX BELOW  

    $("#nearMe").on("click", function (event) {

        event.preventDefault();
        philadelphia();
    });


    // Closing the .onready function. 
});





