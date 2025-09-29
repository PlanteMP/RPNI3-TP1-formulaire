"use strict";
// Test & initialisation du DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
    initialisationFormulaire();
});
// Declaration des variables 
let etape = 0;
const form = document.querySelector(".formulaire__section");
let fieldsets;
let boutonPrecedent = document.querySelectorAll(".bouton__precedent");
let boutonSuivant = document.querySelectorAll(".bouton__suivant");
let boutonSoumettre = document.querySelector(".bouton__soumettre");
// Inatialisation du formulaire
function initialisationFormulaire() {
    let elementsEtat = document.querySelectorAll('.etat-etape');
    fieldsets = form.querySelectorAll("fieldset");
    boutonPrecedent?.forEach((bouton) => bouton.addEventListener("click", navigationPrecedente));
    boutonSuivant?.forEach((bouton) => bouton.addEventListener("click", navigationSuivante));
    afficherEtape();
    elementsEtat.forEach((element, index) => {
        element.addEventListener('click', () => {
            etape = index;
            afficherEtape();
        });
    });
}
// Changement d'etapes
function afficherEtape() {
    fieldsets.forEach((fieldset) => {
        fieldset.classList.add("cacher");
    });
    // États des étapes
    const elementsEtat = document.querySelectorAll('.etat-etape');
    elementsEtat.forEach((element) => {
        element.classList.remove('etat-etape--mise-en-evidence');
    });
    if (etape >= 0 && etape < elementsEtat.length) {
        elementsEtat[etape].classList.add('etat-etape--mise-en-evidence');
    }
    // Boutons
    if (etape >= 0 && etape < fieldsets.length) {
        fieldsets[etape].classList.remove("cacher");
    }
    if (etape === 0) {
        boutonPrecedent?.forEach((bouton) => bouton.classList.add('cacher'));
        boutonSuivant?.forEach((bouton) => bouton.classList.remove('cacher'));
        boutonSoumettre?.classList.add('cacher');
    }
    if (etape == 1) {
        boutonPrecedent?.forEach((bouton) => bouton.classList.remove('cacher'));
        boutonSuivant?.forEach((bouton) => bouton.classList.remove('cacher'));
        boutonSoumettre?.classList.add('cacher');
    }
    if (etape == 2) {
        boutonPrecedent?.forEach((bouton) => bouton.classList.remove('cacher'));
        boutonSuivant?.forEach((bouton) => bouton.classList.add('cacher'));
        boutonSoumettre?.classList.remove('cacher');
    }
}
// Messages d'erreurs 
/*
 * Fonction pour valider les champs
 */
// Changement navigation suivante 
function navigationSuivante(event) {
    event.preventDefault();
    if (etape < fieldsets.length - 1) {
        etape++;
        afficherEtape();
    }
}
// Changement navigation précédente
function navigationPrecedente(event) {
    event.preventDefault();
    if (etape > 0) {
        etape--;
        afficherEtape();
    }
}
