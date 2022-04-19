/*
¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...

*/

function wrapGifts(gifts) {
  switch (gifts.length) {
    case 0:
      return gifts;
    default: {
      const result = [];
      const maxLength = Math.max(...gifts.map(e => e.length)) + 2;
      console.log(maxLength);
      const baseString = "".padStart(maxLength, "*");

      result.push(baseString);

      gifts.forEach(element => {
        result.push(`*${element}*`);
      });

      result.push(baseString);

      return result;
    }
  }
}

console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]*/
