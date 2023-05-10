window.onload = () => {
  let theme = localStorage.getItem("theme");
  if (theme && theme === "light-mode") {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openNav() {
  var root = document.querySelector(':root');
  var x = document.getElementById("topnav");
  if (!x.classList.contains("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}