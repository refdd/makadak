import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PriceLine = ({ currency, price }) => {
  return (
    <Box sx={{ marginTop: "2%", marginBottom: "2%" }}>
      <Typography
        variant="caption"
        sx={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
          color: "#FFFFFF",
        }}
      >
        Starting Price
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingRight: 1,
        }}
      >
        <Typography
          color="#00F0A9"
          style={{
            fontSize: "23.2895px",
            fontWeight: "600",
            fontStyle: "normal",
          }}
        >
          {currency} {price}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15%",
          }}
        >
          <VisibilityIcon style={{ color: "#00F0A9" }} />
          <Typography variant="caption" style={{ color: "#00F0A9" }}>
            20
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceLine;
