
export function iniciarMapaSalta() {

const botonTrenesRegionales3 = document.getElementById("boton-t-r3")

botonTrenesRegionales3.onclick = ()=>{
  Swal.fire({
    html: `<div id="map"></div>`,
    background: `rgba(32, 168, 222, 0.0)`,
    width: "35em",
    showCloseButton: true,
    showConfirmButton: false,
  });
  var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -1.5,
  });

  var myIcon = L.divIcon({
    className: "marker-container",
    html: '<div class="iconoalert"><img src="/images/cautionIz.png" class="marker-icon"></div>',
    iconSize: [45, 45],
  });
  var myIcon2 = L.divIcon({
    className: "marker-container",
    html: '<div class="iconoalert"><img src="/images/cautionDe.png" class="marker-icon"></div>',
    iconSize: [45, 45],
  });
  var myIcon3 = L.divIcon({
    className: "marker-container",
    html: '<div class="iconoalert"><img src="/images/cautionAb.png" class="marker-icon"></div>',
    iconSize: [45, 45],
  });
  var myIcon4 = L.divIcon({
    className: "marker-container",
    html: '<div class="iconoalert"><img src="/images/cautionAr.png" class="marker-icon"></div>',
    iconSize: [45, 45],
  });

  var imageUrl = "/images/PlanoSalta.png";
  var imageBounds = [
    [0, 0],
    [1131, 1131],
  ]; // Dimensiones de la imagen
  L.imageOverlay(imageUrl, imageBounds, { interactive: false }).addTo(map); // Desactivar la interactividad de la imagen

  map.setMaxBounds(imageBounds);

  map.fitBounds(imageBounds);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

  var camp_gue_mark = L.marker([650, 340], { icon: myIcon2 })
    .addTo(map)
    .bindPopup(
      '<b class="roboto-mono d-flex justify-content-center">Guemes - Campo Quijano</b><br><b class="roboto-mono"> Velocidad máxima de vía: 40km/h. Infraestructura sin renovación.<br> Precauciones a 20km/h. debido a falta de cerramiento de perímetro.</b>'
    );

    var camp_gue = [
      [555, 215],
      [515, 255],
      [510, 265],
      [507, 275],
      [507, 285],
      [513, 300],
      [643, 430],
      [648, 440],
      [650, 450],
      [650, 900],

    ];
    L.polyline(camp_gue, {
      color: "rgba(200, 200, 0, 0.6)",
      weight: 10,
    }).addTo(map);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
    }  
}