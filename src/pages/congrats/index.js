import React from "react";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Congrats = ({ title, type }) => {
  const router = useRouter();
  return (
    <Box sx={{ top: "12%", left: 8, width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "10% auto",
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
          "@media screen and (max-width: 900px)": {
            width: "60%",
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
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          width: "100%",
        }}
      >
        <Button
          onClick={() => router.reload()}
          variant="contained"
          sx={{
            borderRadius: "16px",
            fontSize: "15px",
            width: "366px",
            color: "black",
            fontWeight: 800,
            height: "50px",
          }}
        >
          Done
        </Button>
      </Box>
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
