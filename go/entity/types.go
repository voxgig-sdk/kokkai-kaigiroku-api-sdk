// Typed models for the KokkaiKaigirokuApi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/go/core"
)

// Meeting is the typed data model for the meeting entity.
type Meeting struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"imageKind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueID *string `json:"issueID,omitempty"`
	MeetingURL *string `json:"meetingURL,omitempty"`
	NameOfHouse *string `json:"nameOfHouse,omitempty"`
	NameOfMeeting *string `json:"nameOfMeeting,omitempty"`
	PdfURL *string `json:"pdfURL,omitempty"`
	SearchObject *string `json:"searchObject,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speechRecord,omitempty"`
}

// MeetingListMatch is the typed request payload for Meeting.ListTyped.
type MeetingListMatch struct {
	Any *string `json:"any,omitempty"`
	Closing *bool `json:"closing,omitempty"`
	ContentsAndIndex *bool `json:"contents_and_index,omitempty"`
	From *string `json:"from,omitempty"`
	IssueFrom *int `json:"issue_from,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	IssueTo *int `json:"issue_to,omitempty"`
	MaximumRecord *int `json:"maximum_record,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	RecordPacking *string `json:"record_packing,omitempty"`
	SearchRange *string `json:"search_range,omitempty"`
	SessionFrom *int `json:"session_from,omitempty"`
	SessionTo *int `json:"session_to,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speaker_group,omitempty"`
	SpeakerPosition *string `json:"speaker_position,omitempty"`
	SpeakerRole *string `json:"speaker_role,omitempty"`
	SpeechId *string `json:"speech_id,omitempty"`
	SpeechNumber *int `json:"speech_number,omitempty"`
	StartRecord *int `json:"start_record,omitempty"`
	SupplementAndAppendix *bool `json:"supplement_and_appendix,omitempty"`
	Until *string `json:"until,omitempty"`
}

// MeetingList is the typed data model for the meeting_list entity.
type MeetingList struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"imageKind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueID *string `json:"issueID,omitempty"`
	MeetingURL *string `json:"meetingURL,omitempty"`
	NameOfHouse *string `json:"nameOfHouse,omitempty"`
	NameOfMeeting *string `json:"nameOfMeeting,omitempty"`
	PdfURL *string `json:"pdfURL,omitempty"`
	SearchObject *string `json:"searchObject,omitempty"`
	Session *int `json:"session,omitempty"`
	SpeechRecord *[]any `json:"speechRecord,omitempty"`
}

// MeetingListListMatch is the typed request payload for MeetingList.ListTyped.
type MeetingListListMatch struct {
	Any *string `json:"any,omitempty"`
	Closing *bool `json:"closing,omitempty"`
	ContentsAndIndex *bool `json:"contents_and_index,omitempty"`
	From *string `json:"from,omitempty"`
	IssueFrom *int `json:"issue_from,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	IssueTo *int `json:"issue_to,omitempty"`
	MaximumRecord *int `json:"maximum_record,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	RecordPacking *string `json:"record_packing,omitempty"`
	SearchRange *string `json:"search_range,omitempty"`
	SessionFrom *int `json:"session_from,omitempty"`
	SessionTo *int `json:"session_to,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speaker_group,omitempty"`
	SpeakerPosition *string `json:"speaker_position,omitempty"`
	SpeakerRole *string `json:"speaker_role,omitempty"`
	SpeechId *string `json:"speech_id,omitempty"`
	SpeechNumber *int `json:"speech_number,omitempty"`
	StartRecord *int `json:"start_record,omitempty"`
	SupplementAndAppendix *bool `json:"supplement_and_appendix,omitempty"`
	Until *string `json:"until,omitempty"`
}

// Speech is the typed data model for the speech entity.
type Speech struct {
	Closing *bool `json:"closing,omitempty"`
	Date *string `json:"date,omitempty"`
	ImageKind *string `json:"imageKind,omitempty"`
	Issue *string `json:"issue,omitempty"`
	IssueID *string `json:"issueID,omitempty"`
	MeetingURL *string `json:"meetingURL,omitempty"`
	NameOfHouse *string `json:"nameOfHouse,omitempty"`
	NameOfMeeting *string `json:"nameOfMeeting,omitempty"`
	PdfURL *string `json:"pdfURL,omitempty"`
	SearchObject *string `json:"searchObject,omitempty"`
	Session *int `json:"session,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speakerGroup,omitempty"`
	SpeakerPosition *string `json:"speakerPosition,omitempty"`
	SpeakerRole *string `json:"speakerRole,omitempty"`
	SpeakerYomi *string `json:"speakerYomi,omitempty"`
	Speech *string `json:"speech,omitempty"`
	SpeechID *string `json:"speechID,omitempty"`
	SpeechOrder *int `json:"speechOrder,omitempty"`
	SpeechURL *string `json:"speechURL,omitempty"`
	StartPage *int `json:"startPage,omitempty"`
}

// SpeechListMatch is the typed request payload for Speech.ListTyped.
type SpeechListMatch struct {
	Any *string `json:"any,omitempty"`
	Closing *bool `json:"closing,omitempty"`
	ContentsAndIndex *bool `json:"contents_and_index,omitempty"`
	From *string `json:"from,omitempty"`
	IssueFrom *int `json:"issue_from,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	IssueTo *int `json:"issue_to,omitempty"`
	MaximumRecord *int `json:"maximum_record,omitempty"`
	NameOfHouse *string `json:"name_of_house,omitempty"`
	NameOfMeeting *string `json:"name_of_meeting,omitempty"`
	RecordPacking *string `json:"record_packing,omitempty"`
	SearchRange *string `json:"search_range,omitempty"`
	SessionFrom *int `json:"session_from,omitempty"`
	SessionTo *int `json:"session_to,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakerGroup *string `json:"speaker_group,omitempty"`
	SpeakerPosition *string `json:"speaker_position,omitempty"`
	SpeakerRole *string `json:"speaker_role,omitempty"`
	SpeechId *string `json:"speech_id,omitempty"`
	SpeechNumber *int `json:"speech_number,omitempty"`
	StartRecord *int `json:"start_record,omitempty"`
	SupplementAndAppendix *bool `json:"supplement_and_appendix,omitempty"`
	Until *string `json:"until,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
