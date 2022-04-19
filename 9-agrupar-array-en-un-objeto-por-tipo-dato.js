/*
En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.


Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
*/

function groupBy(collection, it) {
  const result = {};

  if (typeof collection === "object") {
    collection = Object.values(collection);
  }

  collection.forEach(element => {
    let resultFunction;

    switch (typeof it) {
      case "function":
        resultFunction = it(element); // Math.floor(6.1,....)
        break;
      case "string":
        resultFunction = element[it]; // {age : 23}["age"] = 23
        break;
      default:
        break;
    }

    result[resultFunction]
      ? result[resultFunction].push(element)
      : (result[resultFunction] = [element]);
  });

  return result;
}

const groupBy2 = (collection, it) => {
  const evalIt = data => (typeof it === "function" ? it(data) : data[it]);
  return collection.reduce((acc, data) => {
    const solveIt = evalIt(data);
    solveIt in acc ? acc[solveIt].push(data) : (acc[solveIt] = [data]);
    return acc;
  }, {});
};

//Nos trae un montón de ejemplos:

groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000], timestamp =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
    { title: "Other Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }, { title: "Other Clean Code", rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
