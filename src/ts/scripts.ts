

// Test #pk sa marche pas caliss </3
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
    initialisationFormulaire();

});


// Declaration des variables 

let etape: number = 0;
const form = document.querySelector(".formulaire__section") as HTMLFormElement;
let fieldsets: NodeListOf<HTMLFieldSetElement>;
let boutonPrecedent = document.getElementById("button__precedent");
let boutonSuivant = document.getElementById("button__suivant");
let boutonSoumettre = document.getElementById("button__soumettre");




// Inatialisation du formulaire
function initialisationFormulaire(): void {

    fieldsets = form.querySelectorAll("fieldset");
    afficherEtape();
    boutonPrecedent?.addEventListener("click", navigationPrecedente);
    boutonSuivant?.addEventListener("click", navigationSuivante);

}

// Changement d'etapes
function afficherEtape(): void {

    if (etape >= 0 && etape < fieldsets.length) {
        fieldsets[etape].classList.remove("cacher");
    }

    if (etape === 0) {
        boutonPrecedent?.classList.add('cacher');
        boutonSuivant?.classList.remove('cacher');
        boutonSoumettre?.classList.add('cacher');
    }
    if (etape == 1) {
        boutonPrecedent?.classList.remove('cacher');
        boutonSuivant?.classList.remove('cacher');
        boutonSoumettre?.classList.add('cacher');
    }
    if (etape == 2) {
        boutonPrecedent?.classList.remove('cacher');
        boutonSuivant?.classList.add('cacher');
        boutonSoumettre?.classList.remove('cacher');
    }
    const elementsEtat: NodeListOf<HTMLElement> = document.querySelectorAll(".etat-etape");
    elementsEtat.forEach((element: HTMLElement) => {
        element.classList.remove("etat-etape--mise-en-evidence");
    });

    let elementEtat = document.getElementById("etat-etape" + (etape + 1));
    elementEtat?.classList.add("etat-etape--mise-en-evidence");
}


// Changement navigation suivante 

function navigationSuivante(event: MouseEvent): void {
    event.preventDefault();
    if (etape < fieldsets.length - 1) {
        etape++;
        afficherEtape();
    }
}

// Changement navigation précédente

function navigationPrecedente(event: MouseEvent): void {
    event.preventDefault();
    if (etape > 0) {
        etape--;
        afficherEtape();
    }



}

