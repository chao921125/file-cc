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
- `convertImageFormat`: Image format conversion (Node.js, supports jpg/png/bmp/heic)

## Installation

### npm

```bash
npm install file-opt
```

### yarn

```bash
yarn add file-opt
```

### pnpm

```bash
pnpm add file-opt
```

## Usage Examples

### ES Module Import
```javascript
import { fileToBase64, imgCompress } from 'file-opt';

// File to Base64
fileToBase64(file).then(base64 => {
  console.log(base64);
});

// Image compression
imgCompress(imageFile, { quality: 0.8 }).then(compressedFile => {
  console.log('Compressed file size:', compressedFile.size);
});
```

### CommonJS Import
```javascript
const { fileToBase64, imgCompress } = require('file-opt');

// File to Base64
fileToBase64(file).then(base64 => {
  console.log(base64);
});
```

### Use in Browser
```html
<!-- Import via CDN -->
<script src="https://unpkg.com/file-opt/dist/index.umd.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/file-opt/dist/index.umd.js"></script>

<script>
  // Global variable FileUtil
  FileUtil.fileToBase64(file).then(base64 => {
    console.log(base64);
  });
</script>
```

## API Documentation

For more detailed API documentation, please check the [Complete API Documentation](./docs/API.en.md).

For more about image format conversion, see the API documentation for convertImageFormat.

## Browser Compatibility

- Chrome >= 49
- Firefox >= 45
- Safari >= 10
- Edge >= 14
- Opera >= 36

## Contributing Guidelines

If you would like to contribute to the file-opt project, please refer to our [Contributing Guidelines](./docs/CONTRIBUTING.en.md).

## Security

For security-related issues, please check the [Security Policy](./SECURITY.md).

## License

[MIT](LICENSE) © chao921125 