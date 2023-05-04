const setup = () => {
    let wijzig = document.querySelectorAll("p")[0];
    y=wijzig.childNodes[0];
    wijzig.removeChild(y);
    let textNode = document.createTextNode("Gelukt");
    wijzig.appendChild(textNode);
}
window.addEventListener("load", setup);