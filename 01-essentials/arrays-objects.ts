let hobbies = ['Sports', 'Cooking']

// hobbies.push(10)

let users: Array<string | number>

users = [5, 'Daniel']

let possibleResults: [number, string]

possibleResults = [1, '-1']
// possibleResults = [1, 1]
// possibleResults = [1, '1', 2]

let user: {
	name: string
	age: number | string
	hobbies: string[]
	role: {
		description: string
		id: number
	}
} = {
	name: 'John',
	age: 21,
	hobbies: hobbies,
	role: {
		description: 'lorem ipsum',
		id: 12,
	},
}

const someObj = {
	0: 'John',
	description: 'lorem ipsum',
}

// let val: {} = null

let data: Record<string, string | number>

data = {
	name: 'John',
    age: 21
}
