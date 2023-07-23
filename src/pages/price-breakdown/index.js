import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deductBalance } from "@/redux/slices/user.slice";
import { addOffer } from "@/redux/slices/data.slice";
import { useStoreMutation } from "@/redux/apis/auction-salesApi/buynowApi";
import { Alert, Snackbar } from "@mui/material";

export default function PriceBreakdown({ pricingData, id, lng, lat, addressOption }) {
  const router = useRouter();
  const [openPricingOptions, setOpenPricingOptions] = React.useState(false);
  const dispatch = useDispatch();
  const [storeQ] = useStoreMutation();
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    type: 'error'
  });
  const continueToPayment = () => {
    const requestBody = {
      "delivery": {
        "capacity": 1,
        "coordinates": {
          "latitude": lat,
          "longitude": lng
        }
      }
    };
    const storeObj = {
      params: `auctionVehicleId=${id}`
    }
    if (!!addressOption)
      storeObj.body = requestBody
    storeQ(storeObj).unwrap()
      .then(res => {
        if (!res.error)
          router.push(`/winner?paymentComplete=true&id=${id}`)
        else
          setSnackbarState(state => ({
            ...state,
            open: true,
            message: res.message
          }))
      }).catch(e => {
        setSnackbarState(state => ({
          ...state,
          open: true,
          message: e.data.message
        }))

      })
  };

  // useEffect(() => {
  //   setPricingData([{ id: "0", label: "Item Price", value: "price", cost: 'SAR 200000', amount: 200000 },
  //   { id: "1", label: "Mazadak Fee", value: "Fee", cost: 'SAR 200', amount: 200 },
  //   { id: "2", label: "VAT", value: "vat", cost: 'SAR 500', amount: 500 },
  //   {
  //     id: "14",
  //     label: "Delivery Fee",
  //     value: "deliveryFee",
  //     cost: addressOption === 'pickup' ? '----' : 'SAR 500',
  //     amount: addressOption === 'pickup' ? 0 : 500
  //   }])
  // }, [])


  const total = pricingData?.reduce((acc, currentVal) => acc + currentVal.amount, 0);


  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      sx={{ p: 2, pt: 3 }}
      // height={{ xs: "93%", lg: "88%" }}
      overflow="hidden"
    >
      <Grid
        item
        container
        height="75%"
        direction="column"
        alignItems="center"
        onClick={() => setOpenPricingOptions(false)}
        sx={{
          opacity: openPricingOptions ? "50%" : "100%",
        }}
      >
        <Grid item>
          <Typography variant="inherit" fontWeight="bold">
            Price Breakdown
          </Typography>
        </Grid>
        <Grid
          item
          container
          width="100%"
          marginTop={3}
          direction="column"
          alignItems="center"
          // bgcolor={ "#232323"}
          border={'2px solid #232323'}
          borderRadius={4}
        >
          {pricingData.map((data, i) => (
            <Grid
              key={data.id}
              item
              p={2}
              my={1}
              container
              justifyContent="space-between"
              borderTop={i === (pricingData.length - 1) ? '1px solid' : 'none'}
            >
              <Grid item md={12} lg={6}>
                <Typography
                  variant="body1"
                  fontWeight={data.label === "Total Price" ? 900 : 700}
                  color="inherit"
                >
                  {data.label}
                </Typography>
              </Grid>
              <Grid item md={12} lg={6}>
                <Typography
                  variant="body1"
                  fontWeight={data.label === "Total Price" ? 900 : 500}
                >
                  {data?.cost || '---'}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item width="100%" mt={3} container justifyContent="center">
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: { xs: "100%", lg: "100%" }, borderRadius: '12px' }}
          onClick={continueToPayment}
        >
          Continue to payment
        </Button>
      </Grid>
      <Snackbar
        open={snackbarState.open}
        onClose={() => setSnackbarState(state => ({ ...state, open: false }))}
        autoHideDuration={2000}
      >
        <Alert severity={snackbarState.type}>{snackbarState.message}</Alert>
      </Snackbar>
    </Grid>
  );
}
