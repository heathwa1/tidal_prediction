

var tides = $.getJSON ({
  url:
  "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=tidepredictions&expand=details, tidepredoffsets",
  // token:"JorvbfbbXzvYcVkNPYqgxSvIsfYjepxa",
  dataType: "json",
  success: console.log("NOAA data loaded"),
  error: function (xhr) {
    alert(xhr.statusText)
  }

});
mapboxgl.accessToken = 'pk.eyJ1IjoiaC13YXJyZW4iLCJhIjoiY2tnemJmaG54MDQzNjJ3cnN2Mmg1MmF2cyJ9.AMeyJ2g8BQiBQ2ZyH9OyJw';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-122.46893, 47.41256],
zoom: 5
});
map.on("load", function(){
  var request = new XMLHttpRequest();
  request.open("GET",tides,true);
  request.onload = function() {
    if (this.station === "WA")
    {
      var json = JSON.parse(this.response);
      map.getSource("tides").setData(json);
    }
map.addSource("tides", {
  type: "json",
  data: "tides"
});
map.addLayer({
    "id": "tides",
    "type": "circle",
    "source": "tides"
})
};
});
