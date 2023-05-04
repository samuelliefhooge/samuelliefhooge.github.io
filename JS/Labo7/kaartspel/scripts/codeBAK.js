

const setup = () => {
    start();
    let sliders = document.getElementsByClassName("sliders");
    for(let i=0; i< sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    let selecting = document.getElementById("swatch");
    selecting.addEventListener("click",select);
    update();
}

let swatches = [];


const start = () => {

    let swatch;
    let swatchJSON = localStorage.getItem("VIVES.be.sliders");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (swatchJSON == undefined) {
        swatch = {
            red: 50,
            green: 150,
            blue: 50
        };
    } else {
        swatch = JSON.parse(swatchJSON);
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("sldRed").value = swatch.red;
    document.getElementById("sldGreen").value = swatch.green;
    document.getElementById("sldBlue").value = swatch.blue;
}

const update = () => {
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
}

const select = () => {
    console.log("clicked");
    let location = document.getElementById("selected");
    let saved = buildSwatch();
    swatches.push(swatch);
    location.appendChild(saved);

}

const selectColor = (e) => {
    console.log(" color selected");

    let selected = e.target;

    let bgColor = window.getComputedStyle(selected).backgroundColor; // e.g. "rgb(255, 0, 0)"
    let rgbValues = bgColor.substring(bgColor.indexOf('(') + 1, bgColor.lastIndexOf(')')).split(', ');

    console.log(rgbValues); // outputs an array containing the RGB values as strings, e.g. ["255", "0", "0"]
    document.getElementById("sldRed").value = rgbValues[0];
    document.getElementById("sldGreen").value = rgbValues[1];
    document.getElementById("sldBlue").value = rgbValues[2];
    update();


}

const buildSwatch = () => {
    let saved = document.createElement("div");
    saved.className="saved";
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    //build object swatch
    let swatch = {};
    swatch.red = red;
    swatch.green = green;
    swatch.blue = blue;

    //background-color: rgb(red,green,blue)
    saved.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    //omzetten naar JSON
    swatchJSON = JSON.stringify(swatch);
    //opslaan als JSON
    localStorage.setItem("VIVES.be.sliders",swatchJSON);
    //toevoegen aan array
    swatches.push(swatch);
    let button = buildCloseButton();
    saved.appendChild(button);
    saved.addEventListener("click", selectColor);
    updateArray();
    return saved;
}

const updateArray = () => {
    console.log("swatches");
    //omzetten naar JSON
    swatchesJSON = JSON.stringify(swatches);
    //opslaan als JSON
    localStorage.setItem("VIVES.be.colorpickerswatches",swatchesJSON);
}
const showArray = () =>{
    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];

        // Do something with each 'swatch' element
        console.log("swatch" + i); // Example: Print the element to the console
        // Perform other actions or operations on 'swatch'
        buildSwatch(i);
    }
}



const buildCloseButton = () => {
    let close = document.createElement("input");
    close.setAttribute("type","button");
    close.setAttribute("value", "X");
    close.setAttribute("class", "button");
    close.addEventListener("click",closeSwatch);
    return close;
    //event listeners in setup werken niet op iets wat nog niet gemaakt is

}

const closeSwatch = (e) => {
    console.log("close");
    let selected = document.getElementById("selected");
    let button = e.target;
    let saved = button.parentNode;
    selected.removeChild(saved);
    e.stopPropagation();//zorgt dat het beperkt blijft tot enkel dit element
}



window.addEventListener("load", setup);