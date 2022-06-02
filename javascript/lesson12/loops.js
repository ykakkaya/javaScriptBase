
var x=0;
while(x<10){
    console.log(x);
    x++;
}
console.log("===============");

x=0;
// do while her zaman ilk şart için döngüyü 1 defa yapar.
do {
    console.log(x);
    x++;
} while (x<10);
console.log("==================")

for (var i = 0; i < 10; i++) {
    if(i==2){
        continue; //şartı sağlayınca atlar döngüye devam eder.
    }

    if(i==5){
        break; //döngüden çıkar.
    }
    console.log(i)
}
console.log("==================")


