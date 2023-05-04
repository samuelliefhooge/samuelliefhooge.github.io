const setup = () => {

    let start = new Date();
    //zonder argumenten krijg je de system date
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //maand
    console.log(start.getMonth()+1);

    //jaar
    console.log(start.getFullYear());
    //dag
    console.log(start.getDate());

    //21-02-2023
    console.log(start.getDate()+"-"+ (start.getMonth() + 1) +"-" + start.getFullYear() + " " + start.getHours()+":"+ start.getMinutes()+":" + start.getSeconds());

    let datum = new Date(2023,0,1);

    console.log(datum)

    let geboortedatum = new Date(1990,10,6,23,50);
    console.log(start-geboortedatum);

    let milsecdag = 1000*60*60*24;
    console.log(milsecdag);

    console.log(parseInt((start-geboortedatum)/milsecdag));

    let event = new Date();

    console.log("toString " + event.toString());

    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());


}
window.addEventListener("load", setup);