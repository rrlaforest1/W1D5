/**
 * Cloning a value
 */

const a = 1;
let b = a;
console.log(b);
b += 2;

console.log(b, a);

/**
 *
 * Arrays and Object
 * When you create an Array or an Object, it will be given a specific address.
 * If you were to assign the already created array to an other variable
 * they will both point to the same address, they are the same.
 * Modifying one will modify the other.
 *
 */

const arr = [1, 2, 3];

const fakeCopy = arr;

fakeCopy.push(4);

console.log(arr, fakeCopy);
console.log(arr === fakeCopy);
// console.log(arr === [1, 2, 3, 4]);
/**
 * Shallow copy
 */

const shallowCopy = [...arr];

shallowCopy.push(5);
console.log(shallowCopy, arr);

const students = ["bob", "alice", "john"];

const copy = [...students];
copy.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

console.log(students, copy);

const cat = {
  name: "Illiu",
  colors: ["black", "white"],
};

const newCat = cat;

const copiedCat = { ...cat };
copiedCat.name = "Tigrou";
copiedCat.colors.push("Yellow");
console.log(copiedCat, cat);

newCat.name = "Felix";

console.log(cat, newCat);

/**
 * Deep copy
 */

const anotherCat = {
  name: "Zouzou",
  colors: ["black", "brown", "gray", "beautiful"],
};

const deepCopyOfCat = structuredClone(anotherCat);

deepCopyOfCat.colors.push("rainbow");

console.log(anotherCat, deepCopyOfCat);

const stringifiedCat = JSON.stringify(anotherCat);

console.log(typeof stringifiedCat);
const newCatAsObject = JSON.parse(stringifiedCat);
console.log(typeof newCatAsObject);

const deepCopyWithJSON = JSON.parse(JSON.stringify(anotherCat));

const fridge = [
  ["tomatoes", 5],
  ["cheese", 4],
  ["lettuce", 1],
];

const arrOfNumbers = [5, 6, 2, 9, 2, 8, 1, 6, 75, 92, 1];

const total = arrOfNumbers.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(total);

const newFridge = fridge.reduce(
  (acc, val) => {
    console.log(val);

    // if (val[0] in acc.ingredients) {
    //   acc.ingredients[val[0]] += val[1]
    // } else {
    //   acc.ingredients[val[0]] = val[1]
    // }
    console.log(val[0]);
    acc.ingredients[val[0]] = val[1];
    acc.total += val[1];
    return acc;
  },
  { ingredients: {}, total: 0 }
);
console.log(newFridge);
/**
 * {
 * ingredients: {
 *  tomatoes: 5,
 *  cheese: 4,
 *  lettuce: 1
 *  },
 *  total: 10
 * }
 */
