//TO DO clear cache when site loads, use logo structure it very well

alert("Welcome, Kindly Supply Site Details below before Taking Site Pictures");

//2) REPLACE AND CANCEL (DIALOG)
//3) DOWNLOAD OR SHARE ON CLOUD, EMAIL , GOOGLE DRIVE

// const popupTemplateDOM = document.getElementById("dialog-confirm");
// const PopUP = () => {
//   $(function () {
//     $("#dialog-confirm").dialog({
//       resizable: false,
//       height: "auto",
//       width: 360,
//       modal: true,
//       buttons: {
//         Continue: function () {
//           window.location.assign("/Homepage.html");
//         },
//         "Re-Take": function () {
//           //window.location.assign("/Homepage.html");
//         },
//       },
//     });
//   });

//   let htmlString = popupTemplate();
//   let htmlFragment = document.createElement("div");
//   htmlFragment.innerHTML = htmlString;
//   popupTemplateDOM.appendChild(htmlFragment);
// };

// const popupTemplate = () => {
//   return `<p>
//   `;
// };

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
let siteName;

let imgData;
let DataURL1;
let blob;
let zippedMail;
let base64String;

//error=unsupported_response_type&error_description=The+provided+value+for+the+input+parameter+'response_type'+is+not+allowed+for+this+client.+Expected+value+is+'code'.+'token'+is+disabled+for+this+app.&state=redirect_type%3dauth%26display%3dpage%26request_ts%3d1612299172777%26response_method%3durl%26secure_cookie%3dfalse
// document.getElementById("buttonHidden").style.visibility = "hidden";
// document.getElementById("buttonHidden2").style.visibility = "hidden";
document.getElementById("downloadZip").style.visibility = "hidden";

document.getElementById("SHOWHIDE").style.visibility = "hidden";

///Disable next and previous for outdoor, attach next to each content limit

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
      //locationType = "Outdoor Photos";
      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "visible";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      //console.log(locationType);

      //Shift contentSecond-1 TO contentSecond-20
    } else if ("content-" + id === document.getElementById("content-2").id) {
      //locationType = "Indoor Photos";
      document.getElementById("DescriptionIndoor1").style.visibility =
        "visible";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      //console.log(locationType);

      //Shift contentSecond-21 TO contentSecond-42
    } else if ("content-" + id === document.getElementById("content-3").id) {
      //locationType = "Video with Descriptive Audio";

      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "visible";
      document.getElementById("Descriptionshots1").style.visibility = "hidden";

      //console.log(locationType);

      //Shift contentSecond-43 TO contentSecond-45
    } else if ("content-" + id === document.getElementById("content-4").id) {
      locationType = "Screen Shots";
      console.log(locationType);

      document.getElementById("DescriptionIndoor1").style.visibility = "hidden";
      document.getElementById("DescriptionOutdoor1").style.visibility =
        "hidden";
      document.getElementById("DescriptionVideo1").style.visibility = "hidden";

      document.getElementById("Descriptionshots1").style.visibility = "visible";

      //Shift contentSecond-46 TO contentSecond-52
    } else {
      console.log("not working");
      document.getElementById("hideSections").style.visibility = "hidden";
      document.getElementById("hideSection").style.visibility = "hidden";
      document.getElementById("downloadZip").style.visibility = "visible";

      //alert("Done !, Proceed to Download Files");

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
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Yard sign";

      console.log(locationType);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-2").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Yard_overview/south";
      Description = document.getElementById("Yard_overview/south").value;

      //document.getElementById("demo").style.visibility = "hidden";

      console.log(Description);

      console.log(locationTypeSecond);
      console.log("catch");
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-3").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Yard_overview/west";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/west").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-4").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Yard_overview/North";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/North").value;

      console.log("switch to Indoorrrr");

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-5").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Yard_overview/East";

      console.log(locationTypeSecond);
      Description = document.getElementById("Yard_overview/East").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-6").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Fencing";

      console.log(locationTypeSecond);
      Description = document.getElementById("Fencing").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-7").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Building_enclosure";

      console.log(locationTypeSecond);
      Description = document.getElementById("Building_enclosure").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-8").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Target_wall_for_mast";

      console.log(locationTypeSecond);
      Description = document.getElementById("Target_wall_for_mast").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-9").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Target_wall_for_mast_Roof";

      console.log(locationTypeSecond);
      Description = document.getElementById("Target_wall_for_mast_Roof").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-10").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Bruce_box";

      console.log(locationTypeSecond);
      Description = document.getElementById("Bruce_box").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-11").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Building_and_tower_grounds";

      console.log(locationTypeSecond);
      Description = document.getElementById("Building_and_tower_grounds").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-12").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "All_outdoor_communications";

      console.log(locationTypeSecond);
      Description = document.getElementById("All_outdoor_communications").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-13").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Existing_masts_towers_VSAT";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_masts_towers_VSAT").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-14").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "towers_VSAT_cableRouting";

      console.log(locationTypeSecond);
      Description = document.getElementById("towers_VSAT_cableRouting").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-15").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "tower_conduit";

      console.log(locationTypeSecond);
      Description = document.getElementById("tower_conduit").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-16").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "trenching_(Tremwa)";

      console.log(locationTypeSecond);
      Description = document.getElementById("trenching_(Tremwa)").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-17").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Existing_cable_trays";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_cable_trays").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-18").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "outdoor_facilities";

      console.log(locationTypeSecond);
      Description = document.getElementById("outdoor_facilities").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-19").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "Proposed_slurry_pit";

      console.log(locationTypeSecond);
      Description = document.getElementById("Proposed_slurry_pit").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-20").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "overhead_wiring";

      console.log(locationTypeSecond);
      Description = document.getElementById("overhead_wiring").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-21").id
    ) {
      locationType = "Outdoor Photos";
      console.log(locationType);
      locationTypeSecond = "From_the_doorway";

      console.log(locationTypeSecond);
      Description = document.getElementById("From_the_doorway").value;

      console.log(Description);

      /////////////////SHOWHIDE

      $("#content-2").show();

      $("#content-1").hide();
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-22").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "indoor_communications_rooms";

      console.log(locationTypeSecond);
      Description = document.getElementById("indoor_communications_rooms")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-23").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Cable_entry_point";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cable_entry_point").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-24").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Existing_cable_runs";

      console.log(locationTypeSecond);
      Description = document.getElementById("Existing_cable_runs").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-25").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Telco_WAN_termination";

      console.log(locationTypeSecond);
      Description = document.getElementById("Telco_WAN_termination").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-26").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "cable_termination_equipment";

      console.log(locationTypeSecond);
      Description = document.getElementById("cable_termination_equipment")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-27").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Wall_boards";

      console.log(locationTypeSecond);
      Description = document.getElementById("Wall_boards").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-28").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Patch_panels";

      console.log(locationTypeSecond);
      Description = document.getElementById("Patch_panels").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-29").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "equipment_install_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("equipment_install_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-30").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "rack_install_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("rack_install_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-31").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "antenna_mounting_location";

      console.log(locationTypeSecond);
      Description = document.getElementById("antenna_mounting_location").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-32").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Equipment_interconnections";

      console.log(locationTypeSecond);
      Description = document.getElementById("Equipment_interconnections").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-33").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "data_networking_gear";

      console.log(locationTypeSecond);
      Description = document.getElementById("data_networking_gear").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-34").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Switches_routers_modems";

      console.log(locationTypeSecond);
      Description = document.getElementById("Switches_routers_modems").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-35").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Identify_active_and_spare_ports";

      console.log(locationTypeSecond);
      Description = document.getElementById("Identify_active_and_spare_ports")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-36").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Telephones_and_telephone_numbers";

      console.log(locationTypeSecond);
      Description = document.getElementById("Telephones_and_telephone_numbers")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-37").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Cable_jacks_and_proposed";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cable_jacks_and_proposed").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-38").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "radio_equipment";

      console.log(locationTypeSecond);
      Description = document.getElementById("radio_equipment").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-39").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "Barton";

      console.log(locationTypeSecond);
      Description = document.getElementById("Barton").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-40").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "PBX";

      console.log(locationTypeSecond);
      Description = document.getElementById("PBX").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-41").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "unusual";

      console.log(locationTypeSecond);
      Description = document.getElementById("unusual").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-42").id
    ) {
      locationType = "Indoor Photos";
      console.log(locationType);
      locationTypeSecond = "safety_issues_dangers_concerns";

      console.log(locationTypeSecond);
      Description = document.getElementById("safety_issues_dangers_concerns")
        .value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-43").id
    ) {
      locationType = "ScreenShot";
      console.log(locationType);
      locationTypeSecond = "Speed_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Speed_tests").value;

      console.log(Description);
      //////////////SHOWHIDE
      $("#content-3").show();

      $("#content-2").hide();
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-44").id
    ) {
      locationType = "ScreenShot";
      console.log(locationType);
      locationTypeSecond = "Cellular_signal_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Cellular_signal_tests").value;

      console.log(Description);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-45").id
    ) {
      locationType = "ScreenShot";
      console.log(locationType);
      locationTypeSecond = "Satellite_signal_tests";

      console.log(locationTypeSecond);
      Description = document.getElementById("Satellite_signal_tests").value;

      console.log(Description);
    } else {
      console.log("Second conditions not working");

      document.getElementById("hideSection").style.visibility = "hidden";
      document.getElementById("downloadZip").style.visibility = "visible";

      alert("Done !, Proceed to Download Files");

      var txt;
      if (confirm("Press [Ok to Proceed] [Cancel to Retake pictures]")) {
        //txt = "You pressed OK!";
      } else {
        //txt = "You pressed Cancel!";
        window.location.assign("/Homepage.html");
      }

      PopUP();

      //window.location.assign("index.html");
    }
  }
  if (counterSecond > 46) {
    $(".contentSecond-holder").hide();
    $(".endSecond").show();
  }
});

$("body").on("click", ".backSecond", function () {
  //alert(counter);
  counterSecond--;

  var txt;
  if (confirm("Do you want to Replace previous image!")) {
    //txt = "You pressed OK!";
  } else {
    //txt = "You pressed Cancel!";
  }
  //document.getElementById("demo").innerHTML = txt;

  $(".contentSecond").hide();
  var idSecond = counterSecond;
  $("#contentSecond-" + idSecond).show();
  if (counterSecond < 2) {
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

  FIA = document.getElementById("FacilityNo").value;

  siteName = document.getElementById("SiteName").value;

  /* var selectorDescription = document.getElementById("DescriptionOutdoor");
  Description = selectorDescription[selectorDescription.selectedIndex].value; */
  console.log(Activity);
  console.log(facilityType);
  console.log(Description);
  console.log(Building);
  console.log(siteName);

  FileName =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    Description +
    today +
    ImageNumber;
  getLocation();
});

let ImageNumber;

ImageNumber = "IMG_00" + (Math.floor(Math.random() * 100) + 1);

//let FIA = Math.floor(Math.random() * 92782) + 944;

console.log(ImageNumber);

var x = document.getElementById("demo");

let latitude;
let longitude;

function showPosition(position) {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  console.log(latitude);
  console.log(longitude);

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + mm + dd;
  console.log(today);

  x.innerHTML =
    "Location: " +
    exactLocation +
    "<br>LONGITUDE: " +
    longitude +
    "<br> LATITUDE: " +
    latitude;
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

var counterBlob = 0;

function take_snapshot() {
  // take snapshot and get image data
  counterBlob = counterBlob + 1;

  console.log("counterBlob");
  console.log(counterBlob);
  Webcam.snap(function (data_uri) {
    // display results in page

    document.getElementById("results").innerHTML =
      // "<h5>Note : Supply Site Information in the form Below and <br> Click Download</h5>" +
      '<a  download="' +
      FileName +
      '" href="' +
      data_uri +
      '" title="Description"><button class="button">Download  ⬇</button></a>';

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

      var dateLocation =
        "Date: " +
        today +
        "  " +
        "Lat: " +
        latitude +
        "/" +
        "Long: " +
        longitude;
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

      if ("blob1" == "blob" + counterBlob) {
        blob1 = blob;
        console.log(counterBlob);
        console.log(blob1);
      } else if ("blob2" == "blob" + counterBlob) {
        blob2 = blob;
        console.log(blob2);
      } else if ("blob3" == "blob" + counterBlob) {
        blob3 = blob;
        console.log(blob3);
      } else if ("blob4" == "blob" + counterBlob) {
        blob4 = blob;
        console.log(blob4);
      } else if ("blob5" == "blob" + counterBlob) {
        blob5 = blob;
        console.log(blob5);
      } else if ("blob6" == "blob" + counterBlob) {
        blob6 = blob;
        console.log(blob6);
      } else if ("blob7" == "blob" + counterBlob) {
        blob7 = blob;
        console.log(blob7);
      } else if ("blob8" == "blob" + counterBlob) {
        blob8 = blob;
        console.log(blob8);
      } else if ("blob9" == "blob" + counterBlob) {
        blob9 = blob;
        console.log(blob9);
      } else if ("blob10" == "blob" + counterBlob) {
        blob10 = blob;
        console.log(blob10);
      } else if ("blob11" == "blob" + counterBlob) {
        blob11 = blob;
        console.log(blob11);
      } else if ("blob12" == "blob" + counterBlob) {
        blob12 = blob;
        console.log(blob12);
      } else if ("blob13" == "blob" + counterBlob) {
        blob13 = blob;
        console.log(blob13);
      } else if ("blob14" == "blob" + counterBlob) {
        blob14 = blob;
        console.log(blob14);
      } else if ("blob15" == "blob" + counterBlob) {
        blob15 = blob;
        console.log(blob15);
      } else if ("blob16" == "blob" + counterBlob) {
        blob16 = blob;
        console.log(blob16);
      } else if ("blob17" == "blob" + counterBlob) {
        blob17 = blob;
        console.log(blob2);
      } else if ("blob18" == "blob" + counterBlob) {
        blob18 = blob;
        console.log(blob18);
      } else if ("blob19" == "blob" + counterBlob) {
        blob19 = blob;
        console.log(blob19);
      } else if ("blob20" == "blob" + counterBlob) {
        blob20 = blob;
        console.log(blob20);
      } else if ("blob21" == "blob" + counterBlob) {
        blob21 = blob;
        console.log(blob21);
      } else if ("blob22" == "blob" + counterBlob) {
        blob22 = blob;
        console.log(blob2);
      } else if ("blob23" == "blob" + counterBlob) {
        blob23 = blob;
        console.log(blob23);
      } else if ("blob24" == "blob" + counterBlob) {
        blob24 = blob;
        console.log(blob24);
      } else if ("blob25" == "blob" + counterBlob) {
        blob25 = blob;
        console.log(blob25);
      } else if ("blob26" == "blob" + counterBlob) {
        blob26 = blob;
        console.log(blob26);
      } else if ("blob27" == "blob" + counterBlob) {
        blob27 = blob;
        console.log(blob27);
      } else if ("blob28" == "blob" + counterBlob) {
        blob28 = blob;
        console.log(blob28);
      } else if ("blob29" == "blob" + counterBlob) {
        blob29 = blob;
        console.log(blob29);
      } else if ("blob30" == "blob" + counterBlob) {
        blob30 = blob;
        console.log(blob30);
      } else if ("blob31" == "blob" + counterBlob) {
        blob31 = blob;
        console.log(blob31);
      } else if ("blob32" == "blob" + counterBlob) {
        blob32 = blob;
        console.log(blob32);
      } else if ("blob33" == "blob" + counterBlob) {
        blob33 = blob;
        console.log(blob33);
      } else if ("blob34" == "blob" + counterBlob) {
        blob34 = blob;
        console.log(blob34);
      } else if ("blob35" == "blob" + counterBlob) {
        blob35 = blob;
        console.log(blob35);
      } else if ("blob36" == "blob" + counterBlob) {
        blob36 = blob;
        console.log(blob36);
      } else if ("blob37" == "blob" + counterBlob) {
        blob37 = blob;
        console.log(blob37);
      } else if ("blob38" == "blob" + counterBlob) {
        blob38 = blob;
        console.log(blob38);
      } else if ("blob39" == "blob" + counterBlob) {
        blob39 = blob;
        console.log(blob39);
      } else if ("blob40" == "blob" + counterBlob) {
        blob40 = blob;
        console.log(blob40);
      } else if ("blob41" == "blob" + counterBlob) {
        blob41 = blob;
        console.log(blob41);
      } else if ("blob42" == "blob" + counterBlob) {
        blob42 = blob;
        console.log(blob42);
      } else if ("blob43" == "blob" + counterBlob) {
        blob43 = blob;
        console.log(blob43);
      } else if ("blob44" == "blob" + counterBlob) {
        blob44 = blob;
        console.log(blob44);
      } else if ("blob45" == "blob" + counterBlob) {
        blob45 = blob;
        console.log(blob45);
      } else {
        console.log("WTF");
      }

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
      tempCtx.font = "11px Ubuntu";
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
  //FIA = result.postcode;

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

console.log("FIlename");
console.log(FileName);

let blob1;

//FileNames = FIA + siteName + facilityType + Activity + Building + "Yard_sign" + today + ImageNumber;

const DownloadZip = () => {
  console.log(blob1);
  console.log(blob2);
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
  //img.file("Yard_sign.png", blob1, { base64: false });

  let FileNameYard_sign =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Yard_sign" +
    today +
    ImageNumber +
    ".png";

  console.log(FileNameYard_sign);

  let FileNameYard_overview_East =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Yard_overview_East" +
    today +
    ImageNumber +
    ".png";

  let FileNameYard_overview_south =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Yard_overview_south" +
    today +
    ImageNumber +
    ".png";

  let FileNameYard_overview_west =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Yard_overview_west" +
    today +
    ImageNumber +
    ".png";
  let FileNameYard_overview_North =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Yard_overview_North" +
    today +
    ImageNumber +
    ".png";

  let FileNameFencing =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Fencing" +
    today +
    ImageNumber +
    ".png";

  let FileNameBuilding_enclosure =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Building_enclosure" +
    today +
    ImageNumber +
    ".png";

  let FileNameTarget_wall_for_mast =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Target_wall_for_mast" +
    today +
    ImageNumber +
    ".png";

  let FileNameTarget_wall_for_mast_Roof =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Target_wall_for_mast_Roof" +
    today +
    ImageNumber +
    ".png";

  let FileNameBruce_box =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Bruce_box" +
    today +
    ImageNumber +
    ".png";

  let FileNameBuilding_and_tower_grounds =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Building_and_tower_grounds" +
    today +
    ImageNumber +
    ".png";

  let FileNameAll_outdoor_communications =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "All_outdoor_communications" +
    today +
    ImageNumber +
    ".png";

  let FileNameExisting_masts_towers_VSAT =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Existing_masts_towers_VSAT" +
    today +
    ImageNumber +
    ".png";

  let FileNameTowers_VSAT_cableRouting =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "towers_VSAT_cableRouting" +
    today +
    ImageNumber +
    ".png";

  let FileNametower_conduit =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "tower_conduit" +
    today +
    ImageNumber +
    ".png";

  let FileNametrenching_Tremwa =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "trenching_(Tremwa)" +
    today +
    ImageNumber +
    ".png";

  let FileNameExisting_cable_trays =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Existing_cable_trays" +
    today +
    ImageNumber +
    ".png";

  let FileNameoutdoor_facilities =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "outdoor_facilities" +
    today +
    ImageNumber +
    ".png";
  let FileNameProposed_slurry_pit =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Proposed_slurry_pit" +
    today +
    ImageNumber +
    ".png";

  let FileNameoverhead_wiring =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "overhead_wiring" +
    today +
    ImageNumber +
    ".png";
  let FileNameFrom_the_doorway =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "From_the_doorway" +
    today +
    ImageNumber +
    ".png";
  let FileNameindoor_communications_rooms =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "indoor_communications_rooms" +
    today +
    ImageNumber +
    ".png";
  let FileNameCable_entry_point =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Cable_entry_point" +
    today +
    ImageNumber +
    ".png";
  let FileNameExisting_cable_runs =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Existing_cable_runs" +
    today +
    ImageNumber +
    ".png";
  let FileNameTelco_WAN_termination =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Telco_WAN_termination" +
    today +
    ImageNumber +
    ".png";
  let FileNamecable_termination_equipment =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "cable_termination_equipment" +
    today +
    ImageNumber +
    ".png";
  let FileNameWall_boards =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Wall_boards" +
    today +
    ImageNumber +
    ".png";
  let FileNamePatch_panels =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Patch_panels" +
    today +
    ImageNumber +
    ".png";
  let FileNameequipment_install_location =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "equipment_install_location" +
    today +
    ImageNumber +
    ".png";

  let FileNamerack_install_location =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "rack_install_location" +
    today +
    ImageNumber +
    ".png";
  let FileNameantenna_mounting_location =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "antenna_mounting_location" +
    today +
    ImageNumber +
    ".png";
  let FileNameEquipment_interconnections =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Equipment_interconnections" +
    today +
    ImageNumber +
    ".png";
  let FileNamedata_networking_gear =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "data_networking_gear" +
    today +
    ImageNumber +
    ".png";
  let FileNameSwitches_routers_modems =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Switches_routers_modems" +
    today +
    ImageNumber +
    ".png";
  let FileNameIdentify_active_and_spare_ports =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Identify_active_and_spare_ports" +
    today +
    ImageNumber +
    ".png";

  let FileNameTelephones_and_telephone_numbers =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Telephones_and_telephone_numbers" +
    today +
    ImageNumber +
    ".png";
  let FileNameCable_jacks_and_proposed =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Cable_jacks_and_proposed" +
    today +
    ImageNumber +
    ".png";

  let FileNameradio_equipment =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "radio_equipment" +
    today +
    ImageNumber +
    ".png";
  let FileNameBarton =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Barton" +
    today +
    ImageNumber +
    ".png";
  let FileNameBristol =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Bristol" +
    today +
    ImageNumber +
    ".png";
  let FileNamePBX =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "PBX" +
    today +
    ImageNumber +
    ".png";
  let FileNameunusual =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "unusual" +
    today +
    ImageNumber +
    ".png";
  let FileNamesafety_issues_dangers_concerns =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "safety_issues_dangers_concerns" +
    today +
    ImageNumber +
    ".png";
  let FileNameSpeed_tests =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Speed_tests" +
    today +
    ImageNumber +
    ".png";
  let FileNameCellular_signal_tests =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Cellular_signal_tests" +
    today +
    ImageNumber +
    ".png";
  let FileNameSatellite_signal_tests =
    FIA +
    siteName +
    facilityType +
    Activity +
    Building +
    "Satellite_signal_tests" +
    today +
    ImageNumber +
    ".png";

  console.log(FileNameYard_overview_East);

  img.file(FileNameYard_sign, blob1, { base64: false });

  img.file(FileNameYard_overview_south, blob2, { base64: false });
  img.file(FileNameYard_overview_west, blob3, { base64: false });
  img.file(FileNameYard_overview_North, blob4, { base64: false });
  //img.file("Yard_overview_East.png", blob5, { base64: false });
  img.file(FileNameYard_overview_East, blob5, { base64: false });

  img.file(FileNameFencing, blob6, { base64: false });
  img.file(FileNameBuilding_enclosure, blob7, { base64: false });
  img.file(FileNameTarget_wall_for_mast, blob8, { base64: false });
  img.file(FileNameTarget_wall_for_mast_Roof, blob9, { base64: false });
  img.file(FileNameBruce_box, blob10, { base64: false });
  img.file(FileNameBuilding_and_tower_grounds, blob11, { base64: false });
  img.file(FileNameAll_outdoor_communications, blob12, { base64: false });
  img.file(FileNameExisting_masts_towers_VSAT, blob13, { base64: false });
  img.file(FileNameTowers_VSAT_cableRouting, blob14, { base64: false });
  img.file(FileNametower_conduit, blob15, { base64: false });
  img.file(FileNametrenching_Tremwa, blob16, { base64: false });
  img.file(FileNameExisting_cable_trays, blob17, { base64: false });
  img.file(FileNameoutdoor_facilities, blob18, { base64: false });
  img.file(FileNameProposed_slurry_pit, blob19, { base64: false });
  img.file(FileNameoverhead_wiring, blob20, { base64: false });
  //base64 : false

  var img2 = zip.folder("Indoor Photos");
  img2.file(FileNameFrom_the_doorway, blob21, { base64: false });
  img2.file(FileNameindoor_communications_rooms, blob22, { base64: false });
  img2.file(FileNameCable_entry_point, blob23, { base64: false });
  img2.file(FileNameExisting_cable_runs, blob24, { base64: false });
  img2.file(FileNameTelco_WAN_termination, blob25, { base64: false });
  img2.file(FileNamecable_termination_equipment, blob26, { base64: false });
  img2.file(FileNameWall_boards, blob27, { base64: false });
  img2.file(FileNamePatch_panels, blob28, { base64: false });
  img2.file(FileNameequipment_install_location, blob29, { base64: false });
  img2.file(FileNamerack_install_location, blob30, { base64: false });
  img2.file(FileNameantenna_mounting_location, blob31, { base64: false });
  img2.file(FileNameEquipment_interconnections, blob32, { base64: false });
  img2.file(FileNamedata_networking_gear, blob33, { base64: false });
  img2.file(FileNameSwitches_routers_modems, blob34, { base64: false });
  img2.file(FileNameIdentify_active_and_spare_ports, blob35, {
    base64: false,
  });
  img2.file(FileNameTelephones_and_telephone_numbers, blob, {
    base64: false,
  });
  img2.file(FileNameCable_jacks_and_proposed, blob36, { base64: false });
  img2.file(FileNameradio_equipment, blob37, { base64: false });
  img2.file(FileNameBarton, blob38, { base64: false });
  img2.file(FileNameBristol, blob39, { base64: false });
  img2.file(FileNamePBX, blob40, { base64: false });
  img2.file(FileNameunusual, blob41, { base64: false });
  img2.file(FileNamesafety_issues_dangers_concerns, blob42, {
    base64: false,
  });

  var img4 = zip.folder("Screen Shots");
  img4.file(FileNameSpeed_tests, blob43, { base64: false });
  img4.file(FileNameCellular_signal_tests, blob44, { base64: false });
  img4.file(FileNameSatellite_signal_tests, blob45, { base64: false });

  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Comserves_GeocamFiles.zip");

    zippedMail = content;

    console.log(content);

    console.log("zip");

    //BLOB TO BASE64
    var reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onloadend = function () {
      base64String = reader.result;
      console.log("Base64 String - ", base64String);
    };

    // var txt;
    // if (confirm("File Downloading... [ PRESS Ok to Retake pictures ]")) {
    //   window.location.assign("/Homepage.html");
    //   //txt = "You pressed OK!";
    // } else {
    //   //txt = "You pressed Cancel!";
    //   window.location.assign("/Homepage.html");
    // }
  });
};

////////////////share
const shareButton = document.querySelector(".share-button");
const shareDialog = document.querySelector(".share-dialog");
const closeButton = document.querySelector(".close-button");

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Comserves_GeocamFiles",
        url: base64String,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    shareDialog.classList.add("is-open");
  }
});

closeButton.addEventListener("click", (event) => {
  shareDialog.classList.remove("is-open");
});

var FoodForm = document.getElementById("SendEmailForm");

//SMTP VERSION 3

SendEmailForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var senderEmail = document.getElementById("senderEmail").value;

  console.log(senderEmail);
  Email.send({
    SecureToken: "56e05383-b7ec-4596-bf55-a0ba77bad984",
    To: senderEmail,
    From: "support@comserves.com",
    Subject: "Comserve_Geocam Site Files",
    Body:
      "Download your Comserves_Geocam Files!, Thanks For Using our Product @ Comserves Technology, INC.",
    Attachments: [
      {
        name: "Comserves_GeocamFiles.zip",
        data: base64String,
      },
    ],
  }).then(function (message) {
    alert(message);
    console.log("sending Email....");
  });
});

// shareButton.addEventListener("click", (event) => {
//   if (navigator.share) {
//     navigator
//       .share({
//         title: "Comserves_GeocamFiles",
//         url: base64String,
//       })
//       .then(() => {
//         console.log("Thanks for sharing!");
//       })
//       .catch(console.error);
//   } else {
//     shareDialog.classList.add("is-open");
//   }
// });

// closeButton.addEventListener("click", (event) => {
//   shareDialog.classList.remove("is-open");
// });

// var FoodForm = document.getElementById("SendEmailForm");

// //SMTP VERSION 3

// SendEmailForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   var senderEmail = document.getElementById("senderEmail").value;

//   console.log(senderEmail);
//   Email.send({
//     SecureToken: "56e05383-b7ec-4596-bf55-a0ba77bad984",
//     To: senderEmail,
//     From: "foyemc@gmail.com",
//     Subject: "Comserve_Geocam Site Files",
//     Body:
//       "Comserves_Geocam Files!, Thanks For Using our Product @ Comserves Technology, INC.",
//     Attachments: [
//       {
//         name: "Comserves_GeocamFiles.zip",
//         data: base64String,
//       },
//     ],
//   }).then(function (message) {
//     alert(message);
//   });
// });

//CHANGE BLOB TO DIFFERENT REFRENCE

//path or data  is required

//getLocation();

// $(function () {
//   $(".click_me").click(function (e) {
//     e.preventDefault();
//     var message_alert = $("<p>Are you confirmed?</p>").dialog({
//       buttons: {
//         Yes: function () {
//           alert("you clicked on yes");
//         },
//         No: function () {
//           alert("you clicked on no");
//         },
//         Cancel: function () {
//           alert("you clicked on cancel");
//           message_alert.dialog("close");
//         },
//       },
//     });
//   });
// });

//////////////////////////////////////
