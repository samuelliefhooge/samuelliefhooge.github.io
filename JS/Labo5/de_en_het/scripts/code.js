const setup = () => {

    document.getElementById("btnZoek").addEventListener("click", vervang);
}
const vervang = () => {
    let input = document.getElementById("txtInput").value;
    let zoek = document.getElementById("txtZoek").value;
    let vervang = document.getElementById("txtVervang").value;

    let idx = input.indexOf(zoek)
    //Gisteren zat de jongen op de stoep en at de helft van de appel
    while( idx !== -1 ){
        let voor = input.slice(0,idx);
        let na= input.slice(idx+zoek.length);
        input = voor + vervang + na;
        console.log(input);
        idx=input.indexOf(zoek,idx + vervang.length);
    }

    document.getElementById("txtOutput").innerText = input;
}
window.addEventListener("load", setup);