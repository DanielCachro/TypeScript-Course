let userName: string
let userAge = 38

//...

userName = 'John Doe'

function add(a: number, b = 5) {
	return a + b
}

add(10, 6)
// add('10', 6)
