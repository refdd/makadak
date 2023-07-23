import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CustomTag from "../../CustomTag/CustomTag";
import FeaturedTag from "../../Tags/FeaturedTag/FeaturedTag";
import { Box, Divider, Typography } from "@mui/material";
import SmallCardMetadata from "./CardMetadata/SmallCardMetadata";
import SmallCardMainData from "./CardMainData/SmallCardMainData";
import TimerTag from "../../Tags/TimerTag/TimerTag";
import SmallCardDescription from "./CardDescription/SmallCardDescription";
import CardFooter from "./CardFooter/CardFooter";
import Link from "next/link";

export default function ProductResultCard({ data, tag }) {
  return (
    <Link href={`/lot-details/${data.id}`}>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 300,
          marginRight: 5,
          overflow: "visible",
          borderRadius: 3,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="194"
            image={data.img}
            alt="mercedes"
            sx={{ borderRadius: 2 }}
          />
          {tag && (
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 0,
                width: "100%",
                color: "white",
              }}
            >
              <CustomTag color={"#00F0A9"} tagContent={<FeaturedTag />} />
            </Box>
          )}
        </Box>
        <CardContent sx={{ paddingLeft: 0, paddingBottom: 0 }}>
          <SmallCardMetadata
            category={data.category}
            flag={data.flag}
            extra={data?.lot}
          />

          <SmallCardMainData heading={data.heading} />
          <div style={{ paddingLeft: 12, marginBottom: 12 }}>
            <Divider sx={{ borderColor: "white" }} />
          </div>

          <SmallCardDescription
            note={data.note}
            description={data.description}
            tag={
              <CustomTag
                color={"#00F0A9"}
                dir="rtl"
                styles={{
                  color: "#fff!important",
                  "@media (max-width: 776px)": {
                    fontSize: "10px",
                    textAlign: "right",
                    height: "28px",
                    width: "100px",
                  },
                }}
                tagContent={
                  <TimerTag
                    deadline={data?.time}
                    styles={{
                      "@media (max-width: 776px)": {
                        fontSize: "12px",
                      },
                    }}
                  />
                }
              />
            }
          />
        </CardContent>
        <CardFooter price={data?.price} views={data?.views} />
      </Card>
    </Link>
  );
}
