/**
 * Differences between arrow and function declaration
 * Hoisting (function declaration are put at the top of your file)
 *  -> With the function keyword
 *
 * Arrow function have implicit return
 *
 * An arrow function doesn't have a `this` keyword
 * More on that later
 */
// hoisting

// console.log(something)

// let something = "My sentence"

sayHello("Agathe")

// Implicit return right there
const sayGoodNight = (name) => `Good night ${name}`
// Not hoisted, even if we use the function keyword
// const anotherOne = function () {}

const sayGoodNightWithReturn = (name) => {
	return `Good night ${name}`
}

sayGoodNight("Florian")

function sayHello(name) {
	return `Hello ${name}!`
}

const getRandomElement = (array) =>
	array[Math.floor(Math.random() * array.length)]

const myArray = [5, 6, 2]

myArray[2]

const getRandomElementWithReturn = (array) => {
	console.log(array)
	return array[Math.floor(Math.random() * array.length)]
}

getRandomElement(["potato", "cat", "dog"])
getRandomElementWithReturn(myArray)

function* synchronousIds() {
	let i = 0
	while (true) {
		i++
		yield i
	}
}

const generateId = synchronousIds()

console.log(generateId.next())
console.log(generateId.next())
console.log(generateId.next())
