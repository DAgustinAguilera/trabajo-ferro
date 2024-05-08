export function iniciarMapaMitre() {

const botonTrenesRegionales = document.getElementById("boton-t-r")

botonTrenesRegionales.onclick = ()=>{
  
    Swal.fire({
      html: `<div id="map"></div>`,
      background: `rgba(32, 168, 222, 0.0)`,
      width: '35em',
      showCloseButton: true,
      showConfirmButton: false,
    });
      var map = L.map('map', {
          crs: L.CRS.Simple,
          minZoom: -1.5
      });
  
      var myIcon = L.icon({
        iconUrl: '/images/caution.png',
        iconSize: [40 , 40],
        className: 'iconoalert'
    });
  
      var imageUrl = 'https://i.ibb.co/6rVGpdm/planomitre.png';
      var imageBounds = [[0, 0], [1131, 1131]]; // Dimensiones de la imagen
      L.imageOverlay(imageUrl, imageBounds, {interactive: false}).addTo(map); // Desactivar la interactividad de la imagen
  
      map.setMaxBounds(imageBounds);
  
      map.fitBounds(imageBounds);
  
  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
  
      var marker1 = L.marker([856, 1011], {icon: myIcon}).addTo(map)
      .bindPopup("<b>Punto 1</b><br>Descripción del punto 1.").closePopup();
  
      var car_cap_mark = L.marker([1040, 330],{icon: myIcon}).addTo(map)
      .bindPopup("<b>Los Cardales - Capilla del señor</b><br>Sector de via a 30km/h sin renovar<br>");
  
      var cap_car_mark = L.marker([900, 330],{icon: myIcon}).addTo(map)
      .bindPopup("<b>El talar - Los Cardales</b><br>Secto de via a 80km/h renovada en 2023<br>");
  
     var vic_tal_mark = L.marker([730, 630],{icon: myIcon}).addTo(map)
      .bindPopup("<b>Victoria - El Talar</b><br>Sector de via a 30kmh/h no renovado en estado critico");
  
  // ------------------------------------------- Sector ep capilla del señor victoria --------------------------------------------
  
      var car_cap = [
        [1060, 288], // Coordenadas iniciales
        [980, 288], // Coordenadas finales
      ];
      L.polyline(car_cap, {color: 'rgba(255, 0, 0, 0.600)',weight: 10}).addTo(map);
      
      var car_tal = [
        [975, 288], // Coordenadas iniciales
        [730, 288],
        [710, 297], // Coordenadas finales
      ];
      L.polyline(car_tal, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);
  
      var tal_vic = [
        [710, 297],
        [695, 320], // Coordenadas iniciales
        [695, 710], // Coordenadas finales
      ];
      L.polyline(tal_vic, {color: 'rgba(200, 200, 0, 0.6)',weight: 10}).addTo(map);
  
  // ------------------------------------------- Sector ep capilla del señor - victoria --------------------------------------------
  
  // ------------------------------------------- Sector ep Zarate - Suarez --------------------------------------------
  
      var vic_tal_mark = L.marker([950, 420],{icon: myIcon}).addTo(map)
      .bindPopup("<b>Suarez - Zarate</b><br>Sector de via a 120kmh/h renovado en 2014");
  
  
      var car_cap = [
        [1090, 463], // Coordenadas iniciales
        [760, 463],
        [597, 304],
        [592, 302],
      ];
      L.polyline(car_cap, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);
      
  
      var zua_ball = [
        [592, 302],
        [490, 302],
  
      ];
      L.polyline(zua_ball, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);
  
  
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
      L.polyline(zua_ret, {color: 'rgba(0, 128, 0, 0.600)',weight: 10}).addTo(map);
  // ------------------------------------------- Sector ep Zarate - Suarez --------------------------------------------
  
  }  }
