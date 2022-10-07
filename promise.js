let idnomor = ["1", "2", "3"];
let nomor = [
    {
        nama: "satu"
    },
    {
        nama: "dua"
    }
];

const add_nomor = (nmr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            nomor.push(nmr);
        resolve(nomor);
        }, 1000);
    });
}

const print_nomor = () => {
        setTimeout(() => {
        let p = 0;
    nomor.forEach((no) => {
        for (var i in no) {
    document.getElementById(idnomor[p]).innerHTML = no[i];
            p++;
        }
    });
}, 1000);
    }
const main_no = async () => {
    await add_nomor({nama: "tiga"});
    print_nomor();
}
    main_no();