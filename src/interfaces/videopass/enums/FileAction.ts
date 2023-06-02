// create action enum with Delete, Change DRM, Add DRM, Remove DRM, Transcode To 240, Transcode To 480 and Republish

export enum FileAction {
	Delete = 'DELETE',
	ChangeDRM = 'CHANGE DRM',
	RemoveDRM = 'REMOVE DRM',
	AddDRM = 'ADD DRM',
	TranscodeTo2160P = 'TRANSCODE TO 2160P',
	TranscodeTo1080P = 'TRANSCODE TO 1080P',
	TranscodeTo720P = 'TRANSCODE TO 720P',
	TranscodeTo360P = 'TRANSCODE TO 360P',
	Republish = 'REPUBLISH',
	Retry = 'RETRY',
}
