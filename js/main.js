// Creación clase producto
class Producto{
    constructor(id, nombre, precio, seccion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.seccion = seccion;
    }
}

//Creación objetos productos y push al array
const productos = [];
const remera = new Producto(1, "Remera", 1500, "Indumentaria");
const camisa = new Producto(2, "Camisa", 2300, "Indumentaria");
const vestido = new Producto(3, "Vestido", 2750, "Indumentaria");
const notebook = new Producto(4, "Notebook", 85000, "Electrónica");
const celular = new Producto(5, "Celular", 65000, "Electrónica");
const computadora = new Producto(6, "Computadora", 130000, "Electrónica");
const aros = new Producto(7, "Aros", 1000, "Joyería");
const collar = new Producto(8, "Collar", 1200, "Joyería");
const pulsera = new Producto(9, "Pulsera", 900, "Joyería");

productos.push(remera, camisa, vestido, notebook, celular, computadora, aros, collar, pulsera);

//Funciones calculo
function precioEfectivo(precio, cantidad, descuento){
    let total = precio * cantidad * descuento;
    return total;
}

function precioTarjeta(precio, cantidad){
    let total = precio * cantidad;
    return total;
}



























































/*
let botonComprar = document.getElementsByClassName("buy_bt");




localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let boton = document.getElementById("Eliminar");
let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
    carrito = JSON.parse(carritoStorage);
}else{
    let div = document.createElement("div");
    div.innerHTML = "El carrito está vacío";
    document.body.append(div);
}

carrito.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML= `
        <h2>ID: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>Precio: ${item.precio}</b>
        <hr/>
    `;
    document.body.append(div);
});

boton.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito eliminado");
    location.reload(); //recarga la página sin tener que darle F5, para que me tome cambios como borrar el carrito o cosas así
});













let div1 = document.getElementById("fashion_section");
let parrafo1 = document.createElement("p");
parrafo1.innerHTML = "<p> Lo que va en el carrito </p>"
div1.append(parrafo1);


let div2 = document.getElementById("electronic_section");
let parrafo2 = document.createElement("p");
parrafo2.innerHTML = "<p> Lo que va en el carrito </p>"
div2.append(parrafo2);


let div3 = document.getElementById("jewellery_section");
let parrafo3 = document.createElement("p");
parrafo3.innerHTML = "<p> Lo que va en el carrito </p>"
div3.append(parrafo3);






















/*
// Prompts y alerts
let seccion = prompt("Bienvenido! Por favor, ingrese el número de la sección a la que desea ingresar: 1- Indumentaria, 2-Electrónica, 3-Joyería");

if(seccion == 1){
    let indumentaria = productos.filter((item) => item.seccion === "Indumentaria");
    indumentaria.forEach(item =>
        alert(`Item Nº${item.id}, Producto: ${item.nombre}, Precio: $${item.precio}`)
    )

    let producto = prompt("Seleccione el número de producto que desea comprar");    
    let cantidad = prompt("Ingrese la cantidad que desea");
    let medioDePago = prompt("Ingrese el medio de pago: 1- Efectivo (10% dto), 2- Tarjeta");

    if(producto == 1){
        let precio = remera.precio;        
        if(medioDePago == 1){      
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }        
    }else if(producto == 2){
        let precio = camisa.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }else{
        let precio = vestido.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }
}else if(seccion == 2){
    let electronica = productos.filter((item) => item.seccion === "Electrónica");
    electronica.forEach(item =>
        alert(`Item Nº${item.id}, Producto: ${item.nombre}, Precio: $${item.precio}`)
    );

    let producto = prompt("Seleccione el número de producto que desea comprar:");
    let cantidad = prompt("Ingrese la cantidad que desea");
    let medioDePago = prompt("Ingrese el medio de pago: 1- Efectivo (10% dto), 2- Tarjeta");

    if(producto == 4){
        let precio = notebook.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }        
    }else if(producto == 5){
        let precio = celular.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }else{
        let precio = computadora.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }
}else{
    let joyeria = productos.filter((item) => item.seccion === "Joyería");
    joyeria.forEach(item =>
        alert(`Item Nº${item.id}, Producto: ${item.nombre}, Precio: $${item.precio}`)
    );

    let producto = prompt("Seleccione el número de producto que desea comprar:");
    let cantidad = prompt("Ingrese la cantidad que desea");
    let medioDePago = prompt("Ingrese el medio de pago: 1- Efectivo (10% dto), 2- Tarjeta");

    if(producto == 7){
        let precio = aros.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }        
    }else if(producto == 8){
        let precio = collar.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }else{
        let precio = pulsera.precio;        
        if(medioDePago == 1){
            alert(`El total de su compra es de $${precioEfectivo(precio, cantidad, 0.9)}`);
        }else{
            alert(`El total de su compra es de $${precioTarjeta(precio, cantidad)}`);
        }
    }
}
*/