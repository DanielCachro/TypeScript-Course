type ReadPermissions = 'no-read' | 'read'
type WritePersmissions = 'no-write' | 'write'

type FilePermissions = `${ReadPermissions}-${WritePersmissions}`

type DataFile = {
	data: string
	permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Changed`

type DataFileEvents = {
	[Key in DataFileEventNames]: () => void
}
