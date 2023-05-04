const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    for(let i=0; i< sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    let selecting = document.getElementById("swatch");
            selecting.addEventListener("click",select);
    let inverseSelect = document.getElementById("inverse");
            inverseSelect.addEventListener("click", selectInverse);




    update();
}


const update = () => {
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    let inverse = document.getElementById("inverse");
    inverse.style.backgroundColor="rgb(" + (255 - red) + "," + (255 - green) + "," + (255 - blue) + ")";
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
}

const select = () => {
    console.log("clicked");
    let location = document.getElementById("selected");
    let saved = buildSwatch();
    location.appendChild(saved);
}

const selectInverse = () => {
    console.log("clicked");
    let location = document.getElementById("selected");
    let saved = buildInverseSwatch();
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
    saved.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    //background-color: rgb(red,green,blue)
    let button = buildCloseButton();
    saved.appendChild(button);
    saved.addEventListener("click", selectColor);
    return saved;

}

const buildInverseSwatch = () => {
    let saved = document.createElement("div");
    saved.className="saved";
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    saved.style.backgroundColor="rgb(" + (255 - red) + "," + (255- green) + "," + (255 - blue) + ")";
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
}



window.addEventListener("load", setup);