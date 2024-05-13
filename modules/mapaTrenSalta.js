
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

  var imageUrl = "/images/planoSalta.png";
  var imageBounds = [
    [0, 0],
    [1131, 1131],
  ]; // Dimensiones de la imagen
  L.imageOverlay(imageUrl, imageBounds, { interactive: false }).addTo(map); // Desactivar la interactividad de la imagen

  map.setMaxBounds(imageBounds);

  map.fitBounds(imageBounds);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

  var car_cap_mark = L.marker([1040, 340], { icon: myIcon })
    .addTo(map)
    .bindPopup(
      '<b class="roboto-mono d-flex justify-content-center">Los Cardales - Capilla del señor</b><br><b class="roboto-mono">Sector de via a 30km/h sin renovar</b>'
    );

  var cap_car_mark = L.marker([900, 340], { icon: myIcon })
    .addTo(map)
    .bindPopup(
      '<b class="roboto-mono d-flex justify-content-center">El talar - Los Cardales</b><br><b class="roboto-mono">Secto de via a 80km/h renovada en 2023</b>'
    );

  var vic_tal_mark = L.marker([745, 630], { icon: myIcon3 })
    .addTo(map)
    .bindPopup(
      '<b class="roboto-mono d-flex justify-content-center">Victoria - El Talar</b><br><b class="roboto-mono">Sector de via a 30kmh/h no renovado</b>'
    );


    var camp_gue = [
      [555, 215],
      [500, 270],
    ];
    L.polyline(camp_gue, {
      color: "rgba(0, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
    }  
}