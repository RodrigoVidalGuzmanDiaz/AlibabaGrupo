
export let header = document.createElement("div");
header.innerHTML = 
'<header class="nav3">' +
        '<h1 class="nombre1" >Alibaba</h1>' +
        '<ul class="nav2">' +
            '<li > <h3 id="name" class="name"></h3>  </li>' +
            '<li> <a class="salir" href="formulario.html"> Cerrar sesión</a>  </li>' +
        '</ul> ' +
'</header>';

export function crear(){
    let div = document.querySelector("#header");

    div.appendChild(header);

}


