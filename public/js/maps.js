function initialize_gmaps() {

  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.705189, -74.009209);

  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // styles: styleArr
  };

  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById('map-canvas');

  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);

  // add the marker to the map
  var marker = new google.maps.Marker({
    position: myLatlng,
    title: 'Hello World!'
  });

  // draw some locations on the map
  function drawLocation(location, opts) {
    if (typeof opts !== 'object') {
      opts = {};
    }
    opts.position = new google.maps.LatLng(location[0], location[1]);
    opts.map = map;
    var marker = new google.maps.Marker(opts);
  }

  // var hotelLocation = [40.705137, -74.007624];
  // var restaurantLocations = [
  //       [40.705137, -74.013940],
  //       [40.708475, -74.010846]
  //     ];
  // var activityLocations = [
  //       [40.716291, -73.995315],
  //       [40.707119, -74.003602]
  //     ];

  // drawLocation(hotelLocation, {
  //   icon: '/images/lodging_0star.png'
  // });
  // restaurantLocations.forEach(function(loc) {
  //   drawLocation(loc, {
  //     icon: '/images/restaurant.png'
  //   });
  // });
  // activityLocations.forEach(function(loc) {
  //   drawLocation(loc, {
  //     icon: '/images/star-3.png'
  //   });
  // });
}

/* 
-DOM select the appropriate add button
  - When that button is clicked
  - Find the data that is selected
  - Construct an itinerary item
  - Attach it to the proper place in the DOM
  - Update the map
*/

    // console.log($(this).prev());
    // console.log($('.hotelselect').val());
    // console.log($('.restselect').val());
    // console.log($(this).prev().val());
$(document).ready(function() {
  initialize_gmaps();
  addIt();
  removeIt();
  addDay();
  switchDay();

});

var dataObj = [{}];

var addIt = function () { 
  
  $(".panel-body").on("click", 'button', function() {
  var newVal = $(this).prev().val();
  var appClass = "." + $(this).prev().attr('class') + "List";
  // var appId = "#" + $(this).prev().attr('class') + "List";
  
    $(appClass).append(
      '<span class="title">' + newVal + "</span>" +
      '<button class="btn btn-xs btn-danger remove btn-circle">x</button>'
    );
  });

};

var removeIt = function () {
 
  $(".panel-body2").on("click", 'button', function() {

  $(this).prev().remove();
  $(this).remove();

  });

};

var addDay = function () {

  $(".day-adder").on('click', function() {
    dataObj.push({});
    var newDay = '<button class="btn btn-circle day-btn day-counter">'+ dataObj.length +'</button>';
    $(newDay).insertBefore(this);
  });

};

var switchDay  = function () {


  $('.day-buttons').on('click','.day-counter', function () {
    // console.log("FRANKKKKKKLIN");
    // console.log($(this).index('.day-counter'));
    var dataObjIdx = $(this).index('.day-counter');
    // save current itin to the correct index + obj;
    // dataObj[dataObjIdx]
    // $(element).children() => array of children
    $('.panel-body2 .hotelItList').each(function (index, element) {
      var arrayOfChildren = $(element).children();
      var result = [];
  
      for (var x= 0; x < arrayOfChildren.length; x++) {
        if (arrayOfChildren[x].innerText !== "x") {
          result.push(arrayOfChildren[x].innerText);
        }
      }
      
      //dataObj[dataObjIdx]

    });

    $('.panel-body2 .restItList').each(function (index, element) {
      var arrayOfChildren = $(element).children();
      var result = [];
  
      for (var x= 0; x < arrayOfChildren.length; x++) {
        if (arrayOfChildren[x].innerText !== "x") {
          result.push(arrayOfChildren[x].innerText);
        }
      }
      console.log(result);
    });

    $('.panel-body2 .actItList').each(function (index, element) {
      var arrayOfChildren = $(element).children();
      var result = [];
  
      for (var x= 0; x < arrayOfChildren.length; x++) {
        if (arrayOfChildren[x].innerText !== "x") {
          result.push(arrayOfChildren[x].innerText);
        }
      }
      console.log(result);
    });


    // identify the chosen date, and populate the dom with the correct information








    });








};



// var styleArr = [{
//   featureType: 'landscape',
//   stylers: [{ saturation: -100 }, { lightness: 60 }]
// }, {
//   featureType: 'road.local',
//   stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
// }, {
//   featureType: 'transit',
//   stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
// }, {
//   featureType: 'administrative.province',
//   stylers: [{ visibility: 'off' }]
// }, {
//   featureType: 'water',
//   stylers: [{ visibility: 'on' }, { lightness: 30 }]
// }, {
//   featureType: 'road.highway',
//   elementType: 'geometry.fill',
//   stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
// }, {
//   featureType: 'road.highway',
//   elementType: 'geometry.stroke',
//   stylers: [{ visibility: 'off' }]
// }, {
//   featureType: 'poi.park',
//   elementType: 'geometry.fill',
//   stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
// }];
