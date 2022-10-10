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
  e.preventDefault();
  modalbg.style.display = "none";
  modalbgThanks.style.display = "flex";
}

 // verification prenom
 const log = document.getElementById('prenom');

 document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('input[name="first"]').onchange=changeEventHandlerPrenom;
});

function changeEventHandlerPrenom(event) {
  var taille =  event.target.value.length;
  if(taille < 3){
    log.textContent = "prénom doit avoir plus de 3 lettres";
  }
  else{
    log.textContent = "";
  }
}

// verification nom
const log1 = document.getElementById('nom');

  document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('input[name="last"]').onchange=changeEventHandlerNom;
});

function changeEventHandlerNom(event) {
  var taille =  event.target.value.length;
  if(taille < 3){
    log1.textContent = "nom doit avoir plus de 3 lettres";
  }
  else{
    log1.textContent = "";
  }
}

// verification nombre de tournois
const log3 = document.getElementById('nbtournois')
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('input[name="quantity"]').onchange=changeEventHandlerQuantity;
});

function changeEventHandlerQuantity(event) {
  const verif = isNaN(event.target.value);

  if( verif === true ){
    log3.textContent = "vous devez écrire des chiffres";
  }
  else{
    log3.textContent = "";
  }
}

// verification localisation tournoi
const log2 = document.querySelectorAll('input[name="location"]');
const dataform = document.getElementById('tournoislocal');
localisation.textContent = "vous devez choisir un tournoi";

dataform.addEventListener("change",changeEventHandlerLocalisation);

function changeEventHandlerLocalisation() {
  let selectedLocations;
  for (const selectedLocation of log2){
    if(selectedLocation.checked){
      selectedLocations = log2.value;
      break;
    }
    
  }
  if(selectedLocations != NaN){
    localisation.textContent = `` ;
  }
}

// verification condition des termes
const condition = document.getElementById('checkbox1');
const docCondition = document.getElementById('docCondition');
const messageErreur = document.getElementById('conditionerreurmessage');

docCondition.addEventListener("change",changeEventHandlerCondition);

function changeEventHandlerCondition() {
  if(condition.checked){
    messageErreur.textContent = "";
  }
  else{
    messageErreur.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
}

// verification email
const email = document.getElementById('email');
docEmail.addEventListener("change",changeEventHandlerEmail);
const messageErreurEmail = document.getElementById('messageErreurEmail');

function changeEventHandlerEmail(){
  let verifEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value);
  
  if(verifEmail == true){
    messageErreurEmail.textContent = "";
  }
  else{
    messageErreurEmail.textContent = "Vous devez écrire une adresse email valide";
  }
}

// verification date
const docDate = document.getElementById('docDate');
const date = document.getElementById('birthdate');
docDate.addEventListener("change", changeEventHandlerDate);

function changeEventHandlerDate(){
  let verifDate = /^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])-(19|20)\\d\\d$/.test(date.value);
  
  if(verifDate == true){
    messageErreurDate.textContent = "";
  }
  else{
    messageErreurDate.textContent = "Vous devez écrire une adresse email valide";
  }
}