// export const Temp = () => {
//     const content = `<html>

// <head>
//     <title>Place Searches</title>
//     <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
//     <!-- jsFiddle will insert css and js -->
//     <style>
//         /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//         #map {
//             height: 100%;
//         }

//         /* Optional: Makes the sample page fill the window. */
//         html,
//         body {
//             height: 50%;
//             margin: 0;
//             padding: 0;
//         }
//     </style>
// </head>

// <body>
//     <div id="map"></div>

//     <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
//     <script
//         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly&channel=2"
//         async></script>

//     <script>
//         // This example requires the Places library. Include the libraries=places
//         // parameter when you first load the API. For example:
//         // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places">
//         let map;
//         let service;
//         let infowindow;

//         function initMap() {
//             const sydney = new google.maps.LatLng(-33.867, 151.195);
//             infowindow = new google.maps.InfoWindow();
//             map = new google.maps.Map(document.getElementById("map"), {
//                 center: sydney,
//                 zoom: 15,
//             });
//             const request = {
//                 query: "delhi",
//                 fields: ["name", "geometry"],
//             };
//             service = new google.maps.places.PlacesService(map);
//             service.findPlaceFromQuery(request, (results, status) => {
//                 if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//                     for (let i = 0; i < results.length; i++) {
//                         createMarker(results[i]);
//                     }
//                     map.setCenter(results[0].geometry.location);
//                 }
//             });
//         }

//         function createMarker(place) {
//             if (!place.geometry || !place.geometry.location) return;
//             const marker = new google.maps.Marker({
//                 map,
//                 position: place.geometry.location,
//             });
//             google.maps.event.addListener(marker, "click", () => {
//                 infowindow.setContent(place.name || "");
//                 infowindow.open(map);
//             });
//         }
//     </script>
// </body>

// </html>`
//     return (
//         <div style={{border:"1px solid black", height:"400px"}} dangerouslySetInnerHTML={{ __html: content }}/>
//     )
// }