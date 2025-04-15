type DataStore = {
	[property: string]: string | number | boolean
}

let store: DataStore = {
	name: 'MainDataStore',
}

store.id = 1
store.isOpen = true

type DataStoreByRecordType = Record<string, string | number | boolean>

let someObj: DataStoreByRecordType = {
	name: 'test',
}

let roles = ['admin', 'guest', 'editor'] as const
const firstRole = roles[0]

const dataEntries = {
	entry1: 0.51,
	entry2: -1.23,
} satisfies Record<string, number>

dataEntries.entry2
// dataEntries.entry3 = 0.51




