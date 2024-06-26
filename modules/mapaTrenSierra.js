export function iniciarMapaSierra() {

const botonTrenesRegionales4 = document.getElementById("boton-t-r4")


botonTrenesRegionales4.onclick = ()=>{
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

  var imageUrl = "/images/PlanoCordoba.png";
  var imageBounds = [
    [0, 0],
    [1131, 1131],
  ]; // Dimensiones de la imagen
  L.imageOverlay(imageUrl, imageBounds, { interactive: false }).addTo(map); // Desactivar la interactividad de la imagen

  map.setMaxBounds(imageBounds);

  map.fitBounds(imageBounds);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

    var capM_valle = [
      [890, 145],
      [680, 145],

    ];
    L.polyline(capM_valle, {
      color: "rgba(0, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);

    var valle_cale = [
      [680, 145],
      [444, 145],
      [424, 155],
      [413, 175],
      [413, 710],
      [405, 732],
      [400, 739],
      [390, 745],
      [375, 748],
      [325, 748],
      [310, 758],
      [303, 765],
      [297, 778],
      [297, 850],

    ];
    L.polyline(valle_cale, {
      color: "rgba(0, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);

    var a_cordoba = [
      [390, 745],
      [375, 748],
      [325, 748],
      [260, 748],
      [245, 752],
      [232, 765],
      [228, 775],
      [228, 850],

    ];
    L.polyline(a_cordoba, {
      color: "rgba(0, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);
  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
    }  
}
