<?php
declare(strict_types=1);

// Typed models for the KokkaiKaigirokuApi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Meeting entity data model. */
class Meeting
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?array $speech_record = null;
}

/** Match filter for Meeting#list (any subset of Meeting fields). */
class MeetingListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?array $speech_record = null;
}

/** MeetingList entity data model. */
class MeetingList
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?array $speech_record = null;
}

/** Match filter for MeetingList#list (any subset of MeetingList fields). */
class MeetingListListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?array $speech_record = null;
}

/** Speech entity data model. */
class Speech
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?string $speaker = null;
    public ?string $speaker_group = null;
    public ?string $speaker_position = null;
    public ?string $speaker_role = null;
    public ?string $speaker_yomi = null;
    public ?string $speech = null;
    public ?string $speech_id = null;
    public ?int $speech_order = null;
    public ?string $speech_url = null;
    public ?int $start_page = null;
}

/** Match filter for Speech#list (any subset of Speech fields). */
class SpeechListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $image_kind = null;
    public ?string $issue = null;
    public ?string $issue_id = null;
    public ?string $meeting_url = null;
    public ?string $name_of_house = null;
    public ?string $name_of_meeting = null;
    public ?string $pdf_url = null;
    public ?string $search_object = null;
    public ?int $session = null;
    public ?string $speaker = null;
    public ?string $speaker_group = null;
    public ?string $speaker_position = null;
    public ?string $speaker_role = null;
    public ?string $speaker_yomi = null;
    public ?string $speech = null;
    public ?string $speech_id = null;
    public ?int $speech_order = null;
    public ?string $speech_url = null;
    public ?int $start_page = null;
}

