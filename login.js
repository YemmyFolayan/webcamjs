//session management implemented and check out
//import { GetUserCart } from "./cart.js"

console.log(navigator.onLine);
let Network = navigator.onLine;

const CheckNetwork = () => {
  if (Network === true) {
    console.log("you're online.");
  } else {
    console.log("you're offline, Re-connect.");

    alert("you're offline, Re-connect.");
  }
};
CheckNetwork();

var Form = document.getElementById("form");
const userNameDOM = document.getElementById("user");

///////////////////
Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  //https://cors-anywhere.herokuapp.com/
  fetch("http://intriobasket.pexceptos.com/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;

      //this is user id;

      //AT this block, i want to compare the id with the one in user also use the id for cart logic

      if (msg == "Log in Successful") {
        const id = data.payload.id;

        const token = data.payload.token;

        //SAVE this ID to session storage to re-use it in cart
        localStorage.setItem("id", id);

        localStorage.setItem("token", token);

        const name = data.payload.fullname;
        console.log("this is : ", name, id);

        localStorage.setItem("name", name);
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";

        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`Log in Successfully !, welcome to GEO-CAM`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        setTimeout(function () {
          window.location.assign("/Homepage.html");
        }, 2200);

        //For authentication
        localStorage.setItem("UserLogin", true);
        console.log("logged in");
      } else if (msg == "Incorrect Email or Password") {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`Incorrect Email or Password!`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("Incorrect Email or Password");
      } else if (msg == "Email not found") {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(document.createTextNode(`Email not found!`));
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("Email not found");
      } else {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`An error occurred, Try Again!`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("An error occurred, Try Again!");
      }
    });
});

console.log("hi");

/**
 * {
    "status": "OK",
    "message": "Log in Successful",
    "payload": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWN2b25kZWU1QGdtYWlsLmNvbSIsImlhdCI6MTYwMTk3NzI5OCwiZXhwIjoxNjAzMjczMjk4fQ.pI9QZNZ2Ki_61Ljnn32Ri9zUeUVYzt4Akfd7c0neFQo",
        "email": "ericvondee5@gmail.com",
        "id": "5f4d0fd68cc9aa11e6151b88",
        "fullname": "Eric",
        "gender": "Male"
    }
}
 */

//form validation login

// Input fields
const password = document.getElementById("password");
const email = document.getElementById("email");
// Form
const form = document.getElementById("form");
// Validation colors
const green = "rgb(136, 199, 74)";
const red = "#F44336";

// Handle form
form.addEventListener("submit", function (event) {
  // Prevent default behaviour
  event.preventDefault();
});

function validatePassword() {
  // Empty check
  if (checkIfEmpty(password)) return;
  // Must of in certain length

  // check password against our character set
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  //   if (!containsCharacters(password, 4)) return;
  return true;
}

function validateEmail() {
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email, 5)) return;
  return true;
}
// Utility functions
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    // set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    // set field valid
    setValid(field);
    return false;
  }
}
function isEmpty(value) {
  if (value === "") return true;
  return false;
}
function setInvalid(field, message) {
  field.className = "invalid";
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}
function setValid(field) {
  field.className = "valid";
  field.nextElementSibling.innerHTML = "";
  //field.nextElementSibling.style.color = green;
}
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(
      field,
      `${field.name} must be at least ${minLength} characters long`
    );
    return false;
  } else {
    setInvalid(
      field,
      `${field.name} must be shorter than ${maxLength} characters`
    );
    return false;
  }
}
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      // letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, "Must contain at least one letter");
    case 2:
      // letter and numbers
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        "Must contain at least one letter and one number"
      );
    case 3:
      // uppercase, lowercase and number
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        "Must contain at least one uppercase, one lowercase letter and one number"
      );
    case 4:
      // uppercase, lowercase, number and special char
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(
        regEx,
        field,
        "Must contain at least one uppercase, one lowercase letter, one number and one special character"
      );
    case 5:
      // Email pattern
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, field, "Must be a valid email address");
    default:
      return false;
  }
}
function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}
