const students = [
	{
		name: "Alexandre",
	},
	{
		name: "Elena",
	},
	{
		name: "Fabien",
	},
	{
		name: "Maria",
	},
	{
		name: "Monika",
	},
	{
		name: "Roberta",
	},
	{
		name: "Raafat",
	},
	{
		name: "Romain",
	},
	{
		name: "Rony",
	},
	{
		name: "Victor",
	},
]

// Create a random age beween 18 and 100 for all of you !
students.forEach((student) => {
	student.age = Math.floor(Math.random() * 82) + 18
})

function sayHi(element, index) {
	// console.log(element, index)
	// console.log(arr)
	console.log(`Hello ${element.name}, you are ${element.age} y-o !`)
}

students.forEach(sayHi)

students.forEach((student, i, arr) => {
	console.log(`Hey again ${student.name}!`)
})

// Say Hi !

let returnedValue = students.forEach((student) => {
	return student.age
})
console.log("forEach returns undefined", returnedValue)

function doNothing() {
	return 5
}

let x = doNothing()
console.log(x)

const isEven = (n) => n % 2 === 0

const sumOfEven = (a, b) => {
	if (isEven(a) && isEven(b)) {
		return a + b
	}
	throw Error("numbers are not even")
}

sum(5, 2, 8, 9, 6, 2356, 47, 89, 654, -643)

function sum(...numbers) {
	console.log("All of the arguments: ", numbers)
}

function assignPetsToUser(user, ...pets) {
	console.log("user: ", user, "pets: ", pets)
	user.ownedPets = pets
	return user
}

const user = { name: "Foo", age: 42, favoriteColor: "blue" }

const foo = assignPetsToUser(
	user,
	{ name: "bar" },
	{ name: "baz" },
	{ name: "fooffoo" }
)

console.log(foo)
