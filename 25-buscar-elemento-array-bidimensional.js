/*

Ayer, en noche buena, una fam铆lia cen贸 por todo lo alto... Con tanta copa 馃嵕 encima todav铆a no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 馃惌, que vi贸 ayer el fest铆n escondido, est谩 relami茅ndose los bigotes al ver todos los manjares que hay en el comedor.

Eso s铆, hay que tener cuidado 馃樁 y s贸lo hacer los movimientos correctos para comer algo. Por eso, el rat贸n, que se ha visto los v铆deos de midudev, va a crear una funci贸n para saber si su pr贸ximo movimiento es correcto o no 鉁?.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posici贸n puede ser:

Un espacio vac铆o es que no hay nada
Una m es el rat贸n
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
隆Ten en cuenta que el rat贸n quiere buscar comida en diferentes habitaciones y que cada una puede 
tener dimensiones diferentes!

  鈫? X
  鈫? Y

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
