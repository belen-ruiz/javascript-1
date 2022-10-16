bandera = true

let total = 0

let remeraML = 1000
let remeraMC = 2000
let pijama = 3000


function pedirProd(){
    let agregarProducto = parseInt(prompt(`¿Qué productos desea agregar al carrito?:
    "1": Remera manga larga 
    "2": Remera manga corta 
    "3": Pijama `))
    return agregarProducto;
}


function agregarMasProducto (){
    let agregarMasProducto = prompt(`¿Desea seguir agregando productos?
    Seleccione cualquier letra para ontiunuar

    "ESC" para salir
    "C": para ver el total del carrito`);

    if(agregarMasProducto.toUpperCase() == "ESC"){
    bandera = false;
    alert("Gracias por utilizar nuestra tienda online!!")
    }

    else if(agregarMasProducto.toUpperCase() == "C"){
        bandera = false
        alert(`Su total final es de $ ${total}`)
    }   
} 

do{
    let producto = pedirProd()

    let mensaje = 
    (producto == 1) ? `¡Remera manga larga fue agregada a su carrito!`:
    (producto == 2) ? `¡Remera manga corta fue agregada a su carrito!` :
    (producto == 3) ? `¡Pijama fue agregado a su carrito!`: 

    `Opcion no corresponde!`;

    //devuelve el mensaje del producto agregado 
    alert(mensaje);

    mensaje = 
    (producto == 1) ? total = total + remeraML :
    (producto == 2) ? total = total + remeraMC :
    (producto == 3) ? total = total + pijama : 
    `Opcion no corresponde!`;

    //devuelve el mensaje del producto agregado 
    alert(`Su total es de $ ${mensaje}`);

    //pregunta si queremos seguir agregando/cerrando o ir al carrito
    agregarMasProducto();

}while(bandera)


