import React from "react";
import Image from "next/image";
const ImageCard = ({ className, img_className,img_src,width,height }) => {
  return (
    <div className={className}>
        <Image
          src={img_src}
          width={width}
          height={height}
          alt="Image Card"
          className={img_className}
        />

      {/* Add your custom content here */}
    </div>
  );
};

export default ImageCard;
