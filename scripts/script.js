function initMap() {

var sears = {lat: 41.8789, lng: -87.6359};
 
var marker = new google.maps.Marker({position: sears, map: map});

var map;
map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 41.8789, lng: -87.6359},
zoom: 15,
styles: [
            {elementType: 'geometry', 
            stylers: [{color: '#6A5ACD'}]},
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#FFFF00'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#FFE4E1'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#800000'}]
            },
            ]
});
}
  
