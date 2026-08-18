
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'KokkaiKaigirokuApi',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://kokkai.ndl.go.jp/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      meeting: {
      },

      meeting_list: {
      },

      speech: {
      },

    }
  }


  entity = {
    "meeting": {
      "fields": [
        {
          "name": "closing",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "type": "`$INTEGER`"
        },
        {
          "name": "speechRecord",
          "type": "`$ARRAY`"
        }
      ],
      "name": "meeting",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "any",
                    "orig": "any",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "closing",
                    "orig": "closing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "contents_and_index",
                    "orig": "contents_and_index",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_from",
                    "orig": "issue_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_id",
                    "orig": "issue_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_to",
                    "orig": "issue_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 3,
                    "kind": "query",
                    "name": "maximum_record",
                    "orig": "maximum_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_house",
                    "orig": "name_of_house",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_meeting",
                    "orig": "name_of_meeting",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "xml",
                    "kind": "query",
                    "name": "record_packing",
                    "orig": "record_packing",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "冒頭・本文",
                    "kind": "query",
                    "name": "search_range",
                    "orig": "search_range",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "session_from",
                    "orig": "session_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "session_to",
                    "orig": "session_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker",
                    "orig": "speaker",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_group",
                    "orig": "speaker_group",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_position",
                    "orig": "speaker_position",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_role",
                    "orig": "speaker_role",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_id",
                    "orig": "speech_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_number",
                    "orig": "speech_number",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "start_record",
                    "orig": "start_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "supplement_and_appendix",
                    "orig": "supplement_and_appendix",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "until",
                    "orig": "until",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/meeting",
              "parts": [
                "meeting"
              ],
              "select": {
                "exist": [
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
                  "until"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.meetingRecord`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "meeting_list": {
      "fields": [
        {
          "name": "closing",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "type": "`$INTEGER`"
        },
        {
          "name": "speechRecord",
          "type": "`$ARRAY`"
        }
      ],
      "name": "meeting_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "any",
                    "orig": "any",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "closing",
                    "orig": "closing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "contents_and_index",
                    "orig": "contents_and_index",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_from",
                    "orig": "issue_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_id",
                    "orig": "issue_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_to",
                    "orig": "issue_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 30,
                    "kind": "query",
                    "name": "maximum_record",
                    "orig": "maximum_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_house",
                    "orig": "name_of_house",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_meeting",
                    "orig": "name_of_meeting",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "xml",
                    "kind": "query",
                    "name": "record_packing",
                    "orig": "record_packing",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "冒頭・本文",
                    "kind": "query",
                    "name": "search_range",
                    "orig": "search_range",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "session_from",
                    "orig": "session_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "session_to",
                    "orig": "session_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker",
                    "orig": "speaker",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_group",
                    "orig": "speaker_group",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_position",
                    "orig": "speaker_position",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_role",
                    "orig": "speaker_role",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_id",
                    "orig": "speech_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_number",
                    "orig": "speech_number",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "start_record",
                    "orig": "start_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "supplement_and_appendix",
                    "orig": "supplement_and_appendix",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "until",
                    "orig": "until",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/meeting_list",
              "parts": [
                "meeting_list"
              ],
              "select": {
                "exist": [
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
                  "until"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.meetingRecord`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "speech": {
      "fields": [
        {
          "name": "closing",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "type": "`$INTEGER`"
        },
        {
          "name": "speaker",
          "type": "`$STRING`"
        },
        {
          "name": "speakerGroup",
          "type": "`$STRING`"
        },
        {
          "name": "speakerPosition",
          "type": "`$STRING`"
        },
        {
          "name": "speakerRole",
          "type": "`$STRING`"
        },
        {
          "name": "speakerYomi",
          "type": "`$STRING`"
        },
        {
          "name": "speech",
          "type": "`$STRING`"
        },
        {
          "name": "speechID",
          "type": "`$STRING`"
        },
        {
          "name": "speechOrder",
          "type": "`$INTEGER`"
        },
        {
          "name": "speechURL",
          "type": "`$STRING`"
        },
        {
          "name": "startPage",
          "type": "`$INTEGER`"
        }
      ],
      "name": "speech",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "any",
                    "orig": "any",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "closing",
                    "orig": "closing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "contents_and_index",
                    "orig": "contents_and_index",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_from",
                    "orig": "issue_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_id",
                    "orig": "issue_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "issue_to",
                    "orig": "issue_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 30,
                    "kind": "query",
                    "name": "maximum_record",
                    "orig": "maximum_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_house",
                    "orig": "name_of_house",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name_of_meeting",
                    "orig": "name_of_meeting",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "xml",
                    "kind": "query",
                    "name": "record_packing",
                    "orig": "record_packing",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "冒頭・本文",
                    "kind": "query",
                    "name": "search_range",
                    "orig": "search_range",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "session_from",
                    "orig": "session_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "session_to",
                    "orig": "session_to",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker",
                    "orig": "speaker",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_group",
                    "orig": "speaker_group",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_position",
                    "orig": "speaker_position",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speaker_role",
                    "orig": "speaker_role",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_id",
                    "orig": "speech_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "speech_number",
                    "orig": "speech_number",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "start_record",
                    "orig": "start_record",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "supplement_and_appendix",
                    "orig": "supplement_and_appendix",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "until",
                    "orig": "until",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/speech",
              "parts": [
                "speech"
              ],
              "select": {
                "exist": [
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
                  "until"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.speechRecord`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

