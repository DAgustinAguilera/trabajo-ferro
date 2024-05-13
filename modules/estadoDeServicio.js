export function boton_servicios() {
  const boton_servicio = document.getElementById("boton-estado-servicio");

  boton_servicio.onclick = () => {
    Swal.fire({
      html: `    <div class="container">
      <div class="row row1">
        <div class="card col-12">
            <div class="roboto-mono">
              <p>Retiro - Tigre</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
      </div>
      <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
              </div>
          </div>
        </div>
        <div class="row row1">
          <div class="card col-12">
              <div class="roboto-mono d-flex justify-content-around align-items-center">
                <p>Retiro - Tigre</p>
                <i class="bi-check-circle-fill"></i>
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
