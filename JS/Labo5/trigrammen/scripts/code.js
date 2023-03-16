const setup = () => {

    document.getElementById("txtInput").addEventListener("keyup", trigrams);
}
const trigrams = () => {
    let input = document.getElementById("txtInput").value;
    let output = '<ul id="test">';
    for (i =0; i < input.length -2; i++){
        output = output + '<li>' + input.slice(i,i+3) + '</li>';
    }
    output = output + '</ul>';
    document.getElementById("txtOutput").innerHTML= output;
}
window.addEventListener("load", setup);