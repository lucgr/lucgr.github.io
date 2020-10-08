// JavaScript source code
let turnedOn = false;
let volume = 100;
var paired = sessionStorage.getItem("pairing");
var power = sessionStorage.getItem("power");
if (paired == null) {
    sessionStorage.setItem("pairing", false);
    console.log("paired null at load")
}
if (power == null) {
    sessionStorage.setItem("power", turnedOn);
}

function turnOn() {
    let powerMessage = document.getElementById("onOrNot")
    paired = sessionStorage.getItem("pairing");
    turnedOn = sessionStorage.getItem("power");
    console.log("paired " + paired);
    console.log("power " + turnedOn);
    if (paired == "true" && turnedOn == "false") {
        powerMessage.innerHTML = "<p>The device is now on!</p><br>";
        turnedOn = true;
        sessionStorage.setItem("power", turnedOn);
    } else if (turnedOn == "true") {
        powerMessage.innerHTML = "<p>The device is already on!</p><br>";
    } else {
        powerMessage.innerHTML = "<p>Please pair a device below to turn it on.</p> <br>";
    }
    powerMessage.style.textAlign = "center";
    turnedOn = true;
    console.log("clicked");
}

function loaded() {
    var heartRateVid = document.getElementById("hrmvid");
    var paired = sessionStorage.getItem("pairing");
    console.log(paired);
    if (heartRateVid.style.display === "none") {
        if (paired === "true" && turnedOn == true) {
            heartRateVid.style.display = "block";
            console.log('here2');
        }
        console.log('here3');
    } else if (paired == "false") {
        heartRateVid.style.display = "none";
    }
}

function pair() {
    var paired = sessionStorage.getItem("pairing");
    let response = document.getElementById("response");
    let pairingButton = document.getElementById("pairingButton");
    console.log(typeof(paired));
    console.log(paired);
    if (paired == "false") {
        paired = true;
        sessionStorage.setItem("pairing", paired);
        paired = sessionStorage.getItem("pairing");
        response.innerHTML = "Your device is now paired";
        console.log(paired);
    } else {
        response.innerHTML = "You already have a device paired";
    }
}