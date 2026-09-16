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
              'short' => '閉会中フラグ',
              'type' => '`$BOOLEAN`',
            ],
            [
              'format' => 'date',
              'name' => 'date',
              'short' => '開催日付',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageKind',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issue',
              'short' => '号数',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issueID',
              'short' => '会議録ID',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'meetingURL',
              'short' => '会議録テキスト表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfHouse',
              'short' => '院名',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfMeeting',
              'short' => '会議名',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'pdfURL',
              'short' => '会議録PDF表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'searchObject',
              'short' => '検索対象箇所（議事冒頭・本文）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'session',
              'short' => '国会回次',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'speechRecord',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 3,
                        'kind' => 'query',
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'xml',
                        'kind' => 'query',
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '冒頭・本文',
                        'kind' => 'query',
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meeting',
                  'segments' => [
                    [
                      'lit' => 'meeting',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.meetingRecord`',
                  ],
                  'parts' => [
                    'meeting',
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
              'short' => '閉会中フラグ',
              'type' => '`$BOOLEAN`',
            ],
            [
              'format' => 'date',
              'name' => 'date',
              'short' => '開催日付',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageKind',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issue',
              'short' => '号数',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issueID',
              'short' => '会議録ID',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'meetingURL',
              'short' => '会議録テキスト表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfHouse',
              'short' => '院名',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfMeeting',
              'short' => '会議名',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'pdfURL',
              'short' => '会議録PDF表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'searchObject',
              'short' => '検索対象箇所（議事冒頭・本文）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'session',
              'short' => '国会回次',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'speechRecord',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 30,
                        'kind' => 'query',
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'xml',
                        'kind' => 'query',
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '冒頭・本文',
                        'kind' => 'query',
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meeting_list',
                  'segments' => [
                    [
                      'lit' => 'meeting_list',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.meetingRecord`',
                  ],
                  'parts' => [
                    'meeting_list',
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
              'short' => '閉会中フラグ',
              'type' => '`$BOOLEAN`',
            ],
            [
              'format' => 'date',
              'name' => 'date',
              'short' => '開催日付',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageKind',
              'short' => 'イメージ種別（会議録・目次・索引・附録・追録）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issue',
              'short' => '号数',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'issueID',
              'short' => '会議録ID',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'meetingURL',
              'short' => '会議録テキスト表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfHouse',
              'short' => '院名',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nameOfMeeting',
              'short' => '会議名',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'pdfURL',
              'short' => '会議録PDF表示画面のURL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'searchObject',
              'short' => '検索対象箇所（議事冒頭・本文）',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'session',
              'short' => '国会回次',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'speaker',
              'short' => '発言者名',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speakerGroup',
              'short' => '発言者所属会派',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speakerPosition',
              'short' => '発言者肩書き',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speakerRole',
              'short' => '発言者役割',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speakerYomi',
              'short' => '発言者よみ',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speech',
              'short' => '発言',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speechID',
              'short' => '発言ID',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speechOrder',
              'short' => '発言番号',
              'type' => '`$INTEGER`',
            ],
            [
              'format' => 'uri',
              'name' => 'speechURL',
              'short' => '発言URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'startPage',
              'short' => '発言が掲載されている開始ページ',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'speech',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'any',
                        'orig' => 'any',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'closing',
                        'orig' => 'closing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'contents_and_index',
                        'orig' => 'contents_and_index',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_from',
                        'orig' => 'issue_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_id',
                        'orig' => 'issue_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'issue_to',
                        'orig' => 'issue_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 30,
                        'kind' => 'query',
                        'name' => 'maximum_record',
                        'orig' => 'maximum_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_house',
                        'orig' => 'name_of_house',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name_of_meeting',
                        'orig' => 'name_of_meeting',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'xml',
                        'kind' => 'query',
                        'name' => 'record_packing',
                        'orig' => 'record_packing',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '冒頭・本文',
                        'kind' => 'query',
                        'name' => 'search_range',
                        'orig' => 'search_range',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_from',
                        'orig' => 'session_from',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_to',
                        'orig' => 'session_to',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker',
                        'orig' => 'speaker',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_group',
                        'orig' => 'speaker_group',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_position',
                        'orig' => 'speaker_position',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speaker_role',
                        'orig' => 'speaker_role',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_id',
                        'orig' => 'speech_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'speech_number',
                        'orig' => 'speech_number',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'start_record',
                        'orig' => 'start_record',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'supplement_and_appendix',
                        'orig' => 'supplement_and_appendix',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'until',
                        'orig' => 'until',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/speech',
                  'segments' => [
                    [
                      'lit' => 'speech',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.speechRecord`',
                  ],
                  'parts' => [
                    'speech',
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
