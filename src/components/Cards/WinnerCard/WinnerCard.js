import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardMainData from "./CardMainData/CardMainData";
import CardDescription from "./CardDescription/CardDescription";
import CardFooter from "./CardFooter/CardFooter";

const WinnerCard = ({ auction, isPaymentComplete }) => (
  <Card
    sx={{
      minWidth: 400,
      maxWidth: 400,
      overflow: "visible",
      borderRadius: 3,
    }}
  >
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="194"
        image={auction?.mediaPhotos[0].url}
        alt="car image"
        z
        sx={{ borderRadius: 2 }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 0,
          width: "100%",
          color: "white",
        }}
      ></Box>
    </Box>
    <CardContent sx={{ p: 1, pb: "8px !important" }}>
      <CardMainData heading={auction.title} />
      <CardDescription txt={auction.description} />
      {!isPaymentComplete && <CardFooter />}
    </CardContent>
  </Card>
);

WinnerCard.propTypes = {
  img: PropTypes.string,
  isPaymentComplete: PropTypes.bool,
};

export default WinnerCard;
