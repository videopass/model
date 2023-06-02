import { Video } from './Video'

export interface TranscodedVideo extends Video {
	file_name?: string
	source_upload_id?: string
	playback_uri?: string
	error?: string
	duration?: string
	resolution?: number
}
