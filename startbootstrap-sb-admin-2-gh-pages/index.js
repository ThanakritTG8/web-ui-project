function login(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    if(email == "admin@nw.com" && password == "12345**"){
        console.log("Hello");
        //location.href = 'dashboard.html';
        return true;

    }else{
        console.log("Bye");
        alert('wrong email or password.');
        return false;
    }
}