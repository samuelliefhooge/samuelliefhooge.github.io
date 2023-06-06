const setup = () => {
    document.getElementById("btnGo").addEventListener("click", go)
}



const go =() => {
    let zoekopdracht = document.getElementById("commandoInput").value.trim();

    //opties zijn /g /y /t /i
    if (zoekopdracht.startsWith("/g"))
    {
        console.log("search on Google");
        let url = google(zoekopdracht);
        maakKaart(url,"g");

    }
    else if (zoekopdracht.startsWith("/y"))
    {
        console.log("search on Youtube");

    }
    else if (zoekopdracht.startsWith("/t"))
    {
        console.log("search on Twitter");

    }
    else if (zoekopdracht.startsWith("/i"))
    {
        console.log("search on Instagram");

    }
    else
    {
        alert("Invalid command. Start with: /g /y /t or /i");
    }
}

const maakKaart = (url,platform) => {
    console.log("kaart maken");
    console.log(url);
    let kaarten = document.getElementsByClassName("row");
    let kaart = document.createElement("div");
    let kaartbody = createElementWithClass("div", "card-body");
    let kaartTitle = createElementWithClass("h5","card-title");
    let kaartText = createElementWithClass("p","card-text");
    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value", "go");
    button.addEventListener("click", ()=>{window.open(url);});
    kaart.className="card col-4";

    kaarten[0].appendChild(kaart);
    kaart.appendChild(kaartbody);
    kaartbody.appendChild(kaartTitle);
    kaartbody.appendChild(kaartText);
    kaartbody.appendChild(button);



    if (platform == "g")
    {
        kaart.classList.add("google-card");
        kaartTitle.appendChild(document.createTextNode("Google"));
    }

}


const google = (zoekopdracht) => {
    zoekopdracht = zoekopdracht.replace("/g","");
    zoekopdracht = zoekopdracht.replace(" ", "+");
    let url= "https://www.google.com/search?q=" + zoekopdracht;
    window.open(url);
    return url;
}

const youtube = (zoekopdracht) => {
    zoekopdracht = zoekopdracht.replace("/y","");
    zoekopdracht = zoekopdracht.replace(" ", "+");
    window.open("https://www.youtube.com/results?search_query=" + zoekopdracht);
}

const twitter = (zoekopdracht) => {
    zoekopdracht = zoekopdracht.replace("/t","");
    zoekopdracht = zoekopdracht.replace(" ", "+");
    window.open("https://twitter.com/hashtag/" + zoekopdracht);
}

const instagram = (zoekopdracht) => {
    zoekopdracht = zoekopdracht.replace("/i","");
    zoekopdracht = zoekopdracht.replace(" ", "+");
    window.open("https://www.instagram.com/explore/tags/" + zoekopdracht);
}

const createElementWithClass = (element, classname) => {
    let e = document.createElement(element);
    e.setAttribute("class", classname);
    return e;

}


window.addEventListener("load", setup);