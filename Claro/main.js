const username= document.getElementById('nombre')
const password = document.getElementById('contrasena')
const button = document.getElementById("button")

document.addEventListener('DOMContentLoaded',() =>{
    const elementoscarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementoscarousel,{
        duration:150
    });
});

button.addEventListener("click", (e) =>{
    e.preventDefault()
    const data={
        username:username.value,
        password:password.value
    }
    console.log(data)
    }
)
function login(){
    var user, password
    user = document.getElementById("nombre").value;
    password = document.getElementById("contrasena").value;
    if(user == "David" && password =="1234"){
        alert("Iniciaste sesión")
    } else{
        alert("Datos incorrectos")
    }
}