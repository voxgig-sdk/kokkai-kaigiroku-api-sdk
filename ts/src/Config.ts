
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'KokkaiKaigirokuApi',
        slug: "kokkai-kaigiroku-api",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "閉会中フラグ",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "short": "開催日付",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "short": "号数",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "short": "会議録ID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "short": "会議録テキスト表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "short": "院名",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "short": "会議名",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "short": "会議録PDF表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "short": "検索対象箇所（議事冒頭・本文）",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "short": "国会回次",
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
          "short": "閉会中フラグ",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "short": "開催日付",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "short": "号数",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "short": "会議録ID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "short": "会議録テキスト表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "short": "院名",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "short": "会議名",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "short": "会議録PDF表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "short": "検索対象箇所（議事冒頭・本文）",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "short": "国会回次",
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
          "short": "閉会中フラグ",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "date",
          "short": "開催日付",
          "type": "`$STRING`"
        },
        {
          "name": "imageKind",
          "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          "type": "`$STRING`"
        },
        {
          "name": "issue",
          "short": "号数",
          "type": "`$STRING`"
        },
        {
          "name": "issueID",
          "short": "会議録ID",
          "type": "`$STRING`"
        },
        {
          "name": "meetingURL",
          "short": "会議録テキスト表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfHouse",
          "short": "院名",
          "type": "`$STRING`"
        },
        {
          "name": "nameOfMeeting",
          "short": "会議名",
          "type": "`$STRING`"
        },
        {
          "name": "pdfURL",
          "short": "会議録PDF表示画面のURL",
          "type": "`$STRING`"
        },
        {
          "name": "searchObject",
          "short": "検索対象箇所（議事冒頭・本文）",
          "type": "`$STRING`"
        },
        {
          "name": "session",
          "short": "国会回次",
          "type": "`$INTEGER`"
        },
        {
          "name": "speaker",
          "short": "発言者名",
          "type": "`$STRING`"
        },
        {
          "name": "speakerGroup",
          "short": "発言者所属会派",
          "type": "`$STRING`"
        },
        {
          "name": "speakerPosition",
          "short": "発言者肩書き",
          "type": "`$STRING`"
        },
        {
          "name": "speakerRole",
          "short": "発言者役割",
          "type": "`$STRING`"
        },
        {
          "name": "speakerYomi",
          "short": "発言者よみ",
          "type": "`$STRING`"
        },
        {
          "name": "speech",
          "short": "発言",
          "type": "`$STRING`"
        },
        {
          "name": "speechID",
          "short": "発言ID",
          "type": "`$STRING`"
        },
        {
          "name": "speechOrder",
          "short": "発言番号",
          "type": "`$INTEGER`"
        },
        {
          "name": "speechURL",
          "short": "発言URL",
          "type": "`$STRING`"
        },
        {
          "name": "startPage",
          "short": "発言が掲載されている開始ページ",
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

