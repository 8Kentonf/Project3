function initMap() {

	var sears = {
		lat: 41.8789,
		lng: -87.6359
	};

	var marker = new google.maps.Marker({
		position: sears,
		map: map
	});

	var map;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 41.8789,
			lng: -87.6359
		},
		zoom: 15,
		styles: [{
				elementType: 'geometry',
				stylers: [{
					color: '#6A5ACD'
				}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{
					color: '#FFFF00'
				}]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{
					color: '#FFE4E1'
				}]
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#800000'
				}]
			},
		]
	});
}
var slideIndex = 1;
displaySlides(slideIndex)
function nextSlide(n) {  
  displaySlides(slideIndex += n);  
}  
function currentSlide(n) {  
  displaySlides(slideIndex = n);  
}  
function displaySlides(n) {
  var x;
  var slides = document.getElementsByClassName("showslide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}