//kullanıcı adı ve şifreyi doğru giren kullanıcı mesajları kimin gönderdiğini görür ve okuyabilir.


var users=[
    {name:"ali",pass:"12345"},
    {name:"ayşe",pass:"24680"}
];
var messages=[
    {name:"ali",message:"bugun hava güzel"},
    {name:"ayşe",message:"çok sıcak ama"}
];
    var userName = prompt("adınız?");
    var password = prompt("şifreniz?");
    validation(userName,password);

    function validation() {
        var i=0;
        while(i<users.length)
        {
            if(userName===users[i].name && password===users[i].pass){
                console.log("giriş başarılı");
                console.log(messages);
                break;
            }
            i++;
        
        }
        if(i>=users.length){
            console.log("hatalı giriş yapıldı");
        }
    }

