export function boton_servicios() {
  const boton_servicio = document.getElementById("boton-estado-servicio");

  boton_servicio.onclick = () => {
    Swal.fire({
      html: `    
      <div class="container">
      <div class="row row1">
        <div class="card col-12">
            <div class="roboto-mono">
              <p>Retiro - Tigre</p>
              <div class="">
                <button type="button" id="ret_tig" class="btn-semaforo">
                  <p class="ms-2 mt-3">IRREGULAR</p>
                  <i class="bi bi-circle-fill lightAmarillo"></i>
                </button>
              </div>
            </div>
        </div>
      </div>
      <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - J.L. Suarez</p>
                <div class="">
                <button id="ret_sua" class="btn-semaforo">
                  <p class="ms-2 mt-3">IRREGULAR</p>
                  <i class="bi bi-circle-fill lightAmarillo"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Bme. Mitre</p>
                <div class="">
                <button id="ret_mit" class="btn-semaforo">
                  <p class="ms-2 mt-3">IRREGULAR</p>
                  <i class="bi bi-circle-fill lightAmarillo"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Villa Ballester - Zarate</p>
                <div class="">
                <button id="ball_zar" class="btn-semaforo">
                  <p class="ms-2 mt-3">IRREGULAR</p>
                  <i class="bi bi-circle-fill lightAmarillo"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Victoria - Capilla del Señor</p>
                <div class="">
                <button id="vic_cap" class="btn-semaforo">
                  <p class="ms-2 mt-3">IRREGULAR</p>
                  <i class="bi bi-circle-fill lightAmarillo"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Maipú - Delta</p>
                <div class="">
                <button id="mai_del" class="btn-semaforo">
                  <p class="ms-2 mt-3">REGULAR</p>
                  <i class="bi bi-circle-fill lightVerde"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Córdoba - Capilla del Monte</p>
                <div class="">
                <button id="cor_cap" class="btn-semaforo">
                  <p class="ms-2 mt-3">REGULAR</p>
                  <i class="bi bi-circle-fill lightVerde"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Güemes - Campo Quijano</p>
                <div class="">
                <button id="gue_cam" class="btn-semaforo">
                  <p class="ms-2 mt-3">REGULAR</p>
                  <i class="bi bi-circle-fill lightVerde"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Sáenz Peña - Chorotis</p>
                <div class="">
                <button id="sae_cho" class="btn-semaforo">
                  <p class="ms-2 mt-3">REGULAR</p>
                  <i class="bi bi-circle-fill lightVerde"></i>
                </button>
              </div>
              </div>
          </div>
        </div>
        <div class="row row1">
        <div class="card col-12">
            <div class="roboto-mono d-flex justify-content-around align-items-center">
              <p>Resistencia - Los Amores</p>
              <div class="">
              <button id="res_amo" class="btn-semaforo">
                <p class="ms-2 mt-3">REGULAR</p>
                <i class="bi bi-circle-fill lightVerde"></i>
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
    
    `,
      background: `rgba(32, 168, 222, 0.0)`,
      width: "45em",
      showCloseButton: true,
      showConfirmButton: false,
    });
    const boton_ret_tig = document.getElementById("ret_tig");
    const boton_ret_sua = document.getElementById("ret_sua");
    const boton_ret_mit = document.getElementById("ret_mit");
    const boton_ball_zar = document.getElementById("ball_zar");
    const boton_vic_cap = document.getElementById("vic_cap");
    const boton_mai_del = document.getElementById("mai_del");
    const boton_cor_cap = document.getElementById("cor_cap");
    const boton_gue_cam= document.getElementById("gue_cam");
    const boton_sae_cho = document.getElementById("sae_cho");
    const boton_res_amo = document.getElementById("res_amo");

    boton_ret_tig.onclick = () => {
      alertify
        .alert(
          "Retiro - Tigre",
          "El servicio se ofrece de manera irregular, con demoras y cancelaciones, debido a la falta de formaciones suficientes para lograr una frecuencia adecuada.<br/>También, por infraestructura de vía y señalamiento en mal estado, hay reducciones de velocidad que aumentan considerablemente el tiempo de viaje."
        )
        .set("closable", false)
        .set();
    };
    boton_ret_sua.onclick = () => {
      alertify.alert(
        "Retiro - J.L Suarez",
        "El servicio se ofrece de manera irregular, con demoras y cancelaciones, debido a la falta de formaciones suficientes para lograr una frecuencia adecuada.<br/>También, por infraestructura de vía y señalamiento en mal estado, hay reducciones de velocidad que aumentan considerablemente el tiempo de viaje.").set("closable", false).set();
    };
    boton_ret_mit.onclick = () => {
      alertify.alert(
        "Retiro - Bme. Mitre", 
        "El servicio se ofrece de manera irregular, con demoras y cancelaciones, debido a la falta de formaciones suficientes para lograr una frecuencia adecuada.<br/>También, por infraestructura de vía y señalamiento en mal estado, hay reducciones de velocidad que aumentan considerablemente el tiempo de viaje.").set("closable", false).set();
    };
    boton_ball_zar.onclick = () => {
      alertify.alert(
        "Villa Ballester - Zarate", 
        "El servicio se ofrece de manera muy irregular debido a la escasez de coches de pasajeros y la poca cantidad de locomotoras disponibles para aumentar la cantidad de trenes.<br/>La falta de coches, también se traduce en formaciones con solo 2 coches disponibles, y sin furgón para bicicletas.<br/>La infraestructura de vía es buena, pero carece de un sistema de señalización adecuado para agilizar la circulación, sumado a restricciones de velocidad por mal estado de cambios y pasos a nivel sin barreras.").set("closable", false).set();
    };
    boton_vic_cap.onclick = () => {
      alertify.alert(
        "Victoria - Capilla del Señor", 
        "El servicio se ofrece de manera muy irregular debido a la escasez de coches de pasajeros y la poca cantidad de locomotoras disponibles para aumentar la cantidad de trenes.<br/>La falta de coches, también se traduce en formaciones con solo 2 coches disponibles, y sin furgón para bicicletas.<br/>La infraestructura de vía es buena en un 70% del ramal. Carece de un sistema de señalización adecuado para agilizar la circulación, sumado a restricciones de velocidad por sectores de vía sin renovar, pasos a nivel sin barreras, mal estado de cambios y puentes en general.").set("closable", false).set();
    };
    boton_mai_del.onclick = () => {
      alertify.alert(
        "Maipú- Delta", 
        "El servicio se ofrece de manera regular con una frecuencia aceptable, que podría mejorar con la incorporación de formaciones que están aguardando repuestos.<br/>Las mismas no permiten el ascenso com rodados por carecer de espacio para tal fin.").set("closable", false).set();
    };
    boton_cor_cap.onclick = () => {
      alertify.alert(
        "Córdoba - Capilla del Monte", 
        "El servicio se ofrece de manera regular con una oferta de servicios a mejorar, que depende de la incorporación de formaciones detenidas por falta de repuestos.<br/>A pesar de la infraestructura y topografía del ramal, los trenes circulan diariamente sin mayores inconvenientes, salvo por imprudencia de los vehículos automotores en los pasos a nivel, que ocasionan accidentes.<br/>Ocasionalmente, en temporada de invierno o por exceso de lluvia, la zona serrana puede anegar la vía.").set("closable", false).set();
    };
    boton_gue_cam.onclick = () => {
      alertify.alert(
        "Güemes - Campo Quijano", 
        "El servicio se ofrece de manera regular con una oferta de servicios a mejorar, que depende de la incorporación de formaciones detenidas por falta de repuestos.<br/>La infraestructura de vía no es un condicionante para la circulación de los trenes, aunque con el mantenimiento adecuado, se podría mejorar el tiempo de viaje.").set("closable", false).set();
    };
    boton_sae_cho.onclick = () => {
      alertify.alert(
        "Sáenz Peña - Chorotis", 
        "El servicio se ofrece de manera regular con una oferta de servicios a mejorar, que depende de la incorporación de formaciones detenidas por falta de repuestos.<br/>La infraestructura de vía no es un condicionante para la circulación de los trenes, aunque con el mantenimiento adecuado, se podría mejorar el tiempo de viaje.").set("closable", false).set();
    };
    boton_res_amo.onclick = () => {
      alertify.alert(
        "Resistencia - Los Amores", 
        "El servicio se ofrece de manera regular con una oferta de servicios a mejorar, que depende de la incorporación de formaciones detenidas por falta de repuestos.<br/>La infraestructura de vía no es un condicionante para la circulación de los trenes, aunque con el mantenimiento adecuado, se podría mejorar el tiempo de viaje.").set("closable", false).set();
    };
  };
}
