var FoodForm = document.getElementById("foodForm");

let Activity;
let facilityType;
let Description;
let Building;
let FileName;
let today;
let FIA;

let locationType;
let locationTypeSecond;

let city;
let country;
let exactLocation;

let imgData;
let DataURL1;
let blob;
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

      alert("Done !, Proceed to Download Files");
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

////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

////////////SECOND ONE
Description = "Yard_sign";

console.log(Description);
console.log("before ifSecond");

var counterSecond = 1;
$("body").on("click", ".nextSecond", function () {
  $(".contentSecond").hide();

  counterSecond++;
  $("#contentSecond-" + counterSecond + "").show();

  ////////////////
  if (counterSecond > 1) {
    $(".backSecond").show();
    var idSecond = counterSecond;
    if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-1").id
    ) {
      locationTypeSecond = "Yard sign";

      console.log(locationType);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-2").id
    ) {
      locationTypeSecond = "Yard_overview/south";
      Description = document.getElementById("Yard_overview/south").value;

      console.log(Description);

      console.log(locationTypeSecond);
      console.log("catch");
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-3").id
    ) {
      locationTypeSecond = "Yard_overview/west";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/west").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-4").id
    ) {
      locationTypeSecond = "Yard_overview/North";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/North").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-5").id
    ) {
      locationTypeSecond = "Yard_overview/East";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/East").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-6").id
    ) {
      locationTypeSecond = "Fencing";

      console.log(locationTypeSecond);
      Description = document.getElementById("Fencing").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-7").id
    ) {
      locationTypeSecond = "Building_enclosure";

      console.log(locationTypeSecond);
      Description = document.getElementById("Building_enclosure").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-8").id
    ) {
      locationTypeSecond = "Target_wall_for_mast";

      console.log(locationTypeSecond);
      Description = document.getElementById("Target_wall_for_mast").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-9").id
    ) {
      locationTypeSecond = "Target_wall_for_mast_Roof";

      console.log(locationTypeSecond);
      Description = document.getElementById("Target_wall_for_mast_Roof").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-10").id
    ) {
      locationTypeSecond = "Bruce_box";

      console.log(locationTypeSecond);
      Description = document.getElementById("Bruce_box").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-11").id
    ) {
      locationTypeSecond = "Building_and_tower_grounds";

      console.log(locationTypeSecond);
      Description = document.getElementById("Building_and_tower_grounds").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-12").id
    ) {
      locationTypeSecond = "All_outdoor_communications";

      console.log(locationTypeSecond);
      Description = document.getElementById("All_outdoor_communications").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-13").id
    ) {
      locationTypeSecond = "Existing_masts_towers_VSAT";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_masts_towers_VSAT").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-14").id
    ) {
      locationTypeSecond = "towers_VSAT_cableRouting";

      console.log(locationTypeSecond);
      Description = document.getElementById("towers_VSAT_cableRouting").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-15").id
    ) {
      locationTypeSecond = "tower_conduit";

      console.log(locationTypeSecond);
      Description = document.getElementById("tower_conduit").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-16").id
    ) {
      locationTypeSecond = "trenching_(Tremwa)";

      console.log(locationTypeSecond);
      Description = document.getElementById("trenching_(Tremwa)").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-17").id
    ) {
      locationTypeSecond = "Existing_cable_trays";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_cable_trays").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-18").id
    ) {
      locationTypeSecond = "outdoor_facilities";

      console.log(locationTypeSecond);
      Description = document.getElementById("outdoor_facilities").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-19").id
    ) {
      locationTypeSecond = "Proposed_slurry_pit";

      console.log(locationTypeSecond);
      Description = document.getElementById("Proposed_slurry_pit").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-20").id
    ) {
      locationTypeSecond = "overhead_wiring";

      console.log(locationTypeSecond);
      Description = document.getElementById("overhead_wiring").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-21").id
    ) {
      locationTypeSecond = "From_the_doorway";

      console.log(locationTypeSecond);
      Description = document.getElementById("From_the_doorway").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-22").id
    ) {
      locationTypeSecond = "indoor_communications_rooms";

      console.log(locationTypeSecond);
      Description = document.getElementById("indoor_communications_rooms")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-23").id
    ) {
      locationTypeSecond = "Cable_entry_point";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cable_entry_point").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-24").id
    ) {
      locationTypeSecond = "Existing_cable_runs";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_cable_runs").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-25").id
    ) {
      locationTypeSecond = "Telco_WAN_termination";

      console.log(locationTypeSecond);
      Description = document.getElementById("Telco_WAN_termination").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-26").id
    ) {
      locationTypeSecond = "cable_termination_equipment";

      console.log(locationTypeSecond);
      Description = document.getElementById("cable_termination_equipment")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-27").id
    ) {
      locationTypeSecond = "Wall_boards";

      console.log(locationTypeSecond);
      Description = document.getElementById("Wall_boards").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-28").id
    ) {
      locationTypeSecond = "Patch_panels";

      console.log(locationTypeSecond);
      Description = document.getElementById("Patch_panels").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-29").id
    ) {
      locationTypeSecond = "equipment_install_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("equipment_install_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-30").id
    ) {
      locationTypeSecond = "rack_install_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("rack_install_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-31").id
    ) {
      locationTypeSecond = "antenna_mounting_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("antenna_mounting_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-32").id
    ) {
      locationTypeSecond = "Equipment_interconnections";

      console.log(locationTypeSecond);
      Description = document.getElementById("Equipment_interconnections").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-33").id
    ) {
      locationTypeSecond = "data_networking_gear";

      console.log(locationTypeSecond);
      Description = document.getElementById("data_networking_gear").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-34").id
    ) {
      locationTypeSecond = "Switches_routers_modems";

      console.log(locationTypeSecond);
      Description = document.getElementById("Switches_routers_modems").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-35").id
    ) {
      locationTypeSecond = "Identify_active_and_spare_ports";

      console.log(locationTypeSecond);
      Description = document.getElementById("Identify_active_and_spare_ports")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-36").id
    ) {
      locationTypeSecond = "Telephones_and_telephone_numbers";

      console.log(locationTypeSecond);
      Description = document.getElementById("Telephones_and_telephone_numbers")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-37").id
    ) {
      locationTypeSecond = "Cable_jacks_and_proposed";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cable_jacks_and_proposed").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-38").id
    ) {
      locationTypeSecond = "radio_equipment";

      console.log(locationTypeSecond);
      Description = document.getElementById("radio_equipment").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-39").id
    ) {
      locationTypeSecond = "Barton";

      console.log(locationTypeSecond);
      Description = document.getElementById("Barton").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-40").id
    ) {
      locationTypeSecond = "PBX";

      console.log(locationTypeSecond);
      Description = document.getElementById("PBX").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-41").id
    ) {
      locationTypeSecond = "unusual";

      console.log(locationTypeSecond);
      Description = document.getElementById("unusual").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-42").id
    ) {
      locationTypeSecond = "safety_issues_dangers_concerns";

      console.log(locationTypeSecond);
      Description = document.getElementById("safety_issues_dangers_concerns")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-43").id
    ) {
      locationTypeSecond = "Speed_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Speed_tests").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-44").id
    ) {
      locationTypeSecond = "Cellular_signal_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cellular_signal_tests").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-45").id
    ) {
      locationTypeSecond = "Satellite_signal_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Satellite_signal_tests").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-46").id
    ) {
      locationTypeSecond = "Video_Yard_overview";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Yard_overview").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-47").id
    ) {
      locationTypeSecond = "Video_Outside_each_building";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Outside_each_building")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-48").id
    ) {
      locationTypeSecond = "Video_Inside_each_building";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Inside_each_building").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-49").id
    ) {
      locationTypeSecond = "Video_Existing_network_cabinets";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Existing_network_cabinets")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-50").id
    ) {
      locationTypeSecond = "Video_Proposed_solution_inside";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Proposed_solution_inside")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-51").id
    ) {
      locationTypeSecond = "Video_direction_to_services";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_direction_to_services")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-52").id
    ) {
      locationTypeSecond = "Video_safety_issues_dangers_concerns";

      console.log(locationTypeSecond);
      Description = document.getElementById(
        "Video_safety_issues_dangers_concerns"
      ).value;

      console.log(Description);
    } else {
      console.log("Second condiiotns not working");

      document.getElementById("hideSection").style.visibility = "hidden";
      document.getElementById("downloadZip").style.visibility = "visible";

      alert("Done !, Proceed to Download Files");
      //window.location.assign("index.html");
    }
  }
  if (counterSecond > 57) {
    $(".contentSecond-holder").hide();
    $(".endSecond").show();
  }
});

$("body").on("click", ".backSecond", function () {
  //alert(counter);
  counterSecond--;
  $(".contentSecond").hide();
  var idSecond = counterSecond;
  $("#contentSecond-" + idSecond).show();
  if (counterSecond < 57) {
    $(".backSecond").hide();
  }
});

const newLocal = ".edit-previousSecond";
// if content-1 =  ("#content-" + id)
//then  let facilityType = "Meter";

$("body").on("click", newLocal, function () {});

// and FIA as zipcode, site name from gps/ facility type and Activity

FoodForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var selectorActivity = document.getElementById("Activity");

  Activity = selectorActivity[selectorActivity.selectedIndex].value;

  var selectorFacility = document.getElementById("FacilityType");

  facilityType = selectorFacility[selectorFacility.selectedIndex].value;

  var selectorBuilding = document.getElementById("Building");

  Building = selectorBuilding[selectorBuilding.selectedIndex].value;

  /* var selectorDescription = document.getElementById("DescriptionOutdoor");
  Description = selectorDescription[selectorDescription.selectedIndex].value; */
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
    ".png";
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
    ".png";
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

    DataURL1 = data_uri;
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
      let dataURL;

      console.log("data url2");
      console.log(dataURL);

      function dataURItoBlob(dataURL) {
        dataURL = watermarkedDataURL(canvas, dateLocation);
        // convert base64 to raw binary data held in a string
        var byteString = atob(dataURL.split(",")[1]);

        // separate out the mime component
        var mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];

        // write the bytes of the string to an ArrayBuffer
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var _ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
          _ia[i] = byteString.charCodeAt(i);
        }

        var dataView = new DataView(arrayBuffer);
        blob = new Blob([dataView.buffer], { type: mimeString });

        return blob;
      }

      dataURItoBlob();

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
      var blob = ctx.getImageData(0, 0, c.width, c.height);

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

const DownloadZip = () => {
  var zip = new JSZip();

  var img = zip.folder("Outdoor Photos");

  //var blob2 = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=";

  //SO CONVERT THE DATA URL TO base64
  //SOLUTION
  //The image data is either a base64 string (as above) or a base64 array.
  //These can both be obtained from the canvas element with toDataURL or getImageData respectively.
  //file(name, data [,options])

  //Jszip it takes data it doesnot allow dataurl

  console.log(blob);
  console.log(blob);
  img.file("Yard_sign.png", blob, { base64: false });
  img.file("Yard_overview/south.png", blob, { base64: false });
  img.file("Yard_overview/west.png", blob, { base64: false });
  img.file("Yard_overview/North.png", blob, { base64: false });
  img.file("Yard_overview/East.png", blob, { base64: false });

  img.file("Fencing.png", blob, { base64: false });
  img.file("Building_enclosure.png", blob, { base64: false });
  img.file("Target_wall_for_mast.png", blob, { base64: false });
  img.file("Target_wall_for_mast_Roof.png", blob, { base64: false });
  img.file("Bruce_box.png", blob, { base64: false });
  img.file("Building_and_tower_grounds.png", blob, { base64: false });
  img.file("All_outdoor_communications.png", blob, { base64: false });
  img.file("Existing_masts_towers_VSAT.png", blob, { base64: false });
  img.file("towers_VSAT_cableRouting.png", blob, { base64: false });
  img.file("tower_conduit.png", blob, { base64: false });
  img.file("trenching_(Tremwa).png", blob, { base64: false });
  img.file("Existing_cable_trays.png", blob, { base64: false });
  img.file("outdoor_facilities.png", blob, { base64: false });
  img.file("Proposed_slurry_pit.png", blob, { base64: false });
  img.file("overhead_wiring.png", blob, { base64: false });
  //base64 : false

  var img2 = zip.folder("Indoor Photos");
  img2.file("From_the_doorway.png", blob, { base64: false });
  img2.file("indoor_communications_rooms.png", blob, { base64: false });
  img2.file("Cable_entry_point.png", blob, { base64: false });
  img2.file("Existing_cable_runs.png", blob, { base64: false });
  img2.file("Telco_WAN_termination.png", blob, { base64: false });
  img2.file("cable_termination_equipment.png", blob, { base64: false });
  img2.file("Wall_boards.png", blob, { base64: false });
  img2.file("Patch_panels.png", blob, { base64: false });
  img2.file("equipment_install_location.png", blob, { base64: false });
  img2.file("rack_install_location.png", blob, { base64: false });
  img2.file("antenna_mounting_location.png", blob, { base64: false });
  img2.file("Equipment_interconnections.png", blob, { base64: false });
  img2.file("data_networking_gear.png", blob, { base64: false });
  img2.file("Switches_routers_modems.png", blob, { base64: false });
  img2.file("Identify_active_and_spare_ports.png", blob, {
    base64: false,
  });
  img2.file("Telephones_and_telephone_numbers.png", blob, {
    base64: false,
  });
  img2.file("Cable_jacks_and_proposed.png", blob, { base64: false });
  img2.file("radio_equipment.png", blob, { base64: false });
  img2.file("Barton.png", blob, { base64: false });
  img2.file("Bristol.png", blob, { base64: false });
  img2.file("PBX.png", blob, { base64: false });
  img2.file("unusual.png", blob, { base64: false });
  img2.file("safety_issues_dangers_concerns.png", blob, {
    base64: false,
  });

  var img4 = zip.folder("Screen Shots");
  img4.file("Speed_tests.png", blob, { base64: false });
  img4.file("Cellular_signal_tests.png", blob, { base64: false });
  img4.file("Satellite_signal_tests.png", blob, { base64: false });

  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Comserve Geocam.zip");

    console.log("zip");
  });
};
