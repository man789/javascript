let formulaire = document.myForm;
let nom = document.querySelector('.nom');
toastr.options.progressBar = true;
toastr.info('Formulaire JS')

function verifForm(){
  let listeNom = formulaire.nom.value.split('');
  let listePrenom = formulaire.prenom.value.split('');
  let homme = document.querySelector('#homme');
  let femme = document.querySelector('#femme');
  let autres = document.querySelector('#autres');
  let isChcked = false;
  let date = formulaire.naissance.value;
  let telRegex = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
  let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // verif Nom Prenom

  if(formulaire.nom.value == ""){
    toastr.error('Nom invalide','Erreur d envoi');
  }
  if(listeNom.length > 20){
    toastr.error('Nom invalide','Erreur d envoi');
  }
  if(formulaire.prenom.value == ""){
    toastr.error('Prenom invalide','Erreur d envoi');
  }
  if(listePrenom.length > 20){
    toastr.error('Prenom invalide','Erreur d envoi');
  }
  // Verif Checkbox
  if (homme.checked || femme.checked || autres.checked) {
    isChcked = true;
  }
  if (isChcked == false) { 
    toastr.error('Choisir un genre','Erreur d envoi');
  }
  // Verif Date
  // alert(date);
  // Verif tel
  if (!telRegex.test(formulaire.tel.value)) {
    toastr.error('Numero de telephone incorrect','Erreur d envoi');   
  }
  // Verif mail
  let monMail = formulaire.mail.value.toLowerCase();
  if (!mailRegex.test(monMail)) {  
    toastr.error('Mail incorrect','Erreur d envoi');
  }
}

// Save data to display toastr message
$( "form" ).submit(function( event ) {
  event.preventDefault();
  $this = $(this);
  $.post($this.attr("action"), function( data ) {
      //manage data returned
      toastr.info('Page Loaded!');
  });
});