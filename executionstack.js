function Tambah() {
    return 5+7;
}
    function Tambahh() {
    return Tambah()+Tambah();
}
    document.getElementById("1").innerHTML = Tambah();
    document.getElementById("2").innerHTML = Tambahh();