// kitaplar


let book1 = {
    title: "Sefiller",
    author: "Victor Hugo",
    year: 1862,
    raf: 1.5
}

let book2 = {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    year: 1866,
    raf: 2.6
}

let book3 = {
    title: "Savaş ve Barış",
    author: "Lev Tolstoy",
    year: 1869,
    raf: 3.5
}


let book4 = {
    title: "Karamazov Kardeşler",
    author: "Fyodor Dostoyevski  ",
    year: 1880,
    raf: 4.5

}


let book5 = {
    title: "Anna Karenina",
    author: "Lev Tolstoy",
    year: 1877,
    raf: 5.5
}

let book6 = {
    title: "İnce Memed",
    author: "Yaşar Kemal",
    year: 1955,
    raf: 2.5
}




// kitaplar dizisi
let books = [book1, book2, book3, book4, book5, book6];


//raflarımızı oluşturalım


let raf11 = { rafNo: "1.1", goster: false, }
let raf12 = { rafNo: "1.2", goster: false, }
let raf13 = { rafNo: "1.3", goster: false, }
let raf14 = { rafNo: "1.4", goster: false, }
let raf15 = { rafNo: "1.5", goster: false, }





let raf21 = { rafNo: "2.1", goster: false, }
let raf22 = { rafNo: "2.2", goster: false, }
let raf23 = { rafNo: "2.3", goster: false, }
let raf24 = { rafNo: "2.4", goster: false, }
let raf25 = { rafNo: "2.5", goster: false, }





let raf26 = { rafNo: "2.6", goster: false, }
let raf31 = { rafNo: "3.1", goster: false, }
let raf32 = { rafNo: "3.2", goster: false, }
let raf33 = { rafNo: "3.3", goster: false, }
let raf34 = { rafNo: "3.4", goster: false, }
let raf35 = { rafNo: "3.5", goster: false, }





let raf41 = { rafNo: "4.1", goster: false, }
let raf42 = { rafNo: "4.2", goster: false, }
let raf43 = { rafNo: "4.3", goster: false, }
let raf44 = { rafNo: "4.4", goster: false, }
let raf45 = { rafNo: "4.5", goster: false, }





let raf51 = { rafNo: "5.1", goster: false, }
let raf52 = { rafNo: "5.2", goster: false, }
let raf53 = { rafNo: "5.3", goster: false, }
let raf54 = { rafNo: "5.4", goster: false, }
let raf55 = { rafNo: "5.5", goster: false, }




// raflar dizisi 5*5 matris şekli
let raflar=[
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]
]



//raflarımızı çizdirelim
function rafOlustur() {
    console.clear();
    for (let i = 0; i < raflar.length; i++) {
        let rafSatiri = "";
        for (let j = 0; j <5; j++) {
            rafSatiri += "|" + (raflar[i][j].goster ? raflar[i][j].rafNo : "-------") + " ";
        }
        console.log(rafSatiri+"|");
    }
}


//kitap kodunu bulma

function kitapKodunuBul(kitapİsmi) {
    let rafkod=null;
    books.forEach((book)=>{
        if (book.title.toLowerCase().includes(kitapİsmi.toLowerCase())) {
            rafkod = book.raf;
        }
    });
    return rafkod;
}


// rafta gösterelim

function kitapRafGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].rafNo == rafKodu) {
                raflar[i][j].goster = true;
            }
        }
    }
    rafOlustur();
}


// Programı çalıştıralım
let kitapAdi = prompt("Lütfen aramak istediğiniz kitabın adını girin:");
let rafKodu = kitapKodunuBul(kitapAdi);


if (rafKodu != null) {
    kitapRafGoster(rafKodu);
}
else {
    console.log("Üzgünüz, aradığınız kitap kütüphanemizde bulunmamaktadır.");
}

