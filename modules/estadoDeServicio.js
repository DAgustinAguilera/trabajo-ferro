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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
                <button class="btn-semaforo">
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
              <button class="btn-semaforo">
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
  };
}
