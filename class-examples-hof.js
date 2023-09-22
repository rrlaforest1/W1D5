/**
 * ------- REDUCE --------
 */
// .reduce()
const array1 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 11
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue
)
array1.reduce((acc, curr) => {
	return acc + curr
}, 0)

console.log(sumWithInitial)
// Expected output: 10

/**
 * ------- FLAT ---------
 */
const arr1 = [[0, 1], 2, [3, 4]]

console.log(arr1.flat())
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]]

console.log(arr2.flat())
// expected output: Array [0, 1, 2,  [3,  [4, 5]]]

console.log(arr2.flat(2))
// expected output: Array [0, 1, 2, 3,  [4, 5]]

console.log(arr2.flat(Infinity))
// expected output: Array [0, 1, 2, 3, 4, 5]

/**
 * -------- AT ----------
 */

arrayAt = [2, 185, 45, 87, 66, -9, `Ironhack`]
let index = -1
console.log(
	`Using the index ${index} the items returned is ${arrayAt.at(index)}`
)

/**
 * --------- SORT -----------
 */
const students = [
	{ name: "victor", age: 20 },
	{ name: "roberta", age: 27 },
	{ name: "romain", age: 27 },
	{ name: "fabien", age: 30 },
	{ name: "raafat", age: 20 },
	{ name: "rony", age: 20 },
	{ name: "monika", age: 33 },
	{ name: "elena", age: 20 },
	{ name: "maria", age: 24 },
	{ name: "alexandre", age: 27 },
	{ name: "Zoro", age: 20 },
]

students.sort((studentA, studentB) => {
	if (studentA.age === studentB.age) {
		return studentA.name.localeCompare(studentB.name, undefined, {
			sensitivity: "base",
		})
	}
	return studentA.age - studentB.age
})

console.log(students)
// students.sort((nameA, nameB) => {
// 	return nameA.localeCompare(nameB, undefined, { sensitivity: "base" })
// })
// console.log(students)

const numbers = [1, 24, 12, 20234, 1000, 3000, 25000, 1, 1000]

numbers.sort((a, b) => {
	// if (a < b) {
	// 	return -1
	// } else if (a > b) {
	// 	return 1
	// } else {
	// 	return 0
	// }
	return b - a
})
console.log("Classified numbers: ", numbers)

const allnumbers = [-1, -24, 12, 20234, 1000, -3000, 25000, 1, 1000]

allnumbers.sort()
console.log(allnumbers)

/**
 * ---------- FILTER ------------
 */

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
const result = words.filter((word) => word.length > 6)
console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]

/**
 * ------------ MAP ---------------
 */

function multiplyNum(num) {
	return num * 2
}
const listOfNum = [1, 2, 3, 4, 5]
const newListONum = listOfNum.map(multiplyNum)
console.log(listOfNum)
// expected output [1, 2, 3, 4, 5]
console.log(newListONum)
// expected output [2, 4, 6, 8, 10]
// console.log(listOfNum.forEach(multiplyNum)) expected output undefined

const studentsNames = students.map((student) => {
	return student.name.toLowerCase()
})
/* Expected output : ["victor"
"roberta"
"romain"
"fabien"
"raafat"
"rony"
"monika"
"elena"
"maria"
"alexandre"
"zoro"]
 */

/**
 * ------ FIND --------
 */
const array = [5, -100, -209483, 7, 333, 999]

const dividedByThree = (item) => item % 3 === 0

const number = array.find(dividedByThree) //333
const isDividedByThree = array.some(dividedByThree) //true

console.log(isDividedByThree, number) ///true 333
console.log(typeof number) //number

array.find((element) => element < 0) //-100

/**
 * -------- SOME --------
 */
const cities = [
	"Paris",
	"Shlisselburg",
	"Courbevoie",
	"Maisons-Laffitte",
	"Shlisselburg",
]

const frenchCityFinder = (city) =>
	city === "Paris" || city === "Maisons-Laffitte" || city === "Courbevoie"

cities.some(frenchCityFinder)

cities.some((city) => city === "Shlisselburg") //true
cities.some((city) => city === "Berlin") //false

cities.some((city) => city.startsWith("C")) //true
cities.find((city) => city.startsWith("C")) //'Courbevoie'

/**
 *
 * ----- SPLICE ---------
 *
 */

//Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "mandarin", "surgeon"]
const removed = myFish.splice(2, 0, "drum")
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
//Remove 2 elements, starting from index 2
const myFish2 = ["parrot", "anemone", "blue", "trumpet", "surgeon"]
const removed1 = myFish2.splice(2, 2)
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
//Remove 1 element from index -2
const myFish3 = ["angel", "clown", "mandarin", "surgeon"]
const removed2 = myFish3.splice(-2, 1)
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

/**
 *
 * ------- EVERY -------
 *
 */

let numbersEvery = (currentValue) => currentValue < 100
const result1 = [9, 12, 98]
const result2 = [12, 150, 26]
console.log(result1.every(numbersEvery))
// exepted output true
console.log(result2.every(numbersEvery))
// exepted output false
