export function botonhistoria() {

    const botonhistoria= document.getElementById("historia-boton")
    
    botonhistoria.onclick = ()=>{
        
      Swal.fire({
        html: `<div class="container">
        <div id="carouselExampler" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/images/historia/pdf_page-0001.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0002.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0003.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0004.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0005.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0006.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0007.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0008.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0009.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0010.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0011.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/historia/pdf_page-0012.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampler" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampler" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>`,
        background: `rgba(32, 168, 222, 0.0)`,
        width: "100%",
        showCloseButton: true,
        showConfirmButton: false,
      });
        }  
    }
    