﻿#ifndef __HTMLELEMENT_HPP__
#define __HTMLELEMENT_HPP__

#include "Coconut2D.hpp"

class HTMLElement
{
public:
	HTMLElement();
	HTMLCanvasElement* appendChild(HTMLCanvasElement* node);
};

#endif