import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { Card } from "@mui/material";

const AdditionalFeatures = ({ handleCheckout, data }) => {
    const [checked, setChecked] = useState(false);
    const handleSwitchChange = (event) => setChecked(event.target.checked);
    const company = false;
    const handleContinue = async () => {
        if (!checked) handleCheckout('success');
        else handleCheckout("price");
    };

    return (
        <Box
            sx={{
                width: { xs: '100%', sm: "75%" },
                margin: "4% auto",
                height: '100vh'
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    sx={{ fontSize: "19.6px", fontFamily: "Montserrat", fontWeight: 900 }}
                >
                    Inspection Report
                </Typography>
                {!company && <Switch checked={checked} onChange={handleSwitchChange} />}
            </Box>

            <Card sx={{ padding: 4 }}>
                <Typography fontWeight={600} fontSize={12} pb={2}>
                    It’s generally a good idea to have a vehicle inspection as this is
                    visible to the bidder in the auction and provides a stronger sense of
                    safety.
                </Typography>
                <Typography
                    sx={{ color: "#00F0A9", fontWeight: 900, fontSize: "10px" }}
                >
                    There will be a charge of {data?.amount?.currency?.code} {data?.amount?.amount.toLocaleString()} for an Inspection Report.
                </Typography>
            </Card>

            <Box my={2}>
                <Button
                    onClick={handleContinue}
                    variant="outlined"
                    sx={{
                        borderRadius: "12px",
                        fontSize: "15px",
                        width: "100%",
                        color: "#02FAA8",
                        backgroundColor: "#121212",
                        fontWeight: 600,
                        height: "50px",
                    }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
};

export default AdditionalFeatures;
