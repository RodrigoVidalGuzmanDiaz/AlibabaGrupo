
export let header = document.createElement("div");
export var headerPanel = document.getElementById('headerPanel')
headerPanel.innerHTML = 

        '<h1 class="nombre1" >Alibaba</h1>' +
        '<ul class="nav2">' +
            '<li > <h3 id="name" class="name"></h3>  </li>' +
            '<li> <a class="salir" href="formulario.html"> Cerrar sesión</a>  </li>' ;

export function crear(){
    let div = document.querySelector("#header");

    div.appendChild(header);

}


