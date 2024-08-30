"use client";
import React, {  useState } from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import Footer from "@/components/Footer";
import ImageCard from "@/components/imageCard";

const Main = () => {
  const [isImageGallery, setIsImageGallery] = useState(true);
  const [isVideoGallery, setIsVideoGallery] = useState(false);

  const handleImageGallery = () => {
    setIsImageGallery(true);
    setIsVideoGallery(false);
    console.log("Image Gallery Active:", isImageGallery);
  };

  const handleVideoGallery = () => {
    setIsImageGallery(false);
    setIsVideoGallery(true);
    console.log("Video Gallery Active:", isVideoGallery);
  };

  const videos = [
    "/Gallery/VID-20240726-WA0029.mp4",
    "/Gallery/VID-20240809-WA0020.mp4",
    "/Gallery/VID-20240809-WA0021.mp4",
    "/Gallery/VID-20240810-WA0059.mp4",
    "/recreation/VID_20240601_112036.mp4",
    "/recreation/VID_20240808_091700.mp4",
    "/recreation/VID_20240808_091846.mp4",
    "/recreation/VID_20240808_092504.mp4",
  ];

  const images = [
    
    '/Gallery/IMG-20240730-WA0032 (1).jpg',
    '/Gallery/IMG-20240810-WA0022.jpg',
    '/Gallery/IMG-20240810-WA0023.jpg',
    '/Gallery/IMG-20240810-WA0024.jpg',
    '/Gallery/IMG-20240810-WA0025.jpg',
    '/Gallery/IMG-20240810-WA0026.jpg',
    '/Gallery/IMG-20240810-WA0027.jpg',
    '/Gallery/IMG-20240810-WA0028.jpg',
    '/Gallery/IMG-20240810-WA0029.jpg',
    '/Gallery/IMG-20240810-WA0030.jpg',
    '/Gallery/IMG-20240810-WA0031.jpg',
    '/Gallery/IMG-20240810-WA0032.jpg',
    '/Gallery/IMG-20240810-WA0033.jpg',
    '/Gallery/IMG-20240810-WA0034.jpg',
    '/Gallery/IMG-20240810-WA0037.jpg',
    '/Gallery/IMG-20240810-WA0038.jpg',
    '/Gallery/IMG-20240810-WA0039.jpg',
    '/Gallery/IMG-20240810-WA0040.jpg',
    '/Gallery/IMG-20240810-WA0041.jpg',
    '/Gallery/IMG-20240810-WA0042.jpg',
    '/Gallery/IMG-20240810-WA0043.jpg',
    '/Gallery/IMG-20240810-WA0044.jpg',
    '/Gallery/IMG-20240810-WA0045.jpg',
    '/Gallery/IMG-20240810-WA0046.jpg',
    '/Gallery/IMG-20240810-WA0047.jpg',
    '/Gallery/IMG-20240810-WA0048.jpg',
    '/Gallery/IMG-20240810-WA0049.jpg',
    '/Gallery/IMG-20240810-WA0050.jpg',
    '/Gallery/IMG-20240810-WA0051.jpg',
    '/Gallery/IMG-20240810-WA0052.jpg',
    '/Gallery/IMG-20240810-WA0053.jpg',
    '/Gallery/IMG-20240810-WA0054.jpg',
    '/Gallery/IMG-20240810-WA0055.jpg',
    '/Gallery/IMG-20240810-WA0057 (1).jpg',

  ];

  return (
    <html>
      <head>
        <title>Bamusarq Recreational Center</title>
        <link rel="icon" href="/Gallery/favicon.ico" />
      </head>
      <body className="dark:bg-gray-950 bg-white">
        <main className="flex flex-col bg-white dark:bg-gray-950 text-green-700">
          <Header />
          <div id="gallery" className="bg-white min-h-screen scroll-mt-28">
            <h1 className="sm:text-5xl md:text-4xl lg:text-5xl text-3xl m-5 font-bold text-center underline">
              Gallery
            </h1>
            <div className="flex gap-0 w-full">
              <button
                className={`w-1/2 p-2 sm:p-5 rounded-l-xl text-xl sm:text-3xl text-white font-bold active:bg-green-700 border-r-2 hover:bg-green-600 ${
                  isImageGallery ? "bg-green-700" : "bg-green-500"
                }`}
                onClick={handleImageGallery}
              >
                Image Gallery
              </button>
              <button
                className={`w-1/2 p-2 sm:p-5 rounded-r-xl font-bold text-white text-xl sm:text-3xl border-l-2 active:bg-green-700 hover:bg-green-600 ${
                  isVideoGallery ? "bg-green-700" : "bg-green-500"
                }`}
                onClick={handleVideoGallery}
              >
                Video Gallery
              </button>
            </div>

            <section
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 ${
                isImageGallery ? "" : "hidden"
              }`}
              id="img-gallery"
            >
              {images.map((imageSrc, index) => (
                <ImageCard
                  key={index}
                  img_src={imageSrc}
                  width={500}
                  height={500}
                  img_className={"rounded-2xl w-2/3 mx-auto my-12"}
                  className={"bg-slate-950 m-6 p-0.5 rounded-3xl w-3/4"}
                />
              ))}
            </section>

            <section
              className={`grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 gap-3 max-w-7xl mx-auto p-4 ${
                isVideoGallery ? "" : "hidden"
              }`}
            >
              {videos.map((videoSrc, index) => (
                <VideoCard
                  key={index}
                  src={videoSrc}
                  className={"h-auto w-64 bg-slate-950 rounded-2xl p-2"}
                />
              ))}
            </section>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Main;
