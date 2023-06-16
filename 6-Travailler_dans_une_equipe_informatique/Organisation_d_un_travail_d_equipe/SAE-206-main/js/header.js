let elements = $('.elmt-header');
let path = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
let lang = $(".lang-menu");

elements.on('mouseover', ma_fonction);
elements.on('mouseleave', autrefunction);

function ma_fonction() {

  this.classList.add("elmt-header-hover");
  this.style.transitionDuration = '0.5s';
}
function autrefunction() {
  this.classList.remove("elmt-header-hover");
}


lang.on('change', function () {
  var selectedValue = this.value;
  if (path === "page-accueil.html" || path === "home-page.html") {
    if (selectedValue === "en") {
      window.location.href = "home-page.html";
    }
    if (selectedValue === "fr") {
      window.location.href = "page-accueil.html";
    }
  }
  if (path === "page-musee.html" || path === "page-musee-en.html") {
    if (selectedValue === "en") {
      window.location.href = "page-musee-en.html";
    }
    if (selectedValue === "fr") {
      window.location.href = "page-musee.html";
    }
  }
  if (path === "page-equipe.html" || path === "team-page.html") {
    if (selectedValue === "en") {
      window.location.href = "team-page.html";
    }
    if (selectedValue === "fr") {
      window.location.href = "page-equipe.html";
    }
  }
});

document.getElementById("hamburger").addEventListener('click', () => {
  document.getElementById("header-menu").style.display = "flex";
  document.getElementById("header-menu").style.flexDirection = "column";
  document.getElementById("header-menu").style.justifyContent = "space-around";

})
document.getElementById("header-menu").addEventListener('mouseleave', () => {
  document.getElementById("header-menu").style.display = "none";
})

window.addEventListener('scroll', () => {
  document.getElementById("header-menu").style.display = "none";
})