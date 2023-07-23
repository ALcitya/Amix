const input = document.getElementsByClassName("input-txt")[0]
const button = document.getElementsByClassName("btn-input")[0]
const aula = document.querySelector(".ksng")
const jumlah = document.querySelector(".jumlah")
let hitung = 0

aula.addEventListener('click', function(event) {
const item = event.target.parentElement;
const parent = item.parentElement
if(item.classList.contains("btndel")){
    parent.remove()
    hitung -=1
    jumlah.innerHTML = hitung
    console.log(item)
}
if (item.classList.contains("butcheck")){
    console.log("woi")
    parent.classList.toggle("checked")
}
if (item.classList.contains("btn-edit")){
    const txt = item.previousSibling.previousSibling.textContent;
    input.value = txt;
    hitung -=1
    parent.remove()
    console.log(txt)

}
})

button.addEventListener('click', () => {
    if (input.value != ""){
    let pengunjung = document.createElement("p")
    pengunjung.classList.add("people")
    pengunjung.innerHTML = input.value 

    aula.appendChild(pengunjung)

    const btnDel = document.createElement('button')
    btnDel.classList.add('btndel')
    btnDel.innerHTML = '<i class="fa-solid fa-trash"></i>'

    const btncheck = document.createElement('button')
    btncheck.classList.add('butcheck')
    btncheck.innerHTML = '<i class="fa-solid fa-check"></i>'

    const btnedit = document.createElement('button')
    btnedit.classList.add('btn-edit')
    btnedit.innerHTML =  '<i class="fa-solid fa-pen-to-square"></i>'

    pengunjung.appendChild(btncheck)
    pengunjung.appendChild(btnedit)
    pengunjung.appendChild(btnDel)

    hitung = hitung + 1
    jumlah.innerHTML = hitung;
    input.value = "";
    }
    
})