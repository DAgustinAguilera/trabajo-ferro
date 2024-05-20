export function botonesMaterialRodante() {

    const boton_formaciones_electricas = document.getElementById("boton-formaciones-electricas");
    const boton_diesel_electricas = document.getElementById("boton-diesel-electricas");
    const boton_formaciones_diesel = document.getElementById("boton-formaciones-diesel");
    const boton_coches_remolcados = document.getElementById("boton-coches-remolcados");
   
    
    boton_formaciones_electricas.onclick = () =>{

        Swal.fire({
            html: `<div class="d-flex justify-content-center">
            <h1>COCHES ELECTRICOS</h1>
        </div>
        <div id="carouselExampleFade" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialmitsu.jpg"
            alt=""
          />
              <img
                src="/images/imagencarrucelmobiel8.jpg"
                class="d-block w-100  d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample22"
                    aria-expanded="false"
                    aria-controls="collapseExample22"
                  >
                    CSR-Mitsubishi SMF23
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample22">
                        <a>
                          Flota: 30 formaciones de 6 coches cada una para los 3
                          ramales de la Línea Mitre. <br /><br />En servicio: 22
                          formaciones <br />Fuera de servicio: 8 formaciones
                          <br /><br />Motivos: mantenimiento programado, falta de
                          repuestos y desgaste excesivo de llantas.<br />
                          Con los repuestos adecuados, se podrían incorporar al
                          servicio para aumentar la oferta.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialcosta.jpg"
            alt=""
          />
              <img
                src="images/imagencarrucelmobiel7.jpg"
                class="d-block w-100 d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample11"
                    aria-expanded="false"
                    aria-controls="collapseExample11"
                  >
                  UTA CAF Serie 3700 
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample11">
                        <a>
                            Flota: 9 dulpas de 2 coches cada una, para el Tren de la
                            Costa.
                            <br /><br/>En servicio: 4 formaciones <br />Fuera de servicio: 5
                            formacione <br /><br/>Motivos: falta de repuestos para su
                            mantenimiento y puesta en valor.<br />Hay unidades
                            desmanteladas por robos en la zona del taller.
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    `,
        background: `rgba(255, 255, 255, 0.9)`,
        width: '80rem',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_diesel_electricas.onclick = () =>{
        Swal.fire({
            html: `    <div class="d-flex justify-content-center">
            <h1>COCHES MOTORES</h1>
        </div>
        <div id="carouselExampleFade" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialalerce.jpg"
            alt=""
          />
              <img
                src="/images/imagenmaterialalerce.jpg"
                class="d-block w-100  d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample33"
                    aria-expanded="false"
                    aria-controls="collapseExample33"
                  >
                  Emepa Alerce
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample33">
                        <a class="informacionmaterial">
                          Flota para servicio Regional de Salta: 7 duplas en total.<br/><br/>En servicio: 5 formaciones 
                            <br/>Fuera de servicio: 2 formaciones<br/><br/> Motivos: falta de repuestos para su mantenimiento
                             y puesta en funcionamiento, mejorando la oferta de servicios.<br/><br/><br/>
                             Flota para los servicios Metropolitanos y Regionales de Córdoba: 10 duplas en total<br/><br/>En servicio: 5 formaciones 
                            <br/>Fuera de servicio: 5 formaciones<br/><br/>Motivos: falta de repuestos para su mantenimiento
                             y puesta en funcionamiento, mejorando la oferta de servicios.
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialmaterfer.jpg"
            alt=""
          />
              <img
                src="images/imagenmaterialmaterfe.jpg"
                class="d-block w-100 d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample44"
                    aria-expanded="false"
                    aria-controls="collapseExample44"
                  >
                  Materfer CM 1000-D / T1000-D
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample44">
                        <a>
                          Flota para los servicios regionales de Chaco: 8 formaciones en total.
                          <br /><br/>
                          Flota para el servicio Saenz Peña-Chorotis: 3 formaciones.
                              <br /><br/>En servicio: 1 formación. <br />Fuera de servicio: 2
                              formaciones.<br /><br/>Motivo: falta de repuestos para su mantenimiento y puesta en funcionamiento, mejorando la oferta de servicio. <br /><br/>Flota para el servicio Cacuí-Los Amores: 5 formaciones.<br /><br/>En servicio: 2 formaciones.<br />Fuera de servicio: 3 formaciones.<br /><br/>Motivos:  falta de repuestos para su mantenimiento
                               y puesta en funcionamiento, mejorando la oferta de servicio.<br />
                            </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`,
        background: `rgba(255, 255, 255, 0.9)`,
        width: '80rem',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_formaciones_diesel.onclick = () =>{
        Swal.fire({
            html: `   <div class="d-flex justify-content-center">
            <h1>LOCOMOTORAS DIÉSEL ELÉCTRICAS</h1>
        </div>
        <div id="carouselExampleFade" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialg22.jpg"
            alt=""
          />
              <img
                src="/images/imagenmaterialg22.jpg"
                class="d-block w-100  d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample55"
                    aria-expanded="false"
                    aria-controls="collapseExample55"
                  >
                  General Motors EMD G22CW
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample55">
                        <a>
                        Flota para los 2 ramales diésel de la Línea Mitre: 7 locomotoras.
                          <br /><br/>En servicio: 5 unidades.<br />Fuera de servicio: 2 unidades.<br /><br/>
                           Motivos: falta de presupuesto para su reparación general en talleres externos.
                            Las dos locomotoras que están fuera de servicio se encuentran en Materfer, planta ubicada en la provincia de Córdoba.
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialg12.jpg"
            alt=""
          />
              <img
                src="images/imagenmaterialg12.jpg"
                class="d-block w-100 d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample66"
                    aria-expanded="false"
                    aria-controls="collapseExample66"
                  >
                  General Motors EMD G12CW
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample66">
                        <a>
                        Flota para los 2 ramales diésel de la Línea Mitre: 5 locomotoras.<br/><br/>En servicio: 2 unidades.<br/><br/>Fuera de servicio: 1 unidad.<br/><br/>
                          Motivos: falta de presupuesto para su reparación general en talleres externos. La locomotora que se haya fuera de servicio está en Materfer, provincia de Córdoba.<br/><br/>
                          Transferencia: 2 unidades en servicio en la Línea Sarmiento.
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
              class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
              src="/images/materialalco.jpg"
              alt=""
            />
                <img
                  src="images/imagenmaterialalco.jpg"
                  class="d-block w-100 d-sm-none"
                  alt="..."
                />
                <div
                  class="position-absolute contenedor-material d-block text-center w-100"
                >
                  <p class="gap-1">
                    <button
                      class="btn btn-primaryanimacion btn-lg"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample77"
                      aria-expanded="false"
                      aria-controls="collapseExample77"
                    >
                    ALCO DL535T
                    </button>
                  </p>
                  <div>
                    <div>
                      <div class="text-start">
                        <div class="collapse m-3" id="collapseExample77">
                          <a>Flota total: 4 locomotoras.<br /><br/>En servicio: 2 unidades, solo para uso interno. <br />Fuera de servicio: 2
                            formaciones.<br /><br/Motivos: una se encuentra en reparación en Taller Liniers por fallas luego de una reparación general en Materfer.
                            <br/>La otra está en el Taller de Benito Roggio aguardando se finalicen las tareas de reparación.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                src="/images/materialmontreal.jpg"
                alt=""
              />
                  <img
                    src="images/imagenmaterialmontreal.jpg"
                    class="d-block w-100 d-sm-none"
                    alt="..."
                  />
                  <div
                    class="position-absolute contenedor-material d-block text-center w-100"
                  >
                    <p class="gap-1">
                      <button
                        class="btn btn-primaryanimacion btn-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample88"
                        aria-expanded="false"
                        aria-controls="collapseExample88"
                      >
                      ALCO RSD-35  
                      </button>
                    </p>
                    <div>
                      <div>
                        <div class="text-start">
                          <div class="collapse m-3" id="collapseExample88">
                            <a>
                            Flota total: 1 locomotora<br /><br/>En servicio: 0 unidades.<br />Fuera de servicio: 1 unidad.
                              <br /><br/>Motivo: falta de repuestos para su mantenimiento programado.
                                </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`,
        background: `rgba(255, 255, 255, 0.9)`,
        width: '80rem',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_coches_remolcados.onclick = () =>{
        Swal.fire({
            html: `    <div class="d-flex justify-content-center">
            <h1>COCHES REMOLCADOS</h1>
        </div>
        <div id="carouselExampleFade" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img
            class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
            src="/images/materialcoches.jpg"
            alt=""
          />
              <img
                src="/images/imagenmaterialcoches.jpg"
                class="d-block w-100  d-sm-none"
                alt="..."
              />
              <div
                class="position-absolute contenedor-material d-block text-center w-100"
              >
                <p class="gap-1">
                  <button
                    class="btn btn-primaryanimacion btn-lg"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample99"
                    aria-expanded="false"
                    aria-controls="collapseExample99"
                  >
                  Materfer Tipo 2056/7154/7176
                  </button>
                </p>
                <div>
                  <div>
                    <div class="text-start">
                      <div class="collapse m-3" id="collapseExample99">
                        <a>
                        Flota para los 2 ramales diésel de la Línea Mitre: 29 coches.<br /><br />
                        En servicio: 10 unidades.<br />Fuera de servicio: 8 unidades.<br />En mantenimiento: 4 unidades.<br/>A reparar: 7 unidades<br /><br />
                           Motivos: falta de repuestos, materiales con fallas estructurales y
                            otras por mantenimiento para su puesta en servicio. Con más coches, se puede mejorar notoriamente la oferta de servicios diésel en la Línea Mitre.
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`,
        background: `rgba(255, 255, 255, 0.9)`,
        width: '80rem',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    }