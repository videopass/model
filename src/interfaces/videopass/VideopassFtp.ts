import { VideopassTranscode } from "./VideopassTranscode"

// create interface VideopassFtp with name, fileStatus, size, progress, duration
export interface VideopassFtp extends VideopassTranscode {
	size: number
	duration: number
}
