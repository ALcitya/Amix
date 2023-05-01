let ulang;

const penjumlahan = function (a,b){
    let hasil = a + b
    let hasilnya = (`hasil dari penjumlahan adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("Lagi?")
}

const pengurangan = function (a,b) {
    let hasil = a - b
    let hasilnya =(`hasil dari penjumlahan adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("Lagi?")
}

const perkalian = function (a,b){
    let hasil = a * b
    let hasilnya = (`hasil dari perkalian adalah ${hasil}`)
    alert(hasilnya)
    ulang = confirm("Lagi")
}

const pembagian = function (a,b){
    let hasil = a/b 
    let hasilnya = (`hasil dari pembagian adalah${hasil}`)
    alert(hasilnya)
    ulang = confitm("lagi")
}


const program = function (pilihan) {
    let input1 = parseInt(prompt("Masukkan nilai pertama"))
    let input2 = parseInt(prompt("Masukkan nilai kedua"))
    switch (parseInt(pilihan)){
        case 1 :
            penjumlahan(input1, input2);
            break;
        case 2 : 
            pengurangan(input1, input2);
            break;
        case 3 :
            perkalian(input1, input2);
            break;
        case 4 :
            pembagian(input1, input2);
            break;
        default:
            alert("pilihan tidak tersedia");
    }
}

do {
    program(prompt("pilihan kalkulator yang ingin anda gunakan : \n 1. Penjumlahan\n 2. Pengurangan\n 3. Perkalian\n 4. Pembagian"))
}while(ulang);
alert("Terimakasih sudah menggunakan kalkulator versi web ini")