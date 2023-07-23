import Card from "@mui/material/Card";
import CardTitle from "./CardTitle/CardTitle";
import ImageLayers from "@/components/ImageLayers/ImageLayers";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { onAddFilter } from "@/redux/slices/advanceSearch.slice";
import { useDispatch } from "react-redux";
export default function MyWishListCard({ name, photos, countAuctions, filters }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(onAddFilter(filters));
    router.push('/search')
  }
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        textAlign: "center",
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        overflow: "hidden"
      }}
    >
      <Box>
        <ImageLayers
          imgs={photos.length ? photos?.map(el => el.url) : ['/imgs/logo-large.png']}
          imgWidth={600}
          imgHeight={185}
          maxWidth={400}
          mobileWidth={100}
          mobileHeight={100}
        />
      </Box>
      <CardTitle title={name} count={countAuctions} />
    </Card>
  );
}
