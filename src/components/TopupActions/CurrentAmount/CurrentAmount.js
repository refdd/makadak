import { Box, Typography } from "@mui/material";
import React from "react";

export default function CurrentAmount({ action, highestOffer }) {
  return (
    <Box marginTop="-20px">
      <Typography variant="body2" fontWeight="bold">
        {action === "offer" ? `Current highest offer` : `HIGHEST BID`}
      </Typography>
      {(
        <Typography variant="h4" marginTop={0.5} fontWeight="bold">
          {
            highestOffer?.amount ?
              highestOffer?.currency?.code + ' ' + highestOffer?.amount
              :
              '---'
          }
        </Typography>
      )}
    </Box>
  );
}
