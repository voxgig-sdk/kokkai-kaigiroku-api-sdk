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
MeetingListMatch = Struct.new(
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
MeetingListListMatch = Struct.new(
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
SpeechListMatch = Struct.new(
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

