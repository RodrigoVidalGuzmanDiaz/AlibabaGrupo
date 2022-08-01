import {section_administrador, section_login, header} from './login.js';

import {rootPanel} from './componentes/Componentes-login.js';
import {Informacion} from './componentes/componentes-panel.js';

Informacion()

export function adminstrador(){
    header.classList.remove('activar-flex')
    header.classList.add('desactivar')
    
    section_administrador.classList.remove("block");
    section_login.classList.remove("activar-flex");
    
}
