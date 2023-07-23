import React from "react";

import Box from "@mui/material/Box";

import SpecificationsCard from "@/components/Details/SpecificationsCard";
import DetailHeader from "@/components/Details/DetailHeader";
import ProductInfo from "@/components/Details/ProductInfo";
import Carousel from "@/components/Details/Carousel";
import PriceLine from "@/components/Details/PriceLine";

import specificationsData from "@/data/specificationsData.json";
import carouselData from "@/data/carouselData.json";

export default function UpcomingLiveAuction() {
  return (
    <Box sx={{ width: "90%", margin: "4% auto" }}>
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
    </Box>
  );
}
