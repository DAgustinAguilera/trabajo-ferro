import { introJSOpciones } from "./introPaginaInicial.js";

export function portadaAnimada() {


const btnInicio = document.getElementById("btn-inicio");
const inicioImg = document.getElementById("inicio-img");
const inicioNav = document.getElementById("footer")
const contenidoPrincipal = document.getElementById("contenido-principal");
const botonsliden = document.getElementById("boton-sliden");
const botonslidep = document.getElementById("boton-slidep");
const navBar = document.getElementById("navbar");
var myCarousel = document.getElementById('carouselExample');
var touchStartX = 0;


document.addEventListener("DOMContentLoaded", function() {

    btnInicio.addEventListener("click", function() {
        // Ocultar el botón de inicio
        btnInicio.style.display = "none";
        bocina.volume = 0.2;
        bocina.play();
        // Aplicar transición a la imagen de inicio


        inicioImg.style.transition = "transform 0.5s ease";
        inicioImg.style.transform = "translateX(-100%)";
        inicioNav.style.display = "block"; // Ocultar la imagen de inicio
        navBar.style.display = "block"; // Ocultar la imagen de inicio
        inicioImg.style.display = "none"; // Ocultar la imagen de inicio
        contenidoPrincipal.style.display = "block"; // Mostrar el contenido principal
        introJSOpciones()

    });
    botonslidep.addEventListener("click", function() {
        transicion.volume = 0.01;
        transicion.play();
    });
    botonsliden.addEventListener("click", function() {
      transicion.volume = 0.01;
      transicion.play();
      
  });

  myCarousel.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
  });

  myCarousel.addEventListener('touchend', function (event) {
    var touchEndX = event.changedTouches[0].clientX;
    var swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 150 || swipeDistance < -150  ) {
      transicion.volume = 0.01;
      transicion.play();
    }
  });
});
}