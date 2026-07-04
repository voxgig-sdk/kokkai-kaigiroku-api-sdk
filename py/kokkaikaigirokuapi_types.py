# Typed models for the KokkaiKaigirokuApi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Meeting:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speech_record: Optional[list] = None


@dataclass
class MeetingListMatch:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speech_record: Optional[list] = None


@dataclass
class MeetingList:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speech_record: Optional[list] = None


@dataclass
class MeetingListListMatch:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speech_record: Optional[list] = None


@dataclass
class Speech:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speaker: Optional[str] = None
    speaker_group: Optional[str] = None
    speaker_position: Optional[str] = None
    speaker_role: Optional[str] = None
    speaker_yomi: Optional[str] = None
    speech: Optional[str] = None
    speech_id: Optional[str] = None
    speech_order: Optional[int] = None
    speech_url: Optional[str] = None
    start_page: Optional[int] = None


@dataclass
class SpeechListMatch:
    closing: Optional[bool] = None
    date: Optional[str] = None
    image_kind: Optional[str] = None
    issue: Optional[str] = None
    issue_id: Optional[str] = None
    meeting_url: Optional[str] = None
    name_of_house: Optional[str] = None
    name_of_meeting: Optional[str] = None
    pdf_url: Optional[str] = None
    search_object: Optional[str] = None
    session: Optional[int] = None
    speaker: Optional[str] = None
    speaker_group: Optional[str] = None
    speaker_position: Optional[str] = None
    speaker_role: Optional[str] = None
    speaker_yomi: Optional[str] = None
    speech: Optional[str] = None
    speech_id: Optional[str] = None
    speech_order: Optional[int] = None
    speech_url: Optional[str] = None
    start_page: Optional[int] = None

