const setup = () => {
    let sliders = document.getElementsByClassName("sliders")
    for(let i=0; i< sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }


    update();
}


const update = () => {
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    console.log("de waarde van de rode slider is momenteel : "+ red);
    console.log("de waarde van de groene slider is momenteel : "+ green);
    console.log("de waarde van de blauwe slider is momenteel : "+ blue);
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    let inverse = document.getElementById("inverse");
    inverse.style.backgroundColor="rgb(" + (255 - red) + "," + (255 - green) + "," + (255 - blue) + ")";
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
}

window.addEventListener("load", setup);