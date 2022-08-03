
export let headerP = document.createElement("div");
export let header2 = document.getElementById('header2');
header2.innerHTML = 

        '<h1 class="nombre1" >Alibaba</h1>' +
        '<ul class="nav2">' +
            '<li > <h3 id="name" class="name"></h3>  </li>' +
            '<li> <a class="salir" href="formulario.html"> Cerrar sesión</a>  </li>' +
        '</ul> ';

export function crear(){
    let div = document.querySelector("#header");

    div.appendChild(headerP);

}
import {user} from "./username.js"
let name = document.getElementById("name");
export function nombres(){
    var  username = document.querySelector("#username").value;
    for(let i = 0; i<=6;i++){
        if(username == user[i][1]){
            name.innerHTML = user[i][1];

        }
    }
    
}
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('click',nombres); //<-- Evento

