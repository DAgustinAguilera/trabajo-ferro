export function botonesMaterialRodante() {

    const boton_formaciones_electricas = document.getElementById("boton-formaciones-electricas");
    const boton_diesel_electricas = document.getElementById("boton-diesel-electricas");
    const boton_formaciones_diesel = document.getElementById("boton-formaciones-diesel");
    const boton_coches_remolcados = document.getElementById("boton-coches-remolcados");
   
    
    boton_formaciones_electricas.onclick = () =>{

        Swal.fire({
            html: `    <div class="container roboto-mono contenedormaterialrodante">
            <div id="carouselExample22" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-flex d-xl-flex d-lg-flex d-md-flex"
                          src="/images/imagen carrucel 1.jpg"
                          alt=""
                        />
                        <img
                          class="w-100 d-flex d-sm-none"
                          src="images/imagen carrucel mobiel 2.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
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
                                    ramales de la Línea Mitre. <br/><br/>En servicio: 22 formaciones
                                    <br/>Fuera de servicio: 8 formaciones <br/><br/>Motivos:
                                    mantenimiento programado, falta de repuestos y desgaste
                                    excesivo de llantas.<br/>
                                    Con los repuestos adecuados, se podrían incorporar al
                                    servicio para aumentar la oferta.
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 2.jpg"
                          alt=""
                        />
                        <img
                          class="w-100 d-flex d-sm-none"
                          src="images/imagencarrucelmobiel7.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample22"
                              aria-expanded="false"
                              aria-controls="collapseExample22"
                            >
                            UTA CAF Serie 3700 
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample22">
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample22" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample22" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
    `,
        background: `rgba(26, 121, 159, 1)`,
        width: '95%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_diesel_electricas.onclick = () =>{
        Swal.fire({
            html: `    <div class="container roboto-mono contenedormaterialrodante">
            <div id="carouselExample22" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 1.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagenmaterialalerce.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample22"
                              aria-expanded="false"
                              aria-controls="collapseExample22"
                            >
                            Emepa Alerce
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample22">
                                  <a>
                                  Flota para servicio Regional de Salta: <br/><br/>En servicio: 5 formaciones 
                                    <br/>Fuera de servicio: 2 formaciones<br/><br/>Motivos: falta de repuestos para su mantenimiento
                                     y puesta en funcionamiento, mejorando la oferta de servicios.<br/><br/><br/>
                                     Flota para los servicios Metropolitanos y Regionales de Córdoba: <br/><br/>En servicio: 7 formaciones 
                                    <br/>Fuera de servicio: 3 formaciones<br/><br/>Motivos: falta de repuestos para su mantenimiento
                                     y puesta en funcionamiento, mejorando la oferta de servicios.
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 2.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagenmaterialmaterfe.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample22"
                              aria-expanded="false"
                              aria-controls="collapseExample22"
                            >
                            Materfer 
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample22">
                                    <a>
                                    Flota para los servicios regionales de Chaco:
                                    <br /><br/>
                                    Saenz Peña-Chorotis 
                                        <br /><br/>En servicio: 1 formaciones <br />Fuera de servicio: 2
                                        formacione <br /><br/>Motivos:  falta de repuestos para su mantenimiento
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample22" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample22" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`,
        background: `rgba(26, 121, 159, 1)`,
        width: '95%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_formaciones_diesel.onclick = () =>{
        Swal.fire({
            html: `    <div class="container roboto-mono contenedormaterialrodante">
            <div id="carouselExample22" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 1.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagenmaterialg22.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample22"
                              aria-expanded="false"
                              aria-controls="collapseExample22"
                            >
                            General Motors EMD G22CW
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample22">
                                  <a>
                                  En servicio: 2 unidades, solo para uso interno.<br/><br/>Fuera de servicio: 1 unidad.<br/><br/>
                                  Motivos: falta de presupuesto para su reparación general en talleres externos. Esta locomotora está en Materfer, provincia de Córdoba.<br/><br/>
                                  Transferencia: 2 unidades en servicio a la Línea Sarmiento.
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 2.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagenmaterialg12.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample22"
                              aria-expanded="false"
                              aria-controls="collapseExample22"
                            >
                            General Motors EMD G12CW
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample22">
                                    <a>
                                        <br /><br/>En servicio: 5 unidades<br />Fuera de servicio: 2 unidades<br /><br/>
                                        Motivos: falta de presupuesto para su reparación general en talleres externos.
                                         Ambas locomotoras están en Materfer, planta ubicada en la provincia de Córdoba.
                                      </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                  <div class="d-flex justify-content-center">
                      <h1>COCHES ELECTRICOS</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                      <img
                        class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                        src="/images/imagen carrucel 2.jpg"
                        alt=""
                      />
                      <img
                        class="mw-100 d-block d-sm-none position-relative"
                        src="images/imagenmaterialalco.jpg"
                        alt=""
                      />
                      <div
                        class="position-absolute contenedor-material"
                      >
                      <p class="d-flex justify-content-center gap-1">
                          <button
                            class="btn btn-primaryanimacion btn-lg"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample22"
                            aria-expanded="false"
                            aria-controls="collapseExample22"
                          >
                          ALCO DL535T
                        
                          </button>
                        </p>
                        <div>
                          <div>
                            <div class="text-start">
                              <div class="collapse m-3" id="collapseExample22">
                                  <a>En servicio: 2 unidades, solo para uso interno. <br />Fuera de servicio: 1
                                      formacione <br /><br/>Motivos: se encuentra en reparación en Taller Liniers por fallas
                                       luego de una reparación general.
                                    </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="carousel-item">
                <div class="d-flex justify-content-center">
                    <h1>COCHES ELECTRICOS</h1>
                  </div>
                  <div class="d-flex justify-content-center">
                    <img
                      class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                      src="/images/imagen carrucel 2.jpg"
                      alt=""
                    />
                    <img
                      class="mw-100 d-block d-sm-none position-relative"
                      src="images/imagenmaterialmontreal.jpg"
                      alt=""
                    />
                    <div
                      class="position-absolute contenedor-material"
                    >
                    <p class="d-flex justify-content-center gap-1">
                        <button
                          class="btn btn-primaryanimacion btn-lg"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample22"
                          aria-expanded="false"
                          aria-controls="collapseExample22"
                        >
                        ALCO RSD-35 
                        </button>
                      </p>
                      <div>
                        <div>
                          <div class="text-start">
                            <div class="collapse m-3" id="collapseExample22">
                                <a>
                                En servicio: 0 unidades<br />Fuera de servicio: 1 unidad.
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample22" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample22" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`,
        background: `rgba(26, 121, 159, 1)`,
        width: '95%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_coches_remolcados.onclick = () =>{
        Swal.fire({
            html: `    <div class="container roboto-mono contenedormaterialrodante">
            <div id="carouselExample22" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 1.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagen carrucel mobiel 2.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
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
                                <div class="collapse m-3" id="collapseExample">
                                  <a>
                                    Flota: 30 formaciones de 6 coches cada una para los 3
                                    ramales de la Línea Mitre. <br/><br/>En servicio: 22 formaciones
                                    <br/>Fuera de servicio: 8 formaciones <br/><br/>Motivos:
                                    mantenimiento programado, falta de repuestos y desgaste
                                    excesivo de llantas.<br/>
                                    Con los repuestos adecuados, se podrían incorporar al
                                    servicio para aumentar la oferta.
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <h1>COCHES ELECTRICOS</h1>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 2.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagenmaterialcoches.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primaryanimacion btn-lg"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                            Coches Materfer Tipo 2056 
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse m-3" id="collapseExample">
                                    <a>
                                    Flota para los 2 ramales diésel de la Línea Mitre: 22 unidades
                                        <br /><br/>En servicio: 10 formaciones <br />Fuera de servicio: 12
                                        formacione <br /><br/>Motivos: falta de repuestos, materiales con fallas estructurales
                                         y otras por mantenimiento para su puesta en servicio.<br />
                                         Con más coches, se puede mejorar notoriamente la oferta de servicios diésel en la Línea Mitre.
                                      </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample22" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample22" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`,
        background: `rgba(26, 121, 159, 1)`,
        width: '95%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    }