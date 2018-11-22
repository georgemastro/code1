  $( document ).ready(function() {
    getLocation();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    function showPosition(position) {
      $('#weather2').openWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        placeTarget: '.weather-place',
        iconTarget: '.weather-icon',
      });
    }
  });
