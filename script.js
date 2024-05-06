const botonalert = document.getElementById("boton_alert");
const botonalert1 = document.getElementById("boton_alert1");
const botonalert2 = document.getElementById("boton_alert2");
const botonalert3 = document.getElementById("boton_alert3");
const botonTrenesRegionales = document.getElementById("boton-t-r")
const botonTrenesRegionales1 = document.getElementById("boton-t-r1")
const botonTrenesRegionales2 = document.getElementById("boton-t-r2")
const botonTrenesRegionales3 = document.getElementById("boton-t-r3")
const botonTrenesRegionales4 = document.getElementById("boton-t-r4")

var intro = introJs();

// Configurar opciones (opcional)
intro.setOptions({
  steps: [
    { 
      title: 'Bienvenido!',
      element: '#paso1',
      intro: 'Te voy a enseñar a usar nuestra pagina',
      tooltipClass: 'custom-tooltip-class',
    },
    { 
      title: 'Informmacion importante!',
      element: '#boton_alert',
      intro: 'Tocando este boton vas a poder ver informacion importante sobre el tema mencionado en el titulo',
      tooltipClass: 'custom-tooltip-class',
    },
    { 
      title: 'Peticion!',
      element: '#paso3',
      intro: 'Este boton te guia hacia la firma de nuestra peticion!',
      tooltipClass: 'custom-tooltip-class',
    },
    { 
      title: 'Herramientas utiles!',
      element: '#paso4',
      intro: 'En esta seccion vas a encontrar herramientas que te pueden ser de utilidad como el estado del servicio',
      tooltipClass: 'custom-tooltip-class',
    },
    
  ],
  nextLabel: 'Siguiente',
  prevLabel: 'Anterior',
  doneLabel: 'Terminar' 
  
});


botonTrenesRegionales4.onclick = ()=>{
  
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
  });
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1 
    });

    var myIcon = L.icon({
      iconUrl: '/imagenes/caution.png',
      iconSize: [40 , 40],
      className: 'iconoalert'
  });

    var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
    var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);

    var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();

    var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 2</b><br>");

   var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");

    var latlngs = [
      [1060, 288], // Coordenadas iniciales
      [1000, 288], // Coordenadas finales
    ];
    var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
    
    var latlngs2 = [
      [1000, 288], // Coordenadas iniciales
      [750, 288], // Coordenadas finales
    ];
    var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);


    // Añadir un popup a la línea
    polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
    polyline2.bindPopup("Tramo renovado").closePopup();


    popup.closePopup();
}  



botonTrenesRegionales3.onclick = ()=>{
  
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
  });
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1 
    });

    var myIcon = L.icon({
      iconUrl: '/imagenes/caution.png',
      iconSize: [40 , 40],
      className: 'iconoalert'
  });

    var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
    var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);

    var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();

    var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 2</b><br>");

   var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");

    var latlngs = [
      [1060, 288], // Coordenadas iniciales
      [1000, 288], // Coordenadas finales
    ];
    var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
    
    var latlngs2 = [
      [1000, 288], // Coordenadas iniciales
      [750, 288], // Coordenadas finales
    ];
    var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);


    // Añadir un popup a la línea
    polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
    polyline2.bindPopup("Tramo renovado").closePopup();


    popup.closePopup();
}  



botonTrenesRegionales2.onclick = ()=>{
  
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
  });
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1 
    });

    var myIcon = L.icon({
      iconUrl: '/imagenes/caution.png',
      iconSize: [40 , 40],
      className: 'iconoalert'
  });

    var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
    var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);

    var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();

    var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 2</b><br>");

   var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");

    var latlngs = [
      [1060, 288], // Coordenadas iniciales
      [1000, 288], // Coordenadas finales
    ];
    var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
    
    var latlngs2 = [
      [1000, 288], // Coordenadas iniciales
      [750, 288], // Coordenadas finales
    ];
    var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);


    // Añadir un popup a la línea
    polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
    polyline2.bindPopup("Tramo renovado").closePopup();


    popup.closePopup();
}  

botonTrenesRegionales1.onclick = ()=>{
  
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
  });
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1
    });

    var myIcon = L.icon({
      iconUrl: '/imagenes/caution.png',
      iconSize: [40 , 40],
      className: 'iconoalert'
  });

    var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
    var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);

    var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();

    var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 2</b><br>");

   var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");

    var latlngs = [
      [1060, 288], // Coordenadas iniciales
      [1000, 288], // Coordenadas finales
    ];
    var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
    
    var latlngs2 = [
      [1000, 288], // Coordenadas iniciales
      [750, 288], // Coordenadas finales
    ];
    var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);


    // Añadir un popup a la línea
    polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
    polyline2.bindPopup("Tramo renovado").closePopup();


    popup.closePopup();
}  

botonTrenesRegionales.onclick = ()=>{
  
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '35em',
    showCloseButton: true,
    showConfirmButton: false,
  });
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1.5
    });

    var myIcon = L.icon({
      iconUrl: '/imagenes/caution.png',
      iconSize: [40 , 40],
      className: 'iconoalert'
  });

    var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
    var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);

    var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();

    var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 2</b><br>");

   var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
    .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");

    var latlngs = [
      [1060, 288], // Coordenadas iniciales
      [980, 288], // Coordenadas finales
    ];
    var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
    
    var latlngs2 = [
      [975, 288], // Coordenadas iniciales
      [750, 288], // Coordenadas finales
    ];
    var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);


    // Añadir un popup a la línea
    polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
    polyline2.bindPopup("Tramo renovado").closePopup();

}  

botonalert3.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>El ferrocarril ofrece una alternativa sostenible al transporte de carga, reduciendo significativamente las emisiones de gases de efecto invernadero en comparación con los camiones. Al utilizar energía eléctrica y sistemas de propulsión eficientes, el ferrocarril disminuye la contaminación atmosférica y ayuda a mitigar el cambio climático.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>El transporte por carretera contribuye significativamente a la congestión del tráfico, generando embotellamientos y aumentando la contaminación atmosférica. Además, la construcción y mantenimiento de carreteras impactan negativamente en los ecosistemas naturales y en la biodiversidad, exacerbando los problemas ambientales y climáticos.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}
botonalert2.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>En un país que ha apostado por el ferrocarril como columna vertebral de su sistema de transporte, los beneficios son evidentes. Con una red ferroviaria eficiente y bien desarrollada, se logra una reducción significativa de la congestión en carreteras, disminución de emisiones de gases de efecto invernadero y una mayor conectividad regional y nacional.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>En contraste, en un país que carece de una infraestructura ferroviaria adecuada, se enfrenta a numerosos desafíos. La dependencia excesiva del transporte por carretera conlleva congestión, contaminación ambiental y altos costos logísticos. La ausencia de un ferrocarril bien desarrollado puede resultar en una economía menos competitiva y más vulnerable a crisis de transporte y ambientales.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}
botonalert1.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>El ferrocarril, al ser un medio de transporte eficiente y económico, ofrece una serie de ventajas económicas significativas. Facilita el movimiento rápido y rentable de grandes volúmenes de carga a largas distancias, lo que reduce los costos logísticos y aumenta la competitividad de las empresas. Además, al fomentar la integración regional y nacional, el ferrocarril impulsa el comercio, la inversión y el crecimiento económico.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>La falta de inversión en el desarrollo del ferrocarril puede resultar en una serie de desventajas económicas. La dependencia excesiva del transporte por carretera conlleva costos adicionales relacionados con la congestión, el mantenimiento de infraestructuras viales y los riesgos de seguridad. En última instancia, la falta de un ferrocarril bien desarrollado puede impactar negativamente en la economía nacional, afectando el crecimiento y la estabilidad a largo plazo.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}
botonalert.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>El ferrocarril ha sido un catalizador clave en la transformación social de las comunidades a lo largo de la historia. Facilita la movilidad de las personas, promueve la integración social y cultural, y fortalece los lazos entre regiones y ciudades.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>La ausencia de un sistema ferroviario eficiente puede tener un impacto negativo significativo en la sociedad. Limita la movilidad de las personas, especialmente de aquellos en áreas remotas o con recursos limitados, lo que resulta en aislamiento social, falta de acceso a servicios básicos y oportunidades limitadas de desarrollo personal y profesional.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    var btnInicio = document.getElementById('btn-inicio');
    var titulo = document.getElementById('titulo');
    
    // Escuchamos el evento 'animationend' para detectar cuándo finaliza la animación
    btnInicio.addEventListener('animationend', function (event) {
      // Verificamos si la animación que finalizó es la que nos interesa
      if (event.animationName === 'lightSpeedInLeft') {
        // Cambiamos la clase del botón
        btnInicio.classList.remove('animate__lightSpeedInLeft');
        btnInicio.classList.add('animate__bounce', 'animate__infinite','animate__slow');
        titulo.classList.remove('animate__fadeInRight');
      }
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const btnInicio = document.getElementById("btn-inicio");
    const inicioImg = document.getElementById("inicio-img");
    const inicioNav = document.getElementById("footer")
    const contenidoPrincipal = document.getElementById("contenido-principal");
    const botonsliden = document.getElementById("boton-sliden");
    const botonslidep = document.getElementById("boton-slidep");
    const navBar = document.getElementById("navbar");



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
        intro.start();

    });
    botonslidep.addEventListener("click", function() {
        transicion.volume = 0.01;
        transicion.play();
    });
    botonsliden.addEventListener("click", function() {
      transicion.volume = 0.01;
      transicion.play();
      
  });

  var myCarousel = document.getElementById('carouselExample');

  var touchStartX = 0;

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
