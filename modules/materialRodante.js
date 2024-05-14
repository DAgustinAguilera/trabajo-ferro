export function botonesMaterialRodante() {

    const boton_formaciones_electricas = document.getElementById("boton-formaciones-electricas");
    const boton_diesel_electricas = document.getElementById("boton-diesel-electricas");
    const boton_formaciones_diesel = document.getElementById("boton-formaciones-diesel");
    const boton_coches_remolcados = document.getElementById("boton-coches-remolcados");
   
    
    boton_formaciones_electricas.onclick = () =>{

        Swal.fire({
            html: `    <div class="container">
            <div class="d-flex justify-content-center"><h1>Titulo</h1></div>
            <div class="d-flex justify-content-center">
              <img class="mw-100 d-none d-xxl-block" src="/images/materialr1web.jpg" alt="">
              <img class="mw-100 d-block d-sm-none" src="images/materialr1.jpg" alt="" />
            </div>
            <div class="d-flex justify-content-center"><h1>Textaso</h1></div>
          </div>`,
        background: `rgba(32, 168, 222, 0.5)`,
        width: '85%',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_diesel_electricas.onclick = () =>{
        Swal.fire({
            html: `    <div class="container">
            <div class="d-flex justify-content-center"><h1>Titulo</h1></div>
            <div class="d-flex justify-content-center">
              <img class="mw-100 d-none d-xxl-block" src="/images/materialr1web.jpg" alt="">
              <img class="mw-100 d-block d-sm-none" src="images/materialr1.jpg" alt="" />
            </div>
            <div class="d-flex justify-content-center"><h1>Textaso</h1></div>
          </div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: '32em',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_formaciones_diesel.onclick = () =>{
        Swal.fire({
            html: `    <div class="container">
            <div class="d-flex justify-content-center"><h1>Titulo</h1></div>
            <div class="d-flex justify-content-center">
              <img class="mw-100 d-none d-xxl-block" src="/images/materialr1web.jpg" alt="">
              <img class="mw-100 d-block d-sm-none" src="images/materialr1.jpg" alt="" />
            </div>
            <div class="d-flex justify-content-center"><h1>Textaso</h1></div>
          </div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: '32em',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    boton_coches_remolcados.onclick = () =>{
        Swal.fire({
            html: `    <div class="container">
            <div class="d-flex justify-content-center"><h1>Titulo</h1></div>
            <div class="d-flex justify-content-center">
              <img class="mw-100 d-none d-xxl-block" src="/images/materialr1web.jpg" alt="">
              <img class="mw-100 d-block d-sm-none" src="images/materialr1.jpg" alt="" />
            </div>
            <div class="d-flex justify-content-center"><h1>Textaso</h1></div>
          </div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: '32em',
        showCloseButton: true,
        showConfirmButton: false,
        }
        );
    }
    }