let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();
    let persoon = {};
    //nieuwe persoon bewaren
    vulPersoonOpBasisVanUserInterface(persoon);
    personen.push(persoon); //toevoegen aan interne lijst
    console.log(persoon);
    console.log(personen);
   voegPersoonToeAanLijstInUserInterface(persoon);
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value.trim();
    console.log(persoon.voornaam);
    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();
    persoon.geboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email = document.getElementById("txtEmail").value.trim();
    persoon.kinderen = document.getElementById("txtAantalKinderen").value.trim();

}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
//creat option
// option value en text invullen
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.value = persoon.voornaam + persoon.familienaam;
    option.text =  persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length -1;
    console.log(lstPersonen.selectedIndex);


};
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen")
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    //selectedindex = -1 zodat geen enkele optie geselecteerd staat in de lijst
    lstPersonen.selectedIndex = -1;
    //alle input selecteren met text
    let inputElem = document.querySelectorAll('input[type=text]');
    inputElem.forEach((elem) =>{
        elem.value ="";
    }
    );
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);