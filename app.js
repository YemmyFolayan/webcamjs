var FoodForm = document.getElementById("foodForm");
FoodForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var siteName = document.getElementById("siteName").value;

  var selectorActivity = document.getElementById("Activity");

  var Activity = selectorActivity[selectorActivity.selectedIndex].value;

  var selectorFacility = document.getElementById("FacilityType");

  var FacilityType = selectorFacility[selectorFacility.selectedIndex].value;

  var Description = document.getElementById("Description").value;

  var Building = document.getElementById("Building").value;

  var FIA = document.getElementById("FIA").value;

  console.log(siteName);
  console.log(Activity);
  console.log(FacilityType);
  console.log(Description);
  console.log(Building);
  console.log(FIA);
});

var x = document.getElementById("demo");

function showPosition(position) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + mm + dd;
  console.log(today);
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude +
    "<br>Date Taken: " +
    today +
    "<br>File Name: ";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function (data_uri) {
    // display results in page

    document.getElementById("results").innerHTML =
      "<h2>Here is your image:</h2>" + '<img src="' + data_uri + '"/>';

    console.log(data_uri);
  });
}
