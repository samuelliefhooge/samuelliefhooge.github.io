const setup = () => {
setGemeenten();

}

const setGemeenten = () => {

    let loop = false;
    let lijst = [];

    while (loop !== true)
    {
        let input = window.prompt("Voeg een Gemeente toe of type stop om te stoppen ","Nieuwe gemeente");
            console.log(input);
        if(input.localeCompare("stop") === 0)
        {
            loop = true;
        }
        else {

            lijst.push(input);
        }
    }
    sorteerGemeenten(lijst);
}

const sorteerGemeenten = (lijst) => {
    lijst.sort(vergelijk);
    getGemeenten(lijst);
}

const vergelijk = (a,b) => {
    return a.localeCompare(b);
}

const getGemeenten = (lijst) => {
    let output = document.getElementById("sltOutput");
    let select = "<select>";

    for(let i=0; i<lijst.length;i++)
    {
        select = select + "<option>" + lijst[i] + "</option>";
    }
    select = select + "</select>"
    output.innerHTML = select;
}

window.addEventListener("load", setup);