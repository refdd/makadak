import IOSSwitch from "@/components/IOSSwitch/IOSSwitch";
import { Box, Button,  Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import SuceessTopUp from "./success";
import Link from "next/link";
import { useApplePayMutation, useCardTokenizationMutation, useGenerateCardUrlMutation, useGenerateStcPaymentMutation, useGetSavedCardsQuery } from "@/redux/apis/paymentApi";
import { useState } from "react";
import { useEffect } from "react";
import PaymentCardsModal from "@/components/PaymentCardsModal/PaymentCardsModal";

const Price = ({ handleTopupSuccess, selectedMethod }) => {
  const [isError, setError] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [topupAmount, setTopupAmount] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generateUrlQ, generateUrlRes] = useGenerateCardUrlMutation();
  const [stcPaymentQ] = useGenerateStcPaymentMutation();
  const [applePayQ] = useApplePayMutation();
  const [openCardsModal, setOpenCardsModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const getSavedCardsQ = useGetSavedCardsQuery();
  const [cardTokenQ] = useCardTokenizationMutation();

  const handleToggleCard = (e) => setSelectedCard(e.target.value);
  const handleToggleCardsModal = () => {
    setOpenCardsModal(state => !state)
  }
  const onChange = (e) => {
    setError(e.target.value > 3000);
    setTopupAmount((e.target.value));
  };

  useEffect(() => {
    console.log(getSavedCardsQ);
  }, [getSavedCardsQ])

  const success = () => {
    if (selectedMethod === 'card') {
      handleToggleCardsModal()
    }

    if (selectedMethod === 'stc')
      stcPaymentQ({ type: 'wallet', amount: topupAmount }).unwrap()
        .then((res) => {
          console.log(res);
          window.location.reload();
        }).catch(e => {

        })
    if (selectedMethod === 'apple')
      applePayQ(topupAmount).unwrap()
        .then((res) => {
          console.log(res);
          window.location.reload();
        }).catch(e => {

        })
  };

  return (
    isSuccess ?
      <Grid
        container
        width={'100%'}
      >
        <SuceessTopUp handleTopupSuccess={handleTopupSuccess} />
      </Grid>
      :
      <Stack
        px={2}
        my={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={'80%'}
      >
        <TextField
          value={topupAmount}
          onChange={onChange}
          error={isError}
          className="input-without-arrows"
          type="number"
          InputProps={{ sx: { borderRadius: "15px" } }}
          sx={{
            width: { xs: "100%", lg: "80%" },
            //   borderRadius: '40px'
          }}
          id="input-without-arrows"
          label="How much would you like to to up? (SAR)"
          helperText={isError ? "please enter amount bellow 3000" : ""}
        />
        <Box
          sx={{
            width: { xs: "100%", lg: "80%" },
          }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid
            py={3}
          >
            <span>I have read and agreed to the &nbsp;
              <Link href={'/terms-and-conditions'} target='_blank'>
                <span style={{ fontWeight: 700, color: '#00F0A9' }}>Terms and Conditions</span>
              </Link>
            </span>
          </Grid>

          <Grid item xs={1}>
            <IOSSwitch
              onChange={(e) => {
                setAgreed(e.target.checked);
              }}
            ></IOSSwitch>
          </Grid>
        </Box>
        <Box
          px={2}
          sx={{ bottom: 0, width: { xs: "100%", lg: "80%" } }}
        >
          <Button
            onClick={success}
            disabled={isError || !agreed}
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "12px",
              marginTop: "5rem",
              marginBottom: "3rem",
              width: "100%",
            }}
          >
            Top Up Now
          </Button>
        </Box>
        <PaymentCardsModal
          savedCards={getSavedCardsQ?.data}
          openCardsModal={openCardsModal}
          handleToggleCardsModal={handleToggleCardsModal}
          handleToggleCard={handleToggleCard}
          amount={topupAmount}
          type="wallet"
        />


      </Stack >
  );
};

export default Price;
