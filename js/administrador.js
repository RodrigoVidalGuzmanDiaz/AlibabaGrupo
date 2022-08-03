import {section_administrador, section_login, header, headerPanel } from './login.js';

import {rootPanel} from './componentes/Componentes-login.js';
import {Informacion} from './componentes/componentes-panel.js';

Informacion()

export function adminstrador(){
    headerPanel.classList.remove('noFlex')
    headerPanel.classList.add('nav3')

    header.classList.remove('bloque2')
    header.classList.remove('bloque')
    header.classList.add('desactivar')
    
    

    section_administrador.classList.remove("block");
    section_login.classList.remove("activar-flex");
    
}
