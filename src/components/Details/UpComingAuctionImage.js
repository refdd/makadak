import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import LogoTag from "../LogoTag/LogoTag";
import Image from "next/image";
 
const UpComingAuctionImage = ({ date, description, img, imageName }) => {
 

  return (
    <>
      <CardMedia
        height="194"
        alt={imageName}
        title={imageName}
        sx={{
          height: "40vh",
          width: "100%",
          position: "relative",
          marginTop: 4,
        }}
      >
        <Image
          src={img}
          alt={imageName}
          title={imageName}
          loading="lazy"
          height={100}
          width={100}
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            height: "100%",
            width: "100%",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, #121212)",
          }}
        />
            <Typography
    variant="caption"
    sx={{
      position: 'absolute',
      top: '41px',
      left: 0,
      width: '150px',
      height: '33px',
      backgroundColor: '#00F0A9',
      borderTopRightRadius: '22px',
      borderBottomRightRadius: '22px',
      textAlign: 'center',
      fontWeight: 600,
      fontSize: '12.3913px',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
   {date} 
  </Typography>
      
      <LogoTag />
      </CardMedia>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 900,
          marginTop: -6,
          zIndex: 999,
          position: "absolute",
          padding: 1,
        }}
      >
        Live auction
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 600, padding: 1 }}>
        {description}
      </Typography>
    </>
  );
};

export default UpComingAuctionImage;
