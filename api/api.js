// Requête API
let liste = document.querySelector('#liste');
let pokemon = []
let offset = 0
let descriptif = document.querySelectorAll('.text')
let image = document.querySelectorAll('.description')
let title = document.querySelector('.title')

// Appel de la fonction pour afficher la liste
afficherPokemon()

//Fonction appelée au click sur le bouton "Deviner âge"
function afficherPokemon() {
    //On construit l'objet de type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //On lie une fonction à son évènement onreadystatechange
    //Cet event est déclenché chaque fois que le statut de la requête change
    xhr.onreadystatechange = function () {
      //On vérifie que le readyState est bien 4 : La réponse est reçue en entier
      //On vérigie que le status est bien 200 : La requête est effectuée avec succès
        if (xhr.readyState == 4 && xhr.status == 200) {
            // if(this.readyState == 4 && this.status == 200)
            // console.log(xhr.readyState + " | " + xhr.status);
            // console.log(xhr.responseText);
            //reponseText est un attribut de notre objet xhr et contient la réponse sous forme de chaine de charactères
            //Il faut donc la parse en JSON pour obtenir un objet, qu'on pourra facilement manipuler
            let objet = JSON.parse(xhr.responseText);
            pokemon = objet.results
            // console.log(pokemon);
            liste.innerHTML = ''
            for (let i in pokemon) {
                let element = document.createElement('li')
                element.textContent = pokemon[i].name
                liste.appendChild(element)
                // console.log(pokemon[i].url);
                element.onclick = function() {
                    afficherCaract(pokemon[i].url)
                }
            }
        }
    };
    //Méthode open(method : string, url : string, async : boolean) pour setup la requête
    //method = la méthode d'accès à l'API, get pour récupérer des valeurs, post pour poster
    //url = l'url de l'API
    //async = si la requête se fait de manière synchrone ou asynchrone
    //synchrone : On ne peut plus faire d'autres actions tant que la requête n'a pas aboutie
    //asynchrone : On peut continuer à faire d'autres actions (sur le site, d'autres requêtes, etc...) pendant que la requête est en traitement
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`, true); 
    //Méthode qui envoie la requête
    xhr.send();
}

function suivant(){
    offset+=10
    afficherPokemon()
}

function precedent(){
    if (offset >= 10) {
    offset-=10
    afficherPokemon()
}

}

function afficherCaract(url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let objet = JSON.parse(xhr.responseText);
            // console.log(objet)
            title.textContent = objet.name
            descriptif[0].textContent = `Poids : ${objet.weight/10} kg`
            descriptif[1].textContent = `Taille : ${objet.height/10} m`
            image[0].src = objet.sprites.back_shiny
            image[1].src = objet.sprites.front_shiny
            image[2].src = objet.sprites.back_default
            image[3].src = objet.sprites.front_default
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
