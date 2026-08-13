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
