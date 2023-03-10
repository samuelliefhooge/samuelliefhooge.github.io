const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    lblCursus.addEventListener("mouseout", changeOut);
    lblCursus.addEventListener("mousedown", drag);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () =>
{
    let txtName = document.getElementById("txtName");

    if (txtName.value != "")
    {
        alert("Uw naam is " + txtName.value);

        console.log ("Uw naam is " + txtName.value);
        console.log (`Uw naam is ${txtName.value}`);
    }
    else
    {
        alert("Gelieve Uw naam in te vullen");
    }
}

const change = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}
const changeOut = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "";
}

const drag = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.draggable = true;
}


window.addEventListener("load", setup);

