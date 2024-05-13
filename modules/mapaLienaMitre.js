export function iniciarMapaMitre() {
  const botonTrenesRegionales = document.getElementById("boton-t-r");

  botonTrenesRegionales.onclick = () => {
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

    var imageUrl = "/images/planomitre.png";
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

    // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

    var car_cap = [
      [1060, 288], // Coordenadas iniciales
      [980, 288], // Coordenadas finales
    ];
    L.polyline(car_cap, { color: "rgba(255, 0, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var car_tal = [
      [975, 288], // Coordenadas iniciales
      [730, 288],
      [710, 297], // Coordenadas finales
    ];
    L.polyline(car_tal, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var tal_vic = [
      [710, 297],
      [695, 320], // Coordenadas iniciales
      [695, 710], // Coordenadas finales
    ];
    L.polyline(tal_vic, { color: "rgba(200, 200, 0, 0.6)", weight: 10 }).addTo(
      map
    );

    // ------------------------------------------- Sector ep capilla del señor - victoria --------------------------------------------

    // ------------------------------------------- Sector ep Zarate - Suarez --------------------------------------------

    var suar_zar_mark = L.marker([965, 420], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Suarez - Zarate</b><br><b class="roboto-mono">Sector de via a 120kmh/h renovado en 2014</b>'
      );

    var car_cap = [
      [1090, 463], // Coordenadas iniciales
      [760, 463],
      [597, 304],
      [592, 302],
    ];
    L.polyline(car_cap, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var zua_ball = [
      [592, 302],
      [490, 302],
    ];
    L.polyline(zua_ball, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    // ------------------------------------------- Sector ep Zarate - Suarez --------------------------------------------

    // ------------------------------------------- Sector bp Retiro - Suarez --------------------------------------------
    var zua_ret = [
      [598, 288],
      [365, 288],
      [345, 288],
      [330, 295],
      [316, 320],
      [316, 390],
      [295, 420],
      [290, 425],
      [115, 600],
      [112, 605],
      [108, 615],
      [108, 825],
      [100, 840],
      [20, 920],
    ];
    L.polyline(zua_ret, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var sua_ret_mark = L.marker([390, 340], { icon: myIcon })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Suarez - Emp. Maldonado</b><br><b class="roboto-mono">Sector de via a 60/80km/h renovada</b>'
      );

    var ret_mal_mark = L.marker([40, 845], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Retiro - Emp. Maldonado</b><br><b class="roboto-mono">Sector de via a 70kmh/h renovado en 2005</b>'
      );
    // ------------------------------------------- Sector bp Retiro - Suarez --------------------------------------------

    // ------------------------------------------- TDC --------------------------------------------

    var ret_cog = [
      [250, 515],
      [230, 515],
      [225, 515],
      [220, 518],
      [128, 603],
      [125, 608],
      [121, 618],
      [121, 828],
      [113, 843],
      [33, 923],
    ];
    L.polyline(ret_cog, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var cog_mit = [
      [439, 584],
      [439, 563],
      [435, 552],
      [408, 524],
      [398, 518],
      [395, 517],
      [390, 515],
      [250, 515],
    ];
    L.polyline(cog_mit, {
      color: "rgba(200, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);

    var cog_mit = [
      [911, 869],
      [505, 869],
      [495, 867],
      [490, 866],
      [450, 828],
      [444, 820],
      [442, 815],
      [440, 810],
      [439, 805],
      [439, 584],
    ];
    L.polyline(cog_mit, {
      color: "rgba(200, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);

    // ------------------------------------------- TFC --------------------------------------------
    // ------------------------------------------- AP - Retiro - Tigre --------------------------------------------

    var sanfer_emp = [
      [800, 705],
      [290, 705],
      [270, 710],
      [217, 762],
    ];
    L.polyline(sanfer_emp, {
      color: "rgba(200, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);
    var tigre_sanfer = [
      [911, 705],
      [800, 705],
    ];
    L.polyline(tigre_sanfer, {
      color: "rgba(0, 128, 0, 0.600)",
      weight: 10,
    }).addTo(map);
    var emp_ret = [
      [120, 856],
      [42, 935],
    ];
    L.polyline(emp_ret, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );
    var emp_ret = [
      [217, 762],
      [120, 856],
    ];
    L.polyline(emp_ret, { color: "rgba(0, 128, 0, 0.600)", weight: 10 }).addTo(
      map
    );

    var nun_emp = L.marker([180, 760], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Nuñez - Emp. Maldonado</b><br><b class="roboto-mono">Sector de via a 60kmh/h por tercel riel sin renovar</b>'
      );
    var ret_emp = L.marker([100, 960], { icon: myIcon })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Retiro - Emp. Maldonado</b><br><b class="roboto-mono">Sector de via a 80km/h via renovada en 2005</b>'
      );
      var sanfer_nuñez = L.marker([550, 660], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">San Fernando - Nuñez</b><br><b class="roboto-mono">Sector de via a 30/40 km/h por estado de infrastructura</b>'
      );
      var sanfer_tigre = L.marker([880, 660], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="roboto-mono d-flex justify-content-center">Tigre - San Fernando</b><br><b class="roboto-mono">Sector de via a 60 km/h por estado de via ultima renovacion 1985</b>'
      );
    // ------------------------------------------- AP - Retiro - Tigre --------------------------------------------
  };
}
