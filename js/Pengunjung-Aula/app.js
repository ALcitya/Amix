const input = document.getElementsByClassName("input-txt")[0]
const button = document.getElementsByClassName("btn-input")[0]
const aula = document.querySelector(".ksng")
const jumlah = document.querySelector(".amountaul")
let hitung = 0

button.addEventListener('click', () => {
    let pengunjung = document.createElement("p")
    pengunjung.classList.add("people")
    pengunjung.innerHTML = input.value 
    aula.appendChild(pengunjung)

    hitung = hitung + 1
    amountaul.innerHTML = hitung;
})