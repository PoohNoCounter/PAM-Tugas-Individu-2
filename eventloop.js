let loop = ["rey", "han", "pan"];
let id = ["1", "2", "3"];
function looping() {
    for (var i = 0; i < 3; i++){
    document.getElementById(id[i]).innerHTML = loop[i];
    }
}
looping();