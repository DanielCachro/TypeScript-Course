// type ElementType<T extends any[]> = T[number]
// type Example1 = ElementType<StringArray>

type GetElementType<T> = T extends any[] ? T[number] : T

type StringArray = string[]
type Example1 = GetElementType<StringArray> // type Example1 = string

let someNumber = 1
type Example2 = GetElementType<typeof someNumber> // // type Example1 = number

type FullNamePerson = {firstName: string; lastName: string}
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
	if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
		return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>
	}

	throw new Error('No first name and / or last name found.')
}

const name1 = getFullName({}) // const name1: never
const name2 = getFullName({firstName: 'John', lastName: 'Doe'}) // const name2: string
