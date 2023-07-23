import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProductInfo = ({ title, name, info }) => {
  return (
    <Box sx={{ marginTop: "3%", marginBottom: "3%" }}>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "19.6px",
          fontStyle: "normal",
          fontFamily: "Montserrat",
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontWeight: 400,
          fontSize: "19px",
          fontStyle: "normal",
          fontFamily: "Montserrat",
          textTransform: "capitalize",
          color: "#FFFFFF",
        }}
      >
        {name}
      </Typography>
      <br />
      <Typography
        variant="caption"
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          fontStyle: "normal",
          fontFamily: "Montserrat",
          color: "#FFFFFF",
        }}
      >
        {info}
      </Typography>
    </Box>
  );
};

export default ProductInfo;
