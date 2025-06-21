/**
 * 图片操作相关函数
 */
import { ImageCompressOptions, ImageConvertOptions, ImageFormat } from '../types';
/**
 * Blob转DataURL
 * @param blob Blob对象
 * @returns Promise<string> DataURL字符串
 */
export declare function blobToDataURL(blob: Blob): Promise<string>;
/**
 * 图片转DataURL
 * @param image HTMLImageElement对象
 * @param format 输出格式，默认为'jpeg'
 * @param quality 输出质量，范围0-1，默认为0.9
 * @returns DataURL字符串
 */
export declare function imageToDataURL(image: HTMLImageElement, format?: ImageFormat, quality?: number): string;
/**
 * DataURL转图片
 * @param dataURL DataURL字符串
 * @returns Promise<HTMLImageElement> 图片元素
 */
export declare function dataURLToImage(dataURL: string): Promise<HTMLImageElement>;
/**
 * DataURL转Blob
 * @param dataURL DataURL字符串
 * @returns Blob对象
 */
export declare function dataURLtoBlob(dataURL: string): Blob;
/**
 * DataURL转图片Blob
 * @param dataURL DataURL字符串
 * @returns Blob对象，MIME类型为图片类型
 */
export declare function dataURLtoImgBlob(dataURL: string): Blob;
/**
 * DataURL转文件
 * @param dataURL DataURL字符串
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
export declare function dataURLtoFile(dataURL: string, filename?: string): File;
/**
 * 图片格式转换
 * @param imageFile 图片文件
 * @param options 转换选项
 * @returns Promise<File> 转换后的文件
 */
export declare function imgConvert(imageFile: File, options: ImageConvertOptions): Promise<File>;
/**
 * 图片压缩
 * @param imageFile 图片文件
 * @param options 压缩选项
 * @returns Promise<File> 压缩后的文件
 */
export declare function imgCompress(imageFile: File, options?: ImageCompressOptions): Promise<File>;
