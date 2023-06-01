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