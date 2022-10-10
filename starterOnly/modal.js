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
const submitBtn = document.querySelectorAll('.btn-submit');
const submitBtnThanks = document.querySelectorAll('.btn-submit--thanks');
const modalbgThanks = document.querySelector(".bground--thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
submitBtn.forEach((btn) => btn.addEventListener("click", launchThanks));
submitBtnThanks.forEach((btn) => btn.addEventListener("click", closethanks));

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
function closethanks() {
  modalbgThanks.style.display = "none";
}
// launch modal thanks
function launchThanks(e) {
  let verifAll =[
    verifPrenom,
    verifNom,
    verifEmail,
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
  return validationA;
}
  // let messageErreurAll = [
  //   messageErreurPrenom.textContent,
  //   messageErreurNom.textContent,
  //   txtContentEmail,
  //   messageErreurNbTournois.textContent,
  //   messageErreurLocalisation.textContent,
  //   messageErreurCondition.textContent
  // ];
  e.preventDefault();
  console.log(verifAllFunction());
  if(verifAllFunction() != true){
    
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
  if(taille < 3){
    messageErreurPrenom.textContent = "prénom doit avoir plus de 3 lettres";
    verifPrenom = false;
  }
  else{
    messageErreurPrenom.textContent = "";
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
  if(taille < 3){
    messageErreurNom.textContent = "nom doit avoir plus de 3 lettres";
    verifNom = false;
  }
  else{
    messageErreurNom.textContent = "";
    verifNom = true;
  }
}

// verification nombre de tournois
const messageErreurNbTournois = document.getElementById('messageErreurNbTournois');
const docNbTournois = document.querySelector('input[name="quantity"]');
docNbTournois.addEventListener("change", changeEventHandlerQuantity);
let verifNbTournois = false;

function changeEventHandlerQuantity() {
  const verif = isNaN(docNbTournois.value);

  if( verif === true ){
    messageErreurNbTournois.textContent = "vous devez écrire des chiffres";
  }
  else{
    messageErreurNbTournois.textContent = "";
    verifNbTournois = true;
  }
}

// verification localisation tournoi
const nomDeVille = document.querySelectorAll('input[name="location"]');
const docLocalisationTournois = document.getElementById('docLocalisationTournois');
const messageErreurLocalisation = document.getElementById('messageErreurLocalisation');
messageErreurLocalisation.textContent = "vous devez choisir un tournoi";

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
    verifEmail = true;
  }
  else{
    messageErreurEmail.textContent = "Vous devez écrire une adresse email valide";
  }
}




let validationA;
function verifAllFunction(){
  for(let i of verifAll){
    if( i != true){
      break;
    }
  }
  return validationA = false;
}

let validationB;
function verifAllErreur(){
  for(let i of messageErreurAll){
    if( i != ""){
      break;
    }
  }
  return validationB = false;
}
