import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const SpecificationsCard = ({ property, valueOf }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1e1e1e",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius: "12px",
        height: "55px",
        paddingLeft: "16px",
        paddingRight: "16px",
        marginTop: "20px",
      }}
    >
      <Typography variant="caption" fontWeight={600} fontSize={"13px"}>
        {property}
      </Typography>
      <Typography variant="caption">{valueOf}</Typography>
    </Box>
  );
};

export default SpecificationsCard;
