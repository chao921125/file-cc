/**
 * URL转Base64
 * @param url 文件URL
 * @returns Promise<string> Base64字符串
 */
export declare function urlToBase64(url: string): Promise<string>;
/**
 * Blob转Base64
 * @param blob Blob对象
 * @returns Promise<string> Base64字符串
 */
export declare function blobToBase64(blob: Blob): Promise<string>;
/**
 * 文件转Base64
 * @param file 文件对象
 * @returns Promise<string> Base64字符串
 */
export declare function fileToBase64(file: File): Promise<string>;
/**
 * Base64转Blob
 * @param base64 Base64字符串
 * @returns Blob对象
 */
export declare function base64ToBlob(base64: string): Blob;
/**
 * Base64转文件
 * @param base64 Base64字符串
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
export declare function base64ToFile(base64: string, filename?: string): File;
/**
 * 文件转Blob
 * @param file 文件对象
 * @returns Blob对象
 */
export declare function fileToBlob(file: File): Blob;
/**
 * Blob转文件
 * @param blob Blob对象
 * @param filename 文件名（可选，如果不提供则生成随机文件名）
 * @returns File对象
 */
export declare function blobToFile(blob: Blob, filename?: string): File;
