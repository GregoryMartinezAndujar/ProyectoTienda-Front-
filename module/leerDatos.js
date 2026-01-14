async function leerDatos() {
  try {
    let respuesta = await fetch("https://fakestoreapi.com/products");
    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    let datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error.message);
  }
}

export { leerDatos };
