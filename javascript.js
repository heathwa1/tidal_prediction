var map = L.map('map').setView([47.2529, -122.4443], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaC13YXJyZW4iLCJhIjoiY2tpbmV2aHl5MDYxcjJzcGNqaGJzNWwyNSJ9.8Iik9-Klh7z3K-zMi-m_yg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaC13YXJyZW4iLCJhIjoiY2tpbmV2aHl5MDYxcjJzcGNqaGJzNWwyNSJ9.8Iik9-Klh7z3K-zMi-m_yg'
}).addTo(map);
  //add empty feature group for drawn items to be placed in
// var tidalStations = L.featureGroup().addTo(map);

L.esri.get(url:'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NOS_Observations/CO_OPS_Products/FeatureServer/6', {}, function (error, response) {
  if (error) {
    return;
  });

//   var features = response.operationalLayers[0].featureCollection.layers[0].featureSet.features;
//   var idField = response.operationalLayers[0].featureCollection.layers[0].layerDefinition.objectIdField;
//
//   // empty geojson feature collection
//   var featureCollection = {
//     type: 'FeatureCollection',
//     features: []
//   };
//
//   for (var i = features.length - 1; i >= 0; i--) {
//     // convert ArcGIS Feature to GeoJSON Feature
//     var feature = L.esri.Util.arcgisToGeoJSON(features[i], idField);
//
//     // unproject the web mercator coordinates to lat/lng
//     var latlng = L.Projection.Mercator.unproject(L.point(feature.geometry.coordinates));
//     feature.geometry.coordinates = [latlng.lng, latlng.lat];
//
//     featureCollection.features.push(feature);
//   }
//
//   var geojson = L.geoJSON(featureCollection).addTo(map);
//   map.fitBounds(geojson.getBounds());
// });



//           .then(function(response) {
//               return response.json();
//           })
//           .then(function(data) {
//               console.log("Data saved:", data);
//           })
//           .catch(function(error) {
//               console.log("Problem saving the data:", error);
//           });
//
//       //Transfer user submitted drawing to carto layer(cartoData)
//       //so it stays on map without needing to refresh page
//
//         var newData = layer.toGeoJSON();
//         newData.properties.description = enteredDescription;
//         newData.properties.name = enteredLocName;
//         L.geoJSON(newData, {onEachFeature: addPopup}).addTo(cartoData);
//       });
//       //clear layers
//       drawnItems.closePopup();
//       drawnItems.clearLayers();
//
//     }
// }
  // document.addEventListener('click', setData);
  //
  // map.addEventListener('draw:editstart', function(e) {
  //     drawnItems.closePopup();
  // });
  // map.addEventListener('draw:deletestart', function(e) {
  //     drawnItems.closePopup();
  // });
  // map.addEventListener('draw:editstop', function(e) {
  //     drawnItems.openPopup();
  // });
  // map.addEventListener('draw:deletestop', function(e) {
  //     if(drawnItems.getLayers().length > 0) {
  //         drawnItems.openPopup();
  //     }
  // });
//adapted from example from W3Schools
  //get the modal element
  // var modal = document.getElementById("myModal");
  // //get the button that opens the modal
  // var btn = document.getElementById("myBtn");
  // //get the <span> element that closes the modal
  // var span =document.getElementsByClassName("close")[0];
  // //create function that opens the modal when button clicked
  //   btn.onclick = function() {
  //       modal.style.display = "block";
  //   }
  //   //close modal when clicked
  //   span.onclick = function() {
  //       modal.style.display = "none";
  //   }
  //   //close window when clicked outside modal
  //   window.onclick = function(event) {
  //       if (event.target == modal) {
  //         modal.style.display = "none";
  //   }
  // }
