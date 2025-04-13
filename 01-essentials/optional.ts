function generateError(msg?: string) {
	throw new Error(msg)
}

generateError()
generateError('Error occured!')

type User = {
	name: string
	age: number
	role?: 'admin' | 'guest'
}

const John: User = {
	name: 'John',
	age: 21,
}

let input = ''
const didProvideInput = input ?? false


