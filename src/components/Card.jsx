import React from 'react'
import Image from 'next/image'
const Card = ({title, details,img_src,img_alt,width,height,className,img_className,details_style,text_style}) => {
  return (
    <div className={className}>
      <Image
        src={img_src}
        width={width}
        height={height}
        alt={img_alt}
        className={img_className}
      />
      <h1 className={text_style}>{title}</h1>
    </div>
  )
}

export default Card
