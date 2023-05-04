const setup = () => {

    let list = document.querySelectorAll("li");
    for(let i=0; i<list.length;i++)
    {
        list[i].setAttribute("class", "listItem");
    }

    let imgPlacer = document.querySelector("body");
    let img = document.createElement("img");
    img.setAttribute("src","images/me.jpg");
    img.setAttribute("alt","mezelf");
    img.setAttribute("height","250px");
    img.setAttribute("width","250px");
    imgPlacer.appendChild(img);
}

window.addEventListener("load", setup);