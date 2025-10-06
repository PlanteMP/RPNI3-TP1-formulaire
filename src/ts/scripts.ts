

// Test & initialisation du DOM

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
    initialisationFormulaire();

});




// Declaration des variables 

let etape: number = 0;
const form = document.querySelector(".formulaire__section") as HTMLFormElement;
let fieldsets: NodeListOf<HTMLFieldSetElement>;
let boutonPrecedent = document.querySelectorAll<HTMLButtonElement>(".bouton__precedent");
let boutonSuivant = document.querySelectorAll<HTMLButtonElement>(".bouton__suivant");
let boutonSoumettre = document.querySelector<HTMLButtonElement>(".bouton__soumettre");


//Declaration des variables  --- Récuperer les champs 
const prenom = document.getElementById("prenom") as HTMLInputElement;
const nom = document.getElementById("nom") as HTMLInputElement;
const courriel = document.getElementById("courriel") as HTMLInputElement;



// Inatialisation du formulaire & EvenListener declancher au 'click'

function initialisationFormulaire(): void {
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
// Changement d'etapes -- Function ajouter la classe cacher

function afficherEtape(): void {
    fieldsets.forEach((fieldset) => {
        fieldset.classList.add("cacher");
    });


    // États des étapes -- Mise en evidence

    const elementsEtat = document.querySelectorAll('.etat-etape');
    elementsEtat.forEach((element) => {
        element.classList.remove('etat-etape--mise-en-evidence');
    });

    if (etape >= 0 && etape < elementsEtat.length) {
        elementsEtat[etape].classList.add('etat-etape--mise-en-evidence');
    }


    // Boutons -- Disparition en etat "cacher" pour qu’ils s’affichent que lorsque nécessaires

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



// Changement navigation suivante -- Change au fieldset suivant

function navigationSuivante(event: MouseEvent): void {
    event.preventDefault();
    if (etape < fieldsets.length - 1) {
        etape++;
        afficherEtape();
    }
}

// Changement navigation précédente -- Change au fieldset precedent

function navigationPrecedente(event: MouseEvent): void {
    event.preventDefault();
    if (etape > 0) {
        etape--;
        afficherEtape();
    }

}
