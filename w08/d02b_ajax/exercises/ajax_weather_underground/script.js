$(document).ready(function(){
<<<<<<< HEAD
  var wUnderGroundurl = "http://api.wunderground.com/api/0012f7aa329ab2f4/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: wUnderGroundurl,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log("temperature F: " + response.current_observation.temp_f)
    console.log("location: " + response.current_observation.display_location.full)
    console.log("wind gust MPH: " + response.current_observation.wind_gust_mph)
    console.log("wind gust KPH: " + response.current_observation.wind_gust_kph)
  }).fail(function(){
    console.log("ajax request unsuccessful")
=======
  var weatherUndergroundUrl = "http://api.wunderground.com/api/b0900ea853660a3f/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: weatherUndergroundUrl,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response.current_observation.temp_f)
  }).fail(function(){
    console.log("ajax request not successful")
>>>>>>> 568b7343e1fdb8b9d222ecd4e048bc065b9affa8
  }).always(function(){
    console.log("this always happens!")
  })
})
