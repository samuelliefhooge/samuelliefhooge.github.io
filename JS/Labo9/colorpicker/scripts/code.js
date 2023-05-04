const setup = () => {
    getSwatches();
    getSlidersValues()
    let sliders = document.getElementsByClassName("sliders");
    for(let i=0; i< sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    let selecting = document.getElementById("swatch");
    selecting.addEventListener("click",select);
    update();
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
    storeSliderValues();
}

const select = () => {
    console.log("clicked");

    let location = document.getElementById("selected");
    let saved = buildSwatch();
    swatches.push(swatch);
    location.appendChild(saved);
    swatches.push(saved);
    storeSwatches();


}

const buildSwatch = () => {
    let saved = document.createElement("div");
    saved.className="saved";
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    //background-color: rgb(red,green,blue)
    saved.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    let button = buildCloseButton();
    saved.appendChild(button);
    saved.addEventListener("click", selectColor);
    return saved;
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
    storeSwatches();
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

const storeSliderValues = () => {
    console.log("storeSliderValues");
    //let red = document.getElementById("sldRed".value);
    //let green = document.getElementById("sldGreen".value);
    //let blue = document.getElementById("sldBlue".value);

    //object maken
    let sliders = {
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    }

    let jsonText = JSON.stringify(sliders);
    localStorage.setItem("colorpicker.sliders", jsonText);
}

const getSlidersValues = () => {
    let jsonText = localStorage.getItem("colorpicker.sliders");
    if(jsonText != null)
    {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
}

const storeSwatches = () => {
    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");
    for (let i =1; i < swatches.length;i++){
        let rgb = {
            red:swatches[i].getAttribute("data-red"),
            green:swatches[i].getAttribute("data-green"),
            blue:swatches[i].getAttribute("data-blue")
        };
        rgbColors.push(rgb);
    }

    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("colorpicker.swatches", jsonText);

}

const getSwatches = () => {
     console.log(" get swatches");
     //omzetten naar JSON
    //TODO loop schrijven om swatches weer op te bouwen.
     //swatchesJSON = JSON.stringify(swatches);
    // //opslaan als JSON
    // localStorage.setItem("VIVES.be.colorpickerswatches",swatchesJSON);
    //
    // for (let i = 0; i < swatches.length; i++) {
    //     let swatch = swatches[i];
    //
    //     // Do something with each 'swatch' element
    //     console.log("swatch" + i); // Example: Print the element to the console
    //     // Perform other actions or operations on 'swatch'
    //     buildSwatch(i);
    // }
}

window.addEventListener("load", setup);