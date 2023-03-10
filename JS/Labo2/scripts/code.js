const setup = () => {

    document.getElementById("btnDrukAlles").addEventListener("click", ListAll);
    document.getElementById("btnLengte").addEventListener("click", Lengte);
    document.getElementById("btnDeels").addEventListener("click", Deels);
    document.getElementById("btnAddName").addEventListener("click", AddName);
    document.getElementById("btnString").addEventListener("click", String);
}
let familie=["mama","papa","broer","zus","hond"];

const ListAll = () => {
    for (let i = 0; i < familie.length; i++) {
        console.log(familie[i]);
    }
}
const Lengte = () => {
    for (let i = 0; i < familie.length; i++) {
        console.log("de grootte van de familie is " + familie.length);
    }
}

const Deels = () => {
    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);
}

const AddName = () => {
    let Nieuw = window.prompt("Welke naam wilt u toevoegen", "Vul hier de naam in.")
    familie.push(Nieuw);
    ListAll();
}

const String = () => {
        console.log(familie.join(", "));
}


window.addEventListener("load", setup);