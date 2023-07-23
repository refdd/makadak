import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/grid";

import { Grid } from "swiper";
import partnerStyles from "../partners.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const PartnerProductsFilter = () => {
  const [selectedProduct, setSelected] = useState({ id: 1, name: "All" });
  const product = [
    { id: 1, name: "All" },
    {
      id: 2,
      name: "CARS",
      products: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 3,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 4,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 5,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
      ],
    },
    {
      id: 3,
      name: "MOTORBIKES",
      products: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 3,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 4,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 5,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
      ],
    },
    {
      id: 4,
      name: "WATERCRAFTS",
      products: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 3,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 4,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 5,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
      ],
    },
    {
      id: 5,
      name: "HEAVY MACHxINERY",
      products: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 3,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 4,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 5,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
      ],
    },
    {
      id: 6,
      name: "HEAVY MACHxIsNERY",
      products: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 3,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 4,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
        {
          id: 5,
          name: "bmw",
          image: "/imgs/bmw.svg",
        },
      ],
    },
    {
      id: 7,
      name: "HEAVY MAsCHxINERY",
    },
  ];

  const selectProduct = (element) => {
    setSelected(element);
  };

  return (
    <>
      <Swiper
        // style={{ padding: "0rem 2rem" }}
        modules={[Grid]}
        slidesPerView={4}
        className={`mySwiper margin-top`}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 3.25,
            spaceBetween: 15,
          },

          400: {
            slidesPerView: 3.25,
            spaceBetween: 15,
          },

          630: {
            slidesPerView: 4.75,
            spaceBetween: 15,
          },

          //   850: {
          //     slidesPerView: 5.75,
          //     spaceBetween: 30,
          //   },
          980: {
            slidesPerView: 4.75,
            spaceBetween: 30,
          },
        }}
      >
        {product?.map((ele, index) => (
          <SwiperSlide
            key={ele?.id}
            className={`${
              selectedProduct?.id !== ele?.id
                ? partnerStyles["products-slider"]
                : partnerStyles["selected-products-slider"]
            }`}
          >
            <Button
              onClick={() => selectProduct(ele)}
              className={`${partnerStyles["products-btn"]} ${
                selectedProduct?.id !== ele?.id
                  ? partnerStyles["color-white"]
                  : ""
              }`}
            >
              {ele?.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProduct?.products?.length > 0 && (
        <Swiper
          // style={{ padding: "0rem 2rem" }}
          modules={[Grid]}
          className={`mySwiper margin-top`}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 3.25,
              spaceBetween: 15,
            },

            400: {
              slidesPerView: 3.25,
              spaceBetween: 15,
            },

            630: {
              slidesPerView: 4.75,
              spaceBetween: 15,
            },

            //   850: {
            //     slidesPerView: 5.75,
            //     spaceBetween: 30,
            //   },
            980: {
              slidesPerView: 4.75,
              spaceBetween: 30,
            },
          }}
        >
          {selectedProduct?.products?.map((ele, index) => (
            <SwiperSlide
              key={ele?.id}
              className={`${
                selectedProduct?.id !== ele?.id && !ele?.image
                  ? partnerStyles["products-slider"]
                  : !ele?.image
                  ? partnerStyles["selected-products-slider"]
                  : ""
              }`}
            >
              {!ele?.image ? (
                <Button
                  className={`${partnerStyles["products-btn"]} ${partnerStyles["color-white"]}`}
                >
                  {ele?.name + " " + selectedProduct?.name}
                </Button>
              ) : (
                <Button>
                  <Image src={ele?.image} width={50} height={50}></Image>
                </Button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default PartnerProductsFilter;
