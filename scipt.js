document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(email === "admin@gmail.com" && password === "123456"){
        message.style.color = "#00ff99";
        message.innerHTML = "✅ Login Successful!";
    }else{
        message.style.color = "#ff5555";
        message.innerHTML = "❌ Invalid Email or Password";
    }

});