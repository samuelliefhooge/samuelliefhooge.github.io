const setup = () => {
    start();
    let Go = document.getElementById("btnGo");
    Go.addEventListener("click", MaakTafel);
    let Reset = document.getElementById("btnReset");
    Reset.addEventListener("click", reset);

}
//array maken om de gemaakt tafels te onthouden
let Array = [];

const getTimestamp = () => {

    let timeStamp = new Date();
    let uu = timeStamp.getHours();
    let mm = timeStamp.getMinutes();
    let ss = timeStamp.getSeconds();
    //zorgen dat er altijd twee cijfers zijn
    if (uu < 10) uu = '0' + uu;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    //datum in 1 "string" steken
    let formattedTime = uu + ':' + mm + ':' + ss;
    return formattedTime
}
const getGetal = () => {
  let getal = document.getElementById("txtTafel").value;
  let startgetal = parseInt(getal);
  if(isNaN(startgetal))
    {
        alert("Not a number");
    }
  else{
    return getal;
    }
}

const MaakHeader = (getal,timestamp) => {

    let tafelheader = document.createElement("div");
    tafelheader.classList.add("header");
    //datum ophalen

    tafelheader.appendChild(document.createTextNode("Tafel van " + getal + " aangemaakt op: " + timestamp));
    console.log("header gemaakt");
    //tafel object maken, met getal en timestamp
    let tafel = {
        nummer: getal,
        tijd: getTimestamp(),
    }
    //tafel in een Array steken
    Array.push(tafel);
    //Array opslaan
    localStorage.setItem("Sam.Tafels", JSON.stringify(Array));
    return tafelheader;
}

const MaakTafel = () => {
    let getal = getGetal();
    if(getal != null) {
        console.log("getal " + getal + " doorgegeven");

        let tafels = document.getElementById("Tafels");
        console.log("Maak tafel");
        let tafel = document.createElement("div");
        tafel.classList.add("tafel");
        console.log("tafel class toegevoegd");
        //header toevoegen aan tafel
        tafel.appendChild(MaakHeader(getal, getTimestamp()));
        //loop op de volledige tafel tot 10 op te bouwen, rij per rij
        for (let i = 1; i <= 10; i++) {
            let row = document.createElement("div");
            //als even(of deelbaar door twee) een class aanhangen
            if (i % 2 == 0) {
                row.setAttribute("class", "even");
            }
            //text in rij zetten, op basis van i
            row.appendChild(document.createTextNode(getal + " x " + i + " = " + getal * i));
            //row aan tafel hangen.
            tafel.appendChild(row);
        }
        //de tafel teoveoegen aan de grote tafels div
        tafels.appendChild(tafel)
    }
}

const start = () => {
    let Array = JSON.parse(localStorage.getItem("Sam.Tafels"));
    if(Array !=null) {
        console.log(Array);
        for (let i = 0; i < Array.length; i++) {
            console.log(Array[i]);
            let getal = Array[i].nummer;
            let timestamp = Array[i].tijd;
            //console.log("getal " + getal +" doorgegeven");
            let tafels = document.getElementById("Tafels");
            //console.log("Maak tafel");
            let tafel = document.createElement("div");
            tafel.classList.add("tafel");
            //console.log("tafel class toegevoegd");
            //header toevoegen aan tafel
                tafel.appendChild(MaakHeader(getal,timestamp));
            //loop op de volledige tafel tot 10 op te bouwen, rij per rij
            for (let i = 1; i<=10; i++)
            {
                let row = document.createElement("div");
                //als even(of deelbaar door twee) een class aanhangen
                if(i%2 ==0){
                    row.setAttribute("class", "even");
                }
                //text in rij zetten, op basis van i
                row.appendChild(document.createTextNode(getal +" x " + i + " = " + getal*i));
                //row aan tafel hangen.
                tafel.appendChild(row);
            }
            //de tafel teoveoegen aan de grote tafels div
            tafels.appendChild(tafel);
        }

        }
    }

const reset = () => {
    //alles uit de array halen
    Array.splice(0, Array.length);
    //lege Array naar de local storage schrijven
    localStorage.setItem("Sam.Tafels", JSON.stringify(Array));
    //alles binnen Tafels verwijderen
    let tafels = document.getElementById("Tafels");
    tafels.innerHTML = "";
}

window.addEventListener("load", setup);