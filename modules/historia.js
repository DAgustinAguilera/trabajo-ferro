export function botonhistoria() {

    const botonhistoria= document.getElementById("historia-boton")
    
    botonhistoria.onclick = ()=>{
        
      Swal.fire({
        html: `<iframe src="./ViewerJS/#../pdf.pdf" width="100%" height="650" allowfullscreen webkitallowfullscreen></iframe>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: "35rem",
        showCloseButton: true,
        showConfirmButton: false,
      });
        }  
    }
    