/*
En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------

getMinJump([2, 4, 6, 8, 10]); // -> 7

Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.
*/

function getMinJump1(obstacles) {
  const maxJump = Math.max(...obstacles) + 1;
  let isPerfectJump;
  let perfectJump;
  console.log(maxJump);
  for (let i = 1; i <= maxJump; i++) {
    isPerfectJump = true;
    perfectJump = i;
    console.log("Primer ciclo for: " + i);
    // Primer for para calcular los saltos
    for (let z = 0; z < maxJump; z += i) {
      console.log("Segundo ciclo for: " + z);
      // Segundo for para repetir los saltos y encontrar coincidencias
      if (obstacles.find(e => e === z)) {
        console.log("Dentro del if: " + z);
        isPerfectJump = false;
        break;
      }
    }
    if (isPerfectJump) break;
  }
  console.log(perfectJump);
  return perfectJump;
}

const getMinJump = (arr, jump = 1) => {
  let obstacles = arr;
  let maxObstacles = Math.max(...obstacles) + 1;
  let boolJump = [true];

  for (let index = 0; index < maxObstacles; index += jump) {
    boolJump.push(!obstacles.includes(index));
  }
  return !boolJump.includes(false) ? jump : getMinJump(obstacles, jump + 1);
};

console.log(getMinJump([1, 3, 4, 6])); // -> 5
//0 ,1 ,2 ,3 , 4, 5, 6, 7
console.log(getMinJump([1, 2, 3, 5])); // -> 4
console.log(getMinJump([3, 7, 5])); // -> 2
console.log(getMinJump([9, 5, 1])); // -> 2
console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
