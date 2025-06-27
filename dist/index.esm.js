/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 检查是否为Base64字符串
 * @param str 要检查的字符串
 * @returns 是否为Base64字符串
 */
function isBase64(str) {
    if (!str || typeof str !== 'string')
        return false;
    // Base64字符串通常以data:开头，后面跟着MIME类型和base64标识
    if (str.indexOf('data:') === 0) {
        return str.indexOf('base64') !== -1;
    }
    // 检查是否符合Base64编码规则
    try {
        return btoa(atob(str)) === str;
    }
    catch (err) {
        return false;
    }
}
/**
 * 检查是否为Blob对象
 * @param obj 要检查的对象
 * @returns 是否为Blob对象
 */
function isBlob(obj) {
    return obj instanceof Blob;
}
/**
 * 检查是否为File对象
 * @param obj 要检查的对象
 * @returns 是否为File对象
 */
function isFile(obj) {
    return obj instanceof File;
}
/**
 * 获取文件扩展名
 * @param filename 文件名
 * @returns 文件扩展名（小写，不包含点）
 */
function getFileExtension(filename) {
    var _a;
    if (!filename)
        return '';
    var parts = filename.split('.');
    return parts.length > 1 ? ((_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '' : '';
}
/**
 * 根据MIME类型获取文件扩展名
 * @param mimeType MIME类型
 * @returns 文件扩展名（不包含点）
 */
function getExtensionFromMimeType(mimeType) {
    var mimeMap = {
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'audio/mpeg': 'mp3',
        'audio/mp3': 'mp3',
        'audio/wav': 'wav',
        'audio/ogg': 'ogg',
        'video/mp4': 'mp4',
        'video/webm': 'webm',
        'video/ogg': 'ogv',
        'application/pdf': 'pdf',
        'text/plain': 'txt',
        'text/html': 'html',
        'text/css': 'css',
        'text/javascript': 'js',
        'application/json': 'json',
    };
    return mimeMap[mimeType] || '';
}
/**
 * 根据文件扩展名获取MIME类型
 * @param extension 文件扩展名（不包含点）
 * @returns MIME类型
 */
function getMimeTypeFromExtension(extension) {
    var extMap = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'webp': 'image/webp',
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav',
        'ogg': 'audio/ogg',
        'mp4': 'video/mp4',
        'webm': 'video/webm',
        'ogv': 'video/ogg',
        'pdf': 'application/pdf',
        'txt': 'text/plain',
        'html': 'text/html',
        'css': 'text/css',
        'js': 'text/javascript',
        'json': 'application/json',
    };
    return extMap[extension.toLowerCase()] || 'application/octet-stream';
}
/**
 * 检查文件类型
 * @param file 文件对象或文件名
 * @returns 文件类型检查结果
 */
function checkFileType(file) {
    var mimeType = '';
    var extension = '';
    if (typeof file === 'string') {
        // 如果是字符串，当作文件名处理
        extension = getFileExtension(file);
        mimeType = getMimeTypeFromExtension(extension);
    }
    else {
        // 如果是File对象
        mimeType = file.type || '';
        extension = file.name ? getFileExtension(file.name) : getExtensionFromMimeType(mimeType);
    }
    var isImage = mimeType.startsWith('image/');
    var isAudio = mimeType.startsWith('audio/');
    var isVideo = mimeType.startsWith('video/');
    return {
        isImage: isImage,
        isAudio: isAudio,
        isVideo: isVideo,
        mimeType: mimeType,
        extension: extension
    };
}
/**
 * 生成随机文件名
 * @param extension 文件扩展名（不包含点）
 * @returns 随机文件名
 */
function generateRandomFileName(extension) {
    if (extension === void 0) { extension = ''; }
    var timestamp = new Date().getTime();
    var random = Math.floor(Math.random() * 10000);
    return "file_".concat(timestamp, "_").concat(random).concat(extension ? '.' + extension : '');
}
/**
 * 从DataURL中提取MIME类型
 * @param dataURL DataURL字符串
 * @returns MIME类型
 */
function getMimeTypeFromDataURL(dataURL) {
    var regex = /^data:([\w\/+]+);base64,/;
    var matches = dataURL.match(regex);
    return matches && matches.length > 1 ? matches[1] : '';
}
/**
 * 从DataURL中提取Base64数据部分
 * @param dataURL DataURL字符串
 * @returns Base64数据部分
 */
function getBase64FromDataURL(dataURL) {
    return dataURL.split(',')[1] || '';
}
/**
 * 延迟执行函数
 * @param ms 延迟毫秒数
 * @returns Promise对象
 */
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}

/**
 * URL转Base64
 * @param url 文件URL
 * @returns Promise<string> Base64字符串
 */
function urlToBase64(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, blob, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.blob()];
                case 2:
                    blob = _a.sent();
                    return [4 /*yield*/, blobToBase64(blob)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    error_1 = _a.sent();
                    throw new Error("URL\u8F6CBase64\u5931\u8D25: ".concat(error_1 instanceof Error ? error_1.message : String(error_1)));
                case 5: return [2 /*return*/];
            }
        });
    });
}
/**
 * Blob转Base64
 * @param blob Blob对象
 * @returns Promise<string> Base64字符串
 */
function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            }
            else {
                reject(new Error('FileReader结果不是字符串'));
            }
        };
        reader.onerror = function () { return reject(new Error('Blob转Base64失败')); };
        reader.readAsDataURL(blob);
    });
}
/**
 * 文件转Base64
 * @param file 文件对象
 * @returns Promise<string> Base64字符串
 */
function fileToBase64(file) {
    return blobToBase64(file);
}
/**
 * Base64转Blob
 * @param base64 Base64字符串
 * @returns Blob对象
 */
function base64ToBlob(base64) {
    // 如果是DataURL格式，提取MIME类型和Base64数据
    var contentType = 'application/octet-stream';
    var b64Data = base64;
    if (base64.startsWith('data:')) {
        contentType = getMimeTypeFromDataURL(base64) || contentType;
        var parts = base64.split(',');
        b64Data = parts[1];
    }
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += 512) {
        var slice = byteCharacters.slice(offset, offset + 512);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
}
/**
 * Base64转文件
 * @param base64 Base64字符串
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
function base64ToFile(base64, filename) {
    var blob = base64ToBlob(base64);
    var mimeType = blob.type || 'application/octet-stream';
    var extension = getExtensionFromMimeType(mimeType);
    // 如果没有提供文件名，则生成随机文件名
    if (!filename) {
        filename = generateRandomFileName(extension);
    }
    else if (!filename.includes('.') && extension) {
        // 如果提供的文件名没有扩展名，则添加扩展名
        filename = "".concat(filename, ".").concat(extension);
    }
    return new File([blob], filename, { type: mimeType });
}
/**
 * 文件转Blob
 * @param file 文件对象
 * @returns Blob对象
 */
function fileToBlob(file) {
    return new Blob([file], { type: file.type });
}
/**
 * Blob转文件
 * @param blob Blob对象
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
function blobToFile(blob, filename) {
    var mimeType = blob.type || 'application/octet-stream';
    var extension = getExtensionFromMimeType(mimeType);
    // 如果没有提供文件名，则生成随机文件名
    if (!filename) {
        filename = generateRandomFileName(extension);
    }
    else if (!filename.includes('.') && extension) {
        // 如果提供的文件名没有扩展名，则添加扩展名
        filename = "".concat(filename, ".").concat(extension);
    }
    return new File([blob], filename, { type: mimeType });
}

/**
 * Blob转DataURL
 * @param blob Blob对象
 * @returns Promise<string> DataURL字符串
 */
function blobToDataURL(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            }
            else {
                reject(new Error('FileReader结果不是字符串'));
            }
        };
        reader.onerror = function () { return reject(new Error('Blob转DataURL失败')); };
        reader.readAsDataURL(blob);
    });
}
/**
 * 图片转DataURL
 * @param image HTMLImageElement对象
 * @param format 输出格式，默认为'jpeg'
 * @param quality 输出质量，范围0-1，默认为0.9
 * @returns DataURL字符串
 */
function imageToDataURL(image, format, quality) {
    if (format === void 0) { format = 'jpeg'; }
    if (quality === void 0) { quality = 0.9; }
    var canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('无法创建canvas 2d上下文');
    }
    ctx.drawImage(image, 0, 0);
    return canvas.toDataURL("image/".concat(format), quality);
}
/**
 * DataURL转图片
 * @param dataURL DataURL字符串
 * @returns Promise<HTMLImageElement> 图片元素
 */
function dataURLToImage(dataURL) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () { return resolve(img); };
        img.onerror = function () { return reject(new Error('DataURL转图片失败')); };
        img.src = dataURL;
    });
}
/**
 * DataURL转Blob
 * @param dataURL DataURL字符串
 * @returns Blob对象
 */
function dataURLtoBlob(dataURL) {
    var _a;
    var arr = dataURL.split(',');
    var mime = ((_a = arr[0].match(/:(.*?);/)) === null || _a === void 0 ? void 0 : _a[1]) || 'image/jpeg';
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
/**
 * DataURL转图片Blob
 * @param dataURL DataURL字符串
 * @returns Blob对象，MIME类型为图片类型
 */
function dataURLtoImgBlob(dataURL) {
    var blob = dataURLtoBlob(dataURL);
    if (!blob.type.startsWith('image/')) {
        throw new Error('提供的DataURL不是图片格式');
    }
    return blob;
}
/**
 * DataURL转文件
 * @param dataURL DataURL字符串
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
function dataURLtoFile(dataURL, filename) {
    var blob = dataURLtoBlob(dataURL);
    var mimeType = blob.type || 'application/octet-stream';
    var extension = getExtensionFromMimeType(mimeType);
    // 如果没有提供文件名，则生成随机文件名
    if (!filename) {
        filename = generateRandomFileName(extension);
    }
    else if (!filename.includes('.') && extension) {
        // 如果提供的文件名没有扩展名，则添加扩展名
        filename = "".concat(filename, ".").concat(extension);
    }
    return new File([blob], filename, { type: mimeType });
}
/**
 * 图片格式转换
 * @param imageFile 图片文件
 * @param options 转换选项
 * @returns Promise<File> 转换后的文件
 */
function imgConvert(imageFile, options) {
    return __awaiter(this, void 0, void 0, function () {
        var format, _a, quality, mimeType, img, canvas, ctx, dataURL, newFilename, dotIndex;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!imageFile.type.startsWith('image/')) {
                        throw new Error('提供的文件不是图片格式');
                    }
                    format = options.format, _a = options.quality, quality = _a === void 0 ? 0.9 : _a;
                    mimeType = getMimeTypeFromExtension(format);
                    if (!mimeType) {
                        throw new Error("\u4E0D\u652F\u6301\u7684\u56FE\u7247\u683C\u5F0F: ".concat(format));
                    }
                    return [4 /*yield*/, createImageFromFile(imageFile)];
                case 1:
                    img = _b.sent();
                    canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error('无法创建canvas 2d上下文');
                    }
                    ctx.drawImage(img, 0, 0);
                    dataURL = canvas.toDataURL(mimeType, quality);
                    newFilename = imageFile.name;
                    dotIndex = newFilename.lastIndexOf('.');
                    if (dotIndex !== -1) {
                        newFilename = newFilename.substring(0, dotIndex);
                    }
                    newFilename = "".concat(newFilename, ".").concat(format);
                    // 转换为文件
                    return [2 /*return*/, dataURLtoFile(dataURL, newFilename)];
            }
        });
    });
}
/**
 * 图片压缩
 * @param imageFile 图片文件
 * @param options 压缩选项
 * @returns Promise<File> 压缩后的文件
 */
function imgCompress(imageFile_1) {
    return __awaiter(this, arguments, void 0, function (imageFile, options) {
        var _a, quality, maxWidth, maxHeight, format, outputMimeType, img, width, height, canvas, ctx, dataURL, newFilename, dotIndex;
        if (options === void 0) { options = {}; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!imageFile.type.startsWith('image/')) {
                        throw new Error('提供的文件不是图片格式');
                    }
                    _a = options.quality, quality = _a === void 0 ? 0.8 : _a, maxWidth = options.maxWidth, maxHeight = options.maxHeight, format = options.format;
                    outputMimeType = imageFile.type;
                    if (format) {
                        outputMimeType = getMimeTypeFromExtension(format);
                    }
                    return [4 /*yield*/, createImageFromFile(imageFile)];
                case 1:
                    img = _b.sent();
                    width = img.naturalWidth;
                    height = img.naturalHeight;
                    if (maxWidth && width > maxWidth) {
                        height = (height * maxWidth) / width;
                        width = maxWidth;
                    }
                    if (maxHeight && height > maxHeight) {
                        width = (width * maxHeight) / height;
                        height = maxHeight;
                    }
                    canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error('无法创建canvas 2d上下文');
                    }
                    ctx.drawImage(img, 0, 0, width, height);
                    dataURL = canvas.toDataURL(outputMimeType, quality);
                    newFilename = imageFile.name;
                    if (format) {
                        dotIndex = newFilename.lastIndexOf('.');
                        if (dotIndex !== -1) {
                            newFilename = newFilename.substring(0, dotIndex);
                        }
                        newFilename = "".concat(newFilename, ".").concat(format);
                    }
                    // 转换为文件
                    return [2 /*return*/, dataURLtoFile(dataURL, newFilename)];
            }
        });
    });
}
/**
 * 从文件创建图片元素
 * @param file 图片文件
 * @returns Promise<HTMLImageElement> 图片元素
 */
function createImageFromFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var dataURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blobToDataURL(file)];
                case 1:
                    dataURL = _a.sent();
                    return [4 /*yield*/, dataURLToImage(dataURL)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}

export { base64ToBlob, base64ToFile, blobToBase64, blobToDataURL, blobToFile, checkFileType, dataURLToImage, dataURLtoBlob, dataURLtoFile, dataURLtoImgBlob, delay, fileToBase64, fileToBlob, generateRandomFileName, getBase64FromDataURL, getExtensionFromMimeType, getFileExtension, getMimeTypeFromDataURL, getMimeTypeFromExtension, imageToDataURL, imgCompress, imgConvert, isBase64, isBlob, isFile, urlToBase64 };
//# sourceMappingURL=index.esm.js.map
