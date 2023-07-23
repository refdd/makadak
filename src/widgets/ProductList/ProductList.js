import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

export default function ProductList({ title, children, mini = false, slp = 4 }) {
  const [swiperState, setSwiperState] = useState({
    slidePerView: slp,
    navigation: true,
  });
  const slides = children?.map((slide, i) => (
    <SwiperSlide style={{width:'80%'}} key={i}>{slide}</SwiperSlide>
  ));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (isMobile)
      setSwiperState((state) => ({ slidePerView: 1, navigation: false }));
    else setSwiperState((state) => ({ slidePerView: slp, navigation: true }));
  }, [isMobile, slp]);

  return (
  
      <Swiper
        slidesPerView={swiperState.slidePerView || "auto"}
        navigation={swiperState.navigation}
        modules={[Navigation]}
         style={{width:'100%' }}
      >
        {slides}
      </Swiper>
 
  );
}
