class User {
	protected _firstName: string = ''
	private _lastName: string = ''

	set firstName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid name.')
		}
		this._firstName = name
	}

	set lastName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid lastname.')
		}

		this._lastName = name
	}

	get fullName() {
		return `${this._firstName} ${this._lastName}`
	}

	static role = 'USER'

	static greet() {
		console.log('Hello!')
	}
}

console.log(User)
User.greet()

const Robert = new User()
Robert.firstName = 'Robert'
Robert.lastName = 'Kowalski'
console.log(Robert.fullName)

class Employee extends User {
	constructor(public jobTitle: string) {
		super()
		this.firstName = `Employee ${this.firstName}`
	}

	showName() {
		console.log(this._firstName)
	}
}

abstract class UIElement {
	constructor(public identifier: string) {}

	clone(targetLocation: string) {
		// logic to duplicate the UI element
	}
}

class ProductCard extends UIElement {
	constructor(public identifier: string, public position: 'left' | 'right') {
		super(identifier)
	}
}
