import ProductCardSmall from "@/components/Cards/ProductCard/ProductCardSmall";
import { Grid } from "@mui/material";

export default function Results({ data }) {
  return (
    <Grid container justifyContent={'center'}>
      {data?.map((ele, i) => {

        const cardData = {
          country: ele?.country?.countryCode2,
          img: ele?.mediaPhotos?.length ? ele?.mediaPhotos[0].url : '',
          title: ele?.title,
          info: ele?.smallInfo,
          description: ele?.description,
          analytics: ele?.analytics,
          price: ele?.vehiclePrice ?? (ele?.highestBidPrice || ele?.startingPrice),
          deadline: ele?.endAt || Date.now(),
          isFav: ele?.isFavourite,
          totalBids: ele?.totalBids,
          featured: ele?.featured,
          id: ele?.id,
          startAt: ele?.startAt,
          link: `/lot-details/${ele?.id}`,
          catName: ele.title.split('categories_')[1],
          saleType: ele.saleType
        }
        return (
          <Grid key={i} marginBottom={{xs:4}}  item mx={3}>
            <ProductCardSmall data={cardData} />
          </Grid>
        )
      })}
    </Grid>
  );
}
