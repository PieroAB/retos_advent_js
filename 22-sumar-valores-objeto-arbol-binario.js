/*
¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.


countDecorations(bigTree) // 28
Por cierto, Bellf Gates me ha contado que este tipo de ejercicio es muy típico en las entrevistas de trabajo para programadores. ¿Lo sabías?
 */

function countDecorations1(bigTree) {
  // ¡No olvides compartir tu solución en redes!

  const { value, left, right } = bigTree;
  let sum = value;

  if (left !== null) sum += countDecorations(left);
  if (right !== null) sum += countDecorations(right);

  return sum;
}

const countDecorations = bigTree => {
  const arrTree = JSON.stringify(bigTree).split("");
  console.log(JSON.stringify(bigTree));
  console.log(arrTree);
  const findNodes = arrTree.filter(node => parseInt(node, 10));
  console.log(findNodes);
  const totalNode = findNodes.reduce(
    (acc, node) => acc + parseInt(node, 10),
    0
  );
  return totalNode;
};

// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

/* Gráficamente sería así:
      1
    /   \
   2     3
  
  1 + 2 + 3 = 6
  */

console.log(countDecorations(tree)); // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

/*
          1
        /   \
       5     6
      /     / \
     7     5   1
    /
   3
  */
