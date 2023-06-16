let retour=document.getElementById('retour');
let img = document.querySelectorAll('.card-img');
let card = document.querySelectorAll('.card');
let index;
let description = document.getElementById('description');
let openCard = document.getElementById('open-card');
let sourceIMG = ["../assets/page-musee/naissanceOpera2.png","../assets/page-musee/epoqueLumiere2.png","../assets/page-musee/romantique2.png","../assets/page-musee/electroGuitare2.png","../assets/page-musee/musqiueMonde2.png","../assets/page-musee/expo2024-2.png"];
let image = document.getElementById('image');
let titre = document.getElementById('titre');
let titre_stock_fr = ["NAISSANCE DE L’OPÉRA ","LA MUSIQUE DES LUMIÈRES","L’EUROPE ROMANTIQUE","L’ACCÉLÉRATION DE L’HISTOIRE…","LES MUSIQUES DU MONDE","ATELIER 2024"]
let texte_fr = ["<p>Le parcours débute en Italie avec la maquette de la salle du palais de Mantoue où fut représenté en 1607 L’Orfeo de Claudio Monteverdi, considéré comme le premier opéra de l’histoire. Une collection unique d’instruments témoigne des pratiques musicales de l’époque : claviers, luths, cornets à bouquin, cistres. </p> <p> Au château de Versailles, Louis XIV favorise l’épanouissement de la musique baroque. La tragédie lyrique, les défilés militaires et le rituel de la chasse coexistent avec des pratiques musicales plus intimes, illustrées par une importante collection de guitares baroques, de violes de gambe et de clavecins flamands et français.</p>",
"<p>Au XVIIIe siècle, en France, la musique quitte peu à peu la cour. L’opéra, principale institution musicale, devient le siège de querelles esthétiques tandis que les salons des aristocrates et bourgeois cultivés favorisent l’essor de la musique instrumentale. On y joue du clavecin, de la harpe… </p><p> L’époque est également marquée par une vision idéalisée de la nature, qui fait naître au sein des sociétés cultivées la vogue des musiques pastorales, recourant aux musettes et aux vielles à roue.</p><p> L’évolution du goût musical vers une plus grande expressivité favorise l’apparition d’un nouvel instrument, le piano-forte. Les concerts publics se développent, dont ceux du Concert Spirituel, et accueillent des musiciens étrangers renommés comme Joseph Haydn et Wolfgang Amadeus Mozart.</p>",
"<p>Le langage musical du XIXe siècle s’imprègne des idées portées par le courant artistique romantique. L’expression des sentiments, l’affirmation de soi et l’attrait pour le fantastique le caractérisent. Le jeu du soliste, servi notamment par les violons de Stradivari dont le Musée possède plusieurs exemplaires, et l’essor de l’orchestre symphonique constituent les deux pôles de la musique instrumentale. </p><p> Les compositeurs et pianistes virtuoses Franz Liszt et Frédéric Chopin, liés aux facteurs de pianos Érard et Pleyel, incarnent la figure du musicien romantique. Motivés par les besoins croissants en termes de timbres et de puissance des orchestres, notamment ceux d’Hector Berlioz et de Richard Wagner, de nouveaux instruments voient le jour : l’octobasse, le saxophone, le tuba wagnérien… </p>",
"<p>L’œuvre Ionisation (1931) d’Edgard Varèse illustre combien la percussion ouvre un champ sonore inédit au XXe siècle. L’apparition de l’électricité révolutionne également la musique avec l’invention de nouveaux instruments, notamment par Léon Theremin, Maurice Martenot ou Laurens Hammond. </p> <p> Le bouleversement technologique des outils analogiques puis numériques est représenté au Musée par le synthétiseur modulaire de Frank Zappa, la machine Upic de Iannis Xenakis ou l’ordinateur 4X développé par l’Ircam. Les musiques populaires ont pleinement profité de ces révolutions techniques. Une galerie consacrée à la guitare électrique présente des modèles mythiques de guitares et basses de Fender, Gibson ou Rickenbecker. </p>",
"<p>Comme en Occident, la diversité des traditions musicales qui se sont développées à travers le monde résulte d’une histoire profonde, faite de rencontres, de convergences et d’emprunts. Transmises le plus souvent oralement, ces traditions préservent un héritage musical qui joue un rôle majeur dans l’organisation sociale et religieuse de leurs communautés. </p> <p> Organisée en cinq aires distinctes (monde arabe, Asie, Afrique, Océanie et cultures amérindiennes), la présentation des instruments est enrichie d’extraits audiovisuels permettant au visiteur d’appréhender les spécificités culturelles de certaines traditions dans leur contexte ou de découvrir de très rares instruments et des répertoires méconnus. </p>",
"<p>Rejoignez-nous pour une série d'ateliers amusants et éducatifs qui vous permettront de découvrir et d'apprendre à jouer sur des instruments de différentes époques. </p> <p> Nos instructeurs expérimentés vous guideront à travers chaque période, en vous apprenant les techniques et les styles uniques qui ont défini chaque époque.</p>"];
let titre_stock_en = ["THE BIRTH OF OPERA","THE MUSIC OF THE ENLIGHTENMENT","ROMANTIC EUROPE","THE ACCELERATION OF HISTORY","MUSIC FROM AROUND THE WORLD","WORKSHOP 2024"];
let texte_en = ["<p> While the introductory section illustrates that music is present in all the world’s cultures, the visit then takes you on a chronological voyage through occidental music, beginning with the Baroque period. </p> <p> Italy first, with the model of the music room in the Palace of Mantua where, in 1607, Monteverdi’s Orpheus, considered the first opera in history, was presented, as well as a collection of instruments, witnesses to the musical practices of the time: keyboards, cornets, citterns and lutes. </p> <p> Under Louis XIV, baroque music flourished at the Palace of Versailles—from lyrical tragedy, military parades and hunting rites to more intimate musical practices—illustrated by a rich collection of baroque guitars, viola a gamba and Flemish and French harpsichords. </p>",
"<p>In France, music began leaving the court progressively. The opera, the principal musical institution became the site of aesthetic quarrels, while the salons of the aristocrats and the cultivated bourgeois citizens facilitated the rise of instrumental music. There one played the clavichord or the harp for example. </p> <p> But the period was equally marked by an idealised vision of nature, giving birth to a vogue for pastoral music, turning to accordions and hurdy-gurdies. </p> <p> The evolution of musical taste towards greater expression, opened the way to the appearance of a new instrument, the piano, while the practice of giving public concerts spread, including spiritual concerts, which welcomed renowned musicians from abroad, such as Joseph Haydn and Wolfgang Amadeus Mozart.</p>",
"<p>The musical language of the 19th century was marked by the ideals of Romanticism, the artistic movement characterised by the expression of sentiment, celebration of the individual and fascination with the fantastical. . The role of the soloist, notably through the violins of Stradivarius, and the emergence of the symphonic orchestra, constitute the two principal developments of music in this period. </p> <p> Liszt and Chopin, of whose the museum has several Erard and Pleyel pianos, personified the figure of the romantic musician, virtuoso and passionate. Driven by the growing needs for orchestral timbre and power, notably those of Berlioz and Wagner, new instruments came into the world, the octobass, the saxophone and the Wagnerian horn among others.</p>",
"<p>…Edgard Varese Ionisation (1931) illustrates how much percussion opened an unprecedented musical field in the 20th century. But the appearance of electricity also revolutionised music with the invention of new instruments, notably by Theremin, Martenot or Hammond. </p> <p> The technological explosion of analogue and then digital tools is represented in the museum by Frank Zappa’s modular synthesiser, Xenakis’ Upic machine or the 4X computer developed by Ircam. Popular music took full advantage of these technological revolutions. The electric guitar gallery contains legendary models of guitars and bass guitars by Fender, Gibson and Rickenbecker.",
"<p>As in the occidental world, the diversity of musical traditions which have developed around the world is the result of long and complex history, built on exchange, convergence and varying traces. Most often transmitted orally, these traditions preserve a musical heritage, which plays a major social and religious role in their communities.</p> <p> Seperated into five distinct areas (the Arab world, Asia, Africa, Oceania and Amerindian cultures), the collection of instruments is enhanced with audio-visual extracts, allowing the visitor to appreciate the cultural specificities of certain traditions in their context, or to discover extremely rare instruments or repertoires currently threatened with extinction.</p>",
"<p>Join us for a series of fun and educational workshops that will allow you to discover and learn to play instruments from different eras. Our experienced instructors will guide you through each period, teaching you the unique techniques and styles that defined each era.</p>"];

for (let i = 0;i<card.length;i++) {
        card[i].addEventListener('click',(e)=>{
            index = Array.from(card).indexOf(e.currentTarget);
            console.log(index);
            for (let j = 0;j<card.length;j++) {
                card[j].className='cible';
            }
            retour.style.display="block";
            showOpenCard();
            if(path === 'page-musee.html'){
              description.innerHTML=texte_fr[index];
              titre.innerHTML=titre_stock_fr[index];
            }
            if(path === 'page-musee-en.html'){
              description.innerHTML=texte_en[index];
              titre.innerHTML=titre_stock_en[index];
            }
            image.src=sourceIMG[index];
    })
}

retour.addEventListener('click',()=>{
    let cible=document.querySelectorAll('.cible');
    for (const k of cible) {
        k.className='card';
    }
    retour.style.display="none";
    openCard.style.display='none';
    openCard.style.transform = 'scale(0.3)';
})

let positionList = ["25% 25%","50% 25%","75% 25%","25% 75%","50% 75%","75% 75%"];
openCard.style.transition = `transform 0.5s ease-in-out`;
openCard.style.opacity = 0;  
openCard.style.transform = 'scale(0.3)';

function showOpenCard() {
  openCard.style.transformOrigin = positionList[index];
  openCard.style.display = 'flex'; 
  setTimeout(() => {
    openCard.style.opacity = 1; 
    openCard.style.transform = 'scale(1)';
  }, 50);
}


