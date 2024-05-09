import { animacionBotonesPortada } from './modules/animacionBotonesInicio.js';
import { portadaAnimada } from './modules/portadaAnimada.js';

import { iniciarMapaMitre } from './modules/mapaLienaMitre.js';
import { iniciarMapaSierra } from './modules/mapaTrenSierra.js';
import { iniciarMapaChaco } from './modules/mapaTrenChaco.js';
import { iniciarMapaSalta } from './modules/mapaTrenSalta.js';

import { botonesAlertsInfo } from './modules/botonesAlertInformacion.js';

iniciarMapaMitre();
iniciarMapaChaco();
iniciarMapaSalta();
iniciarMapaSierra();

botonesAlertsInfo();

animacionBotonesPortada();
portadaAnimada()

