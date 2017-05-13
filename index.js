var hidingDiv = false;
var hidingAllDiv = true;

// function to toggle div with specific id as shown or hidden
let toggleDiv = function() {
let element = document.getElementById('coolDiv');
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
  let elements = document.getElementsByTagName('div');
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

// Function to change color of the background on mousemove
let bgChange = function (x, y) {
  // background-image: radial-gradient(black, orange);
  // var rgb = "#" + x + y;
  var rgb = "radial-gradient(#" + x + x + ", #" + y + y + ")";
  var element = document.getElementById('notContainer');
  element.style.backgroundImage = rgb;
// console.log(rgb);
}

main.onmousemove = function (move) {
  bgChange(move.x, move.y);
}

let clock = function () {
  var time = new Date();
  var hour = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var main = document.getElementById('main');
  var hexed = document.getElementById('hexed');

  func()
}

setInterval(clock, 1000);
