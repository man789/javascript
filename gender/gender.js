
  // Requête API
  let divAge = document.getElementById("nom");
  let inputPrenom = document.getElementById("prenom");
  let divPourcent= document.querySelector(".pourcent");
  let divGender= document.querySelector(".gender");


  //Fonction appelée au click sur le bouton "Deviner âge"
  function guessGender() {
    //On récupère la valeur dans l'input
    let prenom = inputPrenom.value;
    // console.log(prenom);
  
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
        console.log(objet);
        //On place l'âge reçu, dans la div age
        divAge.textContent = objet.name;
        divPourcent.textContent = objet.probability*100 +' %';
        divGender.textContent = objet.gender;
      }
    };
  
    //Méthode open(method : string, url : string, async : boolean) pour setup la requête
    //method = la méthode d'accès à l'API, get pour récupérer des valeurs, post pour poster
    //url = l'url de l'API
    //async = si la requête se fait de manière synchrone ou asynchrone
    //synchrone : On ne peut plus faire d'autres actions tant que la requête n'a pas aboutie
    //asynchrone : On peut continuer à faire d'autres actions (sur le site, d'autres requêtes, etc...) pendant que la requête est en traitement
    xhr.open("GET", `https://api.genderize.io?name=${prenom}&country_id=BE`, true);
  
    //Méthode qui envoie la requête
    xhr.send();
  }
  
  