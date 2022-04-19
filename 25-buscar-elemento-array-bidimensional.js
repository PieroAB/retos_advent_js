/*

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede 
tener dimensiones diferentes!

  → X
  ↓ Y

*/

function canMouseEat(direction, game) {
  const [MOUSE, EAT] = ["m", "*"];

  let mouseXPosition;
  let mouseYPosition;

  game.forEach((_, idx) => {
    game[idx].forEach((item, idxItem) => {
      if (item === MOUSE) {
        mouseXPosition = idxItem;
        mouseYPosition = idx;
      }
    });
  });
  console.log(game[mouseYPosition]);

  if (direction === "up") --mouseYPosition;
  if (direction === "down") ++mouseYPosition;
  if (direction === "left") --mouseXPosition;
  if (direction === "right") ++mouseXPosition;

  if (game.length <= mouseYPosition < 0) return false;
  if (game[mouseYPosition].length <= mouseXPosition < 0) return false;

  return game[mouseYPosition][mouseXPosition] === EAT;
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log(canMouseEat("up", room)); // false
console.log(canMouseEat("down", room)); // true
console.log(canMouseEat("right", room)); // false
console.log(canMouseEat("left", room)); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

console.log(canMouseEat("up", room2)); // false
console.log(canMouseEat("down", room2)); // false
console.log(canMouseEat("right", room2)); // true
console.log(canMouseEat("left", room2)); // false
