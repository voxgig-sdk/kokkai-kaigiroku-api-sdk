package utility

import "github.com/voxgig-sdk/kokkai-kaigiroku-api-sdk/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
