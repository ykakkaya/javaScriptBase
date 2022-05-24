//aritmetik oparatörler + - * / 
var x=5;
console.log("ilk değer ataması ",x);
x=x+4;
console.log("toplama ",x);
x+=6;
console.log(x);
x-=2;
console.log("çıkarma ",x);
x*=5;
console.log("çarpma ",x);
x/=5;
console.log("bölme ",x);

x=3;
x=1+3*5-6;
console.log("işlem önceliği ",x);
console.log("==================");
x=5;
var y=7;
if(x=y){
    console.log(x)
    console.log("atama yapıldı karşılaştırma değil.")
    console.log("==================");
}
console.log("**********ALERT(==)**********")
var a=5;
var b="5";
console.log(a, typeof a);
console.log(b, typeof b);
if(a==b){
    alert("a ile b birbirine eşittir")
}else{
    alert("a ile b birbirine eşit değil")
}
console.log("a ile b eşit dedi");
console.log("**********alert2(===)**********")
if(a===b){
    alert("a ile b birbirine eşittir.type farklı ama değerleri aynı")
}else{
    alert("a ile b birbirine eşit değil")
}
console.log("a ile b eşit değil dedi.type ları farklı olduğu için");
console.log("******************");
var year=2022;
var kalan=year%5;
console.log("2022%5 işlemi sonucu");
console.log(kalan);
console.log("************");

