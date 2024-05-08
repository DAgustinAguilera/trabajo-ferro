export function introJSOpciones() {
var intro = introJs();

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
  intro.start();
}