const setup = () => {
    document.getElementById("btnAddP").addEventListener("click", addP);

}

const addP = () => {

    let div = document.querySelector("div");
    let p = document.createElement("p");
    let textNode = document.createTextNode("Ik ben een P");
    p.appendChild(textNode);

    div.appendChild(p);
}



window.addEventListener("load", setup);

