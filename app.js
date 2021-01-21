var FoodForm = document.getElementById("foodForm");

let Activity;
let facilityType;
let Description;
let Building;
let FileName;
let today;
let FIA;

let city;
let country;
let exactLocation;

var counter = 1;
$("body").on("click", ".next", function () {
  $(".content").hide();

  counter++;
  $("#content-" + counter + "").show();

  ////////////////////////////////

  console.log("before if");
  if (counter > 1) {
    $(".back").show();
    var id = counter;
    if ("content-" + id === document.getElementById("content-2").id) {
      facilityType = "Compressor Station";
      console.log(facilityType);
    } else if ("content-" + id === document.getElementById("content-3").id) {
      facilityType = "Pump Station";
      console.log(facilityType);
    } else if ("content-" + id === document.getElementById("content-4").id) {
      facilityType = "Terminal";
      console.log(facilityType);
    } else if ("content-" + id === document.getElementById("content-5").id) {
      facilityType = "Office";
      console.log(facilityType);
    } else if ("content-" + id === document.getElementById("content-6").id) {
      facilityType = "Radio Hub";
      console.log(facilityType);
    } else {
      console.log("not working");

      document.getElementById("circleHide2").style.visibility = "hidden";

      alert("Done !, Re-Take Site Pictures");
      //window.location.assign("index.html");
    }
  }
  if (counter > 6) {
    $(".content-holder").hide();
    $(".end").show();
  }
});

$("body").on("click", ".back", function () {
  //alert(counter);
  counter--;
  $(".content").hide();
  var id = counter;
  $("#content-" + id).show();
  if (counter < 6) {
    $(".back").hide();
  }
});

// if content-1 =  ("#content-" + id)
//then  let facilityType = "Meter";

$("body").on("click", ".edit-previous", function () {});

// and FIA as zipcode, site name from gps/ facility type and Activity

FoodForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var selectorActivity = document.getElementById("Activity");

  Activity = selectorActivity[selectorActivity.selectedIndex].value;

  /*var selectorFacility = document.getElementById("facilityType");

  facilityType = selectorFacility[selectorFacility.selectedIndex].value;
*/
  /*
  Description = document.getElementById("Description").value;

  Building = document.getElementById("Building").value;
*/
  console.log(Activity);
  console.log(facilityType);
  console.log(Description);
  console.log(Building);

  FileName =
    FIA +
    exactLocation +
    facilityType +
    Activity +
    Building +
    Description +
    today +
    ImageNumber +
    ".jpg";
  getLocation();
});

let ImageNumber;

ImageNumber = "IMG_00" + (Math.floor(Math.random() * 100) + 1);

//let FIA = Math.floor(Math.random() * 92782) + 944;

console.log(ImageNumber);

var x = document.getElementById("demo");

var xy = document.getElementById("siteNamexy");

let latitude;
let longitude;

function showPosition(position) {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + mm + dd;
  console.log(today);
  xy.innerHTML = exactLocation;
  x.innerHTML =
    "Location: " +
    exactLocation +
    "<br>File Name: " +
    FIA +
    exactLocation +
    facilityType +
    Activity +
    Building +
    Description +
    today +
    ImageNumber +
    ".jpg";
}

// FIA, SiteName, facilityType, Activity, Building, Description,
// Date take_snapshot, Image Number

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";

    ///////GOOGLE MAP API CODE
    /*if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var point = new google.maps.LatLng(lat, long);
            new google.maps.Geocoder().geocode(
                {'latLng': point},
                function (res, status) {
                    var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                    $("#location").val(zip);          
                }
            );
        });
    }
    */
  }
}

let imgData;
function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function (data_uri) {
    // display results in page
    imgData = data_uri;

    document.getElementById("results").innerHTML =
      "<h5>Note : Supply Site Information in the form Below and <br> Click Download</h5>" +
      '<a  download="' +
      FileName +
      '" href="' +
      data_uri +
      '" title="ImageName"><button class="button">Download  ⬇</button></a>';

    //Water mark image
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;

    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = start;
    img.src = data_uri;
    function start() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      var dateLocation = today + "  " + exactLocation;
      dataURL = watermarkedDataURL(canvas, dateLocation);

      //Comserve Inc,Calgary,Canada
    }

    function watermarkedDataURL(canvas, text) {
      var tempCanvas2 = document.getElementById("results");
      var tempCanvas = document.createElement("canvas");
      var tempCtx = tempCanvas.getContext("2d");
      var cw, ch;
      cw = tempCanvas.width = canvas.width;
      ch = tempCanvas.height = canvas.height;
      tempCtx.drawImage(canvas, 0, 0);
      tempCtx.font = "18px verdana";
      var textWidth = tempCtx.measureText(text).width;
      tempCtx.globalAlpha = 0.5;
      tempCtx.fillStyle = "white";
      tempCtx.fillText(text, cw - textWidth - 10, ch - 20);
      tempCtx.fillStyle = "black";
      tempCtx.fillText(text, cw - textWidth - 10 + 2, ch - 20 + 2);
      // just testing by adding tempCanvas to document
      tempCanvas2.appendChild(tempCanvas);
      return tempCanvas.toDataURL();
    }
  });
}

//make the camera fullscreen on pop up

var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

/* Initialise Reverse Geocode API Client */

var reverseGeocoder = new BDCReverseGeocode();

/* Get the current user's location information, based on the coordinates provided by their browser */
/* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
reverseGeocoder.getClientLocation(function (result) {
  console.log(result);
  console.log(result.locality);
  city = result.locality;
  country = result.countryName;
  Building = result.principalSubdivision;
  Description = result.countryName;
  FIA = result.postcode;

  exactLocation = city + "," + country;

  console.log(exactLocation);
});

/* You can also set the locality language as needed */
reverseGeocoder.localityLanguage = "es";

/* Request the current user's coordinates (requires HTTPS and acceptance of prompt) */
reverseGeocoder.getClientCoordinates(function (result) {
  console.log(result.locality);
});

console.log("still Loading wrong one");

////PREV NEXT

const DownloadZip = () => {
  //var imgData = data_uri;

  var zip = new JSZip();

  var img = zip.folder("Meter Station");

  //format name, data url
  img.file("Meter_Station.jpg", imgData, { base64: false });

  //base64 : true

  var img2 = zip.folder("Compressor Station");
  img2.file("Compressor_Station.jpg", imgData, { base64: false });

  var img3 = zip.folder("Pump Station");
  img3.file("Pump_Station.jpg", imgData, { base64: false });

  var img4 = zip.folder("Terminal");
  img4.file("Terminal.jpg", imgData, { base64: false });

  var img5 = zip.folder("Office");
  img5.file("Office.jpg", imgData, { base64: false });

  var img6 = zip.folder("Radio Hub");
  img6.file("Radio_Hub.jpg", imgData, { base64: false });

  var img7 = zip.folder("Miscellaneous");
  img7.file("Miscellaneous.jpg", imgData, { base64: false });

  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Comserve Geocam.zip");

    console.log("zip");
  });
};
