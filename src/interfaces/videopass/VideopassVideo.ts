import { PutFileResult, PutFileWebResult } from '../edgeStore'
import { Video } from '../videoApi'

// custom properties for VideopassVideo
export interface VideopassVideo extends Video {
	thetaId: string // id of the video in the THETA Network
	videoId: string
	name: string
	network: string
	chain: string
	drm?: string
	edgeStore: PutFileResult | PutFileWebResult
}
