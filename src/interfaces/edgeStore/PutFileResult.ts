export interface PutFileWebResult {
	key: string
}

export interface PutFileResult extends PutFileWebResult {
	relpath: string
	success: boolean
}
