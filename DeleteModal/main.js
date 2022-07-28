
let lesson = ["HTML", "CSS", "Javascript"];
let spanLesson = document.getElementById("lesson");
let currentWord = 1;

// window.setInterval(function(){
//     spanLesson.classList.add('hide');
//     setTimeout(function () {
//         spanLesson.innerHTML = lesson[currentWord];
//         spanLesson.classList.remove('hide'); 
//         currentWord++; //currenWord += 1 ou currrentWord = currentWord +1     
//         if (currentWord >= lesson.length) {
//             currentWord = 0;
//         }
//     }, 1000);
//  }, 3000);

 //Version sans animation et donc sans Timeout
 setInterval(function(){
      spanLesson.innerHTML = lesson[currentWord];
      currentWord++; //currenWord += 1 ou currrentWord = currentWord +1     
      if (currentWord >= lesson.length) {
          currentWord = 0;
      }
  
}, 3000)

///////////////BURGER MENU////////////////////

let navbar = document.getElementById("myTopnav");
let burger = document.getElementById("burger");

function toggleMenu() {
  if (navbar.className === "topnav") {
    navbar.classList.add("responsive");
    burger.innerHTML = "&times;";
  } else {
    navbar.classList.remove("responsive")
    navbar.classList.add("topnav");
    burger.innerHTML = "&#9776;";

  }
} 

/////////////////TAB//////////////////////////
function openLesson(evt, lessonName) {
  // Declare all variables
  let i, lessons, tablinks;

  //On passe tous les éléments en hidden
  lessons = document.getElementsByClassName("lesson");
  for (i = 0; i < lessons.length; i++) {
    lessons[i].classList.remove("showed");
    lessons[i].classList.add("hidden");    
  }

  //On enlève le active sur tous 
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  //On met le contenu du lien sur lequel on vient de cliquer en display block 
  //et le len en active
  document.getElementById(lessonName).classList.remove("hidden");
  document.getElementById(lessonName).classList.add("showed");
  evt.currentTarget.classList.add("active");
} 

/////////////////////Liste balises/////////////////////
let balises = ["titres h", "liste ul", "element de liste li", "paragraphe p", "liens a" ];
let liste = document.getElementById("balises");
let boxDelete = document.querySelector('.delet');
let cancel = document.querySelector('.cancel');
let ok = document.querySelector('.ok')

for(let i = 0; i < balises.length; i++)
{
  let item = document.createElement("li");
  let txt = document.createElement("div");
  let btn = document.createElement("div");

  item.setAttribute("id", "item"+i);
  txt.textContent = balises[i];
  btn.innerHTML = `<button onclick="affichebox(${i})">Supprimer</button>`

  item.appendChild(txt);
  item.appendChild(btn);
  liste.appendChild(item);
}

///////////// Voulez vous vraiment supprimer ? ////////////

let elemToDelete;

function affichebox(i) {
  boxDelete.classList.toggle('visible'); 
  elemToDelete = document.getElementById("item"+i);
}

function annuler() {
  boxDelete.classList.remove('visible');
}

function confirmer() {
  boxDelete.classList.remove('visible'); 
  liste.removeChild(elemToDelete);
}

////// afficher l'image en + grand //////

let image = document.querySelector('.bigimage');
let fondgris = document.querySelector('.fondgris');
let fleche = document.querySelectorAll('.fleche')

function afficheimage() {
    image.classList.toggle('visible');
    fondgris.classList.toggle('visible');
    fleche[0].classList.toggle('visible');
    fleche[1].classList.toggle('visible');
}

let imagetableau = document.querySelectorAll('.container'); 
let index = 0;

function previmage() {
  index--
  if (index < 0) {
    index = imagetableau.length -1
  }

  imagetableau[index].classList.add('visible'); 

  for (let i = 0; i < imagetableau.length; i++) {
    if (index != i) {
      imagetableau[i].classList.remove('visible'); 
    }
  }
}

function nextimage() {
  index++
  if (index > imagetableau.length -1) {
    index = 0
  }

  imagetableau[index].classList.add('visible'); 

  for (let i = 0; i < imagetableau.length; i++) {
    if (index != i) {
      imagetableau[i].classList.remove('visible'); 
    }
  }
}