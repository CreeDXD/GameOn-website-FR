function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelector('.btn-submit');
const submitBtnThanks = document.querySelectorAll('.btn-submit--thanks');
const modalbgThanks = document.querySelector(".bground--thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
submitBtn.addEventListener("click", launchThanks);
submitBtnThanks.forEach((btn) => btn.addEventListener("click", closeThanks));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbgThanks.style.display = "none";
}
//close modal thanks
function closeThanks() {
  modalbgThanks.style.display = "none";
}
// launch modal thanks
function launchThanks(e) {
  //verification que les champs/inputs sont valides
  let verifAll =[
    verifPrenom,
    verifNom,
    verifEmail,
    verifDate,
    verifNbTournois,
    verifLocalisation,
    verifConditionTerm 
  ];

  let validationA;
function verifAllFunction(){
  for(let i of verifAll){
    if( i != true){
      validationA = false;
      break;
    }
    else{
       validationA = true;
    }
  }
  console.log(verifAll);

  return validationA;

}
  e.preventDefault();
  if(verifAllFunction() != true){
    if(verifLocalisation == false){
      messageErreurLocalisation.textContent = "Vous devez choisir un tournoi";
    }
  }else{
    modalbg.style.display = "none";
    modalbgThanks.style.display = "flex";
  }
    
}

 // verification prenom
 const docPrenom = document.querySelector('input[name="first"]');
 const messageErreurPrenom = document.getElementById('messageErreurPrenom');
 docPrenom.addEventListener("change", changeEventHandlerPrenom);
let verifPrenom = false;
function changeEventHandlerPrenom() {
  var taille =  docPrenom.value.length;
  const regExPrenom = /^[A-Za-z]+$/.test(docPrenom.value);
  console.log(regExPrenom );
  if(taille < 2 || regExPrenom == false){
    messageErreurPrenom.textContent = "Votre prénom ne doit avoir que des lettres et au moins 2 lettres";
    docPrenom.style.borderColor = "red" ; 
    verifPrenom = false;
  }
  else{
    messageErreurPrenom.textContent = "";
    docPrenom.style.borderColor = "#ccc";
    verifPrenom = true;
  }
}

// verification nom
const messageErreurNom = document.getElementById('messageErreurNom');
const docNom = document.querySelector('input[name="last"]');
  docNom.addEventListener("change", changeEventHandlerNom);
let verifNom = false;

function changeEventHandlerNom() {
  var taille =  docNom.value.length;
  const regExNom = /^[A-Za-z]+$/.test(docNom.value);
  if(taille < 2 || regExNom == false){
    messageErreurNom.textContent = "Votre Nom ne doit avoir que des lettres et au moins 2 lettres";
    docNom.style.borderColor = "red" ;
    verifNom = false;
  }
  else{
    messageErreurNom.textContent = "";
    docNom.style.borderColor = "#ccc";
    verifNom = true;
  }
}

// verification nombre de tournois
const messageErreurNbTournois = document.getElementById('messageErreurNbTournois');
const docNbTournois = document.querySelector('input[name="quantity"]');
docNbTournois.addEventListener("change", changeEventHandlerQuantity);
let verifNbTournois = false;

function changeEventHandlerQuantity() {
  const verif = /^[0-9]+$/.test(docNbTournois.value);
  console.log(docNbTournois.value);

  if( verif === true ){
    messageErreurNbTournois.textContent = "";
    docNbTournois.style.borderColor = "#ccc";

    verifNbTournois = true;
    
  }
  else{
    messageErreurNbTournois.textContent = "Vous devez écrire des chiffres";
    docNbTournois.style.borderColor = "red" ;
  }
}

// verification localisation tournoi
const nomDeVille = document.querySelectorAll('input[name="location"]');
const docLocalisationTournois = document.getElementById('docLocalisationTournois');
const messageErreurLocalisation = document.getElementById('messageErreurLocalisation');

let verifLocalisation = false;

docLocalisationTournois.addEventListener("change",changeEventHandlerLocalisation);

function changeEventHandlerLocalisation() {

  let selectedLocations;
  for (const selectedLocation of nomDeVille){
    if(selectedLocation.checked){
      selectedLocations = nomDeVille.value;
      messageErreurLocalisation.textContent = `` ;
      verifLocalisation = true;
      break;
    }
    else{
      messageErreurLocalisation.textContent = "Vous devez choisir un tournoi";
      verifLocalisation = false;
    }
    
  }
  return verifLocalisation;
}

// verification condition des termes
const condition = document.getElementById('checkbox1');
const docCondition = document.getElementById('docCondition');
const messageErreurCondition = document.getElementById('messageErreurCondition');
let verifConditionTerm = true;

docCondition.addEventListener("change",changeEventHandlerCondition);

function changeEventHandlerCondition() {

  if(condition.checked){
    messageErreurCondition.textContent = "";
    return verifConditionTerm = true;

  }
  else{
    messageErreurCondition.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return verifConditionTerm = false;
  }
}

// verification email
const email = document.getElementById('email');
docEmail.addEventListener("change",changeEventHandlerEmail);
const messageErreurEmail = document.getElementById('messageErreurEmail');
const txtContentEmail = messageErreurEmail.textContent;
let verifEmail = false;
function changeEventHandlerEmail(){
  let regExEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value);
  if(regExEmail == true){
    messageErreurEmail.textContent = "";
    email.style.borderColor = "#ccc";
    verifEmail = true;
  }
  else{
    messageErreurEmail.textContent = "Vous devez écrire une adresse email valide";
    email.style.borderColor = "red";
    verifEmail = false;
  }
}
//verification date de naissance
const docDate = document.getElementById('docDate');
const date = document.getElementById('birthdate');
docDate.addEventListener("change", changeEventHandlerDate);
const messageErreurDate = document.getElementById('messageErreurDate');
const txtContentDate = messageErreurDate.textContent;
let verifDate = false;
function changeEventHandlerDate(){

  let regExDate = /^(19[0-9]{2}|20[0-2][0-9])-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])$/.test(date.value);

  if(regExDate == true){
    messageErreurDate.textContent = "";
    date.style.borderColor = "#ccc";
    verifDate = true;
  }
  else{
    messageErreurDate.textContent = "Vous devez écrire une date de naissance valide";
    date.style.borderColor = "red";
    verifDate = false;
  }
  console.log(date.value);
  console.log(verifDate);


}
