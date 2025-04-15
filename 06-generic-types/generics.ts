let names: Array<string> = ['Max', 'Anna']

type DataStore<T> = {
	[key: string]: T
}

let store: DataStore<string | boolean> = {}
store.name = 'John'
store.isAdmin = true

function merge<T, U>(a: T, b: U) {
	return [a, b]
}

const ids = merge(1, '2')

function mergeObj<T extends object, U extends object>(a: T, b: U) {
	return {...a, ...b}
}

const mergedObj = mergeObj({name: 'John'}, {age: 21})

const mergedArray = mergeObj([1, 2], [3, 4])

class User<T> {
	constructor(public id: T) {}
}

const user1 = new User('user-123')
const user2 = new User(1)

interface Role<T> {
	id: T
}

const adminRole: Role<number> = {
	id: 1,
}

const userRole: Role<string> = {
	id: 'user-123',
}

class SuperAdminRole implements Role<string> {
	constructor(public id: string) {}
}

const superAdmin = new SuperAdminRole('user-321')
