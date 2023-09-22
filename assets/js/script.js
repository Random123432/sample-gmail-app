function openCity(evt, cityName) {
  // Declare all variables
  var i, div11, btn;

  // Get all elements with class="tabcontent" and hide them
  div11 = document.getElementsByClassName("div11");
  for (i = 0; i < div11.length; i++) {
    div11[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  btn = document.getElementsByClassName("btn");
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("Primary").click()
  
}

function myFunction() {
  var x = document.getElementById("message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("message").style.zIndex = "10";

}

function myFunction2() {
  var x = document.getElementById("black");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("black").style.zIndex = "10";
  var x = document.getElementById("lab2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("lab2").style.zIndex = "10";

}

function myFunction3() {
  var x = document.getElementById("mess");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("mess").style.zIndex = "10";

}
function myFunction4() {
  var x = document.getElementById("mass");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("mass").style.zIndex = "10";

}
function myFunction5() {
  var x = document.getElementById("miss");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("miss").style.zIndex = "10";

}

function myFunction6() {
  var x = document.getElementById("charm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("charm").style.zIndex = "10";
var x = document.getElementById("div4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("div4").style.zIndex = "10";

}

function myFunction7() {
  var x = document.getElementById("char");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("char").style.zIndex = "10";

}

function myFunction8() {
  var x = document.getElementById("chair");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("chair").style.zIndex = "10";

}

function myFunction9() {
  var x = document.getElementById("chant");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("chant").style.zIndex = "10";

}

function myFunction10() {
  var x = document.getElementById("sharp");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("sharp").style.zIndex = "10";

}

function myFunction11() {
  var x = document.getElementById("bob");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("bob").style.zIndex = "10";

}

function myFunction12() {
  var x = document.getElementById("white");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   document.getElementById("white").style.zIndex = "10";

}

function myFunction100() {
  document.getElementById("email").style.width = "3100px";
}