import { FileState } from '../videopass'
import { StateEnum } from './enums'

export interface BaseVideo {
	progress: number
	id: string
	state: StateEnum | FileState
	create_time: string
	update_time: string
	create_unix: number
	update_unix: number
	name: string
	error?: string
}
