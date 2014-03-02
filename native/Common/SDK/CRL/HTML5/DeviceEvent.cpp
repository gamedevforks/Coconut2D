﻿#include "DeviceEvent.hpp"

////////////////////////////////////////////////////////////////////////////////////////////////////
DeviceEvent::DeviceEvent()
{
	type = "";
	target = nullptr;
	currentTarget = nullptr;
	eventPhase = CAPTURING_PHASE;
	bubbles = true;
	cancelable = true;
	timeStamp = 0;
	defaultPrevented = false;
	scale = 0.0;
	rotation = 0.0;
	__clientX = 0;
	__clientY = 0;
	touches = new TouchList();
	targetTouches = new TouchList();
	changedTouches = new TouchList();
}

////////////////////////////////////////////////////////////////////////////////////////////////////
DeviceEvent::~DeviceEvent()
{
	if(touches)
	{
		touches = (delete touches, nullptr);
	}
	if(targetTouches)
	{
		targetTouches = (delete targetTouches, nullptr);
	}
	if(changedTouches)
	{
		changedTouches = (delete changedTouches, nullptr);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
void DeviceEvent::stopPropagation()
{
	bubbles = false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
void DeviceEvent::preventDefault()
{
	defaultPrevented = true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
void DeviceEvent::initEvent(String type, bool canBubble, bool cancelable)
{
	eventPhase = CAPTURING_PHASE;
	this->type = type;
	this->bubbles = canBubble;
	this->cancelable = cancelable;
	//this->timeStamp = std::chrono::steady_clock::now().time_since_epoch().count();// (new Date()).getTime();
}

////////////////////////////////////////////////////////////////////////////////////////////////////
void DeviceEvent::initUIEvent(String type, bool canBubble, bool cancelable, HTMLWindow* view, int detail)
{
	this->initEvent(type, canBubble, cancelable);
	this->view = view;
	this->detail = detail;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
void DeviceEvent::initTouchEvent(String type, bool canBubble, bool cancelable, HTMLWindow* view, int detail, int screenX, int screenY, int clientX, int clientY, bool ctrlKey, bool altKey, bool shiftKey, bool metaKey, TouchList* touches, TouchList* targetTouches, TouchList* changedTouches, float scale, float rotation)
{
	this->initUIEvent(type, canBubble, cancelable, view, detail);
	this->scale = scale;
	this->rotation = rotation;
	this->touches = touches;
	this->targetTouches = targetTouches;
	this->changedTouches = changedTouches;
}
