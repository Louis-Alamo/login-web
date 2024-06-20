var entrada_email = document.getElementById('email');
var entrada_contrasena = document.getElementById('password');
var boton_login = document.getElementById('iniciar_sesion');


boton_login.addEventListener('click', function() {
    var email = entrada_email.value;
    var contrasena = entrada_contrasena.value;

    if (email === 'practicasweb@gmail.com' && contrasena === '123456') {
        alert('Bienvenido');
        
    } else {
        alert('Usuario o contraseña incorrectos');
    } 
});