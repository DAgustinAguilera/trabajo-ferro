

export function botonesAlertsInfo() {

const botonalert = document.getElementById("boton_alert");
const botonalert1 = document.getElementById("boton_alert1");
const botonalert2 = document.getElementById("boton_alert2");
const botonalert3 = document.getElementById("boton_alert3");


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
}