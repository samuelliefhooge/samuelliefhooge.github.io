const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    //element.classname="color"; dit werkt ook, maar maakt geen node aan.
    let textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);


}
//const setup = () => {

window.addEventListener("load", setup);