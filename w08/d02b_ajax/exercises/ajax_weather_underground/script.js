$(document).ready(function(){
  var wUnderGroundurl = "http://api.wunderground.com/api/0012f7aa329ab2f4/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: wUnderGroundurl,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log("temperature " + response.current_observation.temp_f)
    console.log("location " + response.current_observation.display_location.full)
    console.log("wind gust MPH: " + response.current_observation.wind_gust_mph)
    console.log("wind gust KPH: " + response.current_observation.wind_gust_kph)
  }).fail(function(){
    console.log("ajax request unsuccessful")
  }).always(function(){
    console.log("this always happens!")
  })
})
