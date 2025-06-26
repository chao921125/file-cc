import sharp from 'sharp';

export type SupportedImageFormat = 'jpeg' | 'jpg' | 'png' | 'bmp' | 'heic';

/**
 * 图片格式转换（Node.js 环境，依赖 sharp）
 * @param inputBuffer 输入图片 Buffer
 * @param targetFormat 目标格式（jpeg/jpg/png/bmp/heic）
 * @returns Promise<Buffer> 转换后的图片 Buffer
 */
export async function convertImageFormat(
  inputBuffer: Buffer,
  targetFormat: SupportedImageFormat
): Promise<Buffer> {
  let transformer = sharp(inputBuffer);
  switch (targetFormat) {
    case 'jpeg':
    case 'jpg':
      transformer = transformer.jpeg();
      break;
    case 'png':
      transformer = transformer.png();
      break;
    case 'bmp':
      transformer = transformer.bmp();
      break;
    case 'heic':
      transformer = transformer.heif({ compression: 'hevc' });
      break;
    default:
      throw new Error('不支持的目标图片格式: ' + targetFormat);
  }
  return await transformer.toBuffer();
} 