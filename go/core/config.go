package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "KokkaiKaigirokuApi",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://kokkai.ndl.go.jp/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"meeting": map[string]any{},
				"meeting_list": map[string]any{},
				"speech": map[string]any{},
			},
		},
		"entity": map[string]any{
			"meeting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageKind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issueID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meetingURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfHouse",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pdfURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "searchObject",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "session",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "speechRecord",
						"type": "`$ARRAY`",
					},
				},
				"name": "meeting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "query",
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "xml",
											"kind": "query",
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "冒頭・本文",
											"kind": "query",
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/meeting",
								"parts": []any{
									"meeting",
								},
								"select": map[string]any{
									"exist": []any{
										"any",
										"closing",
										"contents_and_index",
										"from",
										"issue_from",
										"issue_id",
										"issue_to",
										"maximum_record",
										"name_of_house",
										"name_of_meeting",
										"record_packing",
										"search_range",
										"session_from",
										"session_to",
										"speaker",
										"speaker_group",
										"speaker_position",
										"speaker_role",
										"speech_id",
										"speech_number",
										"start_record",
										"supplement_and_appendix",
										"until",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.meetingRecord`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"meeting_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageKind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issueID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meetingURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfHouse",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pdfURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "searchObject",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "session",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "speechRecord",
						"type": "`$ARRAY`",
					},
				},
				"name": "meeting_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "xml",
											"kind": "query",
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "冒頭・本文",
											"kind": "query",
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/meeting_list",
								"parts": []any{
									"meeting_list",
								},
								"select": map[string]any{
									"exist": []any{
										"any",
										"closing",
										"contents_and_index",
										"from",
										"issue_from",
										"issue_id",
										"issue_to",
										"maximum_record",
										"name_of_house",
										"name_of_meeting",
										"record_packing",
										"search_range",
										"session_from",
										"session_to",
										"speaker",
										"speaker_group",
										"speaker_position",
										"speaker_role",
										"speech_id",
										"speech_number",
										"start_record",
										"supplement_and_appendix",
										"until",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.meetingRecord`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"speech": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageKind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issueID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meetingURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfHouse",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pdfURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "searchObject",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "session",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "speaker",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speakerGroup",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speakerPosition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speakerRole",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speakerYomi",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speech",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speechID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speechOrder",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "speechURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "startPage",
						"type": "`$INTEGER`",
					},
				},
				"name": "speech",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "xml",
											"kind": "query",
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "冒頭・本文",
											"kind": "query",
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/speech",
								"parts": []any{
									"speech",
								},
								"select": map[string]any{
									"exist": []any{
										"any",
										"closing",
										"contents_and_index",
										"from",
										"issue_from",
										"issue_id",
										"issue_to",
										"maximum_record",
										"name_of_house",
										"name_of_meeting",
										"record_packing",
										"search_range",
										"session_from",
										"session_to",
										"speaker",
										"speaker_group",
										"speaker_position",
										"speaker_role",
										"speech_id",
										"speech_number",
										"start_record",
										"supplement_and_appendix",
										"until",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.speechRecord`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
