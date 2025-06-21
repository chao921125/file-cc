/**
 * 工具函数
 */
import { FileTypeResult } from '../types';
/**
 * 检查是否为Base64字符串
 * @param str 要检查的字符串
 * @returns 是否为Base64字符串
 */
export declare function isBase64(str: string): boolean;
/**
 * 检查是否为Blob对象
 * @param obj 要检查的对象
 * @returns 是否为Blob对象
 */
export declare function isBlob(obj: any): obj is Blob;
/**
 * 检查是否为File对象
 * @param obj 要检查的对象
 * @returns 是否为File对象
 */
export declare function isFile(obj: any): obj is File;
/**
 * 获取文件扩展名
 * @param filename 文件名
 * @returns 文件扩展名（小写，不包含点）
 */
export declare function getFileExtension(filename: string): string;
/**
 * 根据MIME类型获取文件扩展名
 * @param mimeType MIME类型
 * @returns 文件扩展名（不包含点）
 */
export declare function getExtensionFromMimeType(mimeType: string): string;
/**
 * 根据文件扩展名获取MIME类型
 * @param extension 文件扩展名（不包含点）
 * @returns MIME类型
 */
export declare function getMimeTypeFromExtension(extension: string): string;
/**
 * 检查文件类型
 * @param file 文件对象或文件名
 * @returns 文件类型检查结果
 */
export declare function checkFileType(file: File | string): FileTypeResult;
/**
 * 生成随机文件名
 * @param extension 文件扩展名（不包含点）
 * @returns 随机文件名
 */
export declare function generateRandomFileName(extension?: string): string;
/**
 * 从DataURL中提取MIME类型
 * @param dataURL DataURL字符串
 * @returns MIME类型
 */
export declare function getMimeTypeFromDataURL(dataURL: string): string;
/**
 * 从DataURL中提取Base64数据部分
 * @param dataURL DataURL字符串
 * @returns Base64数据部分
 */
export declare function getBase64FromDataURL(dataURL: string): string;
/**
 * 延迟执行函数
 * @param ms 延迟毫秒数
 * @returns Promise对象
 */
export declare function delay(ms: number): Promise<void>;
