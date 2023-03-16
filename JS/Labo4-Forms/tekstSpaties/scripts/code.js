const setup = () => {

    document.getElementById("btnSubmit").addEventListener("click", change);
    document.getElementById("btnSubmitString").addEventListener("click", tekstTellen);
}
const  change = () =>
{
    let  word = document.getElementById("txtName").value;
    let  result = maakMetSpaties(word);
    console.log (result);
}
const maakMetSpaties =(inputText) => {
    let tekst = document.getElementById("txtName").value;
    let output = "";
    for (let i = 0; i < tekst.length; i++) {
        output += tekst.charAt(i) + " ";
    }
    return output;
}
const tekstTellen = () => {

    let tekst = document.getElementById("txtString").value;
    let subtekst = document.getElementById("txtSubString").value;
    let aantal = 0;
    let plaats = tekst.indexOf(subtekst);

    while (plaats != -1) {
        plaats = tekst.indexOf(subtekst, subtekst.length+plaats);
        aantal++;
    }

    if(aantal == 0) {
        console.log("de substring komt niet voor in de string.")
    }
    else {
        console.log("de substring komt " + aantal + " keer voor.")
    }
}

window.addEventListener("load", setup);