import React from "react";
import Image from "next/image";

import  Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import  ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import LotItemsCard from "@/components/Details/LotItemsCard";

import lotItemsData from "@/data/lotItemsData.json";
import CustomeChatBtn from "@/components/CustomeChatBtn/CustomeChatBtn";
import CustomOutLineBtn from "@/components/CustomOutLineBtn/CustomOutLineBtn";
import UpComingAuctionImage from "@/components/Details/UpComingAuctionImage";
import { useRouter } from "next/router";

const DetailLots = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        margin: "4% auto",
        "@media screen and (max-width: 600px)": {
          width: "90%",
        },
        paddingBottom:10
      }}
    >
      <Box
        sx={{ width: "60%", display: "flex", justifyContent: "space-between" }}
      >
        <ArrowBackIosRoundedIcon
          onClick={() => router.back()}
          style={{ cursor: "pointer" }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          Upcoming Auction
        </Typography>
      </Box>

      <UpComingAuctionImage
        date={"25 Jul 2022 : 220"}
        description={
          "Auction detail and information ett lorem ipsum dolor asset ante net."
        }
        img={"/imgs/tundra.png"}
        imageName={"Toyota"}
      />

      <Typography sx={{ fontSize: "16px", fontWeight: 800, padding:2 }}>
        Lot Items
      </Typography>

      {lotItemsData?.map((data) => (
        <LotItemsCard
          key={data.id}
          lotTitle={data.lotTitle}
          title={data.title}
          description={data.description}
          image={data.image}
          price={data.price}
          currency={data.currency}
        />
      ))}
      <Box
        sx={{
          position: "fixed",
          top: "88%",
          transform: "translate(-50%, -50%)",
          left: "50%",
          flexDirection: "column",
          display: "flex",
          gap: 2,
        }}
      >
        <CustomeChatBtn bgColor={"#1e1e1e"} />
        <CustomOutLineBtn
          width={"349px"}
          title={"Register now"}
          destination={"/Make_an_Offer"}
          bgColor={"#1e1e1e"}
        />
      </Box>
    </Box>
  );
};

export default DetailLots;