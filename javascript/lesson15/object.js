var player={name:'ali',
surname:'ateş',
age:21,
job:'software developer'}

console.log(player.name);
console.log(player.surname);
console.log(player.job);
console.log(player);

player.age=25;
player.job='full stack developer';
console.log(player);

var player2={
name:'mehmet',
surname:"kaya",
age:38,
job:"teacher",
childs:['ayşe','aziz','kadir'],
fullname:function() {
    return (this.name+
    " "+
    this.surname);  
}
};
console.log(player2);
console.log(player2.childs[1]);
console.log(player2.fullname());
console.log("===========================");


//nesne oluşturmak için consructor fonk. kullanma

function Enginer(name,surname,age) {
    this.name=name;
    this.surname=surname;
    this.age=age;
}
var Enginer1=new Enginer("ali","altun",34);
var Enginer2=new Enginer("ahmet","kaya",42);
var Enginer3= new Enginer("veli","gümüş",39);
console.log(Enginer1);
console.log(Enginer2);
console.log(Enginer3);

var Enginers=[Enginer1,Enginer2,Enginer3];
for (let i = 0; i< Enginers.length; i++)
{
    console.log(Enginers[i].name);
    console.log(Enginers[i]);
}  