// JavaScript source code
let turnedOn = false;
let volume = 100;
var paired = sessionStorage.getItem("pairing");
var power = sessionStorage.getItem("power");
var soundPreview = false;
var chosenSound;
var sounds = ['classical music', 'breathing exercises', 'nature sounds', 'lo-fi music'];

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
    var paired = sessionStorage.getItem("pairing");
    console.log("Paired at load: " + paired);
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

function defaultSound() {
    var defaultS = document.getElementById("defaultS");
    if (chosenSound == undefined) {
        defaultS.innerHTML = "Please choose a sound and try again.";
    } else {
        defaultS.innerHTML = "The default sound is now changed to " + sounds[chosenSound];
    }
    console.log("Default sound changed to: " + chosenSound);
}

function mute() {
    var mutedEl = document.getElementById("muted");
    var sButton = document.getElementById("sButton");
    if (sButton.innerHTML == "Mute device") {
        mutedEl.innerHTML = "Your device is now muted"
        sButton.innerHTML = "Unmute device";
        console.log("Device now being muted");
    } else {
        mutedEl.innerHTML = "Your device is now unmuted"
        sButton.innerHTML = "Mute device";
    }
}

function playClassical() {
    if (soundPreview == false) {
        var sound0 = new Audio("/js/media/classical.mp3");
        console.log('Classical music clicked');
        sound0.play()
        soundPreview = true;
        var button = document.getElementById('classical');
        button.style.backgroundColor = '#c2c1be';
        chosenSound = 0;
        var selection = document.getElementById('selection');
        selection.innerHTML = 'You have currently chosen ' + sounds[chosenSound];
    }
    setTimeout(function() {
        sound0.pause();
        sound0.currentTime = 0;
        soundPreview = false;
        button.style.backgroundColor = 'white';
        button.onmouseover = function() { button.style.backgroundColor = "" }
    }, 15000);
}

function playBreathing() {
    if (soundPreview == false) {
        var sound1 = new Audio("/js/media/breathing_exercise.mp3");
        console.log('Breathing exercise clicked');
        sound1.play()
        soundPreview = true;
        var button = document.getElementById('breathing');
        button.style.backgroundColor = '#c2c1be';
        chosenSound = 1;
        var selection = document.getElementById('selection');
        selection.innerHTML = 'You have currently chosen ' + sounds[chosenSound];
    }
    setTimeout(function() {
        sound1.pause();
        sound1.currentTime = 0;
        soundPreview = false;
        button.style.backgroundColor = 'white';
        button.onmouseover = function() { button.style.backgroundColor = "" }
    }, 15000);
}

function playNature() {
    console.log(soundPreview)
    if (soundPreview == false) {
        var sound2 = new Audio("/js/media/naturesound.mp3");
        console.log('Nature sound clicked');
        sound2.play()
        soundPreview = true;
        var button = document.getElementById('nature');
        button.style.backgroundColor = '#c2c1be';
        chosenSound = 2;
        var selection = document.getElementById('selection');
        selection.innerHTML = 'You have currently chosen ' + sounds[chosenSound];
    }
    setTimeout(function() {
        sound2.pause();
        sound2.currentTime = 0;
        soundPreview = false;
        button.style.backgroundColor = 'white';
        button.onmouseover = function() { button.style.backgroundColor = "" }
    }, 15000);
}

function playLofi() {
    if (soundPreview == false) {
        var sound3 = new Audio("/js/media/lofi_music.mp3");
        console.log('Lo-fi music clicked');
        sound3.play()
        soundPreview = true;
        var button = document.getElementById('lofi');
        button.style.backgroundColor = '#c2c1be';
        chosenSound = 3;
        var selection = document.getElementById('selection');
        selection.innerHTML = 'You have currently chosen ' + sounds[chosenSound];
    }
    setTimeout(function() {
        sound3.pause();
        sound3.currentTime = 0;
        soundPreview = false;
        button.style.backgroundColor = 'white';
        button.onmouseover = function() { button.style.backgroundColor = "" }
    }, 15000);
}