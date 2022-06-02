
var x=18;  //global variable
function sampleFunction() {
    var x=37; //local variable
    console.log("x değeri fonk.içerisinde : "+x);

}
sampleFunction();
console.log("fonksiyon dışında x i yazdırmak istiyoruz: ");
console.log(x);
console.log("===================");


//yarıçapı alınan dairenin çevre ve alanını bulma


 var yaricap= prompt("lütfen yarıçap giriniz ");

 function daireCevreAlan(yaricap) {
     var cevre=parseInt(2*Math.PI*yaricap);
     alert("dairenin çevresi: "+cevre);
     var alan=parseInt(Math.PI*yaricap*yaricap);
     alert("dairenin alanı: "+alan);
 }

 daireCevreAlan(yaricap);

//vize final notlarını alıyoruz
//vizenin %40 finalin %60 ı 60 ve üstü geçer yoksa kalır.

 var vizeNotu=prompt("vize notunuzu giriniz :");
 var finalNotu=prompt("final notunuzu giriniz :");
 function notHesapla(vizeNotu,finalNotu) {
     var dersNotu= ((vizeNotu*0.40)+(finalNotu*0.60));
     
     if(dersNotu<60){
         alert("ortalamanız: "+dersNotu+" sınıfta kaldınız")
     }else{
         alert("ortalamanız: "+dersNotu+" sınıfı geçtiniz")
     }
 }

 notHesapla(vizeNotu,finalNotu);