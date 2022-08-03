import {section_administrador, section_login, header, header2 } from './login.js';

import {rootPanel} from './componentes/Componentes-login.js';
import {Informacion} from './componentes/componentes-panel.js';



Informacion()

export function adminstrador(){
   

    header2.classList.remove('noFlex')
    header2.classList.add('nav3')

    header.classList.remove('principal')

    header.classList.add('desactivar')

    section_administrador.classList.remove("block");
    section_login.classList.remove("activar-flex");
    
}
