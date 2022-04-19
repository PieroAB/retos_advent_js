/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

function isValid(letter) {
  const symbols = ["[", "{", "()"];

  if (letter.includes("(") && letter.includes(")")) {
    const validateGift = symbols.some(sign => {
      return letter.includes(sign);
    });
    if (validateGift) return false;
    if (letter.indexOf(")") > letter.indexOf("(")) return true;
  }
  return false;
}

isValid("bici coche (balón) bici coche peluche");
isValid("peluche (bici [coche) bici coche balón");
