// Typed models for the KokkaiKaigirokuApi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Meeting {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speechRecord?: any[]
}

export interface MeetingListMatch {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speechRecord?: any[]
}

export interface MeetingList {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speechRecord?: any[]
}

export interface MeetingListListMatch {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speechRecord?: any[]
}

export interface Speech {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speaker?: string
  speakerGroup?: string
  speakerPosition?: string
  speakerRole?: string
  speakerYomi?: string
  speech?: string
  speechID?: string
  speechOrder?: number
  speechURL?: string
  startPage?: number
}

export interface SpeechListMatch {
  closing?: boolean
  date?: string
  imageKind?: string
  issue?: string
  issueID?: string
  meetingURL?: string
  nameOfHouse?: string
  nameOfMeeting?: string
  pdfURL?: string
  searchObject?: string
  session?: number
  speaker?: string
  speakerGroup?: string
  speakerPosition?: string
  speakerRole?: string
  speakerYomi?: string
  speech?: string
  speechID?: string
  speechOrder?: number
  speechURL?: string
  startPage?: number
}

