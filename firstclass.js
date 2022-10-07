let assign_var = function invar() {
    return "Assign kedalam variable";
}
document.getElementById("1").innerHTML = assign_var();

let a = {
assign_ob : function assign_ob() {
    return "Assign kedalam objek";
}
}
document.getElementById("2").innerHTML = a.assign_ob();

function passing() {
return "Passing";
}
function passingg(a, b) {
    return (a() + b);
}
document.getElementById("3").innerHTML = passingg(passing, "passingan");

function Return(a) {
return function() {
    return ("Ini " + a);
}
}
document.getElementById("4").innerHTML = Return("Andre")();