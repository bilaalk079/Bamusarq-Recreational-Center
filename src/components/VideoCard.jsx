import React, { forwardRef } from "react";

const VideoCard = forwardRef(({ src, className, onPlay }, ref) => {
     return (
          <video controls className={className} ref={ref} onPlay={onPlay}>
               <source src={src} type="video/mp4" />
          </video>
     );
});

export default VideoCard;
