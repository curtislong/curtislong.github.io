$(document).ready(function(){
  var $menu = $("#sidebar-wrapper");
    /*Using the three-parameter version of .on() means we're using a technique
    called "Event delegation". Event delegation means that the event will be
    handled for all elements which match the selector in the second parameter,
    regardless of when they are added to the document. We won't use this super
    power now, but because jQuery projects can get very complicated very
    quickly, using Event delegation is a best practce.*/
    $(document).on("click", ".js-menu-open", function() {
      $menu.addClass("open");
      return false;
      /*It should be clear at this point why we used classes, but what about those return false; lines? When you return the value "false" from an event handling function, this prevents jQuery from acting on the event in "ancestor" elements. Notice the <div id="sidebar-wrapper"> tag is a child of the <body> tag. This means that if we didn't stop this "event bubbling" by returning false, both the open and close events would occur when you clicked inside the open sidebar-wrapper element. By adding this simple line, we make sure the sidebar opens when we want it open, and closes when we want it close.*/
    })

    $(document).on("click", ".js-menu-close", function() {
      $menu.removeClass("open");
      return false;
    })

    //wunderground API key: fd971b41a003c8ba
    //API request URL: http://api.wunderground.com/api/fd971b41a003c8ba/geolookup/conditions/q/90401.json
    // getWeather();
    // function getWeather() {
    //     $.ajax(
    //       {
    //         URL: "http://api.wunderground.com/api/fd971b41a003c8ba/geolookup/conditions/q/90401.json",
    //         dataType: "jsonp",
    //         success: function(response) {
    //           var conditions = response.current_observation.weather;
    //         }
    //       }
    //     )
    // }
    var conditions = '';

    $.ajax({
        type: "GET",
        url: "http://api.wunderground.com/api/fd971b41a003c8ba/geolookup/conditions/q/90401.json",
        dataType: "jsonp",
        success: function(data) {
          conditions = data.current_observation.weather;
          loadImage(conditions);
          }
      })


    // var wundergroundURL = 'http://api.wunderground.com/api/fd971b41a003c8ba/geolookup/conditions/q/90401.json'
    // var request = new XMLHttpRequest();
    // request.open('GET',wundergroundURL);
    // request.onload = function(){
    //   var data = JSON.parse(request.responseText);
    //   //console.log(data);
    //   conditions = data.current_observation.weather;
    //   console.log(conditions);
    // }
    // request.send();

    function getTimeOfDay() {
      var time = new Date();
      var hours = time.getHours();
      var timeOfDay = '';
      if (hours >= 17) {
        timeOfDay = 'night';
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
      } else {
        timeOfDay = 'morning';
      }
      return timeOfDay;
    }


    function loadImage(conditions) {
      var imageSRC = "img/weather/hero-";
      var validConditions = ["clear", "cloudy", "rain", "snow"];
      var timeOfDay = getTimeOfDay();
      conditions = conditions.toLowerCase();
        if (validConditions.indexOf(conditions)==-1){
          conditions = "cloudy";
        } else {
          conditions = validConditions[validConditions.indexOf(conditions)];
        }
      var url = imageSRC + conditions + "-" + timeOfDay + ".jpg";
      $("#intro").css("background-image", "url(" + url + ")");
    }

})
