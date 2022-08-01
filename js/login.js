/** LIBRERIAS**/
export var section_administrador = document.getElementById("section_administrador");
export var section_login = document.getElementById("section_login");
export var header =  document.getElementById('header')


export var inputPassword = document.getElementById("password")
export var botonVer = document.getElementById("botonVer");
botonVer.addEventListener('click', verContraseña)

export function verContraseña(){
    if(inputPassword.type == "password"){
        inputPassword.type = "text"
        botonVer.src = "https://tinyurl.com/2p8pm2yx";
    }else{
        inputPassword.type = "password"
        botonVer.src = "https://tinyurl.com/2dzcdfec";
    }
}

// Librería de usuario

import {nav} from './componentes/Componentes-login.js';
import {form} from './componentes/Componentes-login.js';

import {Informacion} from './componentes/componentes-panel.js';

import {user} from "./username.js";
import { adminstrador } from "./administrador.js";

// Función de verificación de credenciales
export function login(username,password){

    for(let i = 0; i<=6;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Ahora tienes acceso");
                adminstrador();

            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}


