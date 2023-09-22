//  Array.forEach((element, index, array) => {
//    Do something
// })

/**
 * We don't necesarily need to write down the `index` and `array` parameters.
 * If you just want to log every single element for instance, you just need
 * the very first parameter.
 */

const numbers = [1, 2, 3, 4]

numbers.forEach((number) => {
	console.log(number)
})

// forEach returns undefined, it does not gives us a new Array.
