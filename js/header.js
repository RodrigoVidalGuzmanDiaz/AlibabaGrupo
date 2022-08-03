
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


