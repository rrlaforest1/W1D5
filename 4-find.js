/**
 * find syntax is exactly the same as filter
 * it expects us to return a boolean.
 * If we return true, the loop stops and it gives us the element
 * we were iterating on.
 */

const animals = ["marmotte", "elephant", "eagle"]

const firstAnimalStartingWithE = animals.find((animal) => {
	return animal.startsWith("e")
})
