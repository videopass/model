// create enum with file status, STP, FTP, Transcoding, Uploaded, Error, Streamable

export enum FileState {
	Transferring = 1,
	Transferred = 2,
	Downloading = 3,
	Downloaded = 4,
	Transcoding = 5,
	Transcoded = 6,
	Uploading = 7,
	Uploaded = 8,
	// videoApi state enum
	// created = 9 /* video has been uploaded */,
	// processing = 10 /* video is being transcoded */,
	// success = 11 /* video has been transcoded */,
	Failed = 100,
}
