/*El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
 */

function checkIsSameTree(treeA, treeB) {
  let treeAParse = Object.keys(treeA).sort();

  let treeBParse = Object.keys(treeB).sort();
  let newObject = {};
  let newObject1 = {};
  for (const a in treeAParse) {
    for (const [key, val] of Object.entries(treeA)) {
      if (treeAParse[a] == key) {
        newObject[treeAParse[a]] = val;
      }
    }
  }

  for (const a in treeBParse) {
    for (const [key, val] of Object.entries(treeB)) {
      if (treeBParse[a] == key) {
        newObject1[treeBParse[a]] = val;
      }
    }
  }

  return newObject == newObject1;
}

/*
const treeAParse = JSON.stringify(treeA).sort();
  const treeBParse = JSON.stringify(treeB).sort();
  return treeAParse == treeBParse; */
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

//checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

checkIsSameTree(tree, tree2); // false
//checkIsSameTree(tree2, tree2) // true
