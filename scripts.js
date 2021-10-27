const navbar = document.getElementById("navbar");

function myFunction() {
    if (navbar.className === "top-navbar") {
      navbar.className += " responsive";

    } else {
      navbar.className = "top-navbar";

    }
}


