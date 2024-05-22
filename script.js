import { animacionBotonesPortada } from './modules/animacionBotonesInicio.js';
import { portadaAnimada } from './modules/portadaAnimada.js';

import { iniciarMapaMitre } from './modules/mapaLienaMitre.js';
import { iniciarMapaSierra } from './modules/mapaTrenSierra.js';
import { iniciarMapaChaco } from './modules/mapaTrenChaco.js';
import { iniciarMapaAmores } from './modules/mapaTrenAmores.js';
import { iniciarMapaSalta } from './modules/mapaTrenSalta.js';
import { boton_servicios } from './modules/estadoDeServicio.js';
import { botonesMaterialRodante } from './modules/materialRodante.js';
import { botonesAlertsInfo } from './modules/botonesAlertInformacion.js';
import { boton_clarooscuro } from './modules/clarooscuro.js';
import { botonhistoria } from './modules/historia.js';

boton_clarooscuro();
botonhistoria ();
iniciarMapaMitre();
iniciarMapaChaco();
iniciarMapaAmores();
iniciarMapaSalta();
iniciarMapaSierra();
boton_servicios();
botonesAlertsInfo();
animacionBotonesPortada();
portadaAnimada()
botonesMaterialRodante()
