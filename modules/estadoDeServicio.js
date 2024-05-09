export function boton_servicios() {
  const boton_servicio = document.getElementById("boton-estado-servicio");

  boton_servicio.onclick = () => {
    Swal.fire({
      html: `<div class="container">
      <div class="row">
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro</p>
              <i class="bi-check-circle-fill"></i>
              <p>Tigre</p>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro</br>J.LSuarez</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro </br>Bme. mitre</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Victoria</p>
              <i class="bi-check-circle-fill"></i>
              <p>Capilla del señor</p>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Villa Ballester </br>Zarate</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Maipú</br></br>Delta</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Gúemes</br>Campo Quijano</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Córdoba</br>Capilla del monte</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Saenz Peña</br>Chorotis</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro </br>Tigre</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro </br>Tigre</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
        <div class="card col-4">
            <div class="d-inline justify-content-center">
              <p>Retiro </br>Tigre</p>
              <i class="bi-check-circle-fill"></i>
            </div>
        </div>
      </div>
    </div>
    
    `,
      background: `rgba(32, 168, 222, 0.0)`,
      width: "32em",
      showCloseButton: true,
      showConfirmButton: false,
    });
  };
}
