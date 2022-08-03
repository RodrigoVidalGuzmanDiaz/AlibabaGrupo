import {user} from "./username.js"
let name = document.getElementById("name");
export function nombres(){
    var  username = document.querySelector("#username").value;
    for(let i = 0; i<=7;i++){
        if(username == user[i][1]){
            name.innerHTML = user[i][1];
            
        }
    }

}
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('click',nombres); //<-- Evento
