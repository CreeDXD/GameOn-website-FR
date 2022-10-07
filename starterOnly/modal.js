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
const log2 = document.getElementById('localisation');
log2.textContent = "vous devez choisir un tournoi";

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('input[name="location"]').onchange=changeEventHandler;
});

function changeEventHandler(event) {
  alert(event);
  if(!event.target.value){
    log2.textContent = "vous devez choisir un tournoi";
  }
  else{
    log2.textContent = "";
  }
}