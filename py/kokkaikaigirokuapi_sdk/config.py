# KokkaiKaigirokuApi SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "KokkaiKaigirokuApi",
            "slug": "kokkai-kaigiroku-api",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://kokkai.ndl.go.jp/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "meeting": {},
                "meeting_list": {},
                "speech": {},
            },
        },
        "entity": {
      "meeting": {
        "fields": [
          {
            "name": "closing",
            "title": "Closing",
            "type": "`$BOOLEAN`",
            "short": "閉会中フラグ",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "開催日付",
            "format": "date",
          },
          {
            "name": "imageKind",
            "title": "Image Kind",
            "type": "`$STRING`",
            "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          },
          {
            "name": "issue",
            "title": "Issue",
            "type": "`$STRING`",
            "short": "号数",
          },
          {
            "name": "issueID",
            "title": "Issue Id",
            "type": "`$STRING`",
            "short": "会議録ID",
          },
          {
            "name": "meetingURL",
            "title": "Meeting Url",
            "type": "`$STRING`",
            "short": "会議録テキスト表示画面のURL",
            "format": "uri",
          },
          {
            "name": "nameOfHouse",
            "title": "Name Of House",
            "type": "`$STRING`",
            "short": "院名",
          },
          {
            "name": "nameOfMeeting",
            "title": "Name Of Meeting",
            "type": "`$STRING`",
            "short": "会議名",
          },
          {
            "name": "pdfURL",
            "title": "Pdf Url",
            "type": "`$STRING`",
            "short": "会議録PDF表示画面のURL",
            "format": "uri",
          },
          {
            "name": "searchObject",
            "title": "Search Object",
            "type": "`$STRING`",
            "short": "検索対象箇所（議事冒頭・本文）",
          },
          {
            "name": "session",
            "title": "Session",
            "type": "`$INTEGER`",
            "short": "国会回次",
          },
          {
            "name": "speechRecord",
            "title": "Speech Record",
            "type": "`$ARRAY`",
          },
        ],
        "name": "meeting",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/meeting",
                "segments": [
                  {
                    "lit": "meeting",
                  },
                ],
                "parts": [
                  "meeting",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.meetingRecord`",
                },
                "args": {
                  "query": [
                    {
                      "name": "any",
                      "orig": "any",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "closing",
                      "orig": "closing",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "contents_and_index",
                      "orig": "contents_and_index",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "from",
                      "orig": "from",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_from",
                      "orig": "issue_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_id",
                      "orig": "issue_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_to",
                      "orig": "issue_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "maximum_record",
                      "orig": "maximum_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 3,
                    },
                    {
                      "name": "name_of_house",
                      "orig": "name_of_house",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name_of_meeting",
                      "orig": "name_of_meeting",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "record_packing",
                      "orig": "record_packing",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "xml",
                    },
                    {
                      "name": "search_range",
                      "orig": "search_range",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "冒頭・本文",
                    },
                    {
                      "name": "session_from",
                      "orig": "session_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "session_to",
                      "orig": "session_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker",
                      "orig": "speaker",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_group",
                      "orig": "speaker_group",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_position",
                      "orig": "speaker_position",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_role",
                      "orig": "speaker_role",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_id",
                      "orig": "speech_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_number",
                      "orig": "speech_number",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "start_record",
                      "orig": "start_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "supplement_and_appendix",
                      "orig": "supplement_and_appendix",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "until",
                      "orig": "until",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
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
                    "until",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "meeting_list": {
        "fields": [
          {
            "name": "closing",
            "title": "Closing",
            "type": "`$BOOLEAN`",
            "short": "閉会中フラグ",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "開催日付",
            "format": "date",
          },
          {
            "name": "imageKind",
            "title": "Image Kind",
            "type": "`$STRING`",
            "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          },
          {
            "name": "issue",
            "title": "Issue",
            "type": "`$STRING`",
            "short": "号数",
          },
          {
            "name": "issueID",
            "title": "Issue Id",
            "type": "`$STRING`",
            "short": "会議録ID",
          },
          {
            "name": "meetingURL",
            "title": "Meeting Url",
            "type": "`$STRING`",
            "short": "会議録テキスト表示画面のURL",
            "format": "uri",
          },
          {
            "name": "nameOfHouse",
            "title": "Name Of House",
            "type": "`$STRING`",
            "short": "院名",
          },
          {
            "name": "nameOfMeeting",
            "title": "Name Of Meeting",
            "type": "`$STRING`",
            "short": "会議名",
          },
          {
            "name": "pdfURL",
            "title": "Pdf Url",
            "type": "`$STRING`",
            "short": "会議録PDF表示画面のURL",
            "format": "uri",
          },
          {
            "name": "searchObject",
            "title": "Search Object",
            "type": "`$STRING`",
            "short": "検索対象箇所（議事冒頭・本文）",
          },
          {
            "name": "session",
            "title": "Session",
            "type": "`$INTEGER`",
            "short": "国会回次",
          },
          {
            "name": "speechRecord",
            "title": "Speech Record",
            "type": "`$ARRAY`",
          },
        ],
        "name": "meeting_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/meeting_list",
                "segments": [
                  {
                    "lit": "meeting_list",
                  },
                ],
                "parts": [
                  "meeting_list",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.meetingRecord`",
                },
                "args": {
                  "query": [
                    {
                      "name": "any",
                      "orig": "any",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "closing",
                      "orig": "closing",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "contents_and_index",
                      "orig": "contents_and_index",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "from",
                      "orig": "from",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_from",
                      "orig": "issue_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_id",
                      "orig": "issue_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_to",
                      "orig": "issue_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "maximum_record",
                      "orig": "maximum_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 30,
                    },
                    {
                      "name": "name_of_house",
                      "orig": "name_of_house",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name_of_meeting",
                      "orig": "name_of_meeting",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "record_packing",
                      "orig": "record_packing",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "xml",
                    },
                    {
                      "name": "search_range",
                      "orig": "search_range",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "冒頭・本文",
                    },
                    {
                      "name": "session_from",
                      "orig": "session_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "session_to",
                      "orig": "session_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker",
                      "orig": "speaker",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_group",
                      "orig": "speaker_group",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_position",
                      "orig": "speaker_position",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_role",
                      "orig": "speaker_role",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_id",
                      "orig": "speech_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_number",
                      "orig": "speech_number",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "start_record",
                      "orig": "start_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "supplement_and_appendix",
                      "orig": "supplement_and_appendix",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "until",
                      "orig": "until",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
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
                    "until",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "speech": {
        "fields": [
          {
            "name": "closing",
            "title": "Closing",
            "type": "`$BOOLEAN`",
            "short": "閉会中フラグ",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "開催日付",
            "format": "date",
          },
          {
            "name": "imageKind",
            "title": "Image Kind",
            "type": "`$STRING`",
            "short": "イメージ種別（会議録・目次・索引・附録・追録）",
          },
          {
            "name": "issue",
            "title": "Issue",
            "type": "`$STRING`",
            "short": "号数",
          },
          {
            "name": "issueID",
            "title": "Issue Id",
            "type": "`$STRING`",
            "short": "会議録ID",
          },
          {
            "name": "meetingURL",
            "title": "Meeting Url",
            "type": "`$STRING`",
            "short": "会議録テキスト表示画面のURL",
            "format": "uri",
          },
          {
            "name": "nameOfHouse",
            "title": "Name Of House",
            "type": "`$STRING`",
            "short": "院名",
          },
          {
            "name": "nameOfMeeting",
            "title": "Name Of Meeting",
            "type": "`$STRING`",
            "short": "会議名",
          },
          {
            "name": "pdfURL",
            "title": "Pdf Url",
            "type": "`$STRING`",
            "short": "会議録PDF表示画面のURL",
            "format": "uri",
          },
          {
            "name": "searchObject",
            "title": "Search Object",
            "type": "`$STRING`",
            "short": "検索対象箇所（議事冒頭・本文）",
          },
          {
            "name": "session",
            "title": "Session",
            "type": "`$INTEGER`",
            "short": "国会回次",
          },
          {
            "name": "speaker",
            "title": "Speaker",
            "type": "`$STRING`",
            "short": "発言者名",
          },
          {
            "name": "speakerGroup",
            "title": "Speaker Group",
            "type": "`$STRING`",
            "short": "発言者所属会派",
          },
          {
            "name": "speakerPosition",
            "title": "Speaker Position",
            "type": "`$STRING`",
            "short": "発言者肩書き",
          },
          {
            "name": "speakerRole",
            "title": "Speaker Role",
            "type": "`$STRING`",
            "short": "発言者役割",
          },
          {
            "name": "speakerYomi",
            "title": "Speaker Yomi",
            "type": "`$STRING`",
            "short": "発言者よみ",
          },
          {
            "name": "speech",
            "title": "Speech",
            "type": "`$STRING`",
            "short": "発言",
          },
          {
            "name": "speechID",
            "title": "Speech Id",
            "type": "`$STRING`",
            "short": "発言ID",
          },
          {
            "name": "speechOrder",
            "title": "Speech Order",
            "type": "`$INTEGER`",
            "short": "発言番号",
          },
          {
            "name": "speechURL",
            "title": "Speech Url",
            "type": "`$STRING`",
            "short": "発言URL",
            "format": "uri",
          },
          {
            "name": "startPage",
            "title": "Start Page",
            "type": "`$INTEGER`",
            "short": "発言が掲載されている開始ページ",
          },
        ],
        "name": "speech",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/speech",
                "segments": [
                  {
                    "lit": "speech",
                  },
                ],
                "parts": [
                  "speech",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.speechRecord`",
                },
                "args": {
                  "query": [
                    {
                      "name": "any",
                      "orig": "any",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "closing",
                      "orig": "closing",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "contents_and_index",
                      "orig": "contents_and_index",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "from",
                      "orig": "from",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_from",
                      "orig": "issue_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_id",
                      "orig": "issue_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "issue_to",
                      "orig": "issue_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "maximum_record",
                      "orig": "maximum_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 30,
                    },
                    {
                      "name": "name_of_house",
                      "orig": "name_of_house",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name_of_meeting",
                      "orig": "name_of_meeting",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "record_packing",
                      "orig": "record_packing",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "xml",
                    },
                    {
                      "name": "search_range",
                      "orig": "search_range",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "冒頭・本文",
                    },
                    {
                      "name": "session_from",
                      "orig": "session_from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "session_to",
                      "orig": "session_to",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker",
                      "orig": "speaker",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_group",
                      "orig": "speaker_group",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_position",
                      "orig": "speaker_position",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speaker_role",
                      "orig": "speaker_role",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_id",
                      "orig": "speech_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "speech_number",
                      "orig": "speech_number",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "start_record",
                      "orig": "start_record",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "supplement_and_appendix",
                      "orig": "supplement_and_appendix",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "until",
                      "orig": "until",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
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
                    "until",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
