var bienvenueText = document.getElementById("bienvenue-au");
let welcomeText = document.querySelector('#bienvenue');
let title = document.querySelector("#bienvenue > h1");

welcomeText.style.left = welcomeText.getBoundingClientRect().left + "px";
welcomeText.style.top = welcomeText.getBoundingClientRect().top + "px";

window.addEventListener("mousemove", functionTitle);
window.addEventListener("scroll", functionTitle);

function functionTitle(){
  bienvenueText.style.display = "none";
  welcomeText.style.animation = 'title 1s linear';
  title.style.fontSize = 'var(--font-size-title)';

  
  this.setTimeout(() => {
    welcomeText.style.height = "7%";
    welcomeText.style.width = '20%';
    welcomeText.style.left = '1%';
    welcomeText.style.top = '0';
    this.document.querySelector('#blur').style.filter = "none";
  }, 1000)
}

