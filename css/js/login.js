const form=document.getElementById("loginForm");

const msg=document.getElementById("loginMessage");

form.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(email==="admin@parryjohn.com" && password==="123456"){

window.location.href="admin.html";

}

else{

msg.innerHTML="Invalid Email or Password";

}

});
