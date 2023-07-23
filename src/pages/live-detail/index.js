import React from "react";

import Box from "@mui/material/Box";

import DetailHeader from "@/components/Details/DetailHeader";
import ProductInfo from "@/components/Details/ProductInfo";
import Carousel from "@/components/Details/Carousel";
import PriceLine from "@/components/Details/PriceLine";
import SpecificationsCard from "@/components/Details/SpecificationsCard";

import carouselData from "@/data/carouselData.json";
import specificationsData from "@/data/specificationsData.json";
import CustomOutLineBtn from "@/components/CustomOutLineBtn/CustomOutLineBtn";

const index = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "4% auto",
        "@media (max-width: 600px)": {
          padding: "10px",
        },
      }}
    >
      <DetailHeader title={"Lot detail"} />
      <ProductInfo
        title={"BENTLEY"}
        name={"2020 Flying Spur, Mulliner"}
        info={"LOT 1 | 10,000km |  2021"}
      />
      <Carousel data={carouselData} />
      <PriceLine currency={"SAR"} price={"3,000,000"} />
      {specificationsData?.map((data) => (
        <SpecificationsCard
          property={data.property}
          valueOf={data.valueOf}
          key={data.id}
        />
      ))}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          gap: "9px"
        }}
      >
        <CustomOutLineBtn
          width={"169.78px"}
          title={"Bid"}
          destination={"/winner"}
        />
        <CustomOutLineBtn
          width={"169.78px"}
          title={"Buy Now"}
          destination={"/buy_now"}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          gap: "9px",
          
        }}
      >
        <CustomOutLineBtn
          width={"349px"}
          title={"Make an Offer"}
          destination={"/Make_an_Offer"}
          
        />
      </Box>
    </Box>
  );
};

export default index;
