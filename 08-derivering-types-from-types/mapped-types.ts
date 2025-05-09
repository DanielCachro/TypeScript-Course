type Operations = {
	readonly add: (a: number, b: number) => number
	readonly subtract: (a: number, b: number) => number
}

type Results<T extends object> = {
	-readonly [Key in keyof T]?: number
}

let mathOperations: Operations = {
	add(a: number, b: number) {
		return a + b
	},
	subtract(a: number, b: number) {
		return a - b
	},
}

let mathResults: Results<Operations> = {
	add: mathOperations.add(1, 2),
}

mathResults.add = 10
