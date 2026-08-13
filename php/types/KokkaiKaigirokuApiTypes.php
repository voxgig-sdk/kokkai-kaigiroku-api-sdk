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
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?array $speechRecord = null;
}

/** Request payload for Meeting#list. */
class MeetingListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?array $speechRecord = null;
}

/** MeetingList entity data model. */
class MeetingList
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?array $speechRecord = null;
}

/** Request payload for MeetingList#list. */
class MeetingListListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?array $speechRecord = null;
}

/** Speech entity data model. */
class Speech
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?string $speaker = null;
    public ?string $speakerGroup = null;
    public ?string $speakerPosition = null;
    public ?string $speakerRole = null;
    public ?string $speakerYomi = null;
    public ?string $speech = null;
    public ?string $speechID = null;
    public ?int $speechOrder = null;
    public ?string $speechURL = null;
    public ?int $startPage = null;
}

/** Request payload for Speech#list. */
class SpeechListMatch
{
    public ?bool $closing = null;
    public ?string $date = null;
    public ?string $imageKind = null;
    public ?string $issue = null;
    public ?string $issueID = null;
    public ?string $meetingURL = null;
    public ?string $nameOfHouse = null;
    public ?string $nameOfMeeting = null;
    public ?string $pdfURL = null;
    public ?string $searchObject = null;
    public ?int $session = null;
    public ?string $speaker = null;
    public ?string $speakerGroup = null;
    public ?string $speakerPosition = null;
    public ?string $speakerRole = null;
    public ?string $speakerYomi = null;
    public ?string $speech = null;
    public ?string $speechID = null;
    public ?int $speechOrder = null;
    public ?string $speechURL = null;
    public ?int $startPage = null;
}

