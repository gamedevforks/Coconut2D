//@compile{true}
function ArrayBuffer(){};
function ArrayBufferView(){};
function Float32Array(){};
function Int32Array(){};
function HTMLVideoElement(){};

var devicePixelRatio;
var innerHeight;
var innerWidth;

var alert = function(message){};
var confirm = function(message){};
var prompt = function(message, def){};
var requestAnimationFrame = function(callBack){};
var setInterval = function(handler, timeout){};
var clearInterval = function(handle){};
var setTimeout = function(handler, timeout){};
var clearTimeout = function(handle){};

var __registerManager = function(manager){};
var __registerCallback = function(uid, type){};
var __unRegisterCallback = function(uid, type){};
      
var __ImageData_loadImage = function(data){};

var __WebGLRenderingContext_getContextAttributes = function(uid){};
var __WebGLRenderingContext_isContextLost = function(uid){};
var __WebGLRenderingContext_getSupportedExtensions = function(uid){};
var __WebGLRenderingContext_getExtension = function(uid, name){};
var __WebGLRenderingContext_activeTexture = function(uid, texture){};
var __WebGLRenderingContext_attachShader = function(uid, program_uid, shader_uid){};
var __WebGLRenderingContext_bindAttribLocation = function(uid, program_uid, index, name){};
var __WebGLRenderingContext_bindBuffer = function(uid, target, buffer_uid){};
var __WebGLRenderingContext_bindFramebuffer = function(uid, target, framebuffer_uid){};
var __WebGLRenderingContext_bindRenderbuffer = function(uid, target, renderbuffer_uid){};
var __WebGLRenderingContext_bindTexture = function(uid, target, texture_uid){};
var __WebGLRenderingContext_blendColor = function(uid, red, green, blue, alpha){};
var __WebGLRenderingContext_blendEquation = function(uid, mode){};
var __WebGLRenderingContext_blendEquationSeparate = function(uid, modeRGB, modeAlpha){};
var __WebGLRenderingContext_blendFunc = function(uid, sfactor, dfactor){};
var __WebGLRenderingContext_blendFuncSeparate = function(uid, srcRGB, dstRGB, srcAlpha, dstAlpha){};
var __WebGLRenderingContext_bufferData = function(){};
var __WebGLRenderingContext_bufferSubData = function(uid, target, offset, data_buffer_uid, data_byteOffset, data_length){};
var __WebGLRenderingContext_checkFramebufferStatus = function(uid, target){};
var __WebGLRenderingContext_clear = function(uid, mask){};
var __WebGLRenderingContext_clearColor = function(uid, red, green, blue, alpha){};
var __WebGLRenderingContext_clearDepth = function(uid, depth){};
var __WebGLRenderingContext_clearStencil = function(uid, s){};
var __WebGLRenderingContext_colorMask = function(uid, red, green, blue, alpha){};
var __WebGLRenderingContext_compileShader = function(uid, shader_uid){};
var __WebGLRenderingContext_compressedTexImage2D = function(uid, target, level, internalformat, width, height, border, data_buffer_uid, data_byteOffset, data_length){};
var __WebGLRenderingContext_compressedTexSubImage2D = function(uid, target, level, xoffset, yoffset, width, height, format, data_buffer_uid, data_byteOffset, data_length){};
var __WebGLRenderingContext_copyTexImage2D = function(uid, target, level, internalformat, x, y, width, height, border){};
var __WebGLRenderingContext_copyTexSubImage2D = function(uid, target, level, xoffset, yoffset, x, y, width, height){};
var __WebGLRenderingContext_createBuffer = function(uid){};
var __WebGLRenderingContext_createFramebuffer = function(uid){};
var __WebGLRenderingContext_createProgram = function(uid){};
var __WebGLRenderingContext_createRenderbuffer = function(uid){};
var __WebGLRenderingContext_createShader = function(uid, type){};
var __WebGLRenderingContext_createTexture = function(uid){};
var __WebGLRenderingContext_cullFace = function(uid, mode){};
var __WebGLRenderingContext_deleteBuffer = function(uid, buffer_uid){};
var __WebGLRenderingContext_deleteFramebuffer = function(uid, framebuffer_uid){};
var __WebGLRenderingContext_deleteProgram = function(uid, program_uid){};
var __WebGLRenderingContext_deleteRenderbuffer = function(uid, renderbuffer_uid){};
var __WebGLRenderingContext_deleteShader = function(uid, shader_uid){};
var __WebGLRenderingContext_deleteTexture = function(uid, texture_uid){};
var __WebGLRenderingContext_depthFunc = function(uid, func){};
var __WebGLRenderingContext_depthMask = function(uid, flag){};
var __WebGLRenderingContext_depthRange = function(uid, zNear, zFar){};
var __WebGLRenderingContext_detachShader = function(uid, program_uid, shader_uid){};
var __WebGLRenderingContext_disable = function(uid, cap){};
var __WebGLRenderingContext_disableVertexAttribArray = function(uid, index){};
var __WebGLRenderingContext_drawArrays = function(uid, mode, first, count){};
var __WebGLRenderingContext_drawElements = function(uid, mode, count, type, offset){};
var __WebGLRenderingContext_enable = function(uid, cap){};
var __WebGLRenderingContext_enableVertexAttribArray = function(uid, index){};
var __WebGLRenderingContext_finish = function(uid){};
var __WebGLRenderingContext_flush = function(uid){};
var __WebGLRenderingContext_framebufferRenderbuffer = function(uid, target, attachment, renderbuffertarget, renderbuffer_uid){};
var __WebGLRenderingContext_framebufferTexture2D = function(uid, target, attachment, textarget, texture_uid, level){};
var __WebGLRenderingContext_frontFace = function(uid, mode){};
var __WebGLRenderingContext_generateMipmap = function(uid, target){};
var __WebGLRenderingContext_getActiveAttrib = function(uid, program_uid, index){};
var __WebGLRenderingContext_getActiveUniform = function(uid, program_uid, index){};
var __WebGLRenderingContext_getAttachedShaders = function(uid, program_uid){};
var __WebGLRenderingContext_getAttribLocation = function(uid, program_uid, name){};
var __WebGLRenderingContext_getBufferParameter = function(uid, target, pname){};
var __WebGLRenderingContext_getParameter = function(uid, pname){};
var __WebGLRenderingContext_getError = function(uid){};
var __WebGLRenderingContext_getFramebufferAttachmentParameter = function(uid, target, attachment, pname){};
var __WebGLRenderingContext_getProgramParameter = function(uid, program_uid, pname){};
var __WebGLRenderingContext_getProgramInfoLog = function(uid, program_uid){};
var __WebGLRenderingContext_getRenderbufferParameter = function(uid, target, pname){};
var __WebGLRenderingContext_getShaderParameter = function(uid, shader_uid, pname){};
var __WebGLRenderingContext_getShaderPrecisionFormat = function(uid, shadertype, precisiontype){};
var __WebGLRenderingContext_getShaderInfoLog = function(uid, shader_uid){};
var __WebGLRenderingContext_getShaderSource = function(uid, shader_uid){};
var __WebGLRenderingContext_getTexParameter = function(uid, target, pname){};
var __WebGLRenderingContext_getUniform = function(uid, program_uid, location_uid){};
var __WebGLRenderingContext_getUniformLocation = function(uid, program_uid, name){};
var __WebGLRenderingContext_getVertexAttrib = function(uid, index, pname){};
var __WebGLRenderingContext_getVertexAttribOffset = function(uid, index, pname){};
var __WebGLRenderingContext_hint = function(uid, target, mode){};
var __WebGLRenderingContext_isBuffer = function(uid, buffer_uid){};
var __WebGLRenderingContext_isEnabled = function(uid, cap){};
var __WebGLRenderingContext_isFramebuffer = function(uid, framebuffer_uid){};
var __WebGLRenderingContext_isProgram = function(uid, program_uid){};
var __WebGLRenderingContext_isRenderbuffer = function(uid, renderbuffer_uid){};
var __WebGLRenderingContext_isShader = function(uid, shader_uid){};
var __WebGLRenderingContext_isTexture = function(uid, texture_uid){};
var __WebGLRenderingContext_lineWidth = function(uid, width){};
var __WebGLRenderingContext_linkProgram = function(uid, program_uid){};
var __WebGLRenderingContext_pixelStorei = function(uid, pname, param){};
var __WebGLRenderingContext_polygonOffset = function(uid, factor, units){};
var __WebGLRenderingContext_readPixels = function(uid, x, y, width, height, format, type, pixels_buffer_uid, pixels_byteOffset, pixels_length){};
var __WebGLRenderingContext_renderbufferStorage = function(uid, target, internalformat, width, height){};
var __WebGLRenderingContext_sampleCoverage = function(uid, value, invert){};
var __WebGLRenderingContext_scissor = function(uid, x, y, width, height){};
var __WebGLRenderingContext_shaderSource = function(uid, shader_uid, source){};
var __WebGLRenderingContext_stencilFunc = function(uid, func, ref, mask){};
var __WebGLRenderingContext_stencilFuncSeparate = function(uid, face, func, ref, mask){};
var __WebGLRenderingContext_stencilMask = function(uid, mask){};
var __WebGLRenderingContext_stencilMaskSeparate = function(uid, face, mask){};
var __WebGLRenderingContext_stencilOp = function(uid, fail, zfail, zpass){};
var __WebGLRenderingContext_stencilOpSeparate = function(uid, face, fail, zfail, zpass){};
var __WebGLRenderingContext_texImage2D = function(){};
var __WebGLRenderingContext_texParameterf = function(uid, target, pname, param){};
var __WebGLRenderingContext_texParameteri = function(uid, target, pname, param){};
var __WebGLRenderingContext_texSubImage2D = function(uid, target, level, xoffset, yoffset, width, height, format, type, pixels_buffer_uid, pixels_byteOffset, pixels_length){};
var __WebGLRenderingContext_uniform1f = function(uid, location_uid, x){};
var __WebGLRenderingContext_uniform1fv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform1i = function(uid, location_uid, x){};
var __WebGLRenderingContext_uniform1iv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform2f = function(uid, location_uid, x, y){};
var __WebGLRenderingContext_uniform2fv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform2i = function(uid, location_uid, x, y){};
var __WebGLRenderingContext_uniform2iv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform3f = function(uid, location_uid, x, y, z){};
var __WebGLRenderingContext_uniform3fv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform3i = function(uid, location_uid, x, y, z){};
var __WebGLRenderingContext_uniform3iv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform4f = function(uid, location_uid, x, y, z, w){};
var __WebGLRenderingContext_uniform4fv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniform4i = function(uid, location_uid, x, y, z, w){};
var __WebGLRenderingContext_uniform4iv = function(uid, location_uid, v_buffer_uid, v_byteOffset, v_length){};
var __WebGLRenderingContext_uniformMatrix2fv = function(uid, location_uid, transpose, value_buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_uniformMatrix3fv = function(uid, location_uid, transpose, value_buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_uniformMatrix4fv = function(uid, location_uid, transpose, value_buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_useProgram = function(uid, program_uid){};
var __WebGLRenderingContext_validateProgram = function(uid, program_uid){};
var __WebGLRenderingContext_vertexAttrib1f = function(uid, indx, x){};
var __WebGLRenderingContext_vertexAttrib1fv = function(uid, indx, value_buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_vertexAttrib2f = function(uid, indx, x, y){};
var __WebGLRenderingContext_vertexAttrib2fv = function(uid, indx, value__buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_vertexAttrib3f = function(uid, indx, x, y, z){};
var __WebGLRenderingContext_vertexAttrib3fv = function(uid, indx, value__buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_vertexAttrib4f = function(uid, indx, x, y, z, w){};
var __WebGLRenderingContext_vertexAttrib4fv = function(uid, indx, value__buffer_uid, value_byteOffset, value_length){};
var __WebGLRenderingContext_vertexAttribPointer = function(uid, indx, size, type, normalized, stride, offset){};
var __WebGLRenderingContext_viewport = function(uid, x, y, width, height){};
