import fs from 'fs';
import path from 'path';
import { convertImageFormat, SupportedImageFormat } from '../src/image';

describe('图片格式互转 convertImageFormat', () => {
  const inputJpg = fs.readFileSync(path.join(__dirname, 'fixtures/sample.jpg'));
  const inputPng = fs.readFileSync(path.join(__dirname, 'fixtures/sample.png'));

  const formats: SupportedImageFormat[] = ['jpeg', 'png'];

  it.each(formats)('JPG 转 %s', async (target) => {
    const buf = await convertImageFormat(inputJpg, target);
    expect(Buffer.isBuffer(buf)).toBe(true);
    // 简单判断输出格式
    if (target === 'jpeg') expect(buf.slice(0, 2).toString('hex')).toBe('ffd8');
    if (target === 'png') expect(buf.slice(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  });

  it.each(formats)('PNG 转 %s', async (target) => {
    const buf = await convertImageFormat(inputPng, target);
    expect(Buffer.isBuffer(buf)).toBe(true);
    if (target === 'jpeg') expect(buf.slice(0, 2).toString('hex')).toBe('ffd8');
    if (target === 'png') expect(buf.slice(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  });

  it('不支持的格式应抛出异常', async () => {
    await expect(convertImageFormat(inputJpg, 'webp' as any)).rejects.toThrow('不支持的目标图片格式');
  });

  // heic 测试可选，因 sharp 依赖系统 libvips 支持
  it.skip('JPG 转 HEIC', async () => {
    const buf = await convertImageFormat(inputJpg, 'heic');
    expect(Buffer.isBuffer(buf)).toBe(true);
  });
}); 