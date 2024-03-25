document.addEventListener('DOMContentLoaded',function(){
document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === 'admin' && password === 'password'){
        alert("Login successful!");
        console.log("yey!")
        window.location.href="#"
    }else{
        alert("Invalid usernae or password. Please try again")
    }
})
})