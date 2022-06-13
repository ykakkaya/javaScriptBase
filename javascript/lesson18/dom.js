//DOM MANİPİLASYONU GET ELEMENT BY ID
var intro1=document.getElementById("intro1");

var mesaj=document.getElementById("mesaj");

mesaj.innerHTML=intro1.innerHTML;
//DOM MANİPİLASYONU GET ELEMENT BY TAGNAME
var tümlisteler=document.getElementsByTagName("ul");//ul taglı elemanlar listeye atıldı
var list=tümlisteler[0];//1. ul tagını listeye attık
tümElemanlar=list.getElementsByTagName("li");//ul içindeki li leri listeye attık
//for la listeyi dönüp elemanları alert ile yazdırdık.
for (var i=0; i< tümElemanlar.length; i++) {
    alert(tümElemanlar[i].innerHTML)   
}
//DOM MANİPİLASYONU GET ELEMENT BY CLASSNAME
var elements=document.getElementsByClassName("intro1");//intro 1 class ını kullanan elemeneleri listeye attı
alert(elements[0].innerHTML);//listenini 1. elemanını alert ile yazdırdık
alert(elements[1].innerHTML);//listenin 2. elemanını alert ile yazdırdık.

// dom manipilasyonu queryselector
//intro 1 class ını kullanan p tagları
var queryElemanlar=document.querySelectorAll("p.intro1");
alert(queryElemanlar.length);
//dom manipilasyonu get element by name

var nameElemanları=document.getElementsByName("musteriAdı");
alert(nameElemanları[0].value);
//action eventlerle nasıl çalışılır.
//lorem ıd li bölüme tıklayınca div1 in rengini mavi yapan func. çalışacak
var lor=document.getElementById("lorem");
lor.addEventListener("click",rengiDegistir);

function rengiDegistir() {
    document.getElementById("div1").style.color="blue";
    
}
//intro2 ıd li element üstüne gelince styleChange func. çalışıp yazar ıd li bölümün arka planını sarı yapar
var intro2Id=document.getElementById("intro2");
intro2Id.addEventListener("mouseover",styleChange);

function styleChange() 
{
 document.getElementById("yazar").style.backgroundColor="yellow";   
}