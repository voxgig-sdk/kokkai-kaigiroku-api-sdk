"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "maximum_record": "v1",
            "name_of_house": "v1",
            "name_of_meeting": "v1",
            "record_packing": "v1",
            "search_range": "v1",
            "session_from": "v1",
            "session_to": "v1",
            "speaker": "v1",
            "speaker_group": "v1",
            "speaker_position": "v1",
            "speaker_role": "v1",
            "speech_id": "v1",
            "speech_number": "v1",
            "start_record": "v1",
            "supplement_and_appendix": "v1",
            "until": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "numberOfRecords": 1,
            "numberOfReturn": 1,
            "startRecord": 1,
            "nextRecordPosition": 1,
            "meetingRecord": [
                {
                    "closing": true,
                    "date": "2026-01-01",
                    "imageKind": "x",
                    "issue": "x",
                    "issueID": "x",
                    "meetingURL": "x",
                    "nameOfHouse": "x",
                    "nameOfMeeting": "x",
                    "pdfURL": "x",
                    "searchObject": "x",
                    "session": 1,
                    "speechRecord": [
                        {
                            "createTime": "2026-01-01T00:00:00Z",
                            "speaker": "x",
                            "speakerGroup": "x",
                            "speakerPosition": "x",
                            "speakerRole": "x",
                            "speakerYomi": "x",
                            "speech": "x",
                            "speechID": "x",
                            "speechOrder": 1,
                            "speechURL": "x",
                            "startPage": 1,
                            "updateTime": "2026-01-01T00:00:00Z"
                        }
                    ]
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
            "maximum_record": "v1",
            "name_of_house": "v1",
            "name_of_meeting": "v1",
            "record_packing": "v1",
            "search_range": "v1",
            "session_from": "v1",
            "session_to": "v1",
            "speaker": "v1",
            "speaker_group": "v1",
            "speaker_position": "v1",
            "speaker_role": "v1",
            "speech_id": "v1",
            "speech_number": "v1",
            "start_record": "v1",
            "supplement_and_appendix": "v1",
            "until": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "numberOfRecords": 1,
            "numberOfReturn": 1,
            "startRecord": 1,
            "nextRecordPosition": 1,
            "meetingRecord": [
                {
                    "closing": true,
                    "date": "2026-01-01",
                    "imageKind": "x",
                    "issue": "x",
                    "issueID": "x",
                    "meetingURL": "x",
                    "nameOfHouse": "x",
                    "nameOfMeeting": "x",
                    "pdfURL": "x",
                    "searchObject": "x",
                    "session": 1,
                    "speechRecord": [
                        {
                            "speaker": "x",
                            "speechID": "x",
                            "speechOrder": 1,
                            "speechURL": "x"
                        }
                    ]
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
            "maximum_record": "v1",
            "name_of_house": "v1",
            "name_of_meeting": "v1",
            "record_packing": "v1",
            "search_range": "v1",
            "session_from": "v1",
            "session_to": "v1",
            "speaker": "v1",
            "speaker_group": "v1",
            "speaker_position": "v1",
            "speaker_role": "v1",
            "speech_id": "v1",
            "speech_number": "v1",
            "start_record": "v1",
            "supplement_and_appendix": "v1",
            "until": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "numberOfRecords": 1,
            "numberOfReturn": 1,
            "startRecord": 1,
            "nextRecordPosition": 1,
            "speechRecord": [
                {
                    "closing": true,
                    "date": "2026-01-01",
                    "imageKind": "x",
                    "issue": "x",
                    "issueID": "x",
                    "meetingURL": "x",
                    "nameOfHouse": "x",
                    "nameOfMeeting": "x",
                    "pdfURL": "x",
                    "searchObject": "x",
                    "session": 1,
                    "speaker": "x",
                    "speakerGroup": "x",
                    "speakerPosition": "x",
                    "speakerRole": "x",
                    "speakerYomi": "x",
                    "speech": "x",
                    "speechID": "x",
                    "speechOrder": 1,
                    "speechURL": "x",
                    "startPage": 1
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map