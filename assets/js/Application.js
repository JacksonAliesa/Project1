var apiCity = "philadelphia";
var yelpEventQueryURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=" +
  apiCity;
var yelpResturantQueryURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
  apiCity +
  "&term=food";
// var googleQueryURL =
//   "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=philadelphia&heading=151.78&pitch=-0.76&key=AIzaSyCsRUeYJwQ2sprNWL0rDSCk4o6o7c9eFi8";

//ajax function to find events in the area provided 
$.ajax({
  url: yelpEventQueryURL,
  method: "GET",
  headers: {
    Authorization:
      "Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx"
  }
}).then(function(response) {
  for (let j = 0; j < response.events.length; j++) {
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
}).then(function(response) {
  for (let i = 0; i < response.businesses.length; i++) 
  {
    console.log(response.businesses[i])
        // Creating and storing a div tag
        var bizDiv = $("<div>");

        // Creating a paragraph tag
            var p = $("<p>").text(response.businesses[i].name);

         // Creating and storing an image tag
            var bizImage = $("<img>");
         // Setting the src attribute of the image to a property pulled off the result item
            bizImage.attr("src", response.businesses[i].image_url);

         // Appending the paragraph and image tag
            bizDiv.append(p);
            bizDiv.append(bizImage);

            // Prependng 
        $("#resturaunts").prepend(bizDiv);

}
});
//function to find street image views of the area provided 
//these need to be specific and verfified
//in later versions coordinates can be provided

jQuery(
  function($) {
    $('#streetview')
      .attr('src', 'https://maps.googleapis.com/maps/api/streetview?' + $.param({
        size: "600x300",
        location: apiCity,
        heading: "151.78",
        pitch: "-0.76",  
        key: "AIzaSyCsRUeYJwQ2sprNWL0rDSCk4o6o7c9eFi8"
      })).show();
  }
);