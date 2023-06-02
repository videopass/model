import { PutFileResult, PutFileWebResult } from '../edgeStore'
import { TranscodedVideo } from '../videoApi'

// has all the properties of TranscodedVideo
export interface VideopassTranscodedVideo extends TranscodedVideo {
	thetaId: string // id of the video in the THETA Network
	videoId: string
	name: string
	network: string
	chain: string
	drm?: string
	edgeStore: PutFileResult | PutFileWebResult
}
