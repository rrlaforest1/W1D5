const students = [
	{
		name: "Agathe",
	},
	{
		name: "Angelica",
	},
	{
		name: "Conrad",
	},
	{
		name: "Jose",
	},
	{
		name: "Katia",
	},
	{
		name: "Leia",
	},
	{
		name: "Lily",
	},
	{
		name: "Nicolas",
	},
	{
		name: "Rudy",
	},
]

// Create a random age beween 18 and 100 for all of you !
students.forEach((student) => {
	student.age = Math.floor(Math.random() * 82) + 18
})

// console.log(students)

students.forEach((student, index, array) => {
	console.log("Hello  ", student.name, index)
})

students.forEach(sayHi)

function sayHi(student, index) {
	console.log(
		`Hello ${student.name} you are ${student.age} years old apparently!`
	)
}

const arrayOfNumbers = [76, 34, 28]
arrayOfNumbers.forEach((elementWeAreIteratingOn) => {
	console.log(elementWeAreIteratingOn)
})

const multipliedNumbers = arrayOfNumbers.map((element) => {
	return element * 2
})

const studentsPresentingThemselves = students.map((student) => {
	return `Hey my name is ${student.name}, i am ${student.age}`
})

console.log(studentsPresentingThemselves)
console.log(arrayOfNumbers, multipliedNumbers)

Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

students.myForEach((student, index, myArray) => {
	console.log(student.name)
})

// for (let i =0; i< students.length; i++) {
//   console.log(students[i], i, students)
// }
