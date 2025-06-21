/**
 * file-opt
 *
 * @description A utility library for file and image operations, including conversions between Base64, Blob, File, and URL.
 * @author chao921125
 * @date 2024-07-17
 */

import { fileToBase64, base64ToBlob, base64ToFile } from './file';

// 导出所有文件操作相关函数
export * from './file';

// 导出所有图片操作相关函数
export * from './image';

// 导出工具函数
export * from './utils';

// 导出类型定义
export * from './types';