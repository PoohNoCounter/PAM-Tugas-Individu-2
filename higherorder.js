function Higher() {
    return "Andre Suka ";
}

function Higherr(fungsi, nama) {
    fungsi();
    return fungsi() + nama;
}
document.getElementById("1").innerHTML = Higherr(Higher, "Bermain Mole");