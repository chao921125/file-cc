# 更新日志

所有对 file-util 项目的显著更改都将记录在此文件中。

本项目遵循 [语义化版本控制](https://semver.org/lang/zh-CN/)。

## [未发布]

### 新增
- 初始版本开发完成
- 文件操作功能：
  - `urlToBase64`: URL 转 Base64
  - `blobToBase64`: Blob 转 Base64
  - `fileToBase64`: File 转 Base64
  - `base64ToBlob`: Base64 转 Blob
  - `base64ToFile`: Base64 转 File
  - `fileToBlob`: File 转 Blob
  - `blobToFile`: Blob 转 File
- 图片操作功能：
  - `blobToDataURL`: Blob 转 DataURL
  - `imageToDataURL`: HTMLImageElement 转 DataURL
  - `dataURLToImage`: DataURL 转 HTMLImageElement
  - `dataURLtoBlob`: DataURL 转 Blob
  - `dataURLtoImgBlob`: DataURL 转图片 Blob
  - `dataURLtoFile`: DataURL 转 File
  - `imgConvert`: 图片格式转换
  - `imgCompress`: 图片压缩
- 工具函数：
  - 类型检查：`isBase64`, `isBlob`, `isFile`
  - 文件类型处理：`getFileExtension`, `getMimeTypeFromExtension`, `getExtensionFromMimeType`, `checkFileType`
  - 其他工具：`generateRandomFileName`, `getMimeTypeFromDataURL`, `getBase64FromDataURL`, `delay`
- 完整的 TypeScript 类型定义
- 支持多种模块格式：UMD, CommonJS, ES Module
- 完整的测试覆盖
- 示例代码和文档

## [0.1.0] - 2023-XX-XX

### 新增
- 初始版本发布

---

## 版本号说明

- **主版本号**：当进行不兼容的 API 更改时
- **次版本号**：当以向后兼容的方式添加功能时
- **修订号**：当进行向后兼容的 bug 修复时

## 更新类型

- **新增**：新功能
- **变更**：对现有功能的更改
- **弃用**：即将被移除的功能
- **移除**：现在被移除的功能
- **修复**：bug 修复
- **安全**：安全漏洞修复