export let nav = document.getElementById('navUl')
nav.innerHTML = 
'<li>'+ '<a class="bt_Inicio" href="index.html">'+ 'Iniciar sesión'  +  '</a>'+ '</li>'
+'<li>'+ '<a class="bt_Registro" href="registro.html">'+ 'Registrarse'     +  '</a>'+ '</li>';

export let form = document.getElementById('iniciaFormu');
form.innerHTML = 
    '<form action id="login" class="formulario" autocomplete="off">'
        +'<h2>'+'Iniciar Sesión'+'</h2>'
            +'<label for="" class="user">'
                +'<h4>'+'Usuario '+'</h4>'
                +'<input type="text" id="username" placeholder="banetmy">'
            +'</label>'
            +'<label for="" class="password">'
                +'<h4>'+'Contraseña'+'</h4>'
                +'<div class="mostrar">'+'<input type="password" id="password" placeholder="123jmk">'+'<img class="botonVer" id="botonVer" src="https://tinyurl.com/2dzcdfec">'+'</div>'
            +'</label>'
        +'<button class="ingreso">'+'Ingresar'+'</button>'
        +'<button class="registro registra">'+'Registrarse'+'</button>'
    +'<img src="https://1000marcas.net/wp-content/uploads/2020/03/logo-Alibaba.png" alt="" class="logo">'
+'</form>';

export let rootPanel = document.getElementById('Panel');
   
rootPanel.innerHTML = 
 '<div id="opcionCarts_has_products">'+'Carts_has_products'+'</div>'
+'<div id="opcionCategory">'+'Category'+'</div>'
+'<div id="opcionOption">'+'Option'+'</div>'
+'<div id="opcionOrder_has_products">'+'Order_has_products'+'</div>'
+'<div id="opcionOrder_placed_user">'+'Order_placed_user'+'</div>'
+'<div id="opcionOrder">'+'Order'+'</div>'
+'<div id="opcionOrders_paid_creditcard">'+'Orders_paid_creditcard'+'</div>'
+'<div id="opcionProducts_belong_category">'+'Products_belong_category'+'</div>'
+'<div id="opcionProducts_has_options">'+'Products_has_options'+'</div>'
+'<div id="opcionProducts_sold_vendor">'+'Products_sold_vendor'+'</div>'
+'<div id="opcionProducts">'+'Products'+'</div>'
+'<div id="opcionShopping">'+'Shoping'+'</div>';

