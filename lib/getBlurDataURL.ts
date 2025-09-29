import sharp from "sharp";

export async function getBlurDataURL(imageUrl: string): Promise<string> {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

  const buffer = Buffer.from(await res.arrayBuffer());

  // Resize super small → base64
  const smallBuffer = await sharp(buffer)
    .resize(10) // 10px width keeps it tiny
    .toBuffer();

  return `data:image/jpeg;base64,${smallBuffer.toString("base64")}`;
}
