import React, { useState } from "react";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ReviewOffer from "@/components/TopupActions/ReviewOffer/ReviewOffer";
import Confirmation from "@/components/TopupActions/Confirmation/Confirmation";

const Congrats = ({ title, type, auctionDetails, dataOffer }) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const router = useRouter();
  const handelopenConfirmation = () => {
    setOpenConfirmation(true);
  };
  const handelCloseConfirmation = () => {
    setOpenConfirmation(false);
  };
  return (
    <Box sx={{ top: "12%", left: 8, width: "100%", height: "100%" }}>
      {!openConfirmation ? (
        <ReviewOffer
          title={title}
          type={type}
          auctionDetails={auctionDetails}
          handelopenConfirmation={handelopenConfirmation}
          dataOffer={dataOffer}
        />
      ) : (
        <Confirmation
          title={title}
          handelCloseConfirmation={handelCloseConfirmation}
          auctionDetails={auctionDetails}
          dataOffer={dataOffer}
          type={type}
        />
      )}
    </Box>
  );
};

export default Congrats;

export async function getServerSideProps(context) {
  const { query } = context;

  const title = query.title;

  return {
    props: {
      title,
    },
  };
}
