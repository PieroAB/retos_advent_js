/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

*/
function canReconfigure1(from, to) {
  if (from.length !== to.length) return false;

  const fromObject = {};
  const toObject = {};

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (
      Object.keys(fromObject).includes(fromChar) &&
      fromObject[fromChar] !== toChar
    )
      return false;
    if (Object.keys(toObject).includes(toChar) && toObject[toChar] !== fromChar)
      return false;

    fromObject[fromChar] = toChar;
    toObject[toChar] = fromChar;
  }

  return true;
}

const canReconfigure = (from, to) => {
  if (from.length !== to.length) return false;
  let keysFrom = {};
  let reconfigure = true;
  for (let gift = 0; gift < from.length; gift++) {
    if (!(from[gift] in keysFrom) && !(to[gift] in keysFrom)) {
      keysFrom[from[gift]] = to[gift];
      console.log(keysFrom[from[gift]]);
      keysFrom[to[gift]] = from[gift];
    } else if (
      keysFrom[from[gift]] !== to[gift] ||
      keysFrom[to[gift]] !== from[gift]
    ) {
      reconfigure = false;
      break;
    }
  }
  return reconfigure;
};

let desde = "BAL";
let a = "LIB";
console.log(canReconfigure(desde, a)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

desde = "CON";
a = "JUU";
console.log(canReconfigure(desde, a)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

desde = "XBOX";
a = "XXBO";
console.log(canReconfigure(desde, a)); // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden desde transformación y la B no puede asignarse a la X que ya se asignó a otra)
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

desde = "XBOX";
a = "XOBX";
console.log(canReconfigure(desde, a)); // true

desde = "MMM";
a = "MID";
console.log(canReconfigure(desde, a)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

desde = "AA";
a = "MID";
console.log(canReconfigure(desde, a)); // false -> no tiene la misma longitud
