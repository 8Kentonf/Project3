function initMap() {
var map;
map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 41.8789, lng: -87.6359},
zoom: 15,
styles: [
            {elementType: 'geometry', stylers: [{color: '#6A5ACD'}]},
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
            ]
});
}
  
