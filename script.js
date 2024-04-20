const botonalert = document.getElementById("boton_alert");

botonalert.onclick = () =>{
    Swal.fire({
        html: `                    <div class="p-2 bg-green-mobile textcolor mt-2" >
        <p>El ferrocarril ofrece una alternativa sostenible al transporte de carga, reduciendo significativamente las emisiones de gases de efecto invernadero en comparación con los camiones. Al utilizar energía eléctrica y sistemas de propulsión eficientes, el ferrocarril disminuye la contaminación atmosférica y ayuda a mitigar el cambio climático. Además, al transportar grandes volúmenes de mercancías, contribuye a descongestionar las carreteras y a preservar los ecosistemas naturales.</p>
      </div>
      <div class="p-2 bg-red-mobile textcolor mt-2">
          <p>Los camiones representan una importante fuente de contaminación ambiental y emisiones de gases de efecto invernadero debido a su alta demanda de combustibles fósiles. El transporte por carretera contribuye significativamente a la congestión del tráfico, generando embotellamientos y aumentando la contaminación atmosférica. Además, la construcción y mantenimiento de carreteras impactan negativamente en los ecosistemas naturales y en la biodiversidad, exacerbando los problemas ambientales y climáticos.</p>
        </div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: '32em',
    showCloseButton: true,
    showConfirmButton: false,
    }
    );
}