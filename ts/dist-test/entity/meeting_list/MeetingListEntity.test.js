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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MeetingListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOKKAI_KAIGIROKU_API_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOKKAI_KAIGIROKU_API_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KokkaiKaigirokuApiSDK.test();
        const ent = testsdk.MeetingList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOKKAI_KAIGIROKU_API_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'meeting_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "closing", "req": false, "short": "閉会中フラグ", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "date", "name": "date", "req": false, "short": "開催日付", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "imageKind", "req": false, "short": "イメージ種別（会議録・目次・索引・附録・追録）", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "issue", "req": false, "short": "号数", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "issueID", "req": false, "short": "会議録ID", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "uri", "name": "meetingURL", "req": false, "short": "会議録テキスト表示画面のURL", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "nameOfHouse", "req": false, "short": "院名", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "nameOfMeeting", "req": false, "short": "会議名", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "uri", "name": "pdfURL", "req": false, "short": "会議録PDF表示画面のURL", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "searchObject", "req": false, "short": "検索対象箇所（議事冒頭・本文）", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "session", "req": false, "short": "国会回次", "type": "`$INTEGER`", "index$": 10 }, { "active": true, "name": "speechRecord", "req": false, "type": "`$ARRAY`", "index$": 11 }], "name": "meeting_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "any", "orig": "any", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "closing", "orig": "closing", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "example": false, "kind": "query", "name": "contents_and_index", "orig": "contents_and_index", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "kind": "query", "name": "from", "orig": "from", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "issue_from", "orig": "issue_from", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "issue_id", "orig": "issue_id", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "issue_to", "orig": "issue_to", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "example": 30, "kind": "query", "name": "maximum_record", "orig": "maximum_record", "reqd": false, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "kind": "query", "name": "name_of_house", "orig": "name_of_house", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "kind": "query", "name": "name_of_meeting", "orig": "name_of_meeting", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "example": "xml", "kind": "query", "name": "record_packing", "orig": "record_packing", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "example": "冒頭・本文", "kind": "query", "name": "search_range", "orig": "search_range", "reqd": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "kind": "query", "name": "session_from", "orig": "session_from", "reqd": false, "type": "`$INTEGER`", "index$": 12 }, { "active": true, "kind": "query", "name": "session_to", "orig": "session_to", "reqd": false, "type": "`$INTEGER`", "index$": 13 }, { "active": true, "kind": "query", "name": "speaker", "orig": "speaker", "reqd": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "kind": "query", "name": "speaker_group", "orig": "speaker_group", "reqd": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "kind": "query", "name": "speaker_position", "orig": "speaker_position", "reqd": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "kind": "query", "name": "speaker_role", "orig": "speaker_role", "reqd": false, "type": "`$STRING`", "index$": 17 }, { "active": true, "kind": "query", "name": "speech_id", "orig": "speech_id", "reqd": false, "type": "`$STRING`", "index$": 18 }, { "active": true, "kind": "query", "name": "speech_number", "orig": "speech_number", "reqd": false, "type": "`$INTEGER`", "index$": 19 }, { "active": true, "example": 1, "kind": "query", "name": "start_record", "orig": "start_record", "reqd": false, "type": "`$INTEGER`", "index$": 20 }, { "active": true, "example": false, "kind": "query", "name": "supplement_and_appendix", "orig": "supplement_and_appendix", "reqd": false, "type": "`$BOOLEAN`", "index$": 21 }, { "active": true, "kind": "query", "name": "until", "orig": "until", "reqd": false, "type": "`$STRING`", "index$": 22 }] }, "contract": { "id": "GET /meeting_list", "json": "{\"operationId\":\"getMeetingList\",\"parameters\":[{\"description\":\"検索結果の取得開始位置（1～検索件数の範囲）\",\"in\":\"query\",\"name\":\"startRecord\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"一回のリクエストで取得できるレコード数（1～100の範囲）\",\"in\":\"query\",\"name\":\"maximumRecords\",\"schema\":{\"default\":30,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"院名（衆議院、参議院、両院、両院協議会のいずれか）\",\"in\":\"query\",\"name\":\"nameOfHouse\",\"schema\":{\"enum\":[\"衆議院\",\"参議院\",\"両院\",\"両院協議会\"],\"type\":\"string\"}},{\"description\":\"会議名（本会議、委員会等の会議名。部分一致検索。半角スペース区切りで複数指定可能（OR検索））\",\"in\":\"query\",\"name\":\"nameOfMeeting\",\"schema\":{\"type\":\"string\"}},{\"description\":\"検索語（発言内容等に含まれる言葉。部分一致検索。半角スペース区切りで複数指定可能（AND検索））\",\"in\":\"query\",\"name\":\"any\",\"schema\":{\"type\":\"string\"}},{\"description\":\"発言者名（部分一致検索。半角スペース区切りで複数指定可能（OR検索））\",\"in\":\"query\",\"name\":\"speaker\",\"schema\":{\"type\":\"string\"}},{\"description\":\"開会日付の始点（YYYY-MM-DD形式）\",\"in\":\"query\",\"name\":\"from\",\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"開会日付の終点（YYYY-MM-DD形式）\",\"in\":\"query\",\"name\":\"until\",\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"検索対象を追録・附録に限定するか否か\",\"in\":\"query\",\"name\":\"supplementAndAppendix\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"検索対象を目次・索引に限定するか否か\",\"in\":\"query\",\"name\":\"contentsAndIndex\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"検索語を指定した際の検索対象箇所\",\"in\":\"query\",\"name\":\"searchRange\",\"schema\":{\"default\":\"冒頭・本文\",\"enum\":[\"冒頭\",\"本文\",\"冒頭・本文\"],\"type\":\"string\"}},{\"description\":\"検索対象を閉会中の会議録に限定するか否か\",\"in\":\"query\",\"name\":\"closing\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"発言番号（0以上の整数。完全一致検索）\",\"in\":\"query\",\"name\":\"speechNumber\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"発言者の肩書き（部分一致検索）\",\"in\":\"query\",\"name\":\"speakerPosition\",\"schema\":{\"type\":\"string\"}},{\"description\":\"発言者の所属会派（部分一致検索）\",\"in\":\"query\",\"name\":\"speakerGroup\",\"schema\":{\"type\":\"string\"}},{\"description\":\"発言者の役割\",\"in\":\"query\",\"name\":\"speakerRole\",\"schema\":{\"enum\":[\"証人\",\"参考人\",\"公述人\"],\"type\":\"string\"}},{\"description\":\"発言ID（会議録ID_発言番号の書式。完全一致検索）\",\"in\":\"query\",\"name\":\"speechID\",\"schema\":{\"pattern\":\"^[A-Za-z0-9]{21}_[0-9]{3,4}$\",\"type\":\"string\"}},{\"description\":\"会議録ID（21桁の英数字。完全一致検索）\",\"in\":\"query\",\"name\":\"issueID\",\"schema\":{\"pattern\":\"^[A-Za-z0-9]{21}$\",\"type\":\"string\"}},{\"description\":\"国会回次の始まり（3桁までの自然数）\",\"in\":\"query\",\"name\":\"sessionFrom\",\"schema\":{\"maximum\":999,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"国会回次の終わり（3桁までの自然数）\",\"in\":\"query\",\"name\":\"sessionTo\",\"schema\":{\"maximum\":999,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"号数の始まり（3桁までの整数）\",\"in\":\"query\",\"name\":\"issueFrom\",\"schema\":{\"maximum\":999,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"号数の終わり（3桁までの整数）\",\"in\":\"query\",\"name\":\"issueTo\",\"schema\":{\"maximum\":999,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"応答ファイルの形式\",\"in\":\"query\",\"name\":\"recordPacking\",\"schema\":{\"default\":\"xml\",\"enum\":[\"xml\",\"json\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meetingRecord\":{\"items\":{\"properties\":{\"closing\":{\"description\":\"閉会中フラグ\",\"type\":\"boolean\"},\"date\":{\"description\":\"開催日付\",\"format\":\"date\",\"type\":\"string\"},\"imageKind\":{\"description\":\"イメージ種別（会議録・目次・索引・附録・追録）\",\"type\":\"string\"},\"issue\":{\"description\":\"号数\",\"type\":\"string\"},\"issueID\":{\"description\":\"会議録ID\",\"type\":\"string\"},\"meetingURL\":{\"description\":\"会議録テキスト表示画面のURL\",\"format\":\"uri\",\"type\":\"string\"},\"nameOfHouse\":{\"description\":\"院名\",\"type\":\"string\"},\"nameOfMeeting\":{\"description\":\"会議名\",\"type\":\"string\"},\"pdfURL\":{\"description\":\"会議録PDF表示画面のURL\",\"format\":\"uri\",\"type\":\"string\"},\"searchObject\":{\"description\":\"検索対象箇所（議事冒頭・本文）\",\"type\":\"string\"},\"session\":{\"description\":\"国会回次\",\"type\":\"integer\"},\"speechRecord\":{\"items\":{\"properties\":{\"speaker\":{\"description\":\"発言者名\",\"type\":\"string\"},\"speechID\":{\"description\":\"発言ID\",\"type\":\"string\"},\"speechOrder\":{\"description\":\"発言番号\",\"type\":\"integer\"},\"speechURL\":{\"description\":\"発言URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"nextRecordPosition\":{\"description\":\"次開始位置\",\"type\":\"integer\"},\"numberOfRecords\":{\"description\":\"総結果件数\",\"type\":\"integer\"},\"numberOfReturn\":{\"description\":\"返戻件数\",\"type\":\"integer\"},\"startRecord\":{\"description\":\"開始位置\",\"type\":\"integer\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"properties\":{\"nextRecordPosition\":{\"description\":\"次開始位置\",\"type\":\"integer\"},\"numberOfRecords\":{\"description\":\"総結果件数\",\"type\":\"integer\"},\"numberOfReturn\":{\"description\":\"返戻件数\",\"type\":\"integer\"},\"records\":{\"items\":{\"properties\":{\"closing\":{\"description\":\"閉会中フラグ\",\"type\":\"boolean\"},\"date\":{\"description\":\"開催日付\",\"format\":\"date\",\"type\":\"string\"},\"imageKind\":{\"description\":\"イメージ種別（会議録・目次・索引・附録・追録）\",\"type\":\"string\"},\"issue\":{\"description\":\"号数\",\"type\":\"string\"},\"issueID\":{\"description\":\"会議録ID\",\"type\":\"string\"},\"meetingURL\":{\"description\":\"会議録テキスト表示画面のURL\",\"format\":\"uri\",\"type\":\"string\"},\"nameOfHouse\":{\"description\":\"院名\",\"type\":\"string\"},\"nameOfMeeting\":{\"description\":\"会議名\",\"type\":\"string\"},\"pdfURL\":{\"description\":\"会議録PDF表示画面のURL\",\"format\":\"uri\",\"type\":\"string\"},\"searchObject\":{\"description\":\"検索対象箇所（議事冒頭・本文）\",\"type\":\"string\"},\"session\":{\"description\":\"国会回次\",\"type\":\"integer\"},\"speechRecord\":{\"items\":{\"properties\":{\"speaker\":{\"description\":\"発言者名\",\"type\":\"string\"},\"speechID\":{\"description\":\"発言ID\",\"type\":\"string\"},\"speechOrder\":{\"description\":\"発言番号\",\"type\":\"integer\"},\"speechURL\":{\"description\":\"発言URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"startRecord\":{\"description\":\"開始位置\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"成功時のレスポンス\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"details\":{\"description\":\"エラーメッセージの詳細\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"message\":{\"description\":\"エラーメッセージ\",\"type\":\"string\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"properties\":{\"diagnostics\":{\"properties\":{\"diagnostic\":{\"properties\":{\"details\":{\"description\":\"エラーメッセージの詳細\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"message\":{\"description\":\"エラーメッセージ\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"エラー発生時のレスポンス\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/meeting_list", "segments": [{ "lit": "meeting_list" }], "select": { "exist": ["any", "closing", "contents_and_index", "from", "issue_from", "issue_id", "issue_to", "maximum_record", "name_of_house", "name_of_meeting", "record_packing", "search_range", "session_from", "session_to", "speaker", "speaker_group", "speaker_position", "speaker_role", "speech_id", "speech_number", "start_record", "supplement_and_appendix", "until"] }, "transform": { "req": "`reqdata`", "res": "`body.meetingRecord`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "meeting_list", "name__orig": "meeting_list", "Name": "MeetingList", "name_": "meeting_list", "name-": "meeting-list", "NAME": "MEETING_LIST", "index$": 1 }, { "active": true, "entity": "meeting_list", "key$": "BasicMeetingListFlow", "kind": "basic", "name": "BasicMeetingListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "meeting_list_ref01" } }], "index$": 0 }] }, 'MeetingList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let meeting_list_ref01_data = Object.values(setup.data.existing.meeting_list)[0];
        // LIST
        const meeting_list_ref01_ent = client.MeetingList();
        const meeting_list_ref01_match = {};
        const meeting_list_ref01_list = (await meeting_list_ref01_ent.list(meeting_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/meeting_list/MeetingListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KokkaiKaigirokuApiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['meeting_list01', 'meeting_list02', 'meeting_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOKKAI_KAIGIROKU_API_TEST_MEETING_LIST_ENTID': idmap,
        'KOKKAI_KAIGIROKU_API_TEST_LIVE': 'FALSE',
        'KOKKAI_KAIGIROKU_API_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KOKKAI_KAIGIROKU_API_TEST_MEETING_LIST_ENTID'];
    const live = 'TRUE' === env.KOKKAI_KAIGIROKU_API_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOKKAI_KAIGIROKU_API_TEST_MEETING_LIST_ENTID'];
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
//# sourceMappingURL=MeetingListEntity.test.js.map