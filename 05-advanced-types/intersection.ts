type FileData = {
	path: string
	content: string
}

type DatabaseData = {
	connectionUrl: string
	credentials: string
}

type Status = {
	isOpen: boolean
	errorMessage?: string
}

type AccesedFileData = FileData & Status
type AccesedDatabaseData = DatabaseData & Status
