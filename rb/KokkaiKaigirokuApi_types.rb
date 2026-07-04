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
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speech_record
#   @return [Array, nil]
Meeting = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speech_record,
  keyword_init: true
)

# Match filter for Meeting#list (any subset of Meeting fields).
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speech_record
#   @return [Array, nil]
MeetingListMatch = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speech_record,
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
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speech_record
#   @return [Array, nil]
MeetingList = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speech_record,
  keyword_init: true
)

# Match filter for MeetingList#list (any subset of MeetingList fields).
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
#   @return [Integer, nil]
#
# @!attribute [rw] speech_record
#   @return [Array, nil]
MeetingListListMatch = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speech_record,
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
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
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
# @!attribute [rw] speaker_yomi
#   @return [String, nil]
#
# @!attribute [rw] speech
#   @return [String, nil]
#
# @!attribute [rw] speech_id
#   @return [String, nil]
#
# @!attribute [rw] speech_order
#   @return [Integer, nil]
#
# @!attribute [rw] speech_url
#   @return [String, nil]
#
# @!attribute [rw] start_page
#   @return [Integer, nil]
Speech = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speaker,
  :speaker_group,
  :speaker_position,
  :speaker_role,
  :speaker_yomi,
  :speech,
  :speech_id,
  :speech_order,
  :speech_url,
  :start_page,
  keyword_init: true
)

# Match filter for Speech#list (any subset of Speech fields).
#
# @!attribute [rw] closing
#   @return [Boolean, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] image_kind
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [String, nil]
#
# @!attribute [rw] issue_id
#   @return [String, nil]
#
# @!attribute [rw] meeting_url
#   @return [String, nil]
#
# @!attribute [rw] name_of_house
#   @return [String, nil]
#
# @!attribute [rw] name_of_meeting
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] search_object
#   @return [String, nil]
#
# @!attribute [rw] session
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
# @!attribute [rw] speaker_yomi
#   @return [String, nil]
#
# @!attribute [rw] speech
#   @return [String, nil]
#
# @!attribute [rw] speech_id
#   @return [String, nil]
#
# @!attribute [rw] speech_order
#   @return [Integer, nil]
#
# @!attribute [rw] speech_url
#   @return [String, nil]
#
# @!attribute [rw] start_page
#   @return [Integer, nil]
SpeechListMatch = Struct.new(
  :closing,
  :date,
  :image_kind,
  :issue,
  :issue_id,
  :meeting_url,
  :name_of_house,
  :name_of_meeting,
  :pdf_url,
  :search_object,
  :session,
  :speaker,
  :speaker_group,
  :speaker_position,
  :speaker_role,
  :speaker_yomi,
  :speech,
  :speech_id,
  :speech_order,
  :speech_url,
  :start_page,
  keyword_init: true
)

