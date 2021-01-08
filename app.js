var FoodForm = document.getElementById("foodForm");

let siteName;
let Activity;
let FacilityType;
let Description;
let Building;
let FileName;
let today;
FoodForm.addEventListener("submit", function (e) {
  e.preventDefault();

  siteName = document.getElementById("siteName").value;

  var selectorActivity = document.getElementById("Activity");

  Activity = selectorActivity[selectorActivity.selectedIndex].value;

  var selectorFacility = document.getElementById("FacilityType");

  FacilityType = selectorFacility[selectorFacility.selectedIndex].value;

  Description = document.getElementById("Description").value;

  Building = document.getElementById("Building").value;

  console.log(siteName);
  console.log(Activity);
  console.log(FacilityType);
  console.log(Description);
  console.log(Building);

  FileName =
    FIA +
    siteName +
    FacilityType +
    Activity +
    Building +
    Description +
    today +
    ImageNumber +
    ".jpg";
  getLocation();
});

let fencing = document.getElementById("fencing").value;

console.log(fencing);

let ImageNumber;
var x = 1;
x++;
ImageNumber = "IMG_00" + (48 + x);

let FIA = "944";

console.log(ImageNumber);

var x = document.getElementById("demo");

function showPosition(position) {
  today = new Date();
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
    "<br>File Name: " +
    FIA +
    siteName +
    FacilityType +
    Activity +
    Building +
    Description +
    today +
    ImageNumber +
    ".jpg";
}

// FIA, SiteName, FacilityType, Activity, Building, Description,
// Date take_snapshot, Image Number

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
      "<h5>Note : Supply Site Information in the form Below and <br> Click on the Image to Download</h5>" +
      '<a download="' +
      FileName +
      '" href="' +
      data_uri +
      '" title="ImageName"> <img class="savedImage" src="' +
      data_uri +
      '"/> </a>';

    console.log(data_uri);
  });
}

//make the camera fullscreen on pop up
