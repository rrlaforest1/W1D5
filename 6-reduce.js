/**
 * Reduce is the swiss army knife of the HoF
 * It can do everything, the other HoF do.
 * Malleability is great but obviously it makes it more complex.
 * The simplest use-case of reduce is to make a sum of an Array of numbers
 */

const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((acc, val) => acc + val, 0)

/**
 * Reduce is going to receive two parameters:
 * - a function (with two parameters as well)
 * - a starting value (0 in our case, because we are doing a sum)
 */

/**
 * The callback function receive two parameters we typically call them
 * - accumulator
 * - value
 *
 * Accumulator is going to be your starting value, which we are going to modify
 * throughout the iterations, in our case it is going to accumulate the sum :)
 *
 * Value is going to be the element we are currently iterating on.
 *
 */

const otherSum = numbers.reduce((acc, val) => {
	console.log(acc, val)
	return acc + val
}, 0)
