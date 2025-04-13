// class Person {
// 	name: string
// 	age: number

// 	constructor(n: string, a: number) {
// 		this.name = n
//         this.age = a
// 	}

// }

class Person {
	readonly hobbies: string[] = []

	constructor(public name: string, private age: number) {
		this.name = name
		this.age = age
	}

	greet() {
		console.log(`My age ${this.age}`)
	}
}

const John = new Person('John', 21)
const Fred = new Person('Fred', 29)

// console.log(John.age)
console.log(John.name)

// John.hobbies = ['Rollerblades']
John.hobbies.push('Rollerblades')
