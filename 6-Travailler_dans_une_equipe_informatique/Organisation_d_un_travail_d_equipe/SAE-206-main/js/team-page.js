let card = document.querySelectorAll('.membre');
let texte = document.querySelectorAll('.texte');
for(let i=0;i<texte.length;i++){
  card[i].addEventListener('mouseover', function (event) {
    let index = Array.from(card).indexOf(event.currentTarget);
    
    for(let j=0;j<texte.length;j++){
      if (index===0 && index===j){
       texte[index].innerHTML="<p>Mail: latifmarya@gmail.com.</p><p>She is 19 years old, and now she studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.</p>";
      }
    else if (index===1 && index===j ){
      texte[index].innerHTML="<p>Mail: n.bouamlat20@gmail.com. </p><p>She is 18 years old, and now she studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.";
    }
    else if (index===2 && index===j){
      texte[index].innerHTML="<p>Mail: indiacabo@gmail.com.</p><p>She is 19 years old, and now she studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.</p>";
    }
    else if (index===3 && index===j){
      texte[index].innerHTML="<p>Mail: medani.lina2004@gmail.com.</p><p>She is 19 years old, and now she studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.</p>";
    }
    else if (index===4 && index===j){
      texte[index].innerHTML="<p>Mail: aboubakar.baouchi@gmail.com.</p><p>He is 19 years old, and now he studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.</p>";
    }
    else if (index===5 && index===j){
      texte[index].innerHTML="<p>Mail: hibaoumsid2@gmail.com.</p><p>She is 19 years old, and now she studies BUT1 Informatique at iut of Villetaneuse at Sorbonne Paris Nord university.</p>";
    }}})

  card[i].addEventListener('mouseleave',function(){
     texte[0].textContent="Since the beginning of the project, Marya has been the project manager. She has been responsible for overseeing its progress, planning tasks and milestones, and making final decisions.In case of any difficulties or challenges, we have consistently turned to her for assistance.";
     texte[1].textContent="Nour collaborated with India to design and create our 2024 poster using Photoshop and Canva. She also handled the javascript for the home page.";
     texte[2].textContent="India collaborated with Nour to design and create our 2024 poster using Photoshop and Canva. She also handled the HTML and CSS for the museum page. ";
     texte[3].textContent="Lina created the prototype for the team page. Also she contributed to the coding of both home and team pages in JavaScript.  ";
     texte[4].textContent="Aboubakar created the prototype for the Event page and also contributed of coding the same page in javascript";
     texte[5].textContent="Hiba contributed to the development of the HTML and CSS code for the Team page and she gathered the information that was included in the website.";});}
