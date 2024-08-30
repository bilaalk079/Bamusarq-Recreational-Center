import React from 'react'

const VideoCard = ({src,className}) => {
  return (
    
    <video controls className={className} >
      <source src={src} type="video/mp4"/>
    </video>
  )
}

export default VideoCard
