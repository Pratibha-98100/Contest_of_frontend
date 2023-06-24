// const submit_button = document.querySelector(".Submit-button");
function getTxt(){
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    localStorage.setItem("passValue", fname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("Confirm Password", cpassword);
}




