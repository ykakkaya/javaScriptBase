var numbers=[1,2,3,4,5,6];
var sum=0;
var mul=1;
for (var i =0 ; i< numbers.length; i++) {

    sum += numbers[i];

    mul *= numbers[i];
}
console.log(sum);
console.log(mul);