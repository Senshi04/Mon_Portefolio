let card = document.querySelectorAll('.membre');
let texte = document.querySelectorAll('.texte');
for (let i = 0; i < texte.length; i++) {
  card[i].addEventListener('mouseover', function (event) {
    let index = Array.from(card).indexOf(event.currentTarget);

    for (let j = 0; j < texte.length; j++) {
      if (index === 0 && index === j) {
        texte[index].innerHTML = "<p>Mail:latifmarya@gmail.com</p> <p>Agée de 19ans, elle est actuellement étudiante en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
      else if (index === 1 && index === j) {
        texte[index].innerHTML = "<p>Mail: n.bouamlat20@gmail.com.</p> <p>Agée de 18ans, elle est actuellement étudiante en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
      else if (index === 2 && index === j) {
        texte[index].innerHTML = "<p>Mail: indiacabo@gmail.com.</p><p>Agée de 19ans, elle est actuellement étudiante en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
      else if (index === 3 && index === j) {
        texte[index].innerHTML = "<p>Mail: medani.lina2004@gmail.com.</p><p>Agée de 19ans, elle est actuellement étudiante en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
      else if (index === 4 && index === j) {
        texte[index].innerHTML = "<p>Mail: aboubakar.baouchi@gmail.com.</p><p>Agé de 19ans, il est actuellement étudiant en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
      else if (index === 5 && index === j) {
        texte[index].innerHTML = "<p>Mail: hibaoumsid2@gmail.com.</p><p>Agée de 19ans, elle est actuellement étudiante en BUT1 Informatique à l'IUT de Villetaneuse université Sorbonne Paris Nord.</p>";
      }
    }
  })

  card[i].addEventListener('mouseleave', function () {
    texte[0].textContent = "Depuis le début du projet Marya est responsable sur son avancement, elle a planifié les taches et les étapes. On s'est toujours dirigé vers elle pour prendre les décisions finals ou bien pour proposer des solutions en cas de blocage.";
    texte[1].textContent = "Nour a fait avec la collaboration de India le design et la création de notre affiche 2024 à l'aide de Photoshop et Canva. Elle a également fait le javascript la page d'accueil.";
    texte[2].textContent = "India a fait avec la collaboration de Nour le design et la création de notre affiche 2024 à l'aide de Photoshop et Canva. Elle a également fait le HTML et CSS de la page musée.";
    texte[3].textContent = "Lina a réalisé le prototype de la page d’équipe, elle a rédigé les différentes missions de chaque membre de l’équipe. Elle a fait le prototype de la page de notre équipe et elle a participé au codage du site en javascript.";
    texte[4].textContent = "Aboubakar est responsable sur le prototype de la page d’évènement dont le design et les informations présentées dans la page. Ainsi, il a participé à la réalisation du code javascript de ce site.";
    texte[5].textContent = "Hiba a participé à la prise des photos mises sur le site et elle recherché les informations utiles pour le site. Ainsi, elle a aidé dans la réalisation du code html du site.";
  })
}
