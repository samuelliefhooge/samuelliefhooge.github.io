const setup = () => {

    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    // let lstPar = document.getElementsByClassName("color");

    for(let i=0; i<lstParDiv.length;i++)
    {
        lstParDiv[i].addEventListener("click", change);
    }
}

const change = (e) => {
    e.target.className = "colorPar";
}
window.addEventListener("load", setup);