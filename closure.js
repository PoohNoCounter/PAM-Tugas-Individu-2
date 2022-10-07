function Myevent() {
    let a = 3;
    return a;
}

function MyNewFunction() {
    return Myevent();
}
document.getElementById("1").innerHTML = MyNewFunction();