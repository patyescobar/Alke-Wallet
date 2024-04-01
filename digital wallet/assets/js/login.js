const form = document.getElementById("formularioDeInicio");
const User = document.getElementById("user");
const pass = document.getElementById("pass");

function login(e) {
    e.preventDefault();
    
    const logged = User.value === "patricia" && pass.value === "0000";
    if(logged){
        sessionStorage.setItem("auth", true);
        location.href = "index.html";
    } else {
        alert("Usuario y/o contraseña incorrectas");
    }
}

form.addEventListener("submit", login);
