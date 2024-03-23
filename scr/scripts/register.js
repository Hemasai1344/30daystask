document.addEventListener('DOMContentLoaded',function(){
document.getElementById('register').addEventListener('submit',function(event){
    event.preventDefault();

    const Firstname = document.getElementById('Firstname').value;
    const Lastname = document.getElementById('Lastname').value;
    const Email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    if (password !== confirmpassword){
        alert('Passwords do not match. Please try again');
        return;
    }
    const user ={
        Firstname:Firstname,
        Lastname:Lastname,
        Email:Email,
    };
    localStorage.setItem('user',JSON.stringify(user));
    alert('Registration');
})
})