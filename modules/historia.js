export function botonhistoria() {

    const botonhistoria= document.getElementById("historia-boton")
    
    botonhistoria.onclick = ()=>{
        
      Swal.fire({
        html: `<div id="my-pdf" style="height: 600px;"></div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: "650px",
        showCloseButton: true,
        showConfirmButton: false,
      });
      var options = {
        height: "600px",
        fallbackLink: "<p>Este navegador no soporta PDFs en línea. Por favor <a href='[pdf]'>descarga el PDF</a> para verlo.</p>"
      };
      PDFObject.embed("./pdf.pdf", "#my-pdf", options);
        }  
    }
    