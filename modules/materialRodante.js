export function botonesMaterialRodante() {

    const boton_formaciones_electricas = document.getElementById("boton-formaciones-electricas");
    const boton_diesel_electricas = document.getElementById("boton-diesel-electricas");
    const boton_formaciones_diesel = document.getElementById("boton-formaciones-diesel");
    const boton_coches_remolcados = document.getElementById("boton-coches-remolcados");
   
    
    boton_formaciones_electricas.onclick = () =>{

        Swal.fire({
            html: `<div id="carouselExample1" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/imagen carrucel 1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/imagen carrucel 1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/imagen carrucel 1.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>`,
        background: `rgba(32, 168, 222, 0.5)`,
        width: '85%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_diesel_electricas.onclick = () =>{
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
    boton_formaciones_diesel.onclick = () =>{
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
    boton_coches_remolcados.onclick = () =>{
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
    }