export function iniciarMapaChaco() {

const botonTrenesRegionales2 = document.getElementById("boton-t-r2")


botonTrenesRegionales2.onclick = ()=>{
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

  var imageUrl = "/images/PlanoChaco.png";
  var imageBounds = [
    [0, 0],
    [1131, 1131],
  ]; // Dimensiones de la imagen
  L.imageOverlay(imageUrl, imageBounds, { interactive: false }).addTo(map); // Desactivar la interactividad de la imagen

  map.setMaxBounds(imageBounds);

  map.fitBounds(imageBounds);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

  var saenz_choro_mark = L.marker([700, 550], { icon: myIcon })
    .addTo(map)
    .bindPopup(
      '<b class="sansserif d-flex justify-content-center">Saez Peña - Chorotis</b><br><b class="sansserif">Velocidad máxima de vía: 30/40 km/h.Infraestructura sin renovación.<br>Precauiones a 20km/h. debido a sectores con durmientes en mal estado.</b>'
    );

    var saenz_choro = [
      [50, 472],
      [960, 472],
      [970, 475],
      [985, 485],
      [991, 494],
      [993, 500],
      [995, 520],
      [995, 720],


    ];
    L.polyline(saenz_choro, {
      color: "rgba(200, 200, 0, 0.6)",
      weight: 10,
    }).addTo(map);

  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
    }  
}