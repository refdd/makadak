import * as React from "react";
import Card from "@mui/material/Card";
import CardFooter from "./CardFooter/CardFooter";
import CardDescription from "./CardDescription/CardDescription";
import Link from "next/link";

export default function MyItemsCard({ id,
  img,
  heading,
  flag,
  description,
  note,
  catId,
  subcatId,
  featured,
  addedAt,
  views,
  clicks,
  sold,
  isFavourite,
  title,
  smallInfo }) {
  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} href={`/lot-details/${id}`}>
      <Card
        sx={{
          overflow: "visible",
          borderRadius: 5,
        }}
      >
        <CardDescription heading={title} description={description} img={img} />
        <CardFooter id={id} smallInfo={smallInfo} />
      </Card>
    </Link>
  );
}
