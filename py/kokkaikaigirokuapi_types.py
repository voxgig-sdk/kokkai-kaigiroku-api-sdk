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
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speech_record: list


class MeetingListMatch(TypedDict, total=False):
    closing: bool
    date: str
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speech_record: list


class MeetingList(TypedDict, total=False):
    closing: bool
    date: str
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speech_record: list


class MeetingListListMatch(TypedDict, total=False):
    closing: bool
    date: str
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speech_record: list


class Speech(TypedDict, total=False):
    closing: bool
    date: str
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speaker: str
    speaker_group: str
    speaker_position: str
    speaker_role: str
    speaker_yomi: str
    speech: str
    speech_id: str
    speech_order: int
    speech_url: str
    start_page: int


class SpeechListMatch(TypedDict, total=False):
    closing: bool
    date: str
    image_kind: str
    issue: str
    issue_id: str
    meeting_url: str
    name_of_house: str
    name_of_meeting: str
    pdf_url: str
    search_object: str
    session: int
    speaker: str
    speaker_group: str
    speaker_position: str
    speaker_role: str
    speaker_yomi: str
    speech: str
    speech_id: str
    speech_order: int
    speech_url: str
    start_page: int
