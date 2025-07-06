'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import Footer from '@/components/Footer';
import ImageCard from '@/components/imageCard';

export default function ClientGallery({ urls, videoUrls }) {
  const [isImageGallery, setIsImageGallery] = useState(true);

  return (
    <>
      <head>
        <title>Bamusarq Recreational Center</title>
      </head>
      <Header />
      <div id="gallery" className="bg-white min-h-screen scroll-mt-28">
        <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-5 font-bold text-center underline">
          Gallery
        </h1>
        <div className="flex gap-0 w-full">
          <button
            className={`w-1/2 p-2 sm:p-5 rounded-l-xl text-xl sm:text-3xl text-white font-bold active:bg-green-700 border-r-2 hover:bg-green-600 ${
              isImageGallery ? 'bg-green-700' : 'bg-green-500'
            }`}
            onClick={() => setIsImageGallery(true)}
          >
            Image Gallery
          </button>
          <button
            className={`w-1/2 p-2 sm:p-5 rounded-r-xl font-bold text-white text-xl sm:text-3xl border-l-2 active:bg-green-700 hover:bg-green-600 ${
              !isImageGallery ? 'bg-green-700' : 'bg-green-500'
            }`}
            onClick={() => setIsImageGallery(false)}
          >
            Video Gallery
          </button>
        </div>

        <section
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 ${
            isImageGallery ? '' : 'hidden'
          }`}
          id="img-gallery"
        >
          {urls.map((imageSrc, index) => (
            <ImageCard
              key={index}
              img_src={imageSrc}
              width={500}
              height={500}
              img_className="rounded-2xl w-2/3 mx-auto my-12"
              className="bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4"
            />
          ))}
        </section>

        <section
          className={`grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 gap-3 max-w-7xl mx-auto p-4 ${
            !isImageGallery ? '' : 'hidden'
          }`}
        >
          {videoUrls.map((videoSrc, index) => (
            <VideoCard
              key={index}
              src={videoSrc}
              className="h-auto w-64 bg-slate-950 rounded-2xl p-2"
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
