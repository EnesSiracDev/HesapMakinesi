
window.onload = function () {
    let myInput = document.getElementById('myInput');
    myInput.value = '0';
}

let islemDizisi = [];
let sayiDizisi = [];
let tumSayiUzunlugu = 0;
let virgulSayisi = 0;
let islemAktif = false;

function sayiGir(deger) {
    if (document.getElementById('myInput').value == "0") {
        let myInput = document.getElementById('myInput');
        myInput.value = '';
    }

    if (deger == '+' || deger == '-' || deger == '*' || deger == '/') {

        let diziyeEklenecek = document.getElementById('myInput').value;
        if (diziyeEklenecek.includes(',')) {
            diziyeEklenecek = diziyeEklenecek.replace(',', '.');
        }
        sayiDizisi.push(diziyeEklenecek);
        tumSayiUzunlugu = 0;
        let myIslemButonlari = document.getElementsByClassName("orange")
        let myTopla = document.getElementById("topla");
        let myCikar = document.getElementById("cikar");
        let myCarp = document.getElementById("carp");
        let myBol = document.getElementById("bol");
        if (deger == '+') {
            for (let i = 0; i < myIslemButonlari.length; i++) {
                myIslemButonlari[i].style.backgroundColor = "Orange";
                myIslemButonlari[i].style.color = "White";
            }
            myTopla.style.backgroundColor = "White";
            myTopla.style.color = "Orange";

            //document.getElementById('myInput').value = "";
            islemDizisi.push(deger);
            islemAktif = true;
        }
        else if (deger == '-') {
            for (let i = 0; i < myIslemButonlari.length; i++) {
                myIslemButonlari[i].style.backgroundColor = "Orange";
                myIslemButonlari[i].style.color = "White";
            }
            myCikar.style.backgroundColor = "White";
            myCikar.style.color = "Orange";

            //document.getElementById('myInput').value = "";
            islemDizisi.push(deger);
            islemAktif = true;
        }
        else if (deger == '*') {
            for (let i = 0; i < myIslemButonlari.length; i++) {
                myIslemButonlari[i].style.backgroundColor = "Orange";
                myIslemButonlari[i].style.color = "White";
            }
            myCarp.style.backgroundColor = "White";
            myCarp.style.color = "Orange";

            //document.getElementById('myInput').value = "";
            islemDizisi.push(deger);
            islemAktif = true;
        }
        else if (deger == '/') {
            for (let i = 0; i < myIslemButonlari.length; i++) {
                myIslemButonlari[i].style.backgroundColor = "Orange";
                myIslemButonlari[i].style.color = "White";
            }
            myBol.style.backgroundColor = "White";
            myBol.style.color = "Orange";

            //document.getElementById('myInput').value = "";
            islemDizisi.push(deger);
            islemAktif = true;
        }

        switch (deger) {
            case '+':
                let myTopla = document.getElementById("topla");
                myTopla.style.backgroundColor = "White";
                myTopla.style.color = "Orange"
                break;
            case '-':
                let myCikar = document.getElementById("cikar");
                myCikar.style.backgroundColor = "White";
                myCikar.style.color = "Orange"
                break;
            case '*':
                let myCarp = document.getElementById("carp");
                myCarp.style.backgroundColor = "White";
                myCarp.style.color = "Orange"
                break;
            case '/':
                let myBol = document.getElementById("bol");
                myBol.style.backgroundColor = "White";
                myBol.style.color = "Orange"
                break;
            default:
                break;
        }
    }
    else {
        if (islemAktif == true && (islemDizisi.includes('+') || islemDizisi.includes('-') || islemDizisi.includes('*') || islemDizisi.includes('/'))) {
            document.getElementById('myInput').value = "";
            islemAktif = false;
        }

        if (tumSayiUzunlugu < 9) {
            let myInput = document.getElementById('myInput');
            if (myInput.value.includes(",") == false && virgulSayisi == 0 && deger == ',' && myInput.value === '') {
                document.getElementById('myInput').value = "0,"
            }
            else if (myInput.value.includes(",") == false && virgulSayisi == 0 && deger == ',') {
                document.getElementById('myInput').value += deger;
                virgulSayisi++;
            }
            else if (myInput.value.includes(",") && virgulSayisi == 1 && deger == ',') {
                console.log("Null")
            }
            else {
                document.getElementById('myInput').value += deger;
            }

            if (deger != ',') {
                tumSayiUzunlugu++
            }
        }  
    }

    fontAyari()
}

function fontAyari() {
    let myInput = document.getElementById("myInput");
    switch (tumSayiUzunlugu) {
        case 7:
            myInput.style.fontSize = '50px';
            break;
        case 8:
            myInput.style.fontSize = '44px';
            break;

        case 9:
            myInput.style.fontSize = '38px';
            break;

        default:
            myInput.style.fontSize = '60px';
            break;
    }
}

function temizle() {

    renkDegistir()

    document.getElementById('myInput').value = '0';
    tumSayiUzunlugu = 0;
    karaktersayisi = 0;
}

function yuzdeHesapla() {
    let myInput = document.getElementById('myInput').value;
    
    let yuzdeDonustur = myInput.toString();
    if (yuzdeDonustur.includes(',')) {
        let yeniyuzde = yuzdeDonustur.replace(',', '.');
        let sonuc = yeniyuzde / 100;
        let stringCevir = sonuc.toString();
        if (stringCevir.includes('.')) {
            let sonSonuc = stringCevir.replace('.', ',');
            document.getElementById('myInput').value = sonSonuc;
        }
    }
    else {
        let yeniyuzde = yuzdeDonustur / 100;
        document.getElementById('myInput').value = yeniyuzde;
    }

    renkDegistir()
    
}

function pozitifNegatif(){
    let myInput = document.getElementById('myInput').value;
    if (myInput !== '0') {
        if (myInput.includes('-')) {
            sayi = myInput.slice(1);
            document.getElementById('myInput').value = sayi;
        }
        else{
            let negatif =  '-' + myInput;
            document.getElementById('myInput').value = negatif;
        }

        renkDegistir()
    }
}

function esittirSonuc() {

    let diziyeEklenecek = document.getElementById('myInput').value;
    if (diziyeEklenecek.includes(',')) {
        diziyeEklenecek = diziyeEklenecek.replace(',', '.');
    }
    sayiDizisi.push(diziyeEklenecek);

    let varMiTopla = islemDizisi.includes('+');
    let varMiCikar = islemDizisi.includes('-');
    let varMiCarp = islemDizisi.includes('*');
    let varMiBol = islemDizisi.includes('/');

    if (varMiTopla == true) {
        let sayiDizi = sayiDizisi.map(function (eleman) {
            return parseFloat(eleman);
        });
        
        let toplama = sayiDizi.reduce((accumulator, currentValue) => accumulator + currentValue);
        
        if (toplama % 1 === 0) {
            sonuc = Math.trunc(toplama);
        }
        else{
            sonuc = toplama.toFixed(2);
        }
        document.getElementById('myInput').value = sonuc;

        let myTopla = document.getElementById("topla");
        myTopla.style.backgroundColor = "Orange";
        myTopla.style.color = "White"
    }
    else if (varMiCikar == true) {
        let cikarma = sayiDizisi.reduce((accumulator, currentValue) => accumulator - currentValue);

        if (cikarma % 1 === 0) {
            sonuc = Math.trunc(cikarma);
        }
        else{
            sonuc = cikarma.toFixed(2);
        }
 
        document.getElementById('myInput').value = sonuc;

        let myCikar = document.getElementById("cikar");
        myCikar.style.backgroundColor = "Orange";
        myCikar.style.color = "White"
    }
    else if (varMiCarp == true) {
        let carpma = sayiDizisi.reduce((accumulator, currentValue) => accumulator * currentValue);
        
        if (carpma % 1 === 0) {
            sonuc = Math.trunc(carpma);
        }
        else{
            sonuc = carpma.toFixed(2);
        }

        document.getElementById('myInput').value = sonuc;

        let myCarp = document.getElementById("carp");
        myCarp.style.backgroundColor = "Orange";
        myCarp.style.color = "White"
    }
    else if (varMiBol == true) {
        let bolme = sayiDizisi.reduce((accumulator, currentValue) => accumulator / currentValue);
        
        if (bolme % 1 === 0) {
            sonuc = Math.trunc(bolme);
        }
        else{
            sonuc = bolme.toFixed(2);
        }

        document.getElementById('myInput').value = sonuc;

        let myBol = document.getElementById("bol");
        myBol.style.backgroundColor = "Orange";
        myBol.style.color = "White"
    }

    islemDizisi.splice(0, islemDizisi.length);
}

function renkDegistir() {
    let myTopla = document.getElementById("topla");
    myTopla.style.backgroundColor = "Orange";
    myTopla.style.color = "White"

    let myCikar = document.getElementById("cikar");
    myCikar.style.backgroundColor = "Orange";
    myCikar.style.color = "White"

    let myCarp = document.getElementById("carp");
    myCarp.style.backgroundColor = "Orange";
    myCarp.style.color = "White"

    let myBol = document.getElementById("bol");
    myBol.style.backgroundColor = "Orange";
    myBol.style.color = "White"

    sayiDizisi.splice(0, sayiDizisi.length);
}