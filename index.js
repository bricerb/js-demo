var hidingDiv = false;
var hidingAllDiv = true;
var centered = 0;

// function to toggle div with specific id as shown or hidden
let toggleDiv = function() {
let element = document.getElementById("coolDiv");
  if (hidingDiv) {
    // console.log("Showing divs");
    element.classList.remove("hideDiv");
  } else {
    // console.log("Hiding divs");
    element.classList.add("hideDiv");
  }
  hidingDiv = !hidingDiv;
  // console.log(pageX);
}

let toggleAllDivs = function() {
  let elements = document.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i ++) {
    var element = elements[i];
    if (hidingAllDiv) {
      if (element.classList != null && element.classList.contains("hideDiv")) {
        continue;
      }
      element.classList.add("hideDiv");
    } else {
      if (element.classList != null) {
        element.classList.remove("hideDiv");
      }
    }
  }
  hidingAllDiv = !hidingAllDiv;
  hidingDiv = hidingAllDiv.value;
}

let toggleHeader = function() {
  var element = document.getElementById("header1");
  var button = document.getElementById("toggleHeader")
  if (centered == 0) {
    element.style.textAlign = "center";
    button.innerHTML = "Right Header 1";
  } else if (centered == 1) {
    element.style.textAlign = "right";
    button.innerHTML = "Left Header 1";
  } else {
    element.style.textAlign = "";
    button.innerHTML = "Center Header 1";
    centered = -1;
  }
  centered ++;
}

// Function to change color of the background on mousemove
let bgChange = function (x, y) {
  // background-image: radial-gradient(black, orange);
  // var rgb = "#" + x + y;
  var rgb = "radial-gradient(#" + x + x + ", #" + y + y + ")";
  var element = document.getElementById("notContainer");
  element.style.backgroundImage = rgb;
// console.log(rgb);
}

// calling bgcolor change function
main.onmousemove = function (move) {
  bgChange(move.x, move.y);
}

// Adds a clock to the webpage and the background for the div is set to hex color based on time (#HHMMSS)
let clock = function () {
  var time = new Date();
  var hour = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var hexed = document.getElementById("hexed");
  var eleHours = document.getElementById("hours");
  var eleMinutes = document.getElementById("minutes");
  var eleSeconds = document.getElementById("seconds");

  if (hour < 10) {
    eleHours.innerHTML = "0" + hour + ":";
  } else {
    eleHours.innerHTML = hour + ":";
  }

  if (mins < 10) {
    eleMinutes.innerHTML = "0" + mins + ":";
  } else {
    eleMinutes.innerHTML = mins + ":";
  }

  if (secs < 10) {
    eleSeconds.innerHTML = "0" + secs;
  } else {
    eleSeconds.innerHTML = secs;
  }

  hexed.style.backgroundColor = "#" + hour + mins + secs;
}

clock();
setInterval(clock, 1000);
