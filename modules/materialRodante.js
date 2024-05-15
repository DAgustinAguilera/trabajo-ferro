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
                        <h3>EMU CSR-Mitsubishi</h3>
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
                              class="btn btn-primary"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              CSR-Mitsubishi SMF23
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse" id="collapseExample">
                                  <a>
                                    Flota: 30 formaciones de 6 coches cada una para los 3
                                    ramales de la Línea Mitre. <br />En servicio: 22 formaciones
                                    <br />Fuera de servicio: 8 formaciones <br />Motivos:
                                    mantenimiento programado, falta de repuestos y desgaste
                                    excesivo de llantas.<br />
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
                        <h3>EMU CSR-Mitsubishi</h3>
                      </div>
                      <div class="d-flex justify-content-center">
                        <img
                          class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                          src="/images/imagen carrucel 2.jpg"
                          alt=""
                        />
                        <img
                          class="mw-100 d-block d-sm-none position-relative"
                          src="images/imagencarrucelmobiel7.jpg"
                          alt=""
                        />
                        <div
                          class="position-absolute contenedor-material"
                        >
                        <p class="d-flex justify-content-center gap-1">
                            <button
                              class="btn btn-primary"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              CSR-Mitsubishi SMF23
                            </button>
                          </p>
                          <div>
                            <div>
                              <div class="text-start">
                                <div class="collapse" id="collapseExample">
                                    <a>
                                        Flota: 9 dulpas de 2 coches cada una, para el Tren de la
                                        Costa.
                                        <br />En servicio: 4 formaciones <br />Fuera de servicio: 5
                                        formacione <br />Motivos: falta de repuestos para su
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
            <div class="d-flex justify-content-center">
              <h1>COCHES ELECTRICOS</h1>
            </div>
            <div class="d-flex justify-content-center">
              <h3>EMU CSR-Mitsubishi</h3>
            </div>
            <div class="d-flex justify-content-center">
              <img
                class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                src="/images/materialr1web.jpg"
                alt=""
              />
              <img
                class="mw-100 d-block d-sm-none position-relative"
                src="images/materialr1.jpg"
                alt=""
              />
              <div
                class="d-flex justify-content-center text-center position-absolute contenedor-material"
              >
                <div>
                  <p class="d-inline-flex gap-1">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      CSR-Mitsubishi SMF23
                    </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                    >
                      UTA CAF Serie 3700
                    </button>
                  </p>
                  <div>
                    <div class="d-inline-flex">
                      <div class="collapse" id="collapseExample">
                        <a>
                          Flota: 30 formaciones de 6 coches cada una para los 3
                          ramales de la Línea Mitre. <br />En servicio: 22 formaciones
                          <br />Fuera de servicio: 8 formaciones <br />Motivos:
                          mantenimiento programado, falta de repuestos y desgaste
                          excesivo de llantas.<br />
                          Con los repuestos adecuados, se podrían incorporar al
                          servicio para aumentar la oferta.
                        </a>
                      </div>
                      <div class="collapse" id="collapseExample1">
                        <a>
                          Flota: 9 dulpas de 2 coches cada una, para el Tren de la
                          Costa.
                          <br />En servicio: 4 formaciones <br />Fuera de servicio: 5
                          formacione <br />Motivos: falta de repuestos para su
                          mantenimiento y puesta en valor.<br />Hay unidades
                          desmanteladas por robos en la zona del taller.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div class="d-flex justify-content-center">
              <h1>COCHES ELECTRICOS</h1>
            </div>
            <div class="d-flex justify-content-center">
              <h3>EMU CSR-Mitsubishi</h3>
            </div>
            <div class="d-flex justify-content-center">
              <img
                class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                src="/images/materialr1web.jpg"
                alt=""
              />
              <img
                class="mw-100 d-block d-sm-none position-relative"
                src="images/materialr1.jpg"
                alt=""
              />
              <div
                class="d-flex justify-content-center text-center position-absolute contenedor-material"
              >
                <div>
                  <p class="d-inline-flex gap-1">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      CSR-Mitsubishi SMF23
                    </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                    >
                      UTA CAF Serie 3700
                    </button>
                  </p>
                  <div>
                    <div class="d-inline-flex">
                      <div class="collapse" id="collapseExample">
                        <a>
                          Flota: 30 formaciones de 6 coches cada una para los 3
                          ramales de la Línea Mitre. <br />En servicio: 22 formaciones
                          <br />Fuera de servicio: 8 formaciones <br />Motivos:
                          mantenimiento programado, falta de repuestos y desgaste
                          excesivo de llantas.<br />
                          Con los repuestos adecuados, se podrían incorporar al
                          servicio para aumentar la oferta.
                        </a>
                      </div>
                      <div class="collapse" id="collapseExample1">
                        <a>
                          Flota: 9 dulpas de 2 coches cada una, para el Tren de la
                          Costa.
                          <br />En servicio: 4 formaciones <br />Fuera de servicio: 5
                          formacione <br />Motivos: falta de repuestos para su
                          mantenimiento y puesta en valor.<br />Hay unidades
                          desmanteladas por robos en la zona del taller.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`,
        background: `rgba(26, 121, 159, 1)`,
        width: '32em',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_coches_remolcados.onclick = () =>{
        Swal.fire({
            html: `    <div class="container roboto-mono contenedormaterialrodante">
            <div class="d-flex justify-content-center">
              <h1>COCHES ELECTRICOS</h1>
            </div>
            <div class="d-flex justify-content-center">
              <h3>EMU CSR-Mitsubishi</h3>
            </div>
            <div class="d-flex justify-content-center">
              <img
                class="mw-100 d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                src="/images/materialr1web.jpg"
                alt=""
              />
              <img
                class="mw-100 d-block d-sm-none position-relative"
                src="images/materialr1.jpg"
                alt=""
              />
              <div
                class="d-flex justify-content-center text-center position-absolute contenedor-material"
              >
                <div>
                  <p class="d-inline-flex gap-1">
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      CSR-Mitsubishi SMF23
                    </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                    >
                      UTA CAF Serie 3700
                    </button>
                  </p>
                  <div>
                    <div class="d-inline-flex">
                      <div class="collapse" id="collapseExample">
                        <a>
                          Flota: 30 formaciones de 6 coches cada una para los 3
                          ramales de la Línea Mitre. <br />En servicio: 22 formaciones
                          <br />Fuera de servicio: 8 formaciones <br />Motivos:
                          mantenimiento programado, falta de repuestos y desgaste
                          excesivo de llantas.<br />
                          Con los repuestos adecuados, se podrían incorporar al
                          servicio para aumentar la oferta.
                        </a>
                      </div>
                      <div class="collapse" id="collapseExample1">
                        <a>
                          Flota: 9 dulpas de 2 coches cada una, para el Tren de la
                          Costa.
                          <br />En servicio: 4 formaciones <br />Fuera de servicio: 5
                          formacione <br />Motivos: falta de repuestos para su
                          mantenimiento y puesta en valor.<br />Hay unidades
                          desmanteladas por robos en la zona del taller.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`,
        background: `rgba(26, 121, 159, 1)`,
        width: '32em',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    }