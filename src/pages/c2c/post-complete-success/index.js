import Image from "next/image";
import React from "react";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

const PostCompleteSuccess = ({ text, id, handleFinishWithdraw }) => {
  const router = useRouter();
  const handleClickBtn = async () => {
    await handleFinishWithdraw()
  }
  return (
    <Grid padding={{ xs: 3 }} sx={{ width: "100%" }} item xs={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
          "@media screen and (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "53px", height: "57px", color: "#00F0A9" }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
            color: "#00F0A9",
            marginTop: "36px",
          }}
        >
          {text
            ? text
            : "Your item has been submitted for review and you will be notified when it goes live."}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}

      >
        <Button
          onClick={handleClickBtn}
          variant="outlined"
          sx={{
            borderRadius: "50.50px",
            fontSize: "15px",
            width: "366px",
            color: "#02FAA8",
            backgroundColor: "#121212",
            fontWeight: 600,
            height: "45px",
          }}
        >
          Done
        </Button>
      </Box>
    </Grid>
  );
};

export default PostCompleteSuccess;
