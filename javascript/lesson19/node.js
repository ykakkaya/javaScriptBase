//ul ve li3 elementlrine ulaştık
var ul=document.getElementById("ul1");
var li3=document.getElementById("li3");
//yeni bi li elementi oluşturduk
var newli=document.createElement("li");
//li elementinin içini yazdık
var node=document.createTextNode("bu bölümü js ile ekledik");
//yazdığımız değeri li elementine bağladık
newli.appendChild(node);
//ul nin içine l3 üstüne ekleme yaptık
ul.insertBefore(newli,li3);
//div1 içindeki p1 i kaldıracağız
alert("p1 elementi kaldırılıyor")
//div1 ve p1 elementlerine ulaşıyoruz
var div1=document.getElementById("div1");
var p1= document.getElementById("p1");
//div1 altındaki p1 ikaldır diyoruz
div1.removeChild(p1);