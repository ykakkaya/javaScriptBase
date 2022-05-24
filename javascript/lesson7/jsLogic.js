// AND OPARATÖRÜ &&
//OR OPARATÖRÜ ||
// NOT OPARATÖRÜ !

var age=25;
console.log("age= "+ age);
if(age>=20 && age<=50){
    console.log("üye olabilirsiniz");
}else{
    console.log("üye olamazsınız");
}

age=18;
console.log("age= "+ age);
console.log("********and oparatörü****");
if(age>=20 && age<=50){
    console.log("üye olabilirsiniz");
}else{
    console.log("üye olamazsınız");
}
console.log("********or oparatörü****");
var job="doctor";
console.log("job "+job);
if (age>=30 || job=="doctor"){

    console.log("üye olabilirsiniz");
}else{
    console.log("üye olamazsınız");
}
console.log("********not oparatörü****");
var isMarried=true;
console.log(isMarried);
if(isMarried){
    console.log("evlisiniz");
}else{
    console.log("evli değilsiniz");
}
console.log(!isMarried);
