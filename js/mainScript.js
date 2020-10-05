// JavaScript source code
let turnedOn = false;
let volume = 100;
var paired = sessionStorage.getItem("pairing");
if (paired == "") {
    sessionStorage.setItem("pairing", false);
}

function turnOn() {
    let powerMessage = document.getElementById("onOrNot")
    var paired = sessionStorage.getItem("pairing");
    console.log(paired);
    if (paired == "true") {
        powerMessage.innerHTML = "<p>The device is now on!</p><br>";
    } else {
        powerMessage.innerHTML = "<p>Please pair a device below to turn it on.</p> <br>";
    }
    powerMessage.style.textAlign = "center";
    console.log("clicked");
}

function loaded() {
    var heartRateVid = document.getElementById("hrmvid");
    var paired = sessionStorage.getItem("pairing");
    console.log(paired);
    if (heartRateVid.style.display === "none") {
        if (paired === "true") {
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