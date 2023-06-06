const setup = () => {
    build();
    document.getElementById("btnSearch").addEventListener("click", Zoek);

}

let global = {
    CARDS:[]
};

const Zoek = () => {
    let term = document.getElementById("txtSearch").value;
    if (term.substring(0, 2) == "/g")
    {
        Google();
    }
    else if (term.substring(0, 2) == "/y")
    {
        Youtube();
    }
    else if (term.substring(0, 2) == "/t")
    {
        Twitter();
    }
    else if (term.substring(0, 2) == "/i")
    {
        Instagram();
    }
    else if (term.substring(0, 1) == "/")
    {
        alert("Unknown Command prefix!");
    }
    else
    {
        alert("Invalid command!");
    }
}

const Google = () => {
    let totaal = document.getElementById("txtSearch").value;
    let term = totaal.substring(3);
    // searchvalue /ZOEKTERM/g wil zeggen dat het global vervangen word, dus over de gehele zoekterm
    term = term.replace(/ /g,"+");
    term = "https://www.google.com/search?q=" + term;
    window.open(term, '_blank');
    History(totaal);
}

const Youtube = () => {
    let totaal = document.getElementById("txtSearch").value;
    let term = totaal.substring(3);
    // searchvalue /ZOEKTERM/g wil zeggen dat het global vervangen word, dus over de gehele zoekterm
    term = term.replace(/ /g,"+");
    term = "https://www.youtube.com/results?search_query=" + term;
    window.open(term, '_blank');
    History(totaal);
}

const Instagram = () => {
    let totaal = document.getElementById("txtSearch").value;
    let term = totaal.substring(3);
    // searchvalue /ZOEKTERM/g wil zeggen dat het global vervangen word, dus over de gehele zoekterm
    term = term.replace(/ /g,"");
    term = "https://www.instagram.com/explore/tags/" + term;
    window.open(term, '_blank');
    History(totaal);

}

const Twitter = () => {
    let totaal = document.getElementById("txtSearch").value;
    let term = totaal.substring(3);
    // searchvalue /ZOEKTERM/g wil zeggen dat het global vervangen word, dus over de gehele zoekterm
    term = term.replace(/ /g,"");
    term = "https://twitter.com/hashtag/" + term;
    window.open(term, '_blank');
    console.log(term);
    History(totaal);
}

const History = (term) => {
    console.log(global.CARDS);
    let kaart = {
        platform: term.substring(1, 2), // "y"
        term: term.substring(3),
    };

    console.log(kaart);

    if(global.CARDS != null ) {
        global.CARDS.unshift(kaart);
    }
    else{
        // werkend met array want andere krijgen we null reference
        let array = [];
        array.push(kaart);
        global.CARDS = array;
    }

    console.log(global.CARDS);
    localStorage.setItem("Sam.SearchEngine", JSON.stringify(global.CARDS))
    Card(kaart.platform,term);
}

const build = () => {
    global.CARDS = JSON.parse(localStorage.getItem("Sam.SearchEngine"));
    if(global.CARDS != null ) {
        for (let i = global.CARDS.length - 1; i >= 0; i--) {
            let kaart = global.CARDS[i];
            //we doen hier "/p " zodat later de substring klopt
            Card(kaart.platform, "/p " + kaart.term);
        }
    }
    else {
        console.log("global cards == null")
    }
}

const Card = (platform,term) => {
    console.log(platform,term);

    let cards = document.getElementById("cards");
    let kaart = document.createElement("div");
    let kaartbody = document.createElement("div");
    kaartbody.setAttribute("class","card-body");
    let kaartTitle = document.createElement("h5");
    kaartTitle.setAttribute("class", "card-title");
    let kaartText = document.createElement("p");
    kaartText.setAttribute("class","card-text");
    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value", "Go!");

    kaart.className="card col-4";
    // insertbefore, zodat de nieuwste kaart telkens van voor staat
    cards.insertBefore(kaart, cards.firstChild);
    //cards.prependChild(kaart);
    kaart.appendChild(kaartbody);
    kaartbody.appendChild(kaartTitle);
    kaartbody.appendChild(kaartText);
    let link = term.substring(3);
    kaartbody.appendChild(document.createTextNode(link));

    if ( platform == "g")
    {
        link = link.replace(/ /g,"+");
        link = "https://www.google.com/search?q=" + link;
        button.addEventListener("click", ()=>{window.open(link, '_blank');});
        console.log("platform =g")
        kaart.classList.add("google-card");
        button.classList.add("google-button");
        kaartTitle.appendChild(document.createTextNode("Google"));

    }
    else if ( platform == "y")
    {
        link = link.replace(/ /g,"+");
        link = "https://www.youtube.com/results?search_query=" + link;
        button.addEventListener("click", ()=>{window.open(link, '_blank');});
        console.log("platform = y")
        kaart.classList.add("youtube-card");
        button.classList.add("youtube-button");
        kaartTitle.appendChild(document.createTextNode("Youtube"));
    }
    else if ( platform == "i")
    {
        link = link.replace(/ /g,"");
        link = "https://www.instagram.com/explore/tags/" + link;
        button.addEventListener("click", ()=>{window.open(link, '_blank');});
        console.log("platform = i")
        kaart.classList.add("instagram-card");
        button.classList.add("instagram-button");
        kaartTitle.appendChild(document.createTextNode("Instagram"));
    }
    else if ( platform == "t")
    {
        link = link.replace(/ /g,"");
        link = "https://twitter.com/hashtag/" + link;
        button.addEventListener("click", ()=>{window.open(link, '_blank');});
        console.log("platform = t")
        kaart.classList.add("twitter-card");
        button.classList.add("twitter-button");
        kaartTitle.appendChild(document.createTextNode("Twitter"));
    }
    kaartbody.appendChild(button);
}

window.addEventListener("load", setup);