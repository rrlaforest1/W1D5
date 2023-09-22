/**
 * The syntax is really close to the forEach higher order function.
 *
 * Array.map((element, index, array) => {
 *   Do something and return the new value you want
 * })
 *
 * map allow us to create a new Array from the one we are iterating on
 * It does not mutate the original array
 */

const numbers = [1, 2, 3, 4]

const doubled = numbers.map((number) => {
	return number * 2
})

const students = [
	{ name: "Bob", age: 5 },
	{ name: "Alice", age: 5 },
]

// students.name
const onlyTheNames = students.map((student) => {
	return { firstname: student.name }
})

// [{firstname: "Bob"}, {firstname: "Alice"}]
