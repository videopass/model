import { FileAction } from './enums'
import { ActionState } from './enums/ActionState'

export interface VideopassAction {
	id?: string
	action:  FileAction
	state: ActionState
	created: string
	updated: string
	mobId: string
}
