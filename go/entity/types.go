// Typed models for the KokkaiKaigirokuApi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Meeting is the typed data model for the meeting entity.
type Meeting struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speech_record,omitempty"`
}

// MeetingListMatch is the typed request payload for Meeting.ListTyped.
type MeetingListMatch struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speech_record,omitempty"`
}

// MeetingList is the typed data model for the meeting_list entity.
type MeetingList struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speech_record,omitempty"`
}

// MeetingListListMatch is the typed request payload for MeetingList.ListTyped.
type MeetingListListMatch struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speech_record,omitempty"`
}

// Speech is the typed data model for the speech entity.
type Speech struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speaker_group,omitempty"`
	SpeakerPosition *string `json:"speaker_position,omitempty"`
	SpeakerRole *string `json:"speaker_role,omitempty"`
	SpeakerYomi *string `json:"speaker_yomi,omitempty"`
	Speech *string `json:"speech,omitempty"`
	SpeechId *string `json:"speech_id,omitempty"`
	SpeechOrder *int `json:"speech_order,omitempty"`
	SpeechUrl *string `json:"speech_url,omitempty"`
	StartPage *int `json:"start_page,omitempty"`
}

// SpeechListMatch is the typed request payload for Speech.ListTyped.
type SpeechListMatch struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"image_kind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	MeetingUrl *string `json:"meeting_url,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	SearchObject *string `json:"search_object,omitempty"`
	Session *int `json:"session,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speaker_group,omitempty"`
	SpeakerPosition *string `json:"speaker_position,omitempty"`
	SpeakerRole *string `json:"speaker_role,omitempty"`
	SpeakerYomi *string `json:"speaker_yomi,omitempty"`
	Speech *string `json:"speech,omitempty"`
	SpeechId *string `json:"speech_id,omitempty"`
	SpeechOrder *int `json:"speech_order,omitempty"`
	SpeechUrl *string `json:"speech_url,omitempty"`
	StartPage *int `json:"start_page,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
