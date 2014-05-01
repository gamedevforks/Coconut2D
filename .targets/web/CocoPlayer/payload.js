﻿if(!this['include']) this.include=function(f){};

include('./obj/Constants.jobj');
include('./obj/CanvasRenderingContext2D.jobj');
include('./obj/CocoAudio.jobj');
include('./obj/CocoClip.jobj');
include('./obj/CocoEngine.jobj');
include('./obj/CocoEvents.jobj');
include('./obj/CocoGraphics.jobj');
include('./obj/CocoHttpRequest.jobj');
include('./obj/CocoImage.jobj');
include('./obj/CocoImageSibling.jobj');
include('./obj/CocoKeyFrame.jobj');
include('./obj/CocoMatrix.jobj');
include('./obj/CocoRect.jobj');
include('./obj/CocoScene.jobj');
include('./obj/CocoSequence.jobj');
include('./obj/CocoState.jobj');
include('./obj/CocoText.jobj');
include('./obj/CocoTimeLabel.jobj');
include('./obj/CocoTimeline.jobj');
include('./obj/CocoUIButton.jobj');
include('./obj/CocoUICheckBox.jobj');
include('./obj/CocoUIComboBox.jobj');
include('./obj/CocoUIControl.jobj');
include('./obj/CocoUILabel.jobj');
include('./obj/CocoUIPage.jobj');
include('./obj/CocoUIPictureList.jobj');
include('./obj/CocoUITextBox.jobj');
include('./obj/CocoUIView.jobj');
include('./obj/CocoVector.jobj');
include('./obj/DeviceEvent.jobj');
include('./obj/GameEngine.jobj');
include('./obj/HTMLAudioElement.jobj');
include('./obj/HTMLCanvasContext.jobj');
include('./obj/HTMLCanvasElement.jobj');
include('./obj/HTMLCanvasGradient.jobj');
include('./obj/HTMLCanvasPattern.jobj');
include('./obj/HTMLDocument.jobj');
include('./obj/HTMLElement.jobj');
include('./obj/HTMLImageElement.jobj');
include('./obj/HTMLTextMetrics.jobj');
include('./obj/HTMLWindow.jobj');
include('./obj/ImageData.jobj');
include('./obj/ITickable.jobj');
include('./obj/NewAnimation.jobj');
include('./obj/Page1.jobj');
include('./obj/TestDelegates.jobj');
include('./obj/TestEvents.jobj');
include('./obj/TestInterfaces.jobj');
include('./obj/Tests.jobj');
include('./obj/TestThis.jobj');
include('./obj/WebGLActiveInfo.jobj');
include('./obj/WebGLBuffer.jobj');
include('./obj/WebGLContextAttributes.jobj');
include('./obj/WebGLFramebuffer.jobj');
include('./obj/WebGLObject.jobj');
include('./obj/WebGLProgram.jobj');
include('./obj/WebGLRenderbuffer.jobj');
include('./obj/WebGLRenderingContext.jobj');
include('./obj/WebGLShader.jobj');
include('./obj/WebGLShaderPrecisionFormat.jobj');
include('./obj/WebGLTexture.jobj');
include('./obj/WebGLUniformLocation.jobj');

////////////////////////////////////////////////////////////////////////////////////////////////////
var global = this;
var engine = null;
var gl = null;

if(!global.window) 		global.window = new HTMLWindow();
if(!global.document)	global.document = window.document;
if(!global.trace)		global.trace = function(msg) { console.log(msg); };

////////////////////////////////////////////////////////////////////////////////////////////////////
if(global["EventTarget"]) global.EventTarget = function() {};
global.EventTarget = function() {};

////////////////////////////////////////////////////////////////////////////////////////////////////
function State(){};

////////////////////////////////////////////////////////////////////////////////////////////////////
Image.prototype.load = function(src) { this.src = src; };

////////////////////////////////////////////////////////////////////////////////////////////////////
// Extensions of JavaScript Array and Object classes to match C++ Vector and Map.

Object.defineProperty(Array.prototype, "size", { value: function()
{
	return this.length;
}});

Object.defineProperty(Array.prototype, "clear", { value: function()
{
	while(this.length) { this.pop(); }
}});

Object.defineProperty(String.prototype, "size", { value: function()
{
	return this.length;
}});
