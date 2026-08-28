# frozen_string_literal: true

# Typed models for the KokkaiKaigirokuApi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Meeting entity data model.
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] imageKind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issueID
#   @return [String, nil]
#
# @!attribute [rw] meetingURL
#   @return [String, nil]
#
# @!attribute [rw] nameOfHouse
#   @return [String, nil]
#
# @!attribute [rw] nameOfMeeting
#   @return [String, nil]
#
# @!attribute [rw] pdfURL
#   @return [String, nil]
#
# @!attribute [rw] searchObject
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speechRecord
#   @return [Array, nil]
Meeting = Struct.new(
  :closing,
  :date,
  :imageKind,
  :issue,
  :issueID,
  :meetingURL,
  :nameOfHouse,
  :nameOfMeeting,
  :pdfURL,
  :searchObject,
  :session,
  :speechRecord,
  keyword_init: true
)

# Request payload for Meeting#list.
#
# @!attribute [rw] any
#   @return [String, nil]
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] contents_and_index
#   @return [Boolean, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] issue_from
#   @return [Integer, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] issue_to
#   @return [Integer, nil]
#
# @!attribute [rw] maximum_record
#   @return [Integer, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] record_packing
#   @return [String, nil]
#
# @!attribute [rw] search_range
#   @return [String, nil]
#
# @!attribute [rw] session_from
#   @return [Integer, nil]
#
# @!attribute [rw] session_to
#   @return [Integer, nil]
#
# @!attribute [rw] speaker
#   @return [String, nil]
#
# @!attribute [rw] speaker_group
#   @return [String, nil]
#
# @!attribute [rw] speaker_position
#   @return [String, nil]
#
# @!attribute [rw] speaker_role
#   @return [String, nil]
#
# @!attribute [rw] speech_id
#   @return [String, nil]
#
# @!attribute [rw] speech_number
#   @return [Integer, nil]
#
# @!attribute [rw] start_record
#   @return [Integer, nil]
#
# @!attribute [rw] supplement_and_appendix
#   @return [Boolean, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
MeetingListMatch = Struct.new(
  :any,
  :closing,
  :contents_and_index,
  :from,
  :issue_from,
  :issue_id,
  :issue_to,
  :maximum_record,
  :name_of_house,
  :name_of_meeting,
  :record_packing,
  :search_range,
  :session_from,
  :session_to,
  :speaker,
  :speaker_group,
  :speaker_position,
  :speaker_role,
  :speech_id,
  :speech_number,
  :start_record,
  :supplement_and_appendix,
  :until,
  keyword_init: true
)

# MeetingList entity data model.
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] imageKind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issueID
#   @return [String, nil]
#
# @!attribute [rw] meetingURL
#   @return [String, nil]
#
# @!attribute [rw] nameOfHouse
#   @return [String, nil]
#
# @!attribute [rw] nameOfMeeting
#   @return [String, nil]
#
# @!attribute [rw] pdfURL
#   @return [String, nil]
#
# @!attribute [rw] searchObject
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speechRecord
#   @return [Array, nil]
MeetingList = Struct.new(
  :closing,
  :date,
  :imageKind,
  :issue,
  :issueID,
  :meetingURL,
  :nameOfHouse,
  :nameOfMeeting,
  :pdfURL,
  :searchObject,
  :session,
  :speechRecord,
  keyword_init: true
)

# Request payload for MeetingList#list.
#
# @!attribute [rw] any
#   @return [String, nil]
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] contents_and_index
#   @return [Boolean, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] issue_from
#   @return [Integer, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] issue_to
#   @return [Integer, nil]
#
# @!attribute [rw] maximum_record
#   @return [Integer, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] record_packing
#   @return [String, nil]
#
# @!attribute [rw] search_range
#   @return [String, nil]
#
# @!attribute [rw] session_from
#   @return [Integer, nil]
#
# @!attribute [rw] session_to
#   @return [Integer, nil]
#
# @!attribute [rw] speaker
#   @return [String, nil]
#
# @!attribute [rw] speaker_group
#   @return [String, nil]
#
# @!attribute [rw] speaker_position
#   @return [String, nil]
#
# @!attribute [rw] speaker_role
#   @return [String, nil]
#
# @!attribute [rw] speech_id
#   @return [String, nil]
#
# @!attribute [rw] speech_number
#   @return [Integer, nil]
#
# @!attribute [rw] start_record
#   @return [Integer, nil]
#
# @!attribute [rw] supplement_and_appendix
#   @return [Boolean, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
MeetingListListMatch = Struct.new(
  :any,
  :closing,
  :contents_and_index,
  :from,
  :issue_from,
  :issue_id,
  :issue_to,
  :maximum_record,
  :name_of_house,
  :name_of_meeting,
  :record_packing,
  :search_range,
  :session_from,
  :session_to,
  :speaker,
  :speaker_group,
  :speaker_position,
  :speaker_role,
  :speech_id,
  :speech_number,
  :start_record,
  :supplement_and_appendix,
  :until,
  keyword_init: true
)

# Speech entity data model.
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] imageKind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issueID
#   @return [String, nil]
#
# @!attribute [rw] meetingURL
#   @return [String, nil]
#
# @!attribute [rw] nameOfHouse
#   @return [String, nil]
#
# @!attribute [rw] nameOfMeeting
#   @return [String, nil]
#
# @!attribute [rw] pdfURL
#   @return [String, nil]
#
# @!attribute [rw] searchObject
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speaker
#   @return [String, nil]
#
# @!attribute [rw] speakerGroup
#   @return [String, nil]
#
# @!attribute [rw] speakerPosition
#   @return [String, nil]
#
# @!attribute [rw] speakerRole
#   @return [String, nil]
#
# @!attribute [rw] speakerYomi
#   @return [String, nil]
#
# @!attribute [rw] speech
#   @return [String, nil]
#
# @!attribute [rw] speechID
#   @return [String, nil]
#
# @!attribute [rw] speechOrder
#   @return [Integer, nil]
#
# @!attribute [rw] speechURL
#   @return [String, nil]
#
# @!attribute [rw] startPage
#   @return [Integer, nil]
Speech = Struct.new(
  :closing,
  :date,
  :imageKind,
  :issue,
  :issueID,
  :meetingURL,
  :nameOfHouse,
  :nameOfMeeting,
  :pdfURL,
  :searchObject,
  :session,
  :speaker,
  :speakerGroup,
  :speakerPosition,
  :speakerRole,
  :speakerYomi,
  :speech,
  :speechID,
  :speechOrder,
  :speechURL,
  :startPage,
  keyword_init: true
)

# Request payload for Speech#list.
#
# @!attribute [rw] any
#   @return [String, nil]
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] contents_and_index
#   @return [Boolean, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] issue_from
#   @return [Integer, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] issue_to
#   @return [Integer, nil]
#
# @!attribute [rw] maximum_record
#   @return [Integer, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] record_packing
#   @return [String, nil]
#
# @!attribute [rw] search_range
#   @return [String, nil]
#
# @!attribute [rw] session_from
#   @return [Integer, nil]
#
# @!attribute [rw] session_to
#   @return [Integer, nil]
#
# @!attribute [rw] speaker
#   @return [String, nil]
#
# @!attribute [rw] speaker_group
#   @return [String, nil]
#
# @!attribute [rw] speaker_position
#   @return [String, nil]
#
# @!attribute [rw] speaker_role
#   @return [String, nil]
#
# @!attribute [rw] speech_id
#   @return [String, nil]
#
# @!attribute [rw] speech_number
#   @return [Integer, nil]
#
# @!attribute [rw] start_record
#   @return [Integer, nil]
#
# @!attribute [rw] supplement_and_appendix
#   @return [Boolean, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
SpeechListMatch = Struct.new(
  :any,
  :closing,
  :contents_and_index,
  :from,
  :issue_from,
  :issue_id,
  :issue_to,
  :maximum_record,
  :name_of_house,
  :name_of_meeting,
  :record_packing,
  :search_range,
  :session_from,
  :session_to,
  :speaker,
  :speaker_group,
  :speaker_position,
  :speaker_role,
  :speech_id,
  :speech_number,
  :start_record,
  :supplement_and_appendix,
  :until,
  keyword_init: true
)

