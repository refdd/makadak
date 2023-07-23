import React from 'react'
import { useTheme } from '@mui/material'
import { Box, Typography, Grid, Button } from '@mui/material'
import CardAuctionHeader from '@/components/Cards/AuctionCard/UsegeCard/CardAuctionHeader'
import ButtonSys from '@/components/Cards/AuctionCard/UsegeCard/Button'
import Image from 'next/image'
import Link from 'next/link'
import CustomOutLineBtn from '@/components/CustomOutLineBtn/CustomOutLineBtn'

const renderButton = () => {
  return (
    <ButtonSys data={buttonData} xs={12} style={{ marginBottom: '16px' }} />
  )
}
const buttonData = [
  {
    type: 'Button',
    title: 'Make Offer',
    onclick: '',
    styleEle: {
      width: '169.78px',
      height: '41.68px',
      border: '1px solid #C4C4C4',
      borderRadius: ' 50.5px',
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '18px',

      textAlign: 'center',
      backgroundColor: 'black',
      color: '#C4C4C4',
    },
  },
  {
    type: 'Button',
    title: 'Buy Now',
    onclick: '',
    styleEle: {
      width: '169.78px',
      height: '41.68px',
      border: '1px solid #C4C4C4',

      borderRadius: ' 50.5px',
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '18px',
      backgroundColor: 'black',

      textAlign: 'center',

      color: '#C4C4C4',
    },
  },
]
export default function Auction(props) {
  const theme = useTheme()
  return (
    <div>
      <CardAuctionHeader
        discription={
          'Auction detail and information ett lorem ipsum dolor asset ante net.'
        }
        title={'AUCTION TITLE'}
        styleBorder={true}
      />

      <Image
        src="/imgs/Rectangle 564.png"
        alt="My Image"
        width={24}
        height={24}
        layout="responsive"
        style={{
          width: '100%',
          zIndex: '-2',
          top: '-18px',
          position: 'relative',
          objectFit: 'cover',
        }}
      />
      <Box sx={{ width: '100%', padding: '24px' }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <Grid xs={2.1} sm={0.4}>
              <Box
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50.5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #00F0A9',
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: '#00F0A9',

                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '15px',
                  }}
                >
                  123
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'start',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '700',
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#00F0A9',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <img
                    src="/imgs/Group (1).png"
                    alt="Top Bid Icon"
                    style={{ width: '20px', marginRight: '8px' }}
                  />
                  TOP BID (123)
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '800',
                    fontSize: '16px',
                    lineHeight: '20px',
                  }}
                >
                  SAR 154,500
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}></Grid>
          </Grid>

          <Grid item xs={12} style={{ marginBottom: '30px' }}>
            <Typography
              variant="h6"
              style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
              }}
            >
              Your bid must be higher than the current top bid and meet the
              reserve price of SAR 120 000.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Link href={'/winner'}>
              <Button
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#00F0A9',
                  placeItems: 'center',
                  textAlign: 'center',
                  border: '1px solid #00F0A9',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.4)',
                  borderRadius: '50.5px',
                  lineHeight: '18px',
                  background: '#000000',
                  height: '58px',
                  verticalAlign: 'middle',
                  width: '100%',
                }}
              >
                <img
                  src="/imgs/Group (1).png"
                  alt="Top Bid Icon"
                  style={{ width: '20px', marginRight: '20px' }}
                />
                Place Your Bid
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              or
            </Typography>
          </Grid>

          {renderButton()}

          {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          gap: "9px"
        }}
      >
        <CustomOutLineBtn
          width={"169.78px"}
          title={"Bid"}
          destination={"/winner"}
        />
        <CustomOutLineBtn
          width={"169.78px"}
          title={"Buy Now"}
          destination={"/buy_now"}
        />
      </Box> */}
        </Grid>
      </Box>
    </div>
  )
}
