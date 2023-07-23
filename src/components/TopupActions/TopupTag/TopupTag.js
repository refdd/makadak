import CustomTag from "@/components/CustomTag/CustomTag";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const DateTag = ({ date }) => (
  <div
    style={{
      color: "#2C2A2A",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    }}
    dir="ltr"
  >
    <Typography
      fontSize={11}
      fontWeight={700}
      sx={{
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <AccessTimeIcon />
      {date}
    </Typography>
  </div>
);
export default function TopupTag({ action, timeRemaining }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const getTime = () => {
    setDays(Math.floor(timeRemaining / (60 * 60 * 24)));
    setHours(Math.floor((timeRemaining / (60 * 60)) % 24));
    setMinutes(Math.floor((timeRemaining / 60) % 60));
  };

  useEffect(() => {
    getTime()
    const interval = setInterval(() => getTime(), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        color: "white",
        width: "auto",
        borderRadius: "15px 0 0 15px!important",
      }}
      justifyContent={'end'}
      alignItems={'right'}
      display='flex'
    >
      <CustomTag
        color={"#00F0A9"}
        tagContent={
          <DateTag date={days + 'D ' + hours + 'H ' + minutes + 'M'} />
        }
        justify="start"
        styles={{
          borderRadius: "20px 0 0 20px!important",
          width: "auto",
          paddingInline: "20px 15px",
        }}
      />
    </Box>
  );
}
