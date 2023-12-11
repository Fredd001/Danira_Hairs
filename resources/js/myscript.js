
const backToTop = document.getElementById("back-to-top");

function toggleMobileNavigation() {
    const mobileNavigation = document.getElementById("mobile-sidenav");
    mobileNavigation.classList.toggle('mobile-links-active');
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) backToTop.style.display = "block";
    else backToTop.style.display = "none";
}

window.onscroll = function() {scroll()};

function myFunction() {
    var x = document.getElementById("mobile-links");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}