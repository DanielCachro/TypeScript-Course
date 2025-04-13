interface Authenticable {
	email: string
	password: string

	login(): void
	logout(): void
}

// interface Authenticable {
// 	role: string
// }

interface AuthenticableAdmin extends Authenticable {
	role: 'admin' | 'superadmin'
}

class AuthenticableUser implements Authenticable {
	constructor(public userName: string, public email: string, public password: string) {}

	login() {
		// ...
	}
	logout() {
		// ...
	}
}

function authenticate(user: Authenticable) {
	user.login()
}

let AdminUser = new AuthenticableUser('Admin', 'mail@example.com', 'superStrongPassword')

authenticate(AdminUser)

let user: Authenticable
user = {
	email: 'mail@example.com',
	password: 'superStrongPassword',
	// role: 'USER',

	login() {
		// reach out to database, check credentials, create a session
	},
	logout() {
		// clear the session
	},
}
