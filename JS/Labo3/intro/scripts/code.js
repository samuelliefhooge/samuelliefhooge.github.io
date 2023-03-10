const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click",() => {
        document.getElementById("event").innerHTML += "You clicked the button!<br>";
    });
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"
    document.getElementById("btnContent").addEventListener("click", changeContent);
}
//mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}


//mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out!<br>";
}

//changeCSS
const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
        //eerste manier
        //listItems[i].style.listStyleType="none";
        //listItems[i].style.backgroundColor="red";

        //tweede manier
        //listItems[i].className = "listItemsStyleNone colorRed";

        //derde manier
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorNone");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);

    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
        //eerste manier
        //listItems[i].style.listStyleType="disc";
        //listItems[i].style.backgroundColor = "#FFFFFF";

        //tweede manier
        //listItems[i].className = "listItemsStyleDisc colorNone";

        // derde manier
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed");
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorNone");
        console.log("output " + listItems[i].className);
    }
}

//diff between "text content" and "inner html"

const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);