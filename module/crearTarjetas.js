import * as datos from "./leerDatos.js";
let productos = await datos.leerDatos();
console.log("hola");
console.log(productos);
let lista = JSON.parse(localStorage.getItem("listaCarrito")) || []; //creo el array en localStorage
let contenedor = document.createElement("div");
contenedor.classList.add("caja-padre-targeta");
let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li = document.createElement("li");
let a = document.createElement("a");
a.href = "../index.html";
a.appendChild(li);
li.textContent = "Volver al inicio";
ul.appendChild(a);
nav.appendChild(ul);
let titulo = document.createElement("h1");
titulo.textContent = "Productos Disponibles";
titulo.classList.add("cabecera-productos");
titulo.id = "cabecera-productos";
header.appendChild(titulo);
header.appendChild(nav);
document.body.appendChild(header);

function crearTarjetas(producto) {
  let tarjeta = document.createElement("div");
  tarjeta.id = producto.id;
  tarjeta.classList.add("caja-targeta");
  let boton = document.createElement("button");
  boton.textContent = "añadir a carrito";

  boton.addEventListener("click", (e) => {
    if (!lista.includes(e.target.parentElement.id)) {
      lista.push(e.target.parentElement.id);
      localStorage.setItem("listaCarrito", JSON.stringify(lista));
    }
    // gurado el array actulizado
  });
  let img = document.createElement("img");
  img.src = producto.image;
  img.classList.add("img-tarjeta");
  let descripcion = document.createElement("p");
  let precio = document.createElement("p");
  descripcion.textContent = producto.description;
  precio.textContent = producto.price + " €";
  tarjeta.appendChild(img);
  // tarjeta.appendChild(descripcion);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(boton);
  contenedor.appendChild(tarjeta);
  document.body.appendChild(contenedor);
}

function crearProducto() {
  for (let i = 0; i < productos.length; i++) {
    crearTarjetas(productos[i]);
  }
}

export { crearProducto, crearTarjetas };
