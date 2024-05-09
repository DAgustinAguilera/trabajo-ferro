export function iniciarMapaChaco() {

const botonTrenesRegionales2 = document.getElementById("boton-t-r2")


botonTrenesRegionales2.onclick = ()=>{
  
    Swal.fire({
      html: `<div id="map"></div>`,
      background: `rgba(32, 168, 222, 0.0)`,
      width: '32em',
      showCloseButton: true,
      showConfirmButton: false,
    });
      var map = L.map('map', {
          crs: L.CRS.Simple,
          minZoom: -1 
      });
  
      var myIcon = L.icon({
        iconUrl: '/images/caution.png',
        iconSize: [40 , 40],
        className: 'iconoalert'
    });
  
      var imageUrl = '/images/PlanoChaco.png';
      var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
      L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen
  
      map.setMaxBounds(imageBounds);
  
      map.fitBounds(imageBounds);
  
      var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
      .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();
  
      var marker2 = L.marker([1060, 288],{icon: myIcon}).addTo(map)
      .bindPopup("<b>Punto 2</b><br>");
  
     var marker3 = L.marker([700, 500],{icon: myIcon}).addTo(map)
      .bindPopup("<b>Punto 3</b><br>Descripción del punto 3.");
  
      var latlngs = [
        [1060, 288], // Coordenadas iniciales
        [1000, 288], // Coordenadas finales
      ];
      var polyline = L.polyline(latlngs, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
      
      var latlngs2 = [
        [1000, 288], // Coordenadas iniciales
        [750, 288], // Coordenadas finales
      ];
      var polyline2 = L.polyline(latlngs2, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);
  
  
      // Añadir un popup a la línea
      polyline.bindPopup("Tramo clausurado por estado de via").closePopup();
      polyline2.bindPopup("Tramo renovado").closePopup();
  
    }  
}