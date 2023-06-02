export interface TranscodeUploadBodyBase {
	playback_policy: string
	nft_collection?: string
}

export interface TranscodeUploadBody extends TranscodeUploadBodyBase {
	source_upload_id: string
}

export interface TranscodeUploadBodyExternal extends TranscodeUploadBodyBase {
	source_uri: string
}
