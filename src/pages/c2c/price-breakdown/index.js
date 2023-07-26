import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import C2cDrawerPayment from "@/widgets/C2cDrawerPayment/C2cDrawerPayment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addOffer } from "@/redux/slices/data.slice";
import { deductBalance } from "@/redux/slices/user.slice";
import Link from "next/link";
import { Button, Dialog, Grid } from "@mui/material";
import Image from "next/image";

import cookieCutter from 'cookie-cutter'
import { fetchApi } from "@/helpers/fetchApi";
import { useGenerateCardUrlMutation, useGenerateStcPaymentMutation, useGetSavedCardsQuery } from "@/redux/apis/paymentApi";
import InspectionPayment from "@/components/InspectionPayment/InspectionPayment";
import PaymentCardsModal from "@/components/PaymentCardsModal/PaymentCardsModal";

const PriceBreakdown = ({ handleTopup, formState, auctionId, categoryId, report }) => {
  const [generateUrlQ, generateUrlRes] = useGenerateCardUrlMutation();
  const [openPricingOptions, setOpenPricingOptions] = useState(false);
  const [openCardsModal, setOpenCardsModal] = useState(false);
  const getSavedCardsQ = useGetSavedCardsQuery();
  const [stcPaymentQ] = useGenerateStcPaymentMutation();
  const handleToggleCard = (e) => setSelectedCard(e.target.value);

  const handleToggleCardsModal = () => {
    setOpenCardsModal(state => !state)
  }
  console.log(report);
  const handleCardClick = (type) => {
    if (type === 'stc') {
      stcPaymentQ({
        amount: report?.amount?.amount,
        auctionVehicleId: auctionId,
        type: 'inspection_report_basic_seller'
      }).unwrap()
        .then((res) => {
          handleTopup();
        }).catch(e => {

        })
    } else setOpenCardsModal(true)
  }


  return (
    <Box p={4}>
      <Card
        sx={{
          height: "58px",
          padding: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "13px",
            fontStyle: "normal",
            color: "#FFFFFF",
            fontFamily: "Montserrat",
          }}
        >
          Inspection Report
        </Typography>

        <Typography
          sx={{ color: "#FFFFFF", fontWeight: 900, fontSize: "10px" }}
        >
          {report?.amount?.currency?.code} {report?.amount?.amount.toLocaleString()}
        </Typography>
      </Card>

      <Card
        sx={{
          height: "58px",
          padding: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00F0A9",
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "13px",
            fontStyle: "normal",
            color: "#000000",
            fontFamily: "Montserrat",
          }}
        >
          Inspection Report
        </Typography>

        <Typography
          sx={{ color: "#000000", fontWeight: 900, fontSize: "10px" }}
        >
          {report?.amount?.currency?.code} {report?.amount?.amount.toLocaleString()}
        </Typography>
      </Card>
      <br />
      <Button variant="outlined" fullWidth sx={{ borderRadius: 3 }} onClick={() => setOpenPricingOptions(true)}>
        <Typography fontWeight={700} color='primary'>Continue to Payment</Typography>
      </Button>

      <InspectionPayment
        openPricingOptions={openPricingOptions}
        setOpenPricingOptions={setOpenPricingOptions}
        handleCardClick={handleCardClick}
      />
      <PaymentCardsModal
        savedCards={getSavedCardsQ?.data}
        openCardsModal={openCardsModal}
        handleToggleCardsModal={handleToggleCardsModal}
        handleToggleCard={handleToggleCard}
        amount={(report?.amount?.amount - 0).toLocaleString()}
        type="inspection_report_basic_seller"
        inspectionReportId={report?.id}
        cb={handleTopup}
      />

    </Box>
  );
};

export default PriceBreakdown;
