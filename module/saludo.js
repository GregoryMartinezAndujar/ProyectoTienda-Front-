let saludo = document.getElementById("saludo");

saludo.addEventListener("mouseover", () => {
  let p = document.createElement("p");
  saludo.textContent =
    "Sea bienvenido al supermercado de Gregory Espero que este listo para su compra";
});

saludo.addEventListener("mouseleave", () => {
  let p = document.createElement("p");
  saludo.textContent = "Supermercado de Gregory";
});
