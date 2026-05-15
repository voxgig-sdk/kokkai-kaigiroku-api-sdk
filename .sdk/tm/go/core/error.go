package core

type KokkaiKaigirokuApiError struct {
	IsKokkaiKaigirokuApiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKokkaiKaigirokuApiError(code string, msg string, ctx *Context) *KokkaiKaigirokuApiError {
	return &KokkaiKaigirokuApiError{
		IsKokkaiKaigirokuApiError: true,
		Sdk:              "KokkaiKaigirokuApi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KokkaiKaigirokuApiError) Error() string {
	return e.Msg
}
