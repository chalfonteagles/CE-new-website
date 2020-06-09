/*
  $(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
});
*/ 

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var count = 0

function myFunction() {
  count = count + 1;
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (count % 2 == 1){
    setCookie("dark", "1", 28)
  }
  else {
    setCookie("dark", "0", 28)
  }
}


function checkDark() {
  if (getCookie("dark") == "1") {
    document.getElementById("dmswitch").click();
  }
  
  
}

function sidebarToggle() {
  var element = document.getElementById("sidebar");
  var element2 = document.getElementById("sidebarCollapse");
  if (element.classList) {
    element.classList.toggle("active");
    element2.classList.toggle("active");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("active");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("active");
      element.className = classes.join(" ");
  }
}

