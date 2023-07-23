import IOSSwitch from "@/components/IOSSwitch/IOSSwitch";
import { FormControlLabel, Typography } from "@mui/material";

const AutoBiddingSwitch = ({ switchState, setSwitchState }) => {

  return (
    <>
      <FormControlLabel
        control={<IOSSwitch onChange={(e) => setSwitchState(e.target.checked)} checked={switchState} />}
        label="Auto Bidding"
        labelPlacement="start"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginInlineStart: "0",
          marginTop: 3,
        }}
      />
      <Typography
        textAlign="center"
        component="p"
        marginTop={1}
        color="#9d9d9d"
        fontSize={12}
      >
        Auto Bidding will incrementally increase your bid only as needed to beat another bid up to Your Maximum Bid amount
      </Typography>
    </>
  );
};

export default AutoBiddingSwitch;
