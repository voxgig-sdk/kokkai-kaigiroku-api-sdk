"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MeetingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOKKAI_KAIGIROKU_API_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOKKAI_KAIGIROKU_API_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KokkaiKaigirokuApiSDK.test();
        const ent = testsdk.Meeting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOKKAI_KAIGIROKU_API_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'meeting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "closing": { "a": true, "h": "Closing", "n": "closing", "r": false, "sh": "閉会中フラグ", "t": "`$BOOLEAN`", "key$": "closing", "index$": 0 }, "date": { "a": true, "fo": "date", "h": "Date", "n": "date", "r": false, "sh": "開催日付", "t": "`$STRING`", "key$": "date", "index$": 1 }, "imageKind": { "a": true, "h": "Image Kind", "n": "imageKind", "r": false, "sh": "イメージ種別（会議録・目次・索引・附録・追録）", "t": "`$STRING`", "key$": "imageKind", "index$": 2 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "号数", "t": "`$STRING`", "key$": "issue", "index$": 3 }, "issueID": { "a": true, "h": "Issue Id", "n": "issueID", "r": false, "sh": "会議録ID", "t": "`$STRING`", "key$": "issueID", "index$": 4 }, "meetingURL": { "a": true, "fo": "uri", "h": "Meeting Url", "n": "meetingURL", "r": false, "sh": "会議録テキスト表示画面のURL", "t": "`$STRING`", "key$": "meetingURL", "index$": 5 }, "nameOfHouse": { "a": true, "h": "Name Of House", "n": "nameOfHouse", "r": false, "sh": "院名", "t": "`$STRING`", "key$": "nameOfHouse", "index$": 6 }, "nameOfMeeting": { "a": true, "h": "Name Of Meeting", "n": "nameOfMeeting", "r": false, "sh": "会議名", "t": "`$STRING`", "key$": "nameOfMeeting", "index$": 7 }, "pdfURL": { "a": true, "fo": "uri", "h": "Pdf Url", "n": "pdfURL", "r": false, "sh": "会議録PDF表示画面のURL", "t": "`$STRING`", "key$": "pdfURL", "index$": 8 }, "searchObject": { "a": true, "h": "Search Object", "n": "searchObject", "r": false, "sh": "検索対象箇所（議事冒頭・本文）", "t": "`$STRING`", "key$": "searchObject", "index$": 9 }, "session": { "a": true, "h": "Session", "n": "session", "r": false, "sh": "国会回次", "t": "`$INTEGER`", "key$": "session", "index$": 10 }, "speechRecord": { "a": true, "h": "Speech Record", "n": "speechRecord", "r": false, "t": "`$ARRAY`", "key$": "speechRecord", "index$": 11 } }, "name": "meeting", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /meeting", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "any", "or": "any", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "closing", "or": "closing", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "contents_and_index", "or": "contents_and_index", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "from", "or": "from", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "issue_from", "or": "issue_from", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "issue_id", "or": "issue_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "issue_to", "or": "issue_to", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": 3, "k": "query", "n": "maximum_record", "or": "maximum_record", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "name_of_house", "or": "name_of_house", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "name_of_meeting", "or": "name_of_meeting", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": "xml", "k": "query", "n": "record_packing", "or": "record_packing", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": "冒頭・本文", "k": "query", "n": "search_range", "or": "search_range", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "session_from", "or": "session_from", "r": false, "t": "`$INTEGER`", "index$": 12 }, { "a": true, "k": "query", "n": "session_to", "or": "session_to", "r": false, "t": "`$INTEGER`", "index$": 13 }, { "a": true, "k": "query", "n": "speaker", "or": "speaker", "r": false, "t": "`$STRING`", "index$": 14 }, { "a": true, "k": "query", "n": "speaker_group", "or": "speaker_group", "r": false, "t": "`$STRING`", "index$": 15 }, { "a": true, "k": "query", "n": "speaker_position", "or": "speaker_position", "r": false, "t": "`$STRING`", "index$": 16 }, { "a": true, "k": "query", "n": "speaker_role", "or": "speaker_role", "r": false, "t": "`$STRING`", "index$": 17 }, { "a": true, "k": "query", "n": "speech_id", "or": "speech_id", "r": false, "t": "`$STRING`", "index$": 18 }, { "a": true, "k": "query", "n": "speech_number", "or": "speech_number", "r": false, "t": "`$INTEGER`", "index$": 19 }, { "a": true, "ex": 1, "k": "query", "n": "start_record", "or": "start_record", "r": false, "t": "`$INTEGER`", "index$": 20 }, { "a": true, "ex": false, "k": "query", "n": "supplement_and_appendix", "or": "supplement_and_appendix", "r": false, "t": "`$BOOLEAN`", "index$": 21 }, { "a": true, "k": "query", "n": "until", "or": "until", "r": false, "t": "`$STRING`", "index$": 22 }] }, "k": "http", "m": "GET", "o": "/meeting", "q": { "exist": ["any", "closing", "contents_and_index", "from", "issue_from", "issue_id", "issue_to", "maximum_record", "name_of_house", "name_of_meeting", "record_packing", "search_range", "session_from", "session_to", "speaker", "speaker_group", "speaker_position", "speaker_role", "speech_id", "speech_number", "start_record", "supplement_and_appendix", "until"] }, "r": {}, "s": [{ "lit": "meeting" }], "t": { "req": "`reqdata`", "res": "`body.meetingRecord`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "meeting", "name__orig": "meeting", "Name": "Meeting", "name_": "meeting", "name-": "meeting", "NAME": "MEETING", "index$": 0 }, { "active": true, "entity": "meeting", "key$": "BasicMeetingFlow", "kind": "basic", "name": "BasicMeetingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "meeting_ref01" } }], "index$": 0 }] }, 'Meeting', { "GET /meeting": { "protocol": "http", "operationId": "getMeeting", "responses": { "200": { "description": "成功時のレスポンス", "content": { "application/xml": { "schema": { "type": "object", "properties": { "numberOfRecords": { "type": "integer", "description": "総結果件数" }, "numberOfReturn": { "type": "integer", "description": "返戻件数" }, "startRecord": { "type": "integer", "description": "開始位置" }, "nextRecordPosition": { "type": "integer", "description": "次開始位置" }, "records": { "type": "array", "items": { "type": "object", "properties": { "issueID": { "type": "string", "description": "会議録ID" }, "imageKind": { "type": "string", "description": "イメージ種別（会議録・目次・索引・附録・追録）" }, "searchObject": { "type": "string", "description": "検索対象箇所（議事冒頭・本文）" }, "session": { "type": "integer", "description": "国会回次" }, "nameOfHouse": { "type": "string", "description": "院名" }, "nameOfMeeting": { "type": "string", "description": "会議名" }, "issue": { "type": "string", "description": "号数" }, "date": { "type": "string", "format": "date", "description": "開催日付" }, "closing": { "type": "boolean", "description": "閉会中フラグ" }, "speechRecord": { "type": "array", "items": { "type": "object", "properties": { "speechID": { "type": "string", "description": "発言ID" }, "speechOrder": { "type": "integer", "description": "発言番号" }, "speaker": { "type": "string", "description": "発言者名" }, "speakerYomi": { "type": "string", "description": "発言者よみ" }, "speakerGroup": { "type": "string", "description": "発言者所属会派" }, "speakerPosition": { "type": "string", "description": "発言者肩書き" }, "speakerRole": { "type": "string", "description": "発言者役割" }, "speech": { "type": "string", "description": "発言" }, "startPage": { "type": "integer", "description": "発言が掲載されている開始ページ" }, "createTime": { "type": "string", "format": "date-time", "description": "レコード登録日時" }, "updateTime": { "type": "string", "format": "date-time", "description": "レコード更新日時" }, "speechURL": { "type": "string", "format": "uri", "description": "発言URL" } }, "x-ref": "#/components/schemas/SpeechRecordFull" } }, "meetingURL": { "type": "string", "format": "uri", "description": "会議録テキスト表示画面のURL" }, "pdfURL": { "type": "string", "format": "uri", "description": "会議録PDF表示画面のURL" } }, "x-ref": "#/components/schemas/MeetingRecordFull" } } }, "x-ref": "#/components/schemas/MeetingResponse" } }, "application/json": { "schema": { "type": "object", "properties": { "numberOfRecords": { "description": "総結果件数", "key$": "numberOfRecords", "type": "integer" }, "numberOfReturn": { "description": "返戻件数", "key$": "numberOfReturn", "type": "integer" }, "startRecord": { "description": "開始位置", "key$": "startRecord", "type": "integer" }, "nextRecordPosition": { "description": "次開始位置", "key$": "nextRecordPosition", "type": "integer" }, "meetingRecord": { "items": { "properties": { "closing": { "description": "閉会中フラグ", "type": "boolean", "key$": "closing" }, "date": { "description": "開催日付", "format": "date", "type": "string", "key$": "date" }, "imageKind": { "description": "イメージ種別（会議録・目次・索引・附録・追録）", "type": "string", "key$": "imageKind" }, "issue": { "description": "号数", "type": "string", "key$": "issue" }, "issueID": { "description": "会議録ID", "type": "string", "key$": "issueID" }, "meetingURL": { "description": "会議録テキスト表示画面のURL", "format": "uri", "type": "string", "key$": "meetingURL" }, "nameOfHouse": { "description": "院名", "type": "string", "key$": "nameOfHouse" }, "nameOfMeeting": { "description": "会議名", "type": "string", "key$": "nameOfMeeting" }, "pdfURL": { "description": "会議録PDF表示画面のURL", "format": "uri", "type": "string", "key$": "pdfURL" }, "searchObject": { "description": "検索対象箇所（議事冒頭・本文）", "type": "string", "key$": "searchObject" }, "session": { "description": "国会回次", "type": "integer", "key$": "session" }, "speechRecord": { "items": { "properties": { "createTime": { "description": "レコード登録日時", "format": "date-time", "type": "string" }, "speaker": { "description": "発言者名", "type": "string" }, "speakerGroup": { "description": "発言者所属会派", "type": "string" }, "speakerPosition": { "description": "発言者肩書き", "type": "string" }, "speakerRole": { "description": "発言者役割", "type": "string" }, "speakerYomi": { "description": "発言者よみ", "type": "string" }, "speech": { "description": "発言", "type": "string" }, "speechID": { "description": "発言ID", "type": "string" }, "speechOrder": { "description": "発言番号", "type": "integer" }, "speechURL": { "description": "発言URL", "format": "uri", "type": "string" }, "startPage": { "description": "発言が掲載されている開始ページ", "type": "integer" }, "updateTime": { "description": "レコード更新日時", "format": "date-time", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/SpeechRecordFullJSON" }, "type": "array", "key$": "speechRecord" } }, "type": "object", "x-ref": "#/components/schemas/MeetingRecordFullJSON", "index$": 0 }, "key$": "meetingRecord", "type": "array" } }, "x-ref": "#/components/schemas/MeetingResponseJSON" } } } }, "400": { "description": "エラー発生時のレスポンス", "content": { "application/xml": { "schema": { "type": "object", "properties": { "diagnostics": { "type": "object", "properties": { "diagnostic": { "type": "object", "properties": { "message": { "type": "string", "description": "エラーメッセージ" }, "details": { "type": "array", "items": { "type": "string" }, "description": "エラーメッセージの詳細" } } } } } }, "x-ref": "#/components/schemas/ErrorResponse" } }, "application/json": { "schema": { "type": "object", "properties": { "message": { "type": "string", "description": "エラーメッセージ" }, "details": { "type": "array", "items": { "type": "string" }, "description": "エラーメッセージの詳細" } }, "x-ref": "#/components/schemas/ErrorResponseJSON" } } } } }, "parameters": [{ "name": "startRecord", "in": "query", "description": "検索結果の取得開始位置（1～検索件数の範囲）", "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 0 }, { "name": "maximumRecords", "in": "query", "description": "一回のリクエストで取得できるレコード数（1～10の範囲）", "schema": { "type": "integer", "minimum": 1, "maximum": 10, "default": 3 }, "index$": 1 }, { "name": "nameOfHouse", "in": "query", "description": "院名（衆議院、参議院、両院、両院協議会のいずれか）", "schema": { "type": "string", "enum": ["衆議院", "参議院", "両院", "両院協議会"] }, "index$": 2 }, { "name": "nameOfMeeting", "in": "query", "description": "会議名（本会議、委員会等の会議名。部分一致検索。半角スペース区切りで複数指定可能（OR検索））", "schema": { "type": "string" }, "index$": 3 }, { "name": "any", "in": "query", "description": "検索語（発言内容等に含まれる言葉。部分一致検索。半角スペース区切りで複数指定可能（AND検索））", "schema": { "type": "string" }, "index$": 4 }, { "name": "speaker", "in": "query", "description": "発言者名（部分一致検索。半角スペース区切りで複数指定可能（OR検索））", "schema": { "type": "string" }, "index$": 5 }, { "name": "from", "in": "query", "description": "開会日付の始点（YYYY-MM-DD形式）", "schema": { "type": "string", "format": "date" }, "index$": 6 }, { "name": "until", "in": "query", "description": "開会日付の終点（YYYY-MM-DD形式）", "schema": { "type": "string", "format": "date" }, "index$": 7 }, { "name": "supplementAndAppendix", "in": "query", "description": "検索対象を追録・附録に限定するか否か", "schema": { "type": "boolean", "default": false }, "index$": 8 }, { "name": "contentsAndIndex", "in": "query", "description": "検索対象を目次・索引に限定するか否か", "schema": { "type": "boolean", "default": false }, "index$": 9 }, { "name": "searchRange", "in": "query", "description": "検索語を指定した際の検索対象箇所", "schema": { "type": "string", "enum": ["冒頭", "本文", "冒頭・本文"], "default": "冒頭・本文" }, "index$": 10 }, { "name": "closing", "in": "query", "description": "検索対象を閉会中の会議録に限定するか否か", "schema": { "type": "boolean", "default": false }, "index$": 11 }, { "name": "speechNumber", "in": "query", "description": "発言番号（0以上の整数。完全一致検索）", "schema": { "type": "integer", "minimum": 0 }, "index$": 12 }, { "name": "speakerPosition", "in": "query", "description": "発言者の肩書き（部分一致検索）", "schema": { "type": "string" }, "index$": 13 }, { "name": "speakerGroup", "in": "query", "description": "発言者の所属会派（部分一致検索）", "schema": { "type": "string" }, "index$": 14 }, { "name": "speakerRole", "in": "query", "description": "発言者の役割", "schema": { "type": "string", "enum": ["証人", "参考人", "公述人"] }, "index$": 15 }, { "name": "speechID", "in": "query", "description": "発言ID（会議録ID_発言番号の書式。完全一致検索）", "schema": { "type": "string", "pattern": "^[A-Za-z0-9]{21}_[0-9]{3,4}$" }, "index$": 16 }, { "name": "issueID", "in": "query", "description": "会議録ID（21桁の英数字。完全一致検索）", "schema": { "type": "string", "pattern": "^[A-Za-z0-9]{21}$" }, "index$": 17 }, { "name": "sessionFrom", "in": "query", "description": "国会回次の始まり（3桁までの自然数）", "schema": { "type": "integer", "minimum": 1, "maximum": 999 }, "index$": 18 }, { "name": "sessionTo", "in": "query", "description": "国会回次の終わり（3桁までの自然数）", "schema": { "type": "integer", "minimum": 1, "maximum": 999 }, "index$": 19 }, { "name": "issueFrom", "in": "query", "description": "号数の始まり（3桁までの整数）", "schema": { "type": "integer", "minimum": 0, "maximum": 999 }, "index$": 20 }, { "name": "issueTo", "in": "query", "description": "号数の終わり（3桁までの整数）", "schema": { "type": "integer", "minimum": 0, "maximum": 999 }, "index$": 21 }, { "name": "recordPacking", "in": "query", "description": "応答ファイルの形式", "schema": { "type": "string", "enum": ["xml", "json"], "default": "xml" }, "index$": 22 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let meeting_ref01_data = Object.values(setup.data.existing.meeting)[0];
        // LIST
        const meeting_ref01_ent = client.Meeting();
        const meeting_ref01_match = {};
        const meeting_ref01_list = (await meeting_ref01_ent.list(meeting_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/meeting/MeetingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KokkaiKaigirokuApiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['meeting01', 'meeting02', 'meeting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOKKAI_KAIGIROKU_API_TEST_MEETING_ENTID': idmap,
        'KOKKAI_KAIGIROKU_API_TEST_LIVE': 'FALSE',
        'KOKKAI_KAIGIROKU_API_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KOKKAI_KAIGIROKU_API_TEST_MEETING_ENTID'];
    const live = 'TRUE' === env.KOKKAI_KAIGIROKU_API_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOKKAI_KAIGIROKU_API_TEST_MEETING_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KokkaiKaigirokuApiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KOKKAI_KAIGIROKU_API_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=MeetingEntity.test.js.map