{/* <button id="btn-map-tr" class="position-absolute btn-map-tr btn">dedede</button>
<button id="btn-map-zr" class="position-absolute btn-map-zr btn">dedede</button>
<button id="btn-map-vc" class="position-absolute btn-map-vc btn">dedede</button>
<button id="btn-map-mr" class="position-absolute btn-map-mr btn">dedede</button>
<button id="btn-map-cos" class="position-absolute btn-map-cos btn">dedede</button> */}



export function iniciarMapaMitre() {
  const botonTrenesRegionales = document.getElementById("boton-t-r");

  botonTrenesRegionales.onclick = () => {
    Swal.fire({
      html: `<div class="justify-content-center" id="map"></div>
`,
      background: `rgba(32, 168, 222, 0.0)`,
      width: "35em",
      showCloseButton: true,
      showConfirmButton: false,
      
    });
    
    var map = L.map("map", {
      crs: L.CRS.Simple,
      minZoom: -1.5,
    });
      // const botonTigreRetiro = document.getElementById("btn-map-tr");

      // botonTigreRetiro.onclick = () => {
      //   Swal.fire({
      //     html: `<div class="justify-content-center" id="">holissss</div>`,
      //     background: `rgba(32, 168, 222, 0.0)`,
      //     width: "35em",
      //     showCloseButton: true,
      //     showConfirmButton: false,
      //   });}
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
    

    var infoIz = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/infoIz.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var infoDe = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/infoDe.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var infoAb = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/infoAb.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var infoAr = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/infoAr.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });



    var alertIz = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/alertIz.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var alertDe = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/alertDe.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var alertAb = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/alertAb.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });
    var alertAr = L.divIcon({
      className: "marker-container",
      html: '<div class="iconoalert"><img src="/images/alertAr.png" class="marker-icon"></div>',
      iconSize: [45, 45],
    });



    var imageUrl = "/images/planomitre1.png";
    var imageBounds = [
      [0, 0],
      [1131, 1131],
    ]; // Dimensiones de la imagen
    L.imageOverlay(imageUrl, imageBounds, { interactive: false }).addTo(map); // Desactivar la interactividad de la imagen

    map.setMaxBounds(imageBounds);

    map.fitBounds(imageBounds);
    // ------------------------------------------- Sector ep Mitre - Retiro --------------------------------------------


    var ret_mit_mark = L.marker([380, 465], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Coghlan - Bmé Mitre</b><br><b class="sansserif">Velocidad máxima: 40km/h.</br>Motivo: por desgaste de su infraestructura de vía debido a la falta de mantenimiento y renovación integral de la misma.<br/>Precauciones: entre 5 y 12km/h en algunos sectores por ingreso a terminal y cambios en mal estado.</b>'
      );


      var delta_mark = L.marker([880, 820], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Maipú - Delta</b><br><b class="sansserif">Velocidad máxima: 70km/h.<br/>Precauciones: entre 8 y 40km/h en algunos sectores debido a los ingresos a terminal, radios de curva y falta de mantenimiento de vía.</b>'
      );
    
    // ------------------------------------------- Sector ep Mitre - Retiro --------------------------------------------


    // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------

    var car_cap_mark = L.marker([1040, 340], { icon: alertIz })
    .addTo(map)
    .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Los Cardales - Capilla del señor</b><br><b class="sansserif">Velocidad máxima: 30km/h.</br>Motivo: infraestructura sin renovar, pasos a nivel sin barrera y mal estado de puentes</b>',
    );

    var tal_car_mark = L.marker([900, 340], { icon: infoIz })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">El talar - Los Cardales</b><br><b class="sansserif">Velocidad máxima: 80km/h.</br>Precauciones: 12-40km/h por pasos a nivel sin barrera, puentes sin renovar, mal estado de cambios de via y falta de cerramiento perimetral</b>'
      );

    var vic_tal_mark = L.marker([745, 630], { icon: myIcon3 })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Victoria - El Talar</b><br><b class="sansserif">velocidad máxima 30kmh/h</br>Motivo: Via sin renovar.</br>Precauciones: a 12 km/h por mal estado de puentes en general</b>'
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

    var suar_zar_mark = L.marker([965, 420], { icon: infoDe })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Suarez - Zarate</b><br><b class="sansserif">Velocidad maxima: 120kmh. Via renovada en 2014/h</br>Precauciones: entre 12 y 40km/h por mal estado de cambios, pasos a nivel sin barrera y faltante de durmientes/b>'
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

    var sua_ret_mark = L.marker([390, 340], { icon: infoIz })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Suarez - Emp. Maldonado</b><br><b class="sansserif">Velocidad maxima: 60/80km/h.</br>Precauciones: entre 5 y 30km/h por ingresos a terminal, pasos a nivel, puentes en general y mal estado de cambios</b>'
      );

    var ret_mal_mark = L.marker([40, 845], { icon: infoDe })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Retiro - Emp. Maldonado</b><br><b class="sansserif">Velocidad máxima: 70kmh/h. Vía renovada 2005</b>'
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
    L.polyline(ret_cog, { color: "rgba(200, 200, 0, 0.6)", weight: 10 }).addTo(
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
      color: "rgba(200, 200, 0, 0.6)",
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
      color: "rgba(200, 200, 0, 0.6)",
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
      color: "rgba(200, 200, 0, 0.6)",
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

    var nun_emp = L.marker([180, 760], { icon: infoDe })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Nuñez - Emp. Maldonado</b><br><b class="sansserif">Velocidad máxima: 60kmh/h</br>Motivo: Mal estado de tercer riel</b>'
      );
    var ret_emp = L.marker([100, 960], { icon: infoIz })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Retiro - Emp. Maldonado</b><br><b class="sansserif">Velocidad máxima: 80km/h. Vía renovada en 2005</b>'
      );
      var sanfer_nuñez = L.marker([550, 660], { icon: myIcon2 })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">San Fernando - Nuñez</b><br><b class="sansserif">Velocidad máxima: 30/40 km/h</br>Motivo: por mal estado de la infraestructura de vía</br>Precauciones: a 12 km/h por mal estado de los cambios</b>'
      );
      var sanfer_tigre = L.marker([880, 660], { icon: infoDe })
      .addTo(map)
      .bindPopup(
        '<b class="sansserif d-flex justify-content-center">Tigre - San Fernando</b><br><b class="sansserif">Velocidad máxima: 60 km/h. Última renovación de vía 1985</b>'
      );

    // ------------------------------------------- AP - Retiro - Tigre --------------------------------------------
  };
  
}
