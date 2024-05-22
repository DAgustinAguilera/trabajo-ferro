export function animacionBotonesPortada() {


document.addEventListener('DOMContentLoaded', function () {
    var btnInicio = document.getElementById('btn-inicio');
    var titulo = document.getElementById('titulo');
    
    // Escuchamos el evento 'animationend' para detectar cuándo finaliza la animación
    btnInicio.addEventListener('animationend', function (event) {
      // Verificamos si la animación que finalizó es la que nos interesa
      if (event.animationName === 'lightSpeedInLeft') {
        // Cambiamos la clase del botón
        btnInicio.classList.remove('animate__lightSpeedInLeft');
        btnInicio.classList.add('animate__pulse', 'animate__infinite','animate__fast');
        titulo.classList.remove('animate__fadeInRight');
      }
    });
  });
}