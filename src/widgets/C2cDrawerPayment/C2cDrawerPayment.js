import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const C2cDrawerPayment = ({ addItemAction }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
          width: "100%",
        }}
      >
        <Button
          onClick={toggleDrawer}
          variant="outlined"
          sx={{
            borderRadius: "50.50px",
            fontSize: "15px",
            width: "366px",
            color: "#02FAA8",
            backgroundColor: "#121212",
            fontWeight: 600,
            height: "50px",
          }}
        >
          Continue to payment
        </Button>
      </Box>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ height: "50vh", padding: "16px", overflow: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingBottom: "2%",
            paddingTop: "2%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={addItemAction}
            variant="outlined"
            sx={{
              borderRadius: "50.50px",
              fontSize: "15px",
              width: "366px",
              color: "#02FAA8",
              backgroundColor: "#121212",
              fontWeight: 600,
              height: "50px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              src={"/imgs/masterCard.png"}
              width={35}
              height={35}
              alt="Master Card"
              title="Master Card Logo"
              loading="lazy"
            />
            <Image
              src={"/imgs/visa.png"}
              width={30}
              height={20}
              alt="Visa"
              title="Visa Logo"
              loading="lazy"
            />
            <Image
              src={"/imgs/mada.png"}
              width={50}
              height={20}
              alt="Mada"
              title="Mada Logo"
              loading="lazy"
            />
          </Button>

          <Button
            onClick={addItemAction}
            variant="outlined"
            sx={{
              borderRadius: "50.50px",
              fontSize: "15px",
              width: "366px",
              color: "#02FAA8",
              backgroundColor: "#121212",
              fontWeight: 600,
              height: "50px",
              marginBottom: "16px",
            }}
          >
            <Image
              src={"/imgs/stc.png"}
              width={30}
              height={30}
              alt="Stc"
              title="Stc Logo"
              loading="lazy"
            />
          </Button>

          <Button
            onClick={addItemAction}
            variant="outlined"
            sx={{
              borderRadius: "50.50px",
              fontSize: "15px",
              width: "366px",
              color: "#02FAA8",
              backgroundColor: "#121212",
              fontWeight: 600,
              height: "50px",
            }}
          >
            Bank Transfer
          </Button>

          <Button
            onClick={addItemAction}
            variant="outlined"
            sx={{
              borderRadius: "6px",
              fontSize: "15px",
              width: "366px",
              color: "#02FAA8",
              backgroundColor: "#FFFFFF",
              fontWeight: 600,
              height: "50px",
              marginBottom: "16px",
              marginTop: "16px",
            }}
          >
            <Image
              src={"/imgs/applepay.png"}
              width={60}
              height={28}
              alt="Stc"
              title="Stc Logo"
              loading="lazy"
            />
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default C2cDrawerPayment;
