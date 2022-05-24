v1=80;
t1=4;
x1=v1*t1;
console.log(x1);

v2=65;
t2=6;
x2=v2*t2;
console.log(x2);
// üçüncü parametre olarak fn diye bi fonk. aldı
function yolHesapla(t,V,fn) {
    var x=t*V;
    return fn(x);
}
// kendisine gelen değerin 10 fazlasını alan bi fonk.
function  sum10(param1){
    return param1+10;
}
var yol=yolHesapla(4,50,sum10);
console.log(yol);
var yol2=yolHesapla(7,63,sum10);
console.log(yol2);

