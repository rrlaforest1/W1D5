/**
 * Sort is a bit trickier, it can be used without creating a callback
 * like so:
 * Array.sort()
 *
 * but the result might not be what you expect.
 * Be carefull as .sort() mutate the Array ! (it modifies it, it does not create a copy.)
 */

const numbers = [5, 4, 3, 2]

numbers.sort() // [2, 3, 4, 5]

const biggerNumbers = [1, 5, 10000, 25]

biggerNumbers.sort() //  [1, 10000, 25, 5]   Yup, you read that right.

const names = ["arnold", "bob", "Zoup", "ébi", "ebi"]
names.sort() // ['Zoup', 'arnold', 'bob']  Hummm....

// We usually provide a callback function to sort()
// This function receive two arguments, typically named a and b
// It expects to receive a positive / negative value or 0 if a and b are identicals.

// Ascending
biggerNumbers.sort((a, b) => {
	if (a > b) {
		return 1
	} else if (a < b) {
		return -1
	} else {
		return 0
	}
})

// Descending
biggerNumbers.sort((a, b) => {
	if (a > b) {
		return -1
	} else if (a < b) {
		return 1
	} else {
		return 0
	}
})

const oldDevs = [
	{ name: "Bob", age: 99 },
	{ name: "John", age: 50 },
	{ name: "Alice", age: 83 },
	{ name: "Anna", age: 50 },
	{ name: "Foo", age: 20 },
]

oldDevs.sort((a, b) => {
	if (a.age === b.age) {
		return b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
	}
	return a.age - b.age
})
// oldDevs.sort((a, b) => {
// 	return b.age - a.age
// })
console.log(oldDevs)

// ---- Easier
// Ascending
biggerNumbers.sort((a, b) => a - b)
// Descending
biggerNumbers.sort((a, b) => b - a)

// Ascending
names.sort((a, b) => {
	return a.localeCompare(b, undefined, { sensitivity: "base" })
})

// Descending
names.sort((a, b) => {
	return b.localeCompare(a, undefined, { sensitivity: "base" })
})
