import fs from 'fs';
import path from 'path';
import ClientGallery from './ClientGallery';

export default function GalleryPage() {
  const filePath = path.join(process.cwd(), 'public', 'urls.txt');
  const filePathVideo = path.join(process.cwd(), 'public', 'video_urls.txt');

  const urls = fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  const videoUrls = fs.readFileSync(filePathVideo, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  return <ClientGallery urls={urls} videoUrls={videoUrls} />;
}
