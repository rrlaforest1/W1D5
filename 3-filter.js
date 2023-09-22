/**
 * The syntax is really close to the map HoF
 * Filter create a new Array.
 * It expects us to return a boolean value,
 * if we return true, it is going to add the element we are iterating on
 * in the new Array.
 * It won't add it if we return false
 */

const numbers = [1, 2, 3, 4]

const evenNumbers = numbers.filter((number) => {
	// This return true or false
	return number % 2 === 0
})

const oddNumbers = numbers.find((number) => {
	if (number % 2 === 1 && number > 1) {
		return true
	} else {
		return false
	}
})
