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
    exactLocation +
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
  x.innerHTML =
    "Location: " +
    exactLocation +
    "<br>File Name: " +
    FIA +
    exactLocation +
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
      "<h5>Note : Supply Site Information in the form Below and <br> Click Download</h5>" +
      '<a  download="' +
      FileName +
      '" href="' +
      data_uri +
      '" title="ImageName"><button class="button">Download  ⬇</button></a>';

    console.log(data_uri);

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
      var dataURL = watermarkedDataURL(canvas, dateLocation);

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

let city;
let country;
let exactLocation;

var reverseGeocoder = new BDCReverseGeocode();

/* Get the current user's location information, based on the coordinates provided by their browser */
/* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
reverseGeocoder.getClientLocation(function (result) {
  console.log(result);
  console.log(result.locality);
  city = result.locality;
  country = result.countryName;
  exactLocation = city + "," + country;

  console.log(exactLocation);
});

/* You can also set the locality language as needed */
reverseGeocoder.localityLanguage = "es";

/* Request the current user's coordinates (requires HTTPS and acceptance of prompt) */
reverseGeocoder.getClientCoordinates(function (result) {
  console.log(result.locality);
});

let constraintObj = {
  audio: false,
  video: {
    facingMode: "user",
    width: { min: 640, ideal: 1280, max: 1920 },
    height: { min: 480, ideal: 720, max: 1080 },
  },
};
// width: 1280, height: 720  -- preference only
// facingMode: {exact: "user"}
// facingMode: "environment"

//handle older browsers that might implement getUserMedia in some way
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
  navigator.mediaDevices.getUserMedia = function (constraintObj) {
    let getUserMedia =
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser")
      );
    }
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraintObj, resolve, reject);
    });
  };
} else {
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(device.kind.toUpperCase(), device.label);
        //, device.deviceId
      });
    })
    .catch((err) => {
      console.log(err.name, err.message);
    });
}

navigator.mediaDevices
  .getUserMedia(constraintObj)
  .then(function (mediaStreamObj) {
    //connect the media stream to the first video element
    let video = document.querySelector("video");
    if ("srcObject" in video) {
      video.srcObject = mediaStreamObj;
    } else {
      //old version
      video.src = window.URL.createObjectURL(mediaStreamObj);
    }

    video.onloadedmetadata = function (ev) {
      //show in the video element what is being captured by the webcam
      video.play();
    };

    //add listeners for saving video/audio
    let start = document.getElementById("btnStart");
    let stop = document.getElementById("btnStop");
    let vidSave = document.getElementById("vid2");
    let mediaRecorder = new MediaRecorder(mediaStreamObj);
    let chunks = [];

    start.addEventListener("click", (ev) => {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      alert("Started Recording");
    });
    stop.addEventListener("click", (ev) => {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
    });
    mediaRecorder.ondataavailable = function (ev) {
      chunks.push(ev.data);
    };
    mediaRecorder.onstop = (ev) => {
      let blob = new Blob(chunks, { type: "video/mp4;" });
      chunks = [];
      let videoURL = window.URL.createObjectURL(blob);
      vidSave.src = videoURL;

      console.log(vidSave);

      document.getElementById("downloadVid").innerHTML =
        '<a  download="' +
        FileName +
        '" href="' +
        videoURL +
        '" title="video"><button class="button">Download Video ⬇</button></a>';
    };
  })
  .catch(function (err) {
    console.log(err.name, err.message);
  });
