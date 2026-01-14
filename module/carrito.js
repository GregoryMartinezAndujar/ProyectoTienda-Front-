import * as datos from "./leerDatos.js";

let productos = await datos.leerDatos();
let enlace = document.createElement("a");

if (document.title === "Productos") {
  enlace.href = "../paginas/carrito.html";
} else {
  enlace.href = "./paginas/carrito.html";
}

let cabeceraProductos =
  document.getElementById("cabecera-productos") ||
  document.getElementById("menu");
let carrito = document.createElement("img");
carrito.src = "./img/emptyshoppingcart.png";

carrito.onerror = () => {
  carrito.src = "../img/emptyshoppingcart.png";
};

enlace.appendChild(carrito);
cabeceraProductos.appendChild(enlace);
