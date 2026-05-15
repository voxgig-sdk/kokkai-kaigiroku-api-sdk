package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMeetingEntityFunc func(client *KokkaiKaigirokuApiSDK, entopts map[string]any) KokkaiKaigirokuApiEntity

var NewMeetingListEntityFunc func(client *KokkaiKaigirokuApiSDK, entopts map[string]any) KokkaiKaigirokuApiEntity

var NewSpeechEntityFunc func(client *KokkaiKaigirokuApiSDK, entopts map[string]any) KokkaiKaigirokuApiEntity

