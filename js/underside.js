"use strict";

const button = document.getElementById("testknap");

button.addEventListener("click", () => {
    createElements();
    forsideslide();
});

function createElements() {
    const undersideSection = document.createElement("section");
    undersideSection.classList.add("underside-solen");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("tilbage-button-container");

    const backButton = document.createElement("button");
    backButton.classList.add("tilbage-button");
    backButton.textContent = "Tilbage";
    buttonContainer.appendChild(backButton);

    const arrowImage = document.createElement("img");
    arrowImage.classList.add("tilbage-arrow");
    buttonContainer.appendChild(arrowImage);

    undersideSection.appendChild(buttonContainer);

    const undersideTekst = document.createElement("p");
    undersideTekst.classList.add("underside-tekst-solen")
    undersideTekst.textContent = "den har en overflade, der på en del områder minder meget om vores egen planet. Mars har bjerge, sletter og is ved polerne. Mars har også haft aktive vulkaner og bevægelser i overfladen, som har været med til at ændre planetens overflade.";
    undersideSection.appendChild(undersideTekst);

    const solensOverfladeImage = document.createElement("img");
    solensOverfladeImage.src = "../media/solens-overflade-01.webp";
    solensOverfladeImage.alt = "Alt text for your image";
    solensOverfladeImage.classList.add("solens-overflade");
    undersideSection.appendChild(solensOverfladeImage);

    const forsiden = document.getElementById("forsiden");
    forsiden.appendChild(undersideSection);

    

    backButton.addEventListener("click", () => {
        reverseAnimations(undersideSection);
    });

   
    undersideTekst.offsetHeight;
    undersideTekst.style.transition = "opacity 2s ease-in-out";
    undersideTekst.style.opacity = 1;

    undersideSection.style.transition = "transform 1s ease-in-out";
    undersideSection.style.transform = "translate(-100%)";
}


function forsideslide() {
    const forsideSection = document.getElementById("forsideSektion");
    forsideSection.style.transition = "transform 1s ease-in-out";
    forsideSection.style.transform = "translate(-100%)";
}

function reverseAnimations(undersideSection) {
    const forsideSection = document.getElementById("forsideSektion");
    forsideSection.style.transition = "transform 1s ease-in-out";
    forsideSection.style.transform = "translate(0)";

    undersideSection.style.transition = "transform 1s ease-in-out";
    undersideSection.style.transform = "translate(0%)";

    setTimeout(() => {
        forsiden.removeChild(undersideSection);
    }, 2000); 
}
