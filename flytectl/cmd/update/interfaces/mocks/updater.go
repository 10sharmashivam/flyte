// Code generated by mockery v1.0.1. DO NOT EDIT.

package mocks

import (
	context "context"

	cmdcore "github.com/flyteorg/flytectl/cmd/core"

	core "github.com/flyteorg/flyte/flyteidl/gen/pb-go/flyteidl/core"

	mock "github.com/stretchr/testify/mock"
)

// Updater is an autogenerated mock type for the Updater type
type Updater struct {
	mock.Mock
}

type Updater_UpdateNamedEntity struct {
	*mock.Call
}

func (_m Updater_UpdateNamedEntity) Return(_a0 error) *Updater_UpdateNamedEntity {
	return &Updater_UpdateNamedEntity{Call: _m.Call.Return(_a0)}
}

func (_m *Updater) OnUpdateNamedEntity(ctx context.Context, name string, project string, domain string, rsType core.ResourceType, cmdCtx cmdcore.CommandContext) *Updater_UpdateNamedEntity {
	c_call := _m.On("UpdateNamedEntity", ctx, name, project, domain, rsType, cmdCtx)
	return &Updater_UpdateNamedEntity{Call: c_call}
}

func (_m *Updater) OnUpdateNamedEntityMatch(matchers ...interface{}) *Updater_UpdateNamedEntity {
	c_call := _m.On("UpdateNamedEntity", matchers...)
	return &Updater_UpdateNamedEntity{Call: c_call}
}

// UpdateNamedEntity provides a mock function with given fields: ctx, name, project, domain, rsType, cmdCtx
func (_m *Updater) UpdateNamedEntity(ctx context.Context, name string, project string, domain string, rsType core.ResourceType, cmdCtx cmdcore.CommandContext) error {
	ret := _m.Called(ctx, name, project, domain, rsType, cmdCtx)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, string, core.ResourceType, cmdcore.CommandContext) error); ok {
		r0 = rf(ctx, name, project, domain, rsType, cmdCtx)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}
