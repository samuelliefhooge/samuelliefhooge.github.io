const setup = () => {
    CreateField();
}

// let AANTAL_HORIZONTAAL =4;
// let AANTAL_VERTICAAL=3;


let global = {
    EQUALS: 2,
    NUMBER_OF_CARDS: 6,
    // TOTAAL_KAARTEN: 12,
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    CARDS: [],
    COUNT: 0,
    CARD1: null,
    CARD2: null,
    SCORE:0
};

const CreateField = () => {
    FillArray();
    let field = document.getElementById("Field");
    for (let i = 0; i < global.EQUALS * global.NUMBER_OF_CARDS; i++) {
        let kaart = document.createElement("img");
        kaart.setAttribute("class", "kaart");
        kaart.setAttribute("alt", "Kaart" + i);
        kaart.setAttribute("src", global.IMAGE_PATH_PREFIX + "achterkant" + global.IMAGE_PATH_SUFFIX);
        kaart.setAttribute("id", global.CARDS[i]);
        field.appendChild(kaart);
        console.log("kaart created");
        kaart.addEventListener("click", Clicked);
    }

}

const Clicked = (e) => {
    console.log("clicked");


    if (global.CARD1 == null) {
        e.target.setAttribute("src", "images/kaart" + e.target.id + ".png");
        global.COUNT++;
        global.CARD1 = e.target;
        //todo eigen attribute maken om aan te geven dat er geklikt werd
        //todo zodat er niet twee keer op dezelfde kaart geklikt word, en de code ook zo werkt
    } else if (global.CARD2 == null && global.CARD1.src != e.target.src) {
        e.target.setAttribute("src", "images/kaart" + e.target.id + ".png");
        global.COUNT++;
        global.CARD2 = e.target;
    }
    Compare()
}

const Compare = () => {
    console.log("compare");
    //aantal kaarten geselecteerd = kaarten die gelijk zullen zijn
if(global.COUNT == global.EQUALS)
{
    if (global.CARD1.src == global.CARD2.src)
    {
        console.log("gelijk");
        setTimeout(function () {
            Correct(global.CARD1, global.CARD2)
        }, 1000);
    }
    else
    {
        console.log("niet gelijk");
        setTimeout(function () {
            Wrong(global.CARD1, global.CARD2)
        }, 1000);
    }
}
}

const Correct =(card1,card2) => {
    console.log("Correct");
    card1.classList.add("juist");
    card2.classList.add("juist");
    global.SCORE++;
    console.log(global.SCORE);
    setTimeout(function () {
        Hide(card1,card2)
    }, 1000);


}

const Wrong =(card1,card2) => {
    console.log("Wrong");
    card1.classList.add("fout");
    card2.classList.add("fout");
    setTimeout(function () {
        Reset(card1,card2)
    }, 1000);
}

const Hide =(card1,card2) => {
    console.log("Hide");
    card1.classList.remove("juist");
    card2.classList.remove("juist");
    card1.classList.add("invisible");
    card2.classList.add("invisible");
    global.CARD1= null;
    global.CARD2= null;
    global.COUNT= 0;
    if (global.SCORE == global.NUMBER_OF_CARDS)
    {
        console.log("win conditie getriggerd")
        Win();
    }
}

const Reset =(card1,card2) => {
    console.log("Correct");
    card1.classList.remove("fout");
    card2.classList.remove("fout");
    card1.setAttribute("src", global.IMAGE_PATH_PREFIX + "achterkant" + global.IMAGE_PATH_SUFFIX);
    card2.setAttribute("src", global.IMAGE_PATH_PREFIX + "achterkant" + global.IMAGE_PATH_SUFFIX);
    global.CARD1= null;
    global.CARD2= null;
    global.COUNT= 0;
}


const FillArray = () => {      // kaarten array vullen
    for (let i = 1; i <= global.NUMBER_OF_CARDS; i++) {
        global.CARDS.push(i);
        global.CARDS.push(i);
        console.log("Array gevuld");
    }
    console.log(global.CARDS);
    Shuffle();
}

const Shuffle = () => {
    global.CARDS.sort(() => Math.random() - 0.5);
    console.log(global.CARDS);
}

const Win = () => {
    let title = document.getElementById("Field");
    title.innerHTML="Proficiat!! U hebt gewonnen!";
    console.log("gewonnen");
}



window.addEventListener("load", setup);

