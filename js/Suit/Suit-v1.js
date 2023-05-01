let ulang;
do {
        // todo - random pilihan komputer
        const random = Math.round(Math.random()*10);
        console.log(random)

        // todo - menentukan pilihan komputer
        let comp;
        switch(random){
            case 1:
            case 2:
            case 3:
                comp ="gajah";
                break;
            case 4:
            case 5:
            case 6:
                comp ="manusia";
                break;
            default:
                comp = "semut";
                break;
        }
        //todo - ambil inputan dari user
        const user = prompt("masukkan pilihan kamu(gajah, manusia, semut)");

        console.log(comp);
        const userString = user;
        const compString = comp;


        //todo - kondisikan kemenangan dari kedua pilihan
        if (userString === "gajah" && compString === "manusia"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu menang dan komputer kalah`);
        }else if (userString === "gajah" && compString === "semut"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu kalah dan komputer menang`);
        }else if(userString === "semut" && compString ==="manusia"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu kalah dan komputer menang`);
        }else if(userString === "semut" && compString === "gajah"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu menang dan komputer kalah`);
        }else if(userString === "manusia" && compString === "semut"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu menang dan komputer kalah`);
        }else if(userString === "manusia" && compString === "gajah"){
            alert(`komputer memilih ${compString} dan kamu memilih ${userString} jadi kamu kalah dan komputer menang`);
        }else{
            alert(`kamu memilih sama dengan komputer jadi kamu draw dengan komputer`);
        }

        //todo - confirm digunakan untuk mengulang program 
ulang = prompt(" Apakah ingin melakukan gamenya sekali lagi? y or n")

}while(ulang === "y");
if (ulang === "n");
    alert("Thank You bermain ")
