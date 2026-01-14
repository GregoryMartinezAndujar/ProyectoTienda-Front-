import * as datos from "./leerDatos.js";

let productos = await datos.leerDatos();

let lista = JSON.parse(localStorage.getItem("listaCarrito"));

let carrito = [];

for (let i = 0; i < productos.length; i++) {
  for (let z = 0; z < lista.length; z++) {
    if (productos[i].id == lista[z]) {
      if (!carrito.includes(productos[i])) {
        carrito.push(productos[i]);
      }
    }
  }
}

let contenedor = document.createElement("div");
contenedor.classList.add("caja-padre-targeta-carrito");

let titulo = document.createElement("h1");
titulo.textContent = "Cesta de la compra";
titulo.classList.add("cabecera-productos");
titulo.id = "cabecera-productos";
document.body.appendChild(titulo);
function crearElemtosCarrito(producto) {
  let tarjeta = document.createElement("div");
  tarjeta.id = producto.id;
  tarjeta.classList.add("caja-targeta-carrito");
  let precio = document.createElement("p");
  precio.textContent = producto.price + "€";
  let img = document.createElement("img");
  img.src = producto.image;
  img.classList.add("img-tarjeta-carrito");

  let descripcion = document.createElement("p");
  descripcion.textContent = producto.description;

  let boton = document.createElement("button");
  boton.textContent = "Borrar de la cesta";

  boton.addEventListener("click", () => {
    let id = Number(producto.id);
    let index = lista.indexOf(id);
    if (index !== -1) {
      contenedor.removeChild(tarjeta);
      lista.splice(index, 1);
      localStorage.setItem("listaCarrito", JSON.stringify(lista));
    }
  });
  precio.appendChild(descripcion);
  tarjeta.appendChild(img);
  tarjeta.appendChild(precio);
  precio.appendChild(boton);
  contenedor.appendChild(tarjeta);
  document.body.appendChild(contenedor);
}

for (let i = 0; i < carrito.length; i++) {
  crearElemtosCarrito(carrito[i]);
}
let boton2 = document.createElement("button");
boton2.textContent = "Borrar";
boton2.addEventListener("click", () => {
  lista = [];
  localStorage.setItem("listaCarrito", JSON.stringify(lista));
});
document.body.appendChild(boton2);
