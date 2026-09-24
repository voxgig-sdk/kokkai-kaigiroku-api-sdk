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
			"slug": "kokkai-kaigiroku-api",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Closing",
						"type": "`$BOOLEAN`",
						"short": "閉会中フラグ",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "開催日付",
						"format": "date",
					},
					map[string]any{
						"name": "imageKind",
						"title": "Image Kind",
						"type": "`$STRING`",
						"short": "イメージ種別（会議録・目次・索引・附録・追録）",
					},
					map[string]any{
						"name": "issue",
						"title": "Issue",
						"type": "`$STRING`",
						"short": "号数",
					},
					map[string]any{
						"name": "issueID",
						"title": "Issue Id",
						"type": "`$STRING`",
						"short": "会議録ID",
					},
					map[string]any{
						"name": "meetingURL",
						"title": "Meeting Url",
						"type": "`$STRING`",
						"short": "会議録テキスト表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "nameOfHouse",
						"title": "Name Of House",
						"type": "`$STRING`",
						"short": "院名",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"title": "Name Of Meeting",
						"type": "`$STRING`",
						"short": "会議名",
					},
					map[string]any{
						"name": "pdfURL",
						"title": "Pdf Url",
						"type": "`$STRING`",
						"short": "会議録PDF表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "searchObject",
						"title": "Search Object",
						"type": "`$STRING`",
						"short": "検索対象箇所（議事冒頭・本文）",
					},
					map[string]any{
						"name": "session",
						"title": "Session",
						"type": "`$INTEGER`",
						"short": "国会回次",
					},
					map[string]any{
						"name": "speechRecord",
						"title": "Speech Record",
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
								"kind": "http",
								"method": "GET",
								"orig": "/meeting",
								"segments": []any{
									map[string]any{
										"lit": "meeting",
									},
								},
								"parts": []any{
									"meeting",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.meetingRecord`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 3,
										},
										map[string]any{
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
											"kind": "query",
											"example": "xml",
										},
										map[string]any{
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
											"kind": "query",
											"example": "冒頭・本文",
										},
										map[string]any{
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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
						"title": "Closing",
						"type": "`$BOOLEAN`",
						"short": "閉会中フラグ",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "開催日付",
						"format": "date",
					},
					map[string]any{
						"name": "imageKind",
						"title": "Image Kind",
						"type": "`$STRING`",
						"short": "イメージ種別（会議録・目次・索引・附録・追録）",
					},
					map[string]any{
						"name": "issue",
						"title": "Issue",
						"type": "`$STRING`",
						"short": "号数",
					},
					map[string]any{
						"name": "issueID",
						"title": "Issue Id",
						"type": "`$STRING`",
						"short": "会議録ID",
					},
					map[string]any{
						"name": "meetingURL",
						"title": "Meeting Url",
						"type": "`$STRING`",
						"short": "会議録テキスト表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "nameOfHouse",
						"title": "Name Of House",
						"type": "`$STRING`",
						"short": "院名",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"title": "Name Of Meeting",
						"type": "`$STRING`",
						"short": "会議名",
					},
					map[string]any{
						"name": "pdfURL",
						"title": "Pdf Url",
						"type": "`$STRING`",
						"short": "会議録PDF表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "searchObject",
						"title": "Search Object",
						"type": "`$STRING`",
						"short": "検索対象箇所（議事冒頭・本文）",
					},
					map[string]any{
						"name": "session",
						"title": "Session",
						"type": "`$INTEGER`",
						"short": "国会回次",
					},
					map[string]any{
						"name": "speechRecord",
						"title": "Speech Record",
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
								"kind": "http",
								"method": "GET",
								"orig": "/meeting_list",
								"segments": []any{
									map[string]any{
										"lit": "meeting_list",
									},
								},
								"parts": []any{
									"meeting_list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.meetingRecord`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 30,
										},
										map[string]any{
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
											"kind": "query",
											"example": "xml",
										},
										map[string]any{
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
											"kind": "query",
											"example": "冒頭・本文",
										},
										map[string]any{
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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
						"title": "Closing",
						"type": "`$BOOLEAN`",
						"short": "閉会中フラグ",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "開催日付",
						"format": "date",
					},
					map[string]any{
						"name": "imageKind",
						"title": "Image Kind",
						"type": "`$STRING`",
						"short": "イメージ種別（会議録・目次・索引・附録・追録）",
					},
					map[string]any{
						"name": "issue",
						"title": "Issue",
						"type": "`$STRING`",
						"short": "号数",
					},
					map[string]any{
						"name": "issueID",
						"title": "Issue Id",
						"type": "`$STRING`",
						"short": "会議録ID",
					},
					map[string]any{
						"name": "meetingURL",
						"title": "Meeting Url",
						"type": "`$STRING`",
						"short": "会議録テキスト表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "nameOfHouse",
						"title": "Name Of House",
						"type": "`$STRING`",
						"short": "院名",
					},
					map[string]any{
						"name": "nameOfMeeting",
						"title": "Name Of Meeting",
						"type": "`$STRING`",
						"short": "会議名",
					},
					map[string]any{
						"name": "pdfURL",
						"title": "Pdf Url",
						"type": "`$STRING`",
						"short": "会議録PDF表示画面のURL",
						"format": "uri",
					},
					map[string]any{
						"name": "searchObject",
						"title": "Search Object",
						"type": "`$STRING`",
						"short": "検索対象箇所（議事冒頭・本文）",
					},
					map[string]any{
						"name": "session",
						"title": "Session",
						"type": "`$INTEGER`",
						"short": "国会回次",
					},
					map[string]any{
						"name": "speaker",
						"title": "Speaker",
						"type": "`$STRING`",
						"short": "発言者名",
					},
					map[string]any{
						"name": "speakerGroup",
						"title": "Speaker Group",
						"type": "`$STRING`",
						"short": "発言者所属会派",
					},
					map[string]any{
						"name": "speakerPosition",
						"title": "Speaker Position",
						"type": "`$STRING`",
						"short": "発言者肩書き",
					},
					map[string]any{
						"name": "speakerRole",
						"title": "Speaker Role",
						"type": "`$STRING`",
						"short": "発言者役割",
					},
					map[string]any{
						"name": "speakerYomi",
						"title": "Speaker Yomi",
						"type": "`$STRING`",
						"short": "発言者よみ",
					},
					map[string]any{
						"name": "speech",
						"title": "Speech",
						"type": "`$STRING`",
						"short": "発言",
					},
					map[string]any{
						"name": "speechID",
						"title": "Speech Id",
						"type": "`$STRING`",
						"short": "発言ID",
					},
					map[string]any{
						"name": "speechOrder",
						"title": "Speech Order",
						"type": "`$INTEGER`",
						"short": "発言番号",
					},
					map[string]any{
						"name": "speechURL",
						"title": "Speech Url",
						"type": "`$STRING`",
						"short": "発言URL",
						"format": "uri",
					},
					map[string]any{
						"name": "startPage",
						"title": "Start Page",
						"type": "`$INTEGER`",
						"short": "発言が掲載されている開始ページ",
					},
				},
				"name": "speech",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/speech",
								"segments": []any{
									map[string]any{
										"lit": "speech",
									},
								},
								"parts": []any{
									"speech",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.speechRecord`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "any",
											"orig": "any",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "closing",
											"orig": "closing",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "contents_and_index",
											"orig": "contents_and_index",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_from",
											"orig": "issue_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_id",
											"orig": "issue_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "issue_to",
											"orig": "issue_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "maximum_record",
											"orig": "maximum_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 30,
										},
										map[string]any{
											"name": "name_of_house",
											"orig": "name_of_house",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_of_meeting",
											"orig": "name_of_meeting",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "record_packing",
											"orig": "record_packing",
											"type": "`$STRING`",
											"kind": "query",
											"example": "xml",
										},
										map[string]any{
											"name": "search_range",
											"orig": "search_range",
											"type": "`$STRING`",
											"kind": "query",
											"example": "冒頭・本文",
										},
										map[string]any{
											"name": "session_from",
											"orig": "session_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "session_to",
											"orig": "session_to",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker",
											"orig": "speaker",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_group",
											"orig": "speaker_group",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_position",
											"orig": "speaker_position",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speaker_role",
											"orig": "speaker_role",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_id",
											"orig": "speech_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speech_number",
											"orig": "speech_number",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_record",
											"orig": "start_record",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "supplement_and_appendix",
											"orig": "supplement_and_appendix",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "until",
											"orig": "until",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
