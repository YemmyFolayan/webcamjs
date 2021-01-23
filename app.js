var FoodForm = document.getElementById("foodForm");

let Activity;
let facilityType;
let Description;
let Building;
let FileName;
let today;
let FIA;

let locationType;

let city;
let country;
let exactLocation;

let imgData;

document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
document.getElementById("DescriptionOutdoor1").style.visibility = "visible";
document.getElementById("DescriptionVideo1").style.visibility = "hidden";
document.getElementById("Descriptionshots1").style.visibility = "hidden";
document.getElementById("downloadZip").style.visibility = "hidden";

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
    if ("content-" + id === document.getElementById("content-1").id) {
      locationType = "Outdoor Photos";
      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "visible";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      console.log(locationType);
    } else if ("content-" + id === document.getElementById("content-2").id) {
      locationType = "Indoor Photos";
      document.getElementById("DescriptionIndoor1").style.visibility =
        "visible";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      console.log(locationType);
    } else if ("content-" + id === document.getElementById("content-3").id) {
      locationType = "Video with Descriptive Audio";

      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "visible";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      console.log(locationType);
    } else if ("content-" + id === document.getElementById("content-4").id) {
      locationType = "Screen Shots";
      console.log(locationType);

      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";

      document.getElementById("Descriptionshots1").style.visibility = "visible";
    } else {
      console.log("not working");

      document.getElementById("hideSection").style.visibility = "hidden";
      document.getElementById("downloadZip").style.visibility = "visible";

      alert("Done !, Re-Take Site Pictures");
      //window.location.assign("index.html");
    }
  }
  if (counter > 4) {
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
  if (counter < 4) {
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

  var selectorFacility = document.getElementById("FacilityType");

  facilityType = selectorFacility[selectorFacility.selectedIndex].value;

  var selectorBuilding = document.getElementById("Building");

  Building = selectorBuilding[selectorBuilding.selectedIndex].value;

  var selectorDescription = document.getElementById("DescriptionOutdoor");
  Description = selectorDescription[selectorDescription.selectedIndex].value;
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
    ".jpeg";
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
    ".jpeg";
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

function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function (data_uri) {
    // display results in page

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

      imgData = tempCtx.getImageData(0, 0, cw, ch);
      console.log(imgData);
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
      /*
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      ctx.drawImage(img, 0, 0);
      var base64String = ctx.getImageData(0, 0, c.width, c.height);

      */
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
  .timeline({ loop: true })
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
  //Building = result.principalSubdivision;
  //Description = result.countryName;
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

console.log("IMAGE DATA");

////PREV NEXT

var video = document.createElement("video");
video.src = "./assets/Black.mp4";
video.type = "video/mp4";

const DownloadZip = () => {
  var zip = new JSZip();

  var img = zip.folder("Outdoor Photos");

  let base64String = btoa(String.fromCharCode(...new Uint8Array(imgData)));

  console.log(base64String);

  //var base64String2 = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=";

  //SO CONVERT THE DATA URL TO base64
  //SOLUTION
  //The image data is either a base64 string (as above) or a base64 array.
  //These can both be obtained from the canvas element with toDataURL or getImageData respectively.
  //file(name, data [,options])

  console.log(base64String);
  console.log(imgData);
  img.file("Yard_sign.jpeg", base64String, { base64: true });
  img.file("Yard_overview/south.jpeg", base64String, { base64: true });
  img.file("Yard_overview/west.jpeg", base64String, { base64: true });
  img.file("Yard_overview/North.jpeg", base64String, { base64: true });
  img.file("Yard_overview/East.jpeg", base64String, { base64: true });

  img.file("Fencing.gif", base64String, { base64: true });
  img.file("Building_enclosure.jpeg", base64String, { base64: true });
  img.file("Target_wall_for_mast.jpeg", base64String, { base64: true });
  img.file("Target_wall_for_mast_Roof.jpeg", base64String, { base64: true });
  img.file("Bruce_box.jpeg", base64String, { base64: true });
  img.file("Building_and_tower_grounds.jpeg", base64String, { base64: true });
  img.file("All_outdoor_communications.jpeg", base64String, { base64: true });
  img.file("Existing_masts_towers_VSAT.jpeg", base64String, { base64: true });
  img.file("towers_VSAT_cableRouting.jpeg", base64String, { base64: true });
  img.file("tower_conduit.jpeg", base64String, { base64: true });
  img.file("trenching_(Tremwa).jpeg", base64String, { base64: true });
  img.file("Existing_cable_trays.jpeg", base64String, { base64: true });
  img.file("outdoor_facilities.jpeg", base64String, { base64: true });
  img.file("Proposed_slurry_pit.jpeg", base64String, { base64: true });
  img.file("overhead_wiring.jpeg", base64String, { base64: true });
  //base64 : true

  var img2 = zip.folder("Indoor Photos");
  img2.file("From_the_doorway.jpeg", base64String, { base64: true });
  img2.file("indoor_communications_rooms.jpeg", base64String, { base64: true });
  img2.file("Cable_entry_point.jpeg", base64String, { base64: true });
  img2.file("Existing_cable_runs.jpeg", base64String, { base64: true });
  img2.file("Telco_WAN_termination.jpeg", base64String, { base64: true });
  img2.file("cable_termination_equipment.jpeg", base64String, { base64: true });
  img2.file("Wall_boards.jpeg", base64String, { base64: true });
  img2.file("Patch_panels.jpeg", base64String, { base64: true });
  img2.file("equipment_install_location.jpeg", base64String, { base64: true });
  img2.file("rack_install_location.jpeg", base64String, { base64: true });
  img2.file("antenna_mounting_location.jpeg", base64String, { base64: true });
  img2.file("Equipment_interconnections.jpeg", base64String, { base64: true });
  img2.file("data_networking_gear.jpeg", base64String, { base64: true });
  img2.file("Switches_routers_modems.jpeg", base64String, { base64: true });
  img2.file("Identify_active_and_spare_ports.jpeg", base64String, {
    base64: true,
  });
  img2.file("Telephones_and_telephone_numbers.jpeg", base64String, {
    base64: true,
  });
  img2.file("Cable_jacks_and_proposed.jpeg", base64String, { base64: true });
  img2.file("radio_equipment.jpeg", base64String, { base64: true });
  img2.file("Barton.jpeg", base64String, { base64: true });
  img2.file("Bristol.jpeg", base64String, { base64: true });
  img2.file("PBX.jpeg", base64String, { base64: true });
  img2.file("unusual.jpeg", base64String, { base64: true });
  img2.file("safety_issues_dangers_concerns.jpeg", base64String, {
    base64: true,
  });

  var video = zip.folder("Video with Descriptive Audio");
  video.file("Video_Yard_overview.mp4", video.src);
  video.file("Video_Outside_each_building.mp4", video.src);
  video.file("Video_Inside_each_building.mp4", video.src);
  video.file("Video_Existing_network_cabinets.mp4", video.src, {
    base64: true,
  });
  video.file("Video_Proposed_solution_inside.mp4", video.src, {
    base64: true,
  });
  video.file("Video_direction_to_services.mp4", video.src, { base64: true });
  video.file("Video_safety_issues_dangers_concerns.mp4", video.src, {
    base64: true,
  });

  var img4 = zip.folder("Screen Shots");
  img4.file("Speed_tests.jpeg", base64String, { base64: true });
  img4.file("Cellular_signal_tests.jpeg", base64String, { base64: true });
  img4.file("Satellite_signal_tests.jpeg", base64String, { base64: true });

  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Comserve Geocam.zip");

    console.log("zip");
  });
};
