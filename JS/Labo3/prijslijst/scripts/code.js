const setup = () => {

    console.log("setup");

    document.getElementById("btnHerbereken").addEventListener("click", update);
    document.getElementById("btnHerbereken2").addEventListener("click", calc);
    calc();
    update();

}

const calc = () => {
    console.log("test");
    let aantallen = document.getElementsByClassName("aantal");
    let prijzen = document.getElementsByClassName("prijs");
    let btw = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("total");
    let totaal = 0.0;

    for (let i = 0; i < aantallen.length; i++) {
        subtotalen[i].value = aantallen[i].value * parseFloat(prijzen[i].innerHTML);
        subtotalen[i].value += subtotalen[i].value * (parseFloat(btw[i].innerHTML) / 100).toFixed(2);
        subtotalen[i].value = subtotalen[i].value.toFixed(2);
        subtotalen[i].value = parseFloat(subtotalen[i].value);
        totaal += subtotalen[i].value;
    }
    let sub = document.getElementsByClassName("total");
    document.getElementById("lblTotaal").innerHTML = totaal + " eurow";

    for (let i = 0; i < aantallen.length; i++) {
        sub[i].innerHTML = subtotalen[i].value + " eurie";
    }
}

const update = () => {


    let aantal1 = document.getElementById("txtProduct1").value; //input always value
    let aantal2 = document.getElementById("txtProduct2").value;
    let aantal3 = document.getElementById("txtProduct3").value;

    let prijs1 = parseFloat(document.getElementById("txtPrijs1").innerHTML);
    let prijs2 = parseFloat(document.getElementById("txtPrijs2").innerHTML);
    let prijs3 = parseFloat(document.getElementById("txtPrijs3").innerHTML);

    let btw1 = parseFloat(document.getElementById("txtBTW1").innerHTML);
    let btw2 = parseFloat(document.getElementById("txtBTW2").innerHTML);
    let btw3 = parseFloat(document.getElementById("txtBTW3").innerHTML);


    document.getElementById("btnHerbereken").addEventListener("click", update);






    let totaal1 = document.getElementById("lblProduct1").innerHTML=(aantal1*prijs1)+(aantal1 * prijs1 * btw1/100);
    let totaal2 = document.getElementById("lblProduct2").innerHTML=(aantal2*prijs2)+(aantal2 * prijs2 * btw2/100);
    let totaal3 = document.getElementById("lblProduct3").innerHTML=(aantal3*prijs3)+(aantal3 * prijs3 * btw3/100);

    let totaal = totaal1 + totaal2 + totaal3;
    document.getElementById("lblTotaal").innerHTML=totaal;

    //let swatch = document.getElementById("swatch");
   // swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
    //let inverse = document.getElementById("inverse");
    //inverse.style.backgroundColor="rgb(" + (255 - red) + "," + (255 - green) + "," + (255 - blue) + ")";



}
window.addEventListener("load", setup);