import { BaseVideo } from './BaseVideo'
import { Metadata } from './Metadata'

// moved nullable fields to TranscodedVideo
export interface Video extends BaseVideo {
	service_account_id: string
	sub_state: string
	source_uri: string
	playback_policy: string
	metadata: Metadata
	use_drm?: any
}
