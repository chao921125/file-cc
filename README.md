# file-opt

一个用于文件和图片操作的工具库，提供各种格式之间的转换功能。支持在浏览器环境中使用，可以轻松实现文件格式转换、图片压缩和格式转换等功能。

[![npm version](https://img.shields.io/npm/v/file-opt.svg)](https://www.npmjs.com/package/file-opt)
[![license](https://img.shields.io/npm/l/file-opt.svg)](https://github.com/chao921125/file-opt/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/file-cc.svg)](https://www.npmjs.com/package/file-opt)

[English](./README.en.md) | 简体中文

## 特性

- 🚀 轻量级，无外部依赖
- 🔄 支持多种格式转换：Base64、Blob、File、DataURL
- 📦 支持图片压缩和格式转换
- 💻 支持在浏览器环境中使用
- 📱 支持 TypeScript，提供完整的类型定义

## 功能

### 文件操作
- `urlToBase64`: URL转Base64
- `fileToBase64`: 文件转Base64
- `base64ToFile`: Base64转文件
- `fileToBlob`: 文件转Blob
- `blobToFile`: Blob转文件
- `base64ToBlob`: Base64转Blob
- `blobToBase64`: Blob转Base64

### 图片操作
- `blobToDataURL`: Blob转DataURL
- `imageToDataURL`: 图片转DataURL
- `dataURLToImage`: DataURL转图片
- `dataURLtoBlob`: DataURL转Blob
- `dataURLtoImgBlob`: DataURL转图片Blob
- `dataURLtoFile`: DataURL转文件
- `imgConvert`: 图片格式转换
- `imgCompress`: 图片压缩

## 安装

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

## 使用示例

### ES模块导入
```javascript
import { fileToBase64, imgCompress } from 'file-opt';

// 文件转Base64
fileToBase64(file).then(base64 => {
  console.log(base64);
});

// 图片压缩
imgCompress(imageFile, { quality: 0.8 }).then(compressedFile => {
  console.log('压缩后的文件大小:', compressedFile.size);
});
```

### CommonJS导入
```javascript
const { fileToBase64, imgCompress } = require('file-opt');

// 文件转Base64
fileToBase64(file).then(base64 => {
  console.log(base64);
});
```

### 在浏览器中使用
```html
<!-- 通过 CDN 引入 -->
<script src="https://unpkg.com/file-opt/dist/index.umd.js"></script>
<!-- 或者 -->
<script src="https://cdn.jsdelivr.net/npm/file-opt/dist/index.umd.js"></script>

<script>
  // 全局变量 FileUtil
  FileUtil.fileToBase64(file).then(base64 => {
    console.log(base64);
  });
</script>
```

## API 文档

更多详细的 API 文档请查看 [完整 API 文档](./docs/API.md)。

## 浏览器兼容性

- Chrome >= 49
- Firefox >= 45
- Safari >= 10
- Edge >= 14
- Opera >= 36

## 贡献指南

如果您想为 file-opt 项目做出贡献，请参阅我们的 [贡献指南](./docs/CONTRIBUTING.md)。

## 安全

有关安全相关问题，请查看 [安全政策](./SECURITY.md)。

## 许可证

[MIT](LICENSE) © chao921125