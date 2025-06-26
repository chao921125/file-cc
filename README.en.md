# file-opt

A utility library for file and image operations, providing conversion functions between various formats. Supports use in browser environments, making it easy to implement file format conversion, image compression, and format conversion.

[![npm version](https://img.shields.io/npm/v/file-opt.svg)](https://www.npmjs.com/package/file-opt)
[![license](https://img.shields.io/npm/l/file-opt.svg)](https://github.com/chao921125/file-opt/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/file-cc.svg)](https://www.npmjs.com/package/file-opt)

English | [简体中文](./README.md)

## Features

- 🚀 Lightweight, no external dependencies
- 🔄 Support for multiple format conversions: Base64, Blob, File, DataURL
- 📦 Support for image compression and format conversion
- 💻 Support for use in browser environments
- 📱 TypeScript support with complete type definitions

## Functionality

### File Operations
- `urlToBase64`: URL to Base64
- `fileToBase64`: File to Base64
- `base64ToFile`: Base64 to File
- `fileToBlob`: File to Blob
- `blobToFile`: Blob to File
- `base64ToBlob`: Base64 to Blob
- `blobToBase64`: Blob to Base64

### Image Operations
- `blobToDataURL`: Blob to DataURL
- `imageToDataURL`: Image to DataURL
- `dataURLToImage`: DataURL to Image
- `dataURLtoBlob`: DataURL to Blob
- `dataURLtoImgBlob`: DataURL to Image Blob
- `dataURLtoFile`: DataURL to File
- `imgCompress`: Image compression
- `convertImageFormat`: Image format conversion (Node.js, supports jpg/png/heic)

## Installation

### npm

```