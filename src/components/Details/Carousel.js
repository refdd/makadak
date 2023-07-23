import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import CardMedia from "@mui/material/CardMedia";

const Carousel = ({ data }) => {
  SwiperCore.use([Autoplay]);

  const [containerStyles, setContainerStyles] = useState({
    width: "30%",
    height: "200px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 568) {
        setContainerStyles({
          ...containerStyles,
          width: "100%"
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={50}
      centeredSlides={false}
      slidesPerView={"auto"}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={false}
      direction="horizontal"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // width={"100%"}
    >
      {data?.map((data) => (
        <SwiperSlide key={data.id} style={containerStyles}>
          <CardMedia
            height="194"
            alt={data.title}
            sx={{ borderRadius: "12px", height: "200px" }}
          >
            <Image
              src={data.image}
              alt={data.title}
              title={data.title}
              loading="lazy"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "12px",
                width: "100%",
              }}
            />
          </CardMedia>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
