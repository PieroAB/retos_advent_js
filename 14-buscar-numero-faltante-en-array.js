/*
¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
*/
function missingReindeer(ids) {
  for (let i = 0; i <= 100 + 1; i++) {
    if (ids.find(e => e === i) === undefined) return i;
  }
  return -1;
}
const missingForReindeer1 = ids => {
  for (let index = 0; index <= ids.length; index++) {
    if (!ids.includes(index)) return index;
  }
};
const missingReindeer2 = ids => {
  const idSort = ids.sort((a, b) => a - b);
  const missingNumber = idSort.reduce(
    (acc, id, i) => {
      return id + 1 < idSort[i + 1] ? id + 1 : acc;
    },
    idSort.length === 1 && idSort.at(idSort.length - 1) > 0
      ? 0
      : idSort.at(idSort.length - 1) + 1
  );

  return missingNumber;
};

const missingReindeer3 = ids =>
  (ids.length * (ids.length + 1)) / 2 - ids.reduce((sum, item) => sum + item);

missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
