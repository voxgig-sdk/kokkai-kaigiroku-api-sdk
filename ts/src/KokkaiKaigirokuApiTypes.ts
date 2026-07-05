// Typed models for the KokkaiKaigirokuApi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Meeting {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speech_record?: any[]
}

export interface MeetingListMatch {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speech_record?: any[]
}

export interface MeetingList {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speech_record?: any[]
}

export interface MeetingListListMatch {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speech_record?: any[]
}

export interface Speech {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speaker?: string
  speaker_group?: string
  speaker_position?: string
  speaker_role?: string
  speaker_yomi?: string
  speech?: string
  speech_id?: string
  speech_order?: number
  speech_url?: string
  start_page?: number
}

export interface SpeechListMatch {
  closing?: boolean
  date?: string
  image_kind?: string
  issue?: string
  issue_id?: string
  meeting_url?: string
  name_of_house?: string
  name_of_meeting?: string
  pdf_url?: string
  search_object?: string
  session?: number
  speaker?: string
  speaker_group?: string
  speaker_position?: string
  speaker_role?: string
  speaker_yomi?: string
  speech?: string
  speech_id?: string
  speech_order?: number
  speech_url?: string
  start_page?: number
}

