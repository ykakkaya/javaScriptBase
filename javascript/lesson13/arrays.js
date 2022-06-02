var names=['fabri','pepe','cenk'];
console.log(names); 

var ages=[18,25.38];
console.log(ages)

var names2=new Array('ali','veli',45);
console.log(names2);

//tip bağımsız şekilde doldurulabilir.
//push fonk. ile array e ekleme yapabiliriz.
names2.push('galatasaray');
console.log('push fonk sonrası: '+names2);

//unshift fonk. eklenen değeri ilk sıraya ekler.
names2.unshift(1,'bir');
console.log('unshift fonk sonrası: '+names2);

//pop fonk. parametre almaz.enson elemanı siler.
names2.pop();
console.log('pop fonk sonrası'+names2);

//shift fonk. parametre almaz.0 indisli elemanı siler.
names2.shift();
console.log('shift fonk.sonrası: '+names2);

//index.of() verilen elementin indisini döner.
//eleman dizide yoksa -1 döner.
console.log(names2.indexOf('galatasaray'));
console.log(names2.indexOf(45));