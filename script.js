const botonalert = document.getElementById("boton_alert");
const botonalert1 = document.getElementById("boton_alert1");
const botonalert2 = document.getElementById("boton_alert2");
const botonalert3 = document.getElementById("boton_alert3");

botonalert.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>El ferrocarril ofrece una alternativa sostenible al transporte de carga, reduciendo significativamente las emisiones de gases de efecto invernadero en comparación con los camiones. Al utilizar energía eléctrica y sistemas de propulsión eficientes, el ferrocarril disminuye la contaminación atmosférica y ayuda a mitigar el cambio climático. Además, al transportar grandes volúmenes de mercancías, contribuye a descongestionar las carreteras y a preservar los ecosistemas naturales.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>Los camiones representan una importante fuente de contaminación ambiental y emisiones de gases de efecto invernadero debido a su alta demanda de combustibles fósiles. El transporte por carretera contribuye significativamente a la congestión del tráfico, generando embotellamientos y aumentando la contaminación atmosférica. Además, la construcción y mantenimiento de carreteras impactan negativamente en los ecosistemas naturales y en la biodiversidad, exacerbando los problemas ambientales y climáticos.</p>
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
        <p>En un país que ha apostado por el ferrocarril como columna vertebral de su sistema de transporte, los beneficios son evidentes. Con una red ferroviaria eficiente y bien desarrollada, se logra una reducción significativa de la congestión en carreteras, disminución de emisiones de gases de efecto invernadero y una mayor conectividad regional y nacional. Además, el transporte de mercancías y pasajeros se vuelve más seguro, económico y sostenible, fomentando el desarrollo económico y social..</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>En contraste, en un país que carece de una infraestructura ferroviaria adecuada, se enfrenta a numerosos desafíos. La dependencia excesiva del transporte por carretera conlleva congestión, contaminación ambiental y altos costos logísticos. La falta de opciones de transporte eficientes también limita la accesibilidad y la movilidad de las personas, obstaculizando el desarrollo económico y generando desigualdades regionales. La ausencia de un ferrocarril bien desarrollado puede resultar en una economía menos competitiva y más vulnerable a crisis de transporte y ambientales.</p>
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
        <p>El ferrocarril, al ser un medio de transporte eficiente y económico, ofrece una serie de ventajas económicas significativas. Facilita el movimiento rápido y rentable de grandes volúmenes de carga a largas distancias, lo que reduce los costos logísticos y aumenta la competitividad de las empresas. Además, al fomentar la integración regional y nacional, el ferrocarril impulsa el comercio, la inversión y el crecimiento económico, generando empleo y fortaleciendo la infraestructura y la conectividad.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>La falta de inversión en el desarrollo del ferrocarril puede resultar en una serie de desventajas económicas. La dependencia excesiva del transporte por carretera conlleva costos adicionales relacionados con la congestión, el mantenimiento de infraestructuras viales y los riesgos de seguridad. Además, la falta de opciones de transporte eficientes puede limitar la competitividad de las empresas, aumentar los precios de los productos y servicios y dificultar el acceso a mercados regionales e internacionales. En última instancia, la falta de un ferrocarril bien desarrollado puede impactar negativamente en la economía nacional, afectando el crecimiento y la estabilidad a largo plazo.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}
botonalert3.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2 roboto-mono" >
        <p>El ferrocarril ha sido un catalizador clave en la transformación social de las comunidades a lo largo de la historia. Facilita la movilidad de las personas, promueve la integración social y cultural, y fortalece los lazos entre regiones y ciudades. Además, al proporcionar un medio de transporte accesible y asequible, el ferrocarril mejora la calidad de vida al permitir a las personas acceder a oportunidades educativas, laborales y recreativas en áreas urbanas y rurales.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2 roboto-mono">
          <p>La ausencia de un sistema ferroviario eficiente puede tener un impacto negativo significativo en la sociedad. Limita la movilidad de las personas, especialmente de aquellos en áreas remotas o con recursos limitados, lo que resulta en aislamiento social, falta de acceso a servicios básicos y oportunidades limitadas de desarrollo personal y profesional. Además, la falta de opciones de transporte público seguro y confiable puede aumentar la dependencia de medios de transporte privados, contribuyendo a la congestión, la contaminación y la inequidad en el acceso a recursos y servicios básicos. En última instancia, la falta de un ferrocarril bien desarrollado puede perpetuar la desigualdad social y limitar el progreso y la cohesión de la sociedad en su conjunto.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}

document.addEventListener("DOMContentLoaded", function() {
    const btnInicio = document.getElementById("btn-inicio");
    const inicioImg = document.getElementById("inicio-img");
    const inicioNav = document.getElementById("footer")
    const contenidoPrincipal = document.getElementById("contenido-principal");

    btnInicio.addEventListener("click", function() {
        // Ocultar el botón de inicio
        btnInicio.style.display = "none";

        // Aplicar transición a la imagen de inicio
        inicioImg.style.transition = "transform 1.3s ease";
        inicioImg.style.transform = "translateX(-100%) scale(0.8)";
        inicioNav.style.display = "block"; // Ocultar la imagen de inicio
        inicioImg.style.display = "none"; // Ocultar la imagen de inicio
        contenidoPrincipal.style.display = "block"; // Mostrar el contenido principal
    });
});
