const setup = () => {
    remember();
}

let global = {
    ROWS:4,
    COLUMNS:9,
    STOELEN:[]
};


const LocalStorage = () => {
    console.log("Localstorage maken");
    //local storage aanmaken
    // in dit geval wil dit zeggen, dat alles wit moet zijn
    for (let r = 1; r<=global.ROWS; r++)
    {
            for (let c = 1; c<=global.COLUMNS; c++)
            {
                global.STOELEN.push(stoelMaken());
                console.log("rij: " + r + " nummer: " + c);
            }
        }

    localStorage.setItem("Sam.kinepolis", JSON.stringify(global.STOELEN))
    build();
}

const build = () => {
    console.log("build");
    //alles wit
    global.STOELEN = JSON.parse(localStorage.getItem("Sam.kinepolis"));
    let zaal = document.getElementById("zaal");
    let i = 0;
    for (let r = 1; r<=global.ROWS; r++)
    {
        for (let c = 1; c<=global.COLUMNS; c++)
        {

            console.log(i);

            global.STOELEN[i].id = i;
            let stoel = document.createElement("img");
            if (global.STOELEN[i].kleur == "open")
            {
                stoel.setAttribute("src", "images/seat_avail.png");
                stoel.setAttribute("alt", "Stoel " + (i+1));
                stoel.setAttribute("id", i);
                zaal.appendChild(stoel);
                stoel.addEventListener("click", Select);
                console.log(global.STOELEN[i]);
            }
            if(global.STOELEN[i].kleur == "select")
            {
                stoel.setAttribute("src", "images/seat_select.png");
                stoel.setAttribute("alt", "Stoel " + (i+1));
                stoel.setAttribute("id", i);
                zaal.appendChild(stoel);
                console.log(global.STOELEN[i]);
            }

            i++;
        }

        zaal.appendChild(document.createElement("br"));
    }
    localStorage.setItem("Sam.kinepolis", JSON.stringify(global.STOELEN));
    console.log(global.STOELEN);
}

const remember = () => {
    console.log("remember");
    let Array = JSON.parse(localStorage.getItem("Sam.kinepolis"));
    if(Array != null) {
        build();
    }
    else{
        LocalStorage();
    }
}

const stoelMaken = () => {
  //per stoel aanmaken
    let chair={
        kleur: "open",
        id:0
    }
    return chair;
}

const Select = (event) => {
    let e = event.target;
  //groen zetten
    console.log(e.getAttribute("id") - 1);
    console.log("selected " + e.getAttribute("id"));
    console.log(parseInt(e.getAttribute("id")) + 1);

    console.log(e.getAttribute("id"))
    if (e.getAttribute("src") == "images/seat_avail.png"
        && document.getElementById(parseInt(e.getAttribute("id"))  - 1).getAttribute("src") == "images/seat_avail.png"
        && document.getElementById(parseInt(e.getAttribute("id"))  + 1).getAttribute("src") == "images/seat_avail.png"
        && parseInt(e.getAttribute("id")) %global.COLUMNS != 0
        && parseInt(e.getAttribute("id")) %global.COLUMNS != 8
        )
    {
        let chair={
            kleur: "select",
            id: e.getAttribute("id")
        }

        let chair2={
            kleur: "select",
            id: parseInt(e.getAttribute("id"))  + 1
        }

        let chair3={
            kleur: "select",
            id: parseInt(e.getAttribute("id"))  - 1
        }


        global.STOELEN[chair.id] = chair;
        global.STOELEN[chair2.id] = chair2;
        global.STOELEN[chair3.id] = chair3;
        console.log(chair);
        let stoelen = document.getElementById("zaal");
        stoelen.innerHTML = "";
        localStorage.setItem("Sam.kinepolis", JSON.stringify(global.STOELEN));
        build();
    }
}


const rebuild = () => {


}
const sold = () => {
  //is rood
}

window.addEventListener("load", setup);