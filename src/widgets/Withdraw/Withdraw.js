import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import { TextField } from "@mui/material";
import {
  useGetProfileAmountQuery,
  useRequestWithdrawMutation,
} from "@/redux/apis/walletApi";
import PostCompleteSuccess from "@/pages/c2c/post-complete-success";

export default function Withdraw({ handleFinishWithdraw }) {
  const [withdrawState, setWithdrawState] = useState({
    amount: null,
    iban: null,
    name: null,
    mobile: null,
  });

  const [validationErrors, setValidationErrors] = useState({
    amount: false,
    iban: false,
    name: false,
    mobile: false,
  });

  const [successfulOperation, setSuccessfulOperation] = useState(false);
  const [requestWithdraw, requestRes] = useRequestWithdrawMutation();
  const profileDetails = useGetProfileAmountQuery();
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    type: "error",
  });

  const handleWithdraw = () => {
    const { amount, iban, name, mobile } = withdrawState;

    const errors = {
      amount: amount === null || amount?.trim() === "",
      iban: iban === null || iban?.trim() === "",
      name: name === null || name?.trim() === "",
      mobile: mobile === null || mobile?.trim() === "",
    };

    setValidationErrors(errors);

    if (Object.values(errors).some((isValid) => isValid)) {
      setSnackbarState((state) => ({
        type: "error",
        open: true,
        message: "Please fill in all the required fields.",
      }));
      return;
    }
    
    if (validateFields()) {
      requestWithdraw({
        amount,
        currencyCode: profileDetails?.data?.currency?.code,
        iban,
        name,
        mobile,
      })
        .unwrap()
        .then((res) => {
          setSnackbarState((state) => ({
            type: "success",
            open: true,
            message: "Withdraw Successful",
          }));
          window.location.reload();
        })
        .catch((e) => {
          setSnackbarState((state) => ({
            ...state,
            open: true,
            message: e.data.validation[0].errors[0].message,
          }));
        });
    }
  };

  const validateFields = () => {
    const { amount, iban, name, mobile } = withdrawState;

    const errors = {
      amount: amount?.trim() === "",
      iban: iban?.trim() === "",
      name: name?.trim() === "",
      mobile: mobile?.trim() === "",
    };

    setValidationErrors(errors);

    return Object.values(errors).every((isValid) => !isValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setWithdrawState((state) => ({
      ...state,
      [name]: value,
    }));

    setValidationErrors((errors) => ({
      ...errors,
      [name]: value.trim() === "",
    }));
  };

  return successfulOperation ? (
    <>
      <Grid container width={"100%"}>
        <PostCompleteSuccess
          handleFinishWithdraw={handleFinishWithdraw}
          text={"Successful withdraw"}
        />
      </Grid>
    </>
  ) : (
    <>
      <Grid
        container
        width={"85%"}
        alignItems={"center"}
        rowSpacing={3}
        margin="auto"
      >
        <Grid item xs={12}>
          <Typography fontSize={14}>
            Note: the withdraw request might take up to 14 days or more from the
            time we process the refund request but in some cases it might take
            more time depending on the bank.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="amount"
            type="number"
            onChange={handleInputChange}
            variant="outlined"
            label={<>Enter amount </>}
            fullWidth
            size="small"
            sx={{ borderRadius: "30px" }}
            required
            error={validationErrors.amount}
            helperText={validationErrors.amount && "Amount is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="iban"
            onChange={handleInputChange}
            variant="outlined"
            label="IBAN"
            fullWidth
            size="small"
            sx={{ borderRadius: "30px" }}
            required
            error={validationErrors.iban}
            helperText={validationErrors.iban && "IBAN is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            onChange={handleInputChange}
            variant="outlined"
            label={<>Account holder{"'"}s name</>}
            fullWidth
            size="small"
            sx={{ borderRadius: "30px" }}
            required
            error={validationErrors.name}
            helperText={validationErrors.name && "Amount holder is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="mobile"
            onChange={handleInputChange}
            variant="outlined"
            label={<>Mobile phone number</>}
            fullWidth
            size="small"
            sx={{ borderRadius: "30px" }}
            type="number"
            required
            error={validationErrors.mobile}
            helperText={validationErrors.mobile && "Mobile is required"}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleWithdraw}
            fullWidth
            variant="outlined"
            color="primary"
            size="small"
            style={{
              borderColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              height: 45,
            }}
          >
            WITHDRAW
          </Button>
        </Grid>
        <Snackbar
          open={snackbarState.open}
          onClose={() =>
            setSnackbarState((state) => ({ ...state, open: false }))
          }
          autoHideDuration={2000}
        >
          <Alert severity={snackbarState.type}>{snackbarState.message}</Alert>
        </Snackbar>
      </Grid>
    </>
  );
}