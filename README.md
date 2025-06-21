# file-util

一个用于文件和图片操作的工具库，提供各种格式之间的转换功能。支持在浏览器环境中使用，可以轻松实现文件格式转换、图片压缩和格式转换等功能。

[![npm version](https://img.shields.io/npm/v/file-util.svg)](https://www.npmjs.com/package/file-util)
[![license](https://img.shields.io/npm/l/file-util.svg)](https://github.com/chao921125/file-util/blob/main/LICENSE)

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

```bash
# 使用 npm
npm install file-util

# 使用 yarn
yarn add file-util

# 使用 pnpm
pnpm add file-util
```

## 使用示例

### ES模块导入
```javascript
import { fileToBase64, imgCompress } from 'file-util';

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
const { fileToBase64, imgCompress } = require('file-util');

// 文件转Base64
fileToBase64(file).then(base64 => {
  console.log(base64);
});
```

### 在浏览器中使用
```html
<!-- 通过 CDN 引入 -->
<script src="https://unpkg.com/file-util/dist/index.umd.js"></script>
<!-- 或者 -->
<script src="https://cdn.jsdelivr.net/npm/file-util/dist/index.umd.js"></script>

<script>
  // 全局变量 FileUtil
  FileUtil.fileToBase64(file).then(base64 => {
    console.log(base64);
  });
</script>
```

## API 文档

### 文件操作

#### urlToBase64(url: string): Promise<string>
将URL转换为Base64字符串。

```javascript
const base64 = await urlToBase64('https://example.com/image.jpg');
console.log(base64); // data:image/jpeg;base64,...
```

#### fileToBase64(file: File): Promise<string>
将File对象转换为Base64字符串。

```javascript
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  const base64 = await fileToBase64(file);
  console.log(base64);
});
```

#### base64ToFile(base64: string, filename?: string): File
将Base64字符串转换为File对象。

```javascript
const base64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...';
const file = base64ToFile(base64, 'image.jpg');
console.log(file.name); // image.jpg
console.log(file.type); // image/jpeg
```

### 图片操作

#### imgConvert(imageFile: File, options: ImageConvertOptions): Promise<File>
图片格式转换。

```javascript
const imageFile = new File(['...'], 'image.jpg', { type: 'image/jpeg' });
const pngFile = await imgConvert(imageFile, { format: 'png' });
console.log(pngFile.name); // image.png
console.log(pngFile.type); // image/png
```

#### imgCompress(imageFile: File, options?: ImageCompressOptions): Promise<File>
图片压缩。

```javascript
const imageFile = document.querySelector('input[type="file"]').files[0];
const compressedFile = await imgCompress(imageFile, {
  quality: 0.7,
  maxWidth: 800,
  maxHeight: 600
});
console.log(`原大小: ${imageFile.size}, 压缩后: ${compressedFile.size}`);
```

更多 API 详情请查看 [完整 API 文档](https://github.com/chao921125/file-util/blob/main/docs/API.md)。

## 浏览器兼容性

- Chrome >= 49
- Firefox >= 45
- Safari >= 10
- Edge >= 14
- Opera >= 36

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE) © chao921125