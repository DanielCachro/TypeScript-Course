// enum Role {
// 	Admin = 1,
// 	Editor,
// 	Guest,
// }

type Role = 'admin' | 'editor' | 'guest'

type User = {
	name: string
	age: number
	role: Role
	permissions: string[]
}

let userRole: Role = 'guest'
userRole = 'admin'

let possibleResults: [1 | -1, '1' | '-1']
possibleResults = [1, '-1']
