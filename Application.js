
var loc = "philadelphia"
var yelpEventQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location="+loc
var yelpResturantQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ loc + "&term=italian"
var googleQueryURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=philadelphia&heading=151.78&pitch=-0.76&key=AIzaSyCsRUeYJwQ2sprNWL0rDSCk4o6o7c9eFi8"

$.ajax({
      url: yelpEventQueryURL,
      method: "GET",
      headers: {
        'Authorization': 'Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx'
      }

    }).then(function(response){
      for (let i = 0; i < response.events.length; i++) {;
        console.log(response)
      }
    })
$.ajax({
      url: yelpResturantQueryURL,
      method: "GET",
      headers: {
        'Authorization': 'Bearer Vzx_vtYgXyuQd5qVflbkVSgghfvkjs1d3wpPRAJyDIquzAexxHQJVBemA40g8bJDRU3H3-hi5w_sN45oyivu02iJWuebwe4GIIn9IfHMO8Zrrh4-IADbt4ZJaAO7XXYx'
      }

    }).then(function(response){
      console.log(response)
    })

$.ajax({
      url: googleQueryURL,
      method: "GET"
    }).then(function(response){
      console.log(response)
    })
