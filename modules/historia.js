export function botonhistoria() {

    const botonhistoria= document.getElementById("historia-boton")
    
    botonhistoria.onclick = ()=>{
        
      Swal.fire({
        html: `<div id="pdf-container"></div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: "100%",
        showCloseButton: true,
        showConfirmButton: false,
      });
           // Obtener el contenedor del PDF
  const container = document.getElementById('pdf-container');

  // Ruta del PDF
  const pdfUrl = './pdf.pdf';

  // Cargar el PDF
  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    // Número total de páginas en el PDF
    const numPages = pdf.numPages;

    // Mostrar cada página en el contenedor
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      pdf.getPage(pageNum).then(page => {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);

        // Escala para ajustar el tamaño del canvas
        const viewport = page.getViewport({ scale: 0.7 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Renderizar la página en el canvas
        const context = canvas.getContext('2d');
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
    }
  });
        }  
    }
    