package core

type AnapioficeandfireError struct {
	IsAnapioficeandfireError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAnapioficeandfireError(code string, msg string, ctx *Context) *AnapioficeandfireError {
	return &AnapioficeandfireError{
		IsAnapioficeandfireError: true,
		Sdk:              "Anapioficeandfire",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AnapioficeandfireError) Error() string {
	return e.Msg
}
