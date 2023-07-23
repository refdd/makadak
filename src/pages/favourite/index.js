import React from "react";
import FavouriteCard from "../../components/Cards/ProductCard/FavouriteCard";
import {
  useGetFavoritesQuery,
  useRemoveFromFavoritesMutation,
} from "../../redux/apis/favouriteApi";
import { Grid, Typography, Button, Box } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import SliderBlock from "@/widgets/SliderBlock/SliderBlock";
import { useRouter } from "next/router";
import ProductCardMain from "@/components/Cards/ProductCard/ProductCardMain";

export default function Favourite() {
  const favoriteQuery = useGetFavoritesQuery();
  console.log(favoriteQuery);
  const router = useRouter();
  const [removeFavouriteQ] = useRemoveFromFavoritesMutation();
  const handleRemoveFromFavorites = (id) => {
    console.log("fdg");
    return removeFavouriteQ(id);
  };

  return (
    <>
      <div style={{ padding: 15, cursor: "pointer" }}>
        <ArrowBackIosRoundedIcon fontSize="12" onClick={() => router.back()} />
        <Typography textAlign={"center"} fontWeight={700} fontSize={36}>
          Your favourites
        </Typography>
      </div>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"80vh"}
      >
        {!favoriteQuery?.data?.data?.length && (
          <Grid item display={"flex"} flexDirection={"column"}>
            <Typography fontSize={"18px"} mb={3}>
              Your favourites is empty
            </Typography>
            <Button variant="contained" onClick={() => router.replace("/")}>
              <Typography color="black" fontWeight={600}>
                Go Home
              </Typography>
            </Button>
          </Grid>
        )}

        <SliderBlock
          slideMaxWidth={600}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={true}
        >
          {favoriteQuery?.data?.data?.map((data, index) => (
            // <FavouriteCard
            //   key={index}
            //   data={data}
            //   onRemoveFromFavorites={handleRemoveFromFavorites}
            // />
            <ProductCardMain
              key={index}
              // onRemoveFromFavorites={handleRemoveFromFavorites}
              data={{
                country: data?.country?.countryCode,
                img: data?.mediaPhotos?.length ? data?.mediaPhotos[0].url : "",
                title: data?.title,
                info: data?.smallInfo,
                description: data?.description,
                analytics: data?.analytics,
                price:
                  data?.vehiclePrice ??
                  (data?.highestBidPrice || data?.startingPrice),
                deadline: data?.endAt,
                isFav: data?.isFavourite,
                totalBids: data?.totalBids,
                featured: data?.featured,
                id: data?.id,
                startAt: data?.startAt,
                // link: `/lot-details/${data?.id}`,
                // catName: el.title.split('categories_')[1],
                flag: data?.country?.flagImagesUrl,
              }}
            ></ProductCardMain>
          ))}
        </SliderBlock>
      </Grid>
    </>
  );
}
