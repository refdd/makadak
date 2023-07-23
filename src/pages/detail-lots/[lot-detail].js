import Carousel from '@/components/Details/Carousel'
import DetailHeader from '@/components/Details/DetailHeader'
import PriceLine from '@/components/Details/PriceLine'
import ProductInfo from '@/components/Details/ProductInfo'
import SpecificationsCard from '@/components/Details/SpecificationsCard'
import { Box } from '@mui/material'
import React from 'react'


import specificationsData from '@/data/specificationsData.json'
import carouselData from '@/data/carouselData.json'
import CustomOutLineBtn from '@/components/CustomOutLineBtn/CustomOutLineBtn'
import { useRouter } from 'next/router'
import {fetchApi} from "@/helpers/fetchApi";

const LotDetails = () => {
  const router = useRouter();
  return (
    <Box sx={{ width: '90%', margin: '4% auto', paddingBottom: 10 }}>

      <DetailHeader title={"Lot detail"} />

      <ProductInfo title={"BENTLEY"} name={"2020 Flying Spur, Mulliner"} info={"LOT 1 | 10,000km |  2021"} />

      <Carousel data={carouselData} />

      <PriceLine currency={"SAR"} price={'3,000,000'} />

      {specificationsData?.map((data) => (
        <SpecificationsCard property={data.property} valueOf={data.valueOf} key={data.id} />
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
          destination={router.query.offerDest}
        />
        <CustomOutLineBtn
          width={"169.78px"}
          title={"Buy Now"}
          destination={router.query.buyDest}
        />
      </Box>
    </Box>
  )
}

export default LotDetails