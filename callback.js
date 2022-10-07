function Callback() {
    return "Hello ";
}
    function main(a, callback) {
        return Callback()+a;
}
    document.getElementById("1").innerHTML = main("Sir", Callback);
    