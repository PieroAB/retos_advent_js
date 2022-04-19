/*
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:



*/

function contains(store, product) {
  //Convertir el objeto a un JSON para eliminar los espacios y que se pueda usar el includes
  const arrDrawer = JSON.stringify(store);
  const searhProduct = arrDrawer.includes(`:"${product}"`);
  return searhProduct;
}

// Segunda forma de buscar un valor en un objeto con recursividad

const otherContains = (store, product) => {
  for (const i in store) {
    if (typeof store[i] === "object") {
      if (otherContains(store[i], product)) return true;
    }
    if (typeof store[i] === "string") {
      if (store[i] == product) {
        return true;
      }
    }
  }
  return false;
};

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

contains(almacen, "camiseta"); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

contains(otroAlmacen, "gameboy"); // false
otherContains(otroAlmacen, "gameboy"); // false
