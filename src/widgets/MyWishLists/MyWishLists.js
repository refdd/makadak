import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import SliderBlock from "../SliderBlock/SliderBlock";
import ProductCardMain from "@/components/Cards/ProductCard/ProductCardMain";
import MyWishListCard from "@/components/Cards/MyWishListCard/MyWishListCard";
import { useEffect } from "react";
import { useGetWatchlistsQuery } from "@/redux/apis/account/myWatchList.api";

function MyWishLists() {
  const { data, isSuccess, isLoading } = useGetWatchlistsQuery();
  console.log(data);
  return (
    <Box p={4}>
      <Typography fontSize={22} fontWeight={900} sx={{ textTransform: 'uppercase' }}>My watchlist</Typography>
      {
        isLoading &&
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 3 }}>
          <SliderBlock
            slidesPerView={"auto"}
            slideMaxWidth={300}
            navigation={true}
          >
            {[...Array(4)].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                sx={{ width: 200, height: 200, margin: "0 16px 16px 0", borderRadius: '8px' }}
              />
            ))}
          </SliderBlock>
        </Box>
      }
      {
        !isLoading &&
        <SliderBlock
          slidesPerView={"auto"}
          slideMaxWidth={300}
          navigation={true}
        >
          {data?.map((data) => (
            <MyWishListCard
              key={data.id}
              {...data}
            />
          ))}
        </SliderBlock>
      }
    </Box>
  );
}

export default MyWishLists;
