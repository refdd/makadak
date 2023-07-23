import { Box, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'

import Line from './Line'
const CardAuctionHeader = ({ title, discription, styleBorder }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 999, // Set a higher z-index for the box
          padding: '24px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          top: '30.53px',
          backgroundColor: '#000000',
          borderRadius: '0px 0px 20px 20px',
          padding: '1rem',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          color: '#FFFFFF',
          borderBottom: styleBorder ? '2px solid #00F0A9' : 'none', // Green border on the left side
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 900,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'center',
          }}
        >
          {discription}{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '0.5rem',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
          }}
        >
          <Typography variant="body2">Lot1</Typography>
          <Typography variant="body2">Lot2</Typography>
          <Typography variant="body2">Lot3</Typography>
          <Typography variant="body2">Lot4</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: '21px',
                lineHeight: '26px',
                textTransform: 'uppercase',
                color: '#00F0A9',
              }}
              variant="body1"
            >
              BENTLEY
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '26px',
                display: 'flex',
                gap: '.5rem',
              }}
            >
              <Image
                src="/imgs/watch.png"
                alt="Watch Icon"
                width={15.25} // Specify the desired width of the image
                height={17.56} // Specify the desired height of the image
                layout="responsive" // Choose the appropriate layout for your image
              />
              02:06
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#FFFFFF',
              }}
              variant="body1"
            >
              2020 Flying Spur Milliner
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#FFFFFF',
              }}
            >
              SAR 152,500
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '15px',
                color: '#FFFFFF',
              }}
              variant="body1"
            >
              10,000km
            </Typography>
            <Typography variant="body2"></Typography>
          </Grid>
        </Grid>
        {styleBorder ? <Line /> : null}
      </Box>
    </>
  )
}

export default CardAuctionHeader
