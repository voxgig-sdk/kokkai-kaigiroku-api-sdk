# Typed models for the KokkaiKaigirokuApi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Meeting(TypedDict, total=False):
    closing: bool
    date: str
    imageKind: str
    issue: str
    issueID: str
    meetingURL: str
    nameOfHouse: str
    nameOfMeeting: str
    pdfURL: str
    searchObject: str
    session: int
    speechRecord: list


class MeetingListMatch(TypedDict, total=False):
    any: str
    closing: bool
    contents_and_index: bool
    issue_from: int
    issue_id: str
    issue_to: int
    maximum_record: int
    name_of_house: str
    name_of_meeting: str
    record_packing: str
    search_range: str
    session_from: int
    session_to: int
    speaker: str
    speaker_group: str
    speaker_position: str
    speaker_role: str
    speech_id: str
    speech_number: int
    start_record: int
    supplement_and_appendix: bool
    until: str


class MeetingList(TypedDict, total=False):
    closing: bool
    date: str
    imageKind: str
    issue: str
    issueID: str
    meetingURL: str
    nameOfHouse: str
    nameOfMeeting: str
    pdfURL: str
    searchObject: str
    session: int
    speechRecord: list


class MeetingListListMatch(TypedDict, total=False):
    any: str
    closing: bool
    contents_and_index: bool
    issue_from: int
    issue_id: str
    issue_to: int
    maximum_record: int
    name_of_house: str
    name_of_meeting: str
    record_packing: str
    search_range: str
    session_from: int
    session_to: int
    speaker: str
    speaker_group: str
    speaker_position: str
    speaker_role: str
    speech_id: str
    speech_number: int
    start_record: int
    supplement_and_appendix: bool
    until: str


class Speech(TypedDict, total=False):
    closing: bool
    date: str
    imageKind: str
    issue: str
    issueID: str
    meetingURL: str
    nameOfHouse: str
    nameOfMeeting: str
    pdfURL: str
    searchObject: str
    session: int
    speaker: str
    speakerGroup: str
    speakerPosition: str
    speakerRole: str
    speakerYomi: str
    speech: str
    speechID: str
    speechOrder: int
    speechURL: str
    startPage: int


class SpeechListMatch(TypedDict, total=False):
    any: str
    closing: bool
    contents_and_index: bool
    issue_from: int
    issue_id: str
    issue_to: int
    maximum_record: int
    name_of_house: str
    name_of_meeting: str
    record_packing: str
    search_range: str
    session_from: int
    session_to: int
    speaker: str
    speaker_group: str
    speaker_position: str
    speaker_role: str
    speech_id: str
    speech_number: int
    start_record: int
    supplement_and_appendix: bool
    until: str
