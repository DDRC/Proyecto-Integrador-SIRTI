function usuario(nombre,contraseña) {
    this.nombre=nombre;
    this.contraseña=contraseña;
}
var usuarios=[new usuario("SIRTI","1234")];
function validar() {
    var name= document.getElementById("inputEmail").value;
var pass= document.getElementById("inputPassword").value;
    if (name===usuarios[0].nombre && pass===usuarios[0].contraseña) {

        window.open(location.pathname+"../../administrador.html",self);
    } else {
        alert("No puedes ingresar, ingresa la credenciales de nuevo");
        document.getElementById("inputEmail").value="";
        document.getElementById("inputPassword").value="";
        document.getElementById("inputEmail").focus();
    }
}