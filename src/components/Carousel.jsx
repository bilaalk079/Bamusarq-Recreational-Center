'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/styles.css';

const Carousel = () => {
  const slides = [
    { src: '/recreation/event_center/event5.jpg', alt: 'Slide 1' ,text:'Event center',details:'Enjoy a fully air-conditioned event center'},
    { src: '/recreation/fun6.jpg', alt: 'Slide 2',text:'Fun Center',details:'Everyday is a fun day with our playground facilities' },
    { src: '/recreation/gym_center/gym2.jpg', alt: 'Slide 3',text:'Gym',details:'Get fit and look great with our well equipped gym' },
    { src: '/recreation/restaurant/res1.jpg', alt: 'Slide 4',text:'Restaurant',details:'Get the best Dining experience in our Outdoor Restaurant' }
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(next, 4000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const prev = () => {
    showSlide(slideIndex - 1);
  };

  const next = () => {
    showSlide(slideIndex + 1);
  };

  return (
    <main className="slider">
      <div className="slides">
        <Image
          src={slides[slideIndex].src}
          width={1000}
          height={1000}
          alt={slides[slideIndex].alt}
        />
        <h1 className='text'>
          {slides[slideIndex].text}
        </h1>
        <p className='details'>
          {slides[slideIndex].details}
        </p>
        {/* {console.log('Current slide:', slides[slideIndex].src)} Debug log */}
      </div>
      <button onClick={prev} className="prev">&#10094;</button>
      <button onClick={next} className="next">&#10095;</button>
    </main>
  );
};

export default Carousel;