function myFunction(){
    
    
    var s = document.getElementById("surname").value;
    var n = document.getElementById("name").value;
    
    var a = document.getElementById("age").value;
   
    var e = document.getElementById("email").value;
    var p = document.getElementById("psw").value;
    var r = document.getElementById("psw-repeat").value;
    var w = document.getElementById("pol").value;
    

    var myWindow = window.open("width=200, height=100");

    myWindow.document.write("<p>Фамилия: </p>" +s);
    myWindow.document.write("<p>Имя: </p>" +n);
   
    myWindow.document.write("<p>возраст: </p>" +a);
    myWindow.document.write("<p>Ваш Пол: </p>" +w);

   
    myWindow.document.write("<p>Ваш email: </p>" +e);
    myWindow.document.write("<p>Ваш пароль: </p>" +p);
    myWindow.document.write("<p>Повторить пароль: </p>" +r);
   




}

function myFunction2(){
    var s = document.getElementById("surname").value;
    document.getElementById("submit_s").innerHTML = "Фамилия: " + s;

    var n = document.getElementById("name").value;
    document.getElementById("submit_n").innerHTML = "Имя: " + n;

    

    var a = document.getElementById("age").value;
    document.getElementById("submit_a").innerHTML = "возраст: " + a;
    var r = document.getElementById("psw-repeat").value;
    document.getElementById("submit_r").innerHTML = "Повторить пароль: " + r;
    var w = document.getElementById("pol").value;
    document.getElementById("submit_w").innerHTML = "Ваш Пол: " + w;



   
   

    var e = document.getElementById("email").value;
    document.getElementById("submit_e").innerHTML = "Ваш email: " + e;
    var p = document.getElementById("psw").value;
    document.getElementById("submit_p").innerHTML = "Укажите пароль: " + p;


}