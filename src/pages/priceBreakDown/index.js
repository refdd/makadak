import React, { useState } from 'react'

import ButtonSys from '@/components/Cards/AuctionCard/UsegeCard/Button'
import {
  Box,
  Button,
  Popover,
  Stack,
  Switch,
  TextField,
  Typography,
  Grid,
} from '@mui/material'
import Image from 'next/image'

export default function PriceBreakdown() {
  const [show, setshow] = useState(true)

  return (
    <>
      <Grid
        container
        padding={3}
        width={'100%'}
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Grid item xs={12} sx={{ width: '100%', position: 'relative' }}>
          <Grid
            container
            spacing={2}
            sx={{
              opacity: ' 0.7',
              width: ' 368px',
              height: '58px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#121212',
              padding: '3px',
              width: '100%',
              borderRadius: '12px 12px 0px 0px',
              marginBottom: '30px',
            }}
          >
            <Typography> Inspection Report</Typography>
            <Typography> SAR 500</Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              padding: '3px',
              width: ' 368px',
              height: '58px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',

              background: '#00F0A9',
              borderRadius: '12px 12px 0px 0px',

              transform: 'rotate(180deg)',
            }}
          >
            <Typography sx={{ transform: 'rotate(180deg)' }}>
              Inspection Report
            </Typography>
            <Typography sx={{ transform: 'rotate(180deg)' }}>
              {' '}
              SAR 500
            </Typography>{' '}
          </Grid>
        </Grid>

        {show ? (
          <Grid
            item
            xs={12}
            sx={{
              alignSelf: 'flex-end',
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => setshow(false)}
              xs={12}
              style={{
                width: '100%',
                height: '41.68px',
                border: '1px solid #00F0A9',
                borderRadius: ' 50.5px',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Continue to payment
            </Button>
          </Grid>
        ) : (
          <>
            <Grid
              item
              xs={12}
              sx={{
                alignSelf: 'flex-end',
                width: '100%',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                xs={12}
                style={{
                  width: '100%',
                  height: '41.68px',
                  border: '1px solid #00F0A9',
                  borderRadius: ' 50.5px',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '18px',
                  textAlign: 'center',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <Image
                  src={'imgs/Mazadak_App_Icons-29.png'}
                  width={50}
                  height={50}
                />{' '}
                <Image
                  src={'imgs/Mazadak_App_Icons-30.png'}
                  width={50}
                  height={50}
                />{' '}
                <Image
                  src={'imgs/Mazadak_App_Icons-31.png'}
                  width={50}
                  height={50}
                />
              </Button>
              <Button
                xs={12}
                style={{
                  width: '100%',
                  height: '41.68px',
                  border: '1px solid #00F0A9',
                  borderRadius: ' 50.5px',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '18px',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                <Image
                  src={'imgs/Mazadak_App_Icons-36 1.png'}
                  width={25}
                  height={25}
                />
              </Button>
              <Button
                xs={12}
                style={{
                  width: '100%',
                  height: '41.68px',
                  border: '1px solid #00F0A9',
                  borderRadius: ' 50.5px',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '18px',
                  marginBottom: '10px',
                  textAlign: 'center',
                }}
              >
                Bank Transfer
              </Button>
              <Button
                xs={12}
                style={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: 'white',

                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '18px',
                  marginBottom: '10px',
                  textAlign: 'center',
                }}
              >
                <Image
                  src={'imgs/2560px-Apple_Pay_logo 1.png'}
                  width={70}
                  height={50}
                />
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}
