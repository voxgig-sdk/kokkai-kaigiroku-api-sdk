<?php
declare(strict_types=1);

// KokkaiKaigirokuApi SDK configuration

class KokkaiKaigirokuApiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "KokkaiKaigirokuApi",
                "slug" => "kokkai-kaigiroku-api",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://kokkai.ndl.go.jp/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "meeting" => [],
                    "meeting_list" => [],
                    "speech" => [],
                ],
            ],
            "entity" => [
        'meeting' => [
          'fields' => [
            [
              'name' => 'closing',
              'title' => 'Closing',
              'type' => '`$BOOLEAN`',
              'short' => '閉会中フラグ',
            ],
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => '開催日付',
              'format' => 'date',
            ],
            [
              'name' => 'imageKind',
              'title' => 'Image Kind',
              'type' => '`$STRING`',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
            ],
            [
              'name' => 'issue',
              'title' => 'Issue',
              'type' => '`$STRING`',
              'short' => '号数',
            ],
            [
              'name' => 'issueID',
              'title' => 'Issue Id',
              'type' => '`$STRING`',
              'short' => '会議録ID',
            ],
            [
              'name' => 'meetingURL',
              'title' => 'Meeting Url',
              'type' => '`$STRING`',
              'short' => '会議録テキスト表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'nameOfHouse',
              'title' => 'Name Of House',
              'type' => '`$STRING`',
              'short' => '院名',
            ],
            [
              'name' => 'nameOfMeeting',
              'title' => 'Name Of Meeting',
              'type' => '`$STRING`',
              'short' => '会議名',
            ],
            [
              'name' => 'pdfURL',
              'title' => 'Pdf Url',
              'type' => '`$STRING`',
              'short' => '会議録PDF表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'searchObject',
              'title' => 'Search Object',
              'type' => '`$STRING`',
              'short' => '検索対象箇所（議事冒頭・本文）',
            ],
            [
              'name' => 'session',
              'title' => 'Session',
              'type' => '`$INTEGER`',
              'short' => '国会回次',
            ],
            [
              'name' => 'speechRecord',
              'title' => 'Speech Record',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'meeting',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meeting',
                  'segments' => [
                    [
                      'lit' => 'meeting',
                    ],
                  ],
                  'parts' => [
                    'meeting',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.meetingRecord`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 3,
                      ],
                      [
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'xml',
                      ],
                      [
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '冒頭・本文',
                      ],
                      [
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'any',
                      'closing',
                      'contents_and_index',
                      'from',
                      'issue_from',
                      'issue_id',
                      'issue_to',
                      'maximum_record',
                      'name_of_house',
                      'name_of_meeting',
                      'record_packing',
                      'search_range',
                      'session_from',
                      'session_to',
                      'speaker',
                      'speaker_group',
                      'speaker_position',
                      'speaker_role',
                      'speech_id',
                      'speech_number',
                      'start_record',
                      'supplement_and_appendix',
                      'until',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'meeting_list' => [
          'fields' => [
            [
              'name' => 'closing',
              'title' => 'Closing',
              'type' => '`$BOOLEAN`',
              'short' => '閉会中フラグ',
            ],
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => '開催日付',
              'format' => 'date',
            ],
            [
              'name' => 'imageKind',
              'title' => 'Image Kind',
              'type' => '`$STRING`',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
            ],
            [
              'name' => 'issue',
              'title' => 'Issue',
              'type' => '`$STRING`',
              'short' => '号数',
            ],
            [
              'name' => 'issueID',
              'title' => 'Issue Id',
              'type' => '`$STRING`',
              'short' => '会議録ID',
            ],
            [
              'name' => 'meetingURL',
              'title' => 'Meeting Url',
              'type' => '`$STRING`',
              'short' => '会議録テキスト表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'nameOfHouse',
              'title' => 'Name Of House',
              'type' => '`$STRING`',
              'short' => '院名',
            ],
            [
              'name' => 'nameOfMeeting',
              'title' => 'Name Of Meeting',
              'type' => '`$STRING`',
              'short' => '会議名',
            ],
            [
              'name' => 'pdfURL',
              'title' => 'Pdf Url',
              'type' => '`$STRING`',
              'short' => '会議録PDF表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'searchObject',
              'title' => 'Search Object',
              'type' => '`$STRING`',
              'short' => '検索対象箇所（議事冒頭・本文）',
            ],
            [
              'name' => 'session',
              'title' => 'Session',
              'type' => '`$INTEGER`',
              'short' => '国会回次',
            ],
            [
              'name' => 'speechRecord',
              'title' => 'Speech Record',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'meeting_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meeting_list',
                  'segments' => [
                    [
                      'lit' => 'meeting_list',
                    ],
                  ],
                  'parts' => [
                    'meeting_list',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.meetingRecord`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 30,
                      ],
                      [
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'xml',
                      ],
                      [
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '冒頭・本文',
                      ],
                      [
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'any',
                      'closing',
                      'contents_and_index',
                      'from',
                      'issue_from',
                      'issue_id',
                      'issue_to',
                      'maximum_record',
                      'name_of_house',
                      'name_of_meeting',
                      'record_packing',
                      'search_range',
                      'session_from',
                      'session_to',
                      'speaker',
                      'speaker_group',
                      'speaker_position',
                      'speaker_role',
                      'speech_id',
                      'speech_number',
                      'start_record',
                      'supplement_and_appendix',
                      'until',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'speech' => [
          'fields' => [
            [
              'name' => 'closing',
              'title' => 'Closing',
              'type' => '`$BOOLEAN`',
              'short' => '閉会中フラグ',
            ],
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'short' => '開催日付',
              'format' => 'date',
            ],
            [
              'name' => 'imageKind',
              'title' => 'Image Kind',
              'type' => '`$STRING`',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
            ],
            [
              'name' => 'issue',
              'title' => 'Issue',
              'type' => '`$STRING`',
              'short' => '号数',
            ],
            [
              'name' => 'issueID',
              'title' => 'Issue Id',
              'type' => '`$STRING`',
              'short' => '会議録ID',
            ],
            [
              'name' => 'meetingURL',
              'title' => 'Meeting Url',
              'type' => '`$STRING`',
              'short' => '会議録テキスト表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'nameOfHouse',
              'title' => 'Name Of House',
              'type' => '`$STRING`',
              'short' => '院名',
            ],
            [
              'name' => 'nameOfMeeting',
              'title' => 'Name Of Meeting',
              'type' => '`$STRING`',
              'short' => '会議名',
            ],
            [
              'name' => 'pdfURL',
              'title' => 'Pdf Url',
              'type' => '`$STRING`',
              'short' => '会議録PDF表示画面のURL',
              'format' => 'uri',
            ],
            [
              'name' => 'searchObject',
              'title' => 'Search Object',
              'type' => '`$STRING`',
              'short' => '検索対象箇所（議事冒頭・本文）',
            ],
            [
              'name' => 'session',
              'title' => 'Session',
              'type' => '`$INTEGER`',
              'short' => '国会回次',
            ],
            [
              'name' => 'speaker',
              'title' => 'Speaker',
              'type' => '`$STRING`',
              'short' => '発言者名',
            ],
            [
              'name' => 'speakerGroup',
              'title' => 'Speaker Group',
              'type' => '`$STRING`',
              'short' => '発言者所属会派',
            ],
            [
              'name' => 'speakerPosition',
              'title' => 'Speaker Position',
              'type' => '`$STRING`',
              'short' => '発言者肩書き',
            ],
            [
              'name' => 'speakerRole',
              'title' => 'Speaker Role',
              'type' => '`$STRING`',
              'short' => '発言者役割',
            ],
            [
              'name' => 'speakerYomi',
              'title' => 'Speaker Yomi',
              'type' => '`$STRING`',
              'short' => '発言者よみ',
            ],
            [
              'name' => 'speech',
              'title' => 'Speech',
              'type' => '`$STRING`',
              'short' => '発言',
            ],
            [
              'name' => 'speechID',
              'title' => 'Speech Id',
              'type' => '`$STRING`',
              'short' => '発言ID',
            ],
            [
              'name' => 'speechOrder',
              'title' => 'Speech Order',
              'type' => '`$INTEGER`',
              'short' => '発言番号',
            ],
            [
              'name' => 'speechURL',
              'title' => 'Speech Url',
              'type' => '`$STRING`',
              'short' => '発言URL',
              'format' => 'uri',
            ],
            [
              'name' => 'startPage',
              'title' => 'Start Page',
              'type' => '`$INTEGER`',
              'short' => '発言が掲載されている開始ページ',
            ],
          ],
          'name' => 'speech',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/speech',
                  'segments' => [
                    [
                      'lit' => 'speech',
                    ],
                  ],
                  'parts' => [
                    'speech',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.speechRecord`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 30,
                      ],
                      [
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'xml',
                      ],
                      [
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '冒頭・本文',
                      ],
                      [
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'any',
                      'closing',
                      'contents_and_index',
                      'from',
                      'issue_from',
                      'issue_id',
                      'issue_to',
                      'maximum_record',
                      'name_of_house',
                      'name_of_meeting',
                      'record_packing',
                      'search_range',
                      'session_from',
                      'session_to',
                      'speaker',
                      'speaker_group',
                      'speaker_position',
                      'speaker_role',
                      'speech_id',
                      'speech_number',
                      'start_record',
                      'supplement_and_appendix',
                      'until',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return KokkaiKaigirokuApiFeatures::make_feature($name);
    }
}
