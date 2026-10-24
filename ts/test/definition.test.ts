import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "meeting",
    "accessor": "Meeting",
    "op": "list",
    "method": "GET",
    "path": "/meeting",
    "args": [],
    "select": {
      "any": "v1",
      "closing": "v1",
      "contents_and_index": "v1",
      "from": "v1",
      "issue_from": "v1",
      "issue_id": "v1",
      "issue_to": "v1",
      "maximum_record": 3,
      "name_of_house": "v1",
      "name_of_meeting": "v1",
      "record_packing": "xml",
      "search_range": "冒頭・本文",
      "session_from": "v1",
      "session_to": "v1",
      "speaker": "v1",
      "speaker_group": "v1",
      "speaker_position": "v1",
      "speaker_role": "v1",
      "speech_id": "v1",
      "speech_number": "v1",
      "start_record": 1,
      "supplement_and_appendix": "v1",
      "until": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/xml",
      "application/json"
    ],
    "query": [
      "startRecord",
      "maximumRecords",
      "nameOfHouse",
      "nameOfMeeting",
      "any",
      "speaker",
      "from",
      "until",
      "supplementAndAppendix",
      "contentsAndIndex",
      "searchRange",
      "closing",
      "speechNumber",
      "speakerPosition",
      "speakerGroup",
      "speakerRole",
      "speechID",
      "issueID",
      "sessionFrom",
      "sessionTo",
      "issueFrom",
      "issueTo",
      "recordPacking"
    ],
    "queryArgs": [
      {
        "name": "any",
        "wire": "any"
      },
      {
        "name": "closing",
        "wire": "closing"
      },
      {
        "name": "contents_and_index",
        "wire": "contentsAndIndex"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "issue_from",
        "wire": "issueFrom"
      },
      {
        "name": "issue_id",
        "wire": "issueID"
      },
      {
        "name": "issue_to",
        "wire": "issueTo"
      },
      {
        "name": "maximum_record",
        "wire": "maximumRecords"
      },
      {
        "name": "name_of_house",
        "wire": "nameOfHouse"
      },
      {
        "name": "name_of_meeting",
        "wire": "nameOfMeeting"
      },
      {
        "name": "record_packing",
        "wire": "recordPacking"
      },
      {
        "name": "search_range",
        "wire": "searchRange"
      },
      {
        "name": "session_from",
        "wire": "sessionFrom"
      },
      {
        "name": "session_to",
        "wire": "sessionTo"
      },
      {
        "name": "speaker",
        "wire": "speaker"
      },
      {
        "name": "speaker_group",
        "wire": "speakerGroup"
      },
      {
        "name": "speaker_position",
        "wire": "speakerPosition"
      },
      {
        "name": "speaker_role",
        "wire": "speakerRole"
      },
      {
        "name": "speech_id",
        "wire": "speechID"
      },
      {
        "name": "speech_number",
        "wire": "speechNumber"
      },
      {
        "name": "start_record",
        "wire": "startRecord"
      },
      {
        "name": "supplement_and_appendix",
        "wire": "supplementAndAppendix"
      },
      {
        "name": "until",
        "wire": "until"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "numberOfRecords": 1,
      "numberOfReturn": 1,
      "startRecord": 1,
      "nextRecordPosition": 1,
      "meetingRecord": [
        {
          "issueID": "x",
          "imageKind": "x",
          "searchObject": "x",
          "session": 1,
          "nameOfHouse": "x",
          "nameOfMeeting": "x",
          "issue": "x",
          "date": "2026-01-01",
          "closing": true,
          "speechRecord": [
            {
              "speechID": "x",
              "speechOrder": 1,
              "speaker": "x",
              "speakerYomi": "x",
              "speakerGroup": "x",
              "speakerPosition": "x",
              "speakerRole": "x",
              "speech": "x",
              "startPage": 1,
              "createTime": "2026-01-01T00:00:00Z",
              "updateTime": "2026-01-01T00:00:00Z",
              "speechURL": "x"
            }
          ],
          "meetingURL": "x",
          "pdfURL": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "meeting_list",
    "accessor": "MeetingList",
    "op": "list",
    "method": "GET",
    "path": "/meeting_list",
    "args": [],
    "select": {
      "any": "v1",
      "closing": "v1",
      "contents_and_index": "v1",
      "from": "v1",
      "issue_from": "v1",
      "issue_id": "v1",
      "issue_to": "v1",
      "maximum_record": 30,
      "name_of_house": "v1",
      "name_of_meeting": "v1",
      "record_packing": "xml",
      "search_range": "冒頭・本文",
      "session_from": "v1",
      "session_to": "v1",
      "speaker": "v1",
      "speaker_group": "v1",
      "speaker_position": "v1",
      "speaker_role": "v1",
      "speech_id": "v1",
      "speech_number": "v1",
      "start_record": 1,
      "supplement_and_appendix": "v1",
      "until": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/xml",
      "application/json"
    ],
    "query": [
      "startRecord",
      "maximumRecords",
      "nameOfHouse",
      "nameOfMeeting",
      "any",
      "speaker",
      "from",
      "until",
      "supplementAndAppendix",
      "contentsAndIndex",
      "searchRange",
      "closing",
      "speechNumber",
      "speakerPosition",
      "speakerGroup",
      "speakerRole",
      "speechID",
      "issueID",
      "sessionFrom",
      "sessionTo",
      "issueFrom",
      "issueTo",
      "recordPacking"
    ],
    "queryArgs": [
      {
        "name": "any",
        "wire": "any"
      },
      {
        "name": "closing",
        "wire": "closing"
      },
      {
        "name": "contents_and_index",
        "wire": "contentsAndIndex"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "issue_from",
        "wire": "issueFrom"
      },
      {
        "name": "issue_id",
        "wire": "issueID"
      },
      {
        "name": "issue_to",
        "wire": "issueTo"
      },
      {
        "name": "maximum_record",
        "wire": "maximumRecords"
      },
      {
        "name": "name_of_house",
        "wire": "nameOfHouse"
      },
      {
        "name": "name_of_meeting",
        "wire": "nameOfMeeting"
      },
      {
        "name": "record_packing",
        "wire": "recordPacking"
      },
      {
        "name": "search_range",
        "wire": "searchRange"
      },
      {
        "name": "session_from",
        "wire": "sessionFrom"
      },
      {
        "name": "session_to",
        "wire": "sessionTo"
      },
      {
        "name": "speaker",
        "wire": "speaker"
      },
      {
        "name": "speaker_group",
        "wire": "speakerGroup"
      },
      {
        "name": "speaker_position",
        "wire": "speakerPosition"
      },
      {
        "name": "speaker_role",
        "wire": "speakerRole"
      },
      {
        "name": "speech_id",
        "wire": "speechID"
      },
      {
        "name": "speech_number",
        "wire": "speechNumber"
      },
      {
        "name": "start_record",
        "wire": "startRecord"
      },
      {
        "name": "supplement_and_appendix",
        "wire": "supplementAndAppendix"
      },
      {
        "name": "until",
        "wire": "until"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "numberOfRecords": 1,
      "numberOfReturn": 1,
      "startRecord": 1,
      "nextRecordPosition": 1,
      "meetingRecord": [
        {
          "issueID": "x",
          "imageKind": "x",
          "searchObject": "x",
          "session": 1,
          "nameOfHouse": "x",
          "nameOfMeeting": "x",
          "issue": "x",
          "date": "2026-01-01",
          "closing": true,
          "speechRecord": [
            {
              "speechID": "x",
              "speechOrder": 1,
              "speaker": "x",
              "speechURL": "x"
            }
          ],
          "meetingURL": "x",
          "pdfURL": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "speech",
    "accessor": "Speech",
    "op": "list",
    "method": "GET",
    "path": "/speech",
    "args": [],
    "select": {
      "any": "v1",
      "closing": "v1",
      "contents_and_index": "v1",
      "from": "v1",
      "issue_from": "v1",
      "issue_id": "v1",
      "issue_to": "v1",
      "maximum_record": 30,
      "name_of_house": "v1",
      "name_of_meeting": "v1",
      "record_packing": "xml",
      "search_range": "冒頭・本文",
      "session_from": "v1",
      "session_to": "v1",
      "speaker": "v1",
      "speaker_group": "v1",
      "speaker_position": "v1",
      "speaker_role": "v1",
      "speech_id": "v1",
      "speech_number": "v1",
      "start_record": 1,
      "supplement_and_appendix": "v1",
      "until": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/xml",
      "application/json"
    ],
    "query": [
      "startRecord",
      "maximumRecords",
      "nameOfHouse",
      "nameOfMeeting",
      "any",
      "speaker",
      "from",
      "until",
      "supplementAndAppendix",
      "contentsAndIndex",
      "searchRange",
      "closing",
      "speechNumber",
      "speakerPosition",
      "speakerGroup",
      "speakerRole",
      "speechID",
      "issueID",
      "sessionFrom",
      "sessionTo",
      "issueFrom",
      "issueTo",
      "recordPacking"
    ],
    "queryArgs": [
      {
        "name": "any",
        "wire": "any"
      },
      {
        "name": "closing",
        "wire": "closing"
      },
      {
        "name": "contents_and_index",
        "wire": "contentsAndIndex"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "issue_from",
        "wire": "issueFrom"
      },
      {
        "name": "issue_id",
        "wire": "issueID"
      },
      {
        "name": "issue_to",
        "wire": "issueTo"
      },
      {
        "name": "maximum_record",
        "wire": "maximumRecords"
      },
      {
        "name": "name_of_house",
        "wire": "nameOfHouse"
      },
      {
        "name": "name_of_meeting",
        "wire": "nameOfMeeting"
      },
      {
        "name": "record_packing",
        "wire": "recordPacking"
      },
      {
        "name": "search_range",
        "wire": "searchRange"
      },
      {
        "name": "session_from",
        "wire": "sessionFrom"
      },
      {
        "name": "session_to",
        "wire": "sessionTo"
      },
      {
        "name": "speaker",
        "wire": "speaker"
      },
      {
        "name": "speaker_group",
        "wire": "speakerGroup"
      },
      {
        "name": "speaker_position",
        "wire": "speakerPosition"
      },
      {
        "name": "speaker_role",
        "wire": "speakerRole"
      },
      {
        "name": "speech_id",
        "wire": "speechID"
      },
      {
        "name": "speech_number",
        "wire": "speechNumber"
      },
      {
        "name": "start_record",
        "wire": "startRecord"
      },
      {
        "name": "supplement_and_appendix",
        "wire": "supplementAndAppendix"
      },
      {
        "name": "until",
        "wire": "until"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "numberOfRecords": 1,
      "numberOfReturn": 1,
      "startRecord": 1,
      "nextRecordPosition": 1,
      "speechRecord": [
        {
          "speechID": "x",
          "issueID": "x",
          "imageKind": "x",
          "searchObject": "x",
          "session": 1,
          "nameOfHouse": "x",
          "nameOfMeeting": "x",
          "issue": "x",
          "date": "2026-01-01",
          "closing": true,
          "speechOrder": 1,
          "speaker": "x",
          "speakerYomi": "x",
          "speakerGroup": "x",
          "speakerPosition": "x",
          "speakerRole": "x",
          "speech": "x",
          "startPage": 1,
          "speechURL": "x",
          "meetingURL": "x",
          "pdfURL": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
