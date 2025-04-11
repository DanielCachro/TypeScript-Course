function add(a: number, b: number) {
	return a + b
}

function logAndThrow(errorMessage: string): never {
	console.log(errorMessage)
	throw new Error(errorMessage)
}

function log(message: string) {
	console.log(message)
}

function performJob(cb: (msg: string) => void) {
	// ...
	cb('Job done!')
}

performJob(log)

type User = {
	name: string
	age: number
	greet: () => string
}

let john: User = {
	name: 'John',
	age: 21,
	greet() {
		console.log('Hello there!')
		return this.name
	},
}

john.greet()
