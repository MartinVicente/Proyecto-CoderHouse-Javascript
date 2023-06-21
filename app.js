// Array con productos
const stockProductos = [
  {
    id: 1,
    nombre: "Crash Bandicoot",
    cantidad: 1,
    desc: "El juego plataformero por excelencia",
    precio: 1000,
    img: "img/Crash.jpg",
  },
  {
    id: 2,
    nombre: "Mortal Kombat X",
    cantidad: 1,
    desc: "Luchas sangrientas clásicas, en su décima entrega",
    precio: 2200,
    img: "img/mortal.jpg",
  },
  {
    id: 3,
    nombre: "Pac Man",
    cantidad: 1,
    desc: "Cazar a los fantasmas, una pasión",
    precio: 970,
    img: "img/pacman.jpg",
  },
  {
    id: 4,
    nombre: "Dragon Ball Xenoverse",
    cantidad: 1,
    desc: "Dragon Ball renovado, Gokú al poder",
    precio: 1900,
    img: "img/dragonball.jpg",
  },
  {
    id: 5,
    nombre: "Naruto Ninja Storm 4",
    cantidad: 1,
    desc: "Naruto Shippuden para todo el mundo",
    precio: 1300,
    img: "img/naruto.jpg",
  },
  {
    id: 6,
    nombre: "Shingeki Final Attack",
    cantidad: 1,
    desc: "Attack on titan, al ataque en el mundo de los juegos",
    precio: 1000,
    img: "img/shingeki.jpg",
  },
  {
    id: 7,
    nombre: "League of Legends",
    cantidad: 1,
    desc: "Jugarlo es efectivamente la peor decisión de tu vida",
    precio: 800,
    img: "img/league.jpg",
  },
  {
    id: 8,
    nombre: "Call Of Duty Warzone",
    cantidad: 1,
    desc: "COD? Nunca son suficientes",
    precio: 2200,
    img: "img/callduty.jpg",
  },
  {
    id: 9,
    nombre: "Fifa 2019",
    cantidad: 1,
    desc: "El mejor simulador de fútbol en la actualidad, gráficos realistas",
    precio: 2400,
    img: "img/fifa.jpg",
  },
  {
    id: 10,
    nombre: "Fornite",
    cantidad: 1,
    desc: "Battle Royale combinado con construcción, Twitch allá vamos",
    precio: 650,
    img: "img/fornite.jpg",
  },
  {
    id: 11,
    nombre: "The Outlast Trials",
    cantidad: 1,
    desc: "Outlast llevado a un nuevo nivel, lucha por tu libertad",
    precio: 2340,
    img: "img/outlast.jpg",
  },
  {
    id: 12,
    nombre: "DOTA 2",
    cantidad: 1,
    desc: "Si LoL te parece un gran error, tratá con esta opción",
    precio: 800,
    img: "img/dota2.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

// Tarjetas producto
stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
    `;
  }
});
// Funciones carrito
// Agregar producto
const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)
  //Agrega cantidad si ya está en carrito
  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  }
  //Agrega producto nuevo
  else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()
};
// Muestra carrito
const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
          <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
          <p>Producto: ${nombre}</p>
          <p>Precio: $${precio}</p>
          <p>Cantidad: ${cantidad}</p>
          <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
    });
  }
  // Texto carrito sin artículos
  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Carrito vacío!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;
  //Cálculo monto carrito
  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

//Funciones

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
                <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
              <td>$${precio}</td>
              <td>${cantidad}</td>
              <td>$${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}
//Envío mail con confirmación compra
 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "Por favor, debes completar tu email y nombre",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }