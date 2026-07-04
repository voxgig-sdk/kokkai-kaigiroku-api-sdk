-- Typed models for the KokkaiKaigirokuApi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Meeting
---@field closing? boolean
---@field date? string
---@field image_kind? string
---@field issue? string
---@field issue_id? string
---@field meeting_url? string
---@field name_of_house? string
---@field name_of_meeting? string
---@field pdf_url? string
---@field search_object? string
---@field session? number
---@field speech_record? table

---@class MeetingListMatch

---@class MeetingList
---@field closing? boolean
---@field date? string
---@field image_kind? string
---@field issue? string
---@field issue_id? string
---@field meeting_url? string
---@field name_of_house? string
---@field name_of_meeting? string
---@field pdf_url? string
---@field search_object? string
---@field session? number
---@field speech_record? table

---@class MeetingListListMatch

---@class Speech
---@field closing? boolean
---@field date? string
---@field image_kind? string
---@field issue? string
---@field issue_id? string
---@field meeting_url? string
---@field name_of_house? string
---@field name_of_meeting? string
---@field pdf_url? string
---@field search_object? string
---@field session? number
---@field speaker? string
---@field speaker_group? string
---@field speaker_position? string
---@field speaker_role? string
---@field speaker_yomi? string
---@field speech? string
---@field speech_id? string
---@field speech_order? number
---@field speech_url? string
---@field start_page? number

---@class SpeechListMatch

local M = {}

return M
