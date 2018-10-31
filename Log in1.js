function validate(){
    var submit=document.getElementById("login");
    var username=["HenrikThorn", "Mathi"];
    var password=["Henrik123", "sunny"];
   
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if ( username==username && password==password){
alert ("Login successfully"); 
window.location.href = "http://transfermarkt.de"; // Redirecting to other page.
        return false;
}
else {
    document.getElementById("loginResult").textContent="Login denied";
}
 }
