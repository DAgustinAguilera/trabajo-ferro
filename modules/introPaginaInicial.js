

export function introJSOpciones() {
  const principal = document.getElementById("contenido-principal");

  var ancho = window.innerWidth;
  if (ancho <= 576){
    var intro = introJs();
  



intro.setOptions({
    steps: [
      { 
        title: 'Bienvenido!',
        element: '#paso1',
        intro: 'Te voy a enseñar a usar nuestra página',
        tooltipClass: 'customTooltip',
      },
      { 
        title: 'Informmación importante!',
        element: '#boton_alert',
        intro: 'Tocando este botón vas a poder ver información importante sobre el tema mencionado en el título',
        tooltipClass: 'customTooltip',
      },
      { 
        title: '!Petición!',
        element: '#paso3',
        intro: 'Este botón te guía hacia la firma de nuestra petición!',
        tooltipClass: 'customTooltip',
      },
      { 
        title: 'Herramientas útiles!',
        element: '#paso4',
        intro: 'En esta sección vas a encontrar herramientas que te pueden ser de utilidad como el estado del servicio',
        tooltipClass: 'customTooltip',
      },
      
    ],
    nextLabel: 'Siguiente',
    prevLabel: 'Anterior',
    doneLabel: 'Terminar',
    dontShowAgain: true,
    
  });
  intro.start();
}
}