#include "CocoImageSibling.hpp"

////////////////////////////////////////////////////////////////////////////////////////////////////
CocoImageSibling::CocoImageSibling(std::string url, float pixelRatio, float textureWidth, float textureHeight)
{
	this->url = url;
	this->pixelRatio = pixelRatio;
	this->textureWidth = textureWidth;
	this->textureHeight = textureHeight;
}