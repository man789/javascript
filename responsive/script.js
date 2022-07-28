var burger = document.querySelector('.menu');
var lien = document.querySelector('.lien');
var lienbis = document.querySelector('.lien-bis')

burger.addEventListener('click', function (){
    lien.classList.toggle("active")
    lienbis.classList.toggle("active-bis")
});

var onglet = document.querySelectorAll('.onglet');
var container = document.querySelectorAll('.container');


for (let i = 0; i < onglet.length; i++) {

    onglet[i].addEventListener('click', function (){

        for (let e = 0; e < onglet.length; e++) {
            container[e].classList.remove('visible');
            onglet[e].classList.remove('active-white');
        }

        container[i].classList.toggle('visible');
        onglet[i].classList.toggle('active-white');
    });
}

let tab = ['Eloïse','Manu','Ruslan','Leslie'];
let bouton = document.querySelector('.bouton');
let prenom = document.querySelector('.prenom');
let elo = 0

setInterval(function(){
    prenom.innerHTML = tab[elo]
    elo++

    if (elo > tab.length - 1){
        elo = 0
    }
}, 
    1500) 

bouton.addEventListener('click', function(){
    prenom.innerHTML = tab[elo]
    elo++

    if (elo > tab.length - 1){
        elo = 0
    }
})


let montableau = ['pomme', 'banane', 'pomme de terre', 'fraise'];
let maliste = document.querySelector('.maliste');

for (let a = 0; a < montableau.length; a++) {
    
    maliste.innerHTML += `<li> ${montableau[a]} </li>`; 
    
} 