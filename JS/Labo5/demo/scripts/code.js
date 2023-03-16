const setup = () => {
    document.getElementById("imgCow").addEventListener("mouseover", change)

}

const change = () => {
    let photo = document.getElementById("imgCow")
    photo.src = "./images/cow2.jpg";
    photo.alt = "cow2"
    photo.className ="grootKoetje";
    document.getElementById("txtText").innerText="Een ander mooi kalfje";
}


window.addEventListener("load", setup);