import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, Divider } from "@mui/material";
import CardMetadata from "./CardMetadata/CardMetadata";
import CardMainData from "./CardMainData/CardMainData";
import CardFooter from "./CardFooter/CardFooter";
import { getCategoryName } from "@/lib/helpers";
import Link from "next/link";

export default function SalesCard({ id,
  img,
  heading,
  flag,
  description,
  note,
  catId,
  subcatId,
  featured,
  addedAt,
  analytics,
  views,
  clicks,
  sold,
  isFavourite,
  title,
  vehiclePrice,
  totalBids
}) {
  return (
    <Link href={`/lot-details/${id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          // minWidth: 345,
          // maxWidth: 345,
          overflow: "visible",
          borderRadius: 5,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="120"
            image={img}
            alt={`item-${heading}`}
            sx={{ borderRadius: "12px 12px 0 0" }}
          />
        </Box>
        <CardContent sx={{ paddingRight: 0, paddingBottom: 0 }}>
          <CardMetadata category={getCategoryName(catId)} flag={flag} />
          <CardMainData heading={title} />
          <div style={{ paddingRight: 12, margin: "8px 0" }}>
            <Divider sx={{ borderColor: "white" }} />
          </div>
        </CardContent>
        <CardFooter analytics={analytics} vehiclePrice={vehiclePrice} totalBids={totalBids}/>
      </Card>
    </Link>
  );
}
