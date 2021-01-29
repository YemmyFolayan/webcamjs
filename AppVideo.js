console.log("videkkkkoo");

let blobVideo;

let videoName;
let locationTypeSecond;

const VideoRecord = () => {
  let constraintObj = {
    audio: false,
    video: {
      facingMode: "environment",
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
        console.log(blobVideo);
        blobVideo = new Blob(chunks, { type: "video/mp4;" });
        chunks = [];
        let videoURL = window.URL.createObjectURL(blobVideo);

        vidSave.src = videoURL;

        console.log(vidSave);

        /* document.getElementById("downloadVid").innerHTML =
          '<a  download="video" href="' +
          videoURL +
          '" title="video"><button class="button">Download Video ⬇</button></a>';
      */
      };
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });
};

VideoRecord();

locationTypeSecond = "Video_Yard_overview";

console.log("videooooo");

var counterSecond = 46;
$("body").on("click", ".next", function () {
  $(".contentSecond").hide();

  counterSecond++;
  $("#contentSecond-" + counterSecond + "").show();

  videoName = locationTypeSecond + ".mp4";

  ////////////////
  if (counterSecond > 46) {
    $(".backSecond").show();
    var idSecond = counterSecond;
    if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-46").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_Yard_overview";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Yard_overview").value;

      console.log(Description);
      //////////////////SHOWHIDE
      //$("#content-4").show();

      //$("#content-3").hide();
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-47").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_Outside_each_building";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Outside_each_building")
        .value;

      console.log(Description);
      console.log(videoName);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-48").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_Inside_each_building";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Inside_each_building").value;

      console.log(Description);
      console.log(videoName);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-49").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_Existing_network_cabinets";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Existing_network_cabinets")
        .value;

      console.log(Description);
      console.log(videoName);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-50").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_Proposed_solution_inside";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_Proposed_solution_inside")
        .value;

      console.log(Description);
      console.log(videoName);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-51").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_direction_to_services";

      console.log(locationTypeSecond);
      Description = document.getElementById("Video_direction_to_services")
        .value;

      console.log(Description);
      console.log(videoName);
    } else if (
      "contentSecond-" + idSecond ===
      document.getElementById("contentSecond-52").id
    ) {
      locationType = "Video with Descriptive Audio";
      console.log(locationType);
      locationTypeSecond = "Video_safety_issues_dangers_concerns";

      console.log(locationTypeSecond);
      Description = document.getElementById(
        "Video_safety_issues_dangers_concerns"
      ).value;

      console.log(Description);
      console.log(videoName);
      //Shift contentSecond-46 TO contentSecond-52
    } else {
      console.log("not working");

      alert("Done !, Proceed to Download Files");
      //window.location.assign("index.html");
    }
  }
  if (counterSecond > 52) {
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
  if (counterSecond < 52) {
    $(".backSecond").hide();
  }
});

const newLocal = ".edit-previousSecond";
// if content-1 =  ("#content-" + id)
//then  let facilityType = "Meter";

$("body").on("click", newLocal, function () {});

console.log(videoName);

const DownloadVideoZip = () => {
  var zip = new JSZip();

  var video = zip.folder("Video with Descriptive Audio");
  video.file("Video_Yard_overview.mp4", blobVideo, { base64: false });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  video.file(videoName, blobVideo, {
    base64: false,
  });
  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Comserve Video.zip");
  });
};
