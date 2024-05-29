"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { heroImages } from "@/constants";

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}>
        {heroImages.map((img) => (
          <Image
            src={img.imgUrl}
            alt={img.alt}
            width={484}
            height={484}
            className=' object-contain'
            key={img.alt}
          />
        ))}
      </Carousel>
      <Image
        src='/assets/icons/hand-drawn-arrow.svg'
        alt='arrow'
        width={175}
        height={175}
        className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
      />
    </div>
  );
};

export default HeroCarousel;
