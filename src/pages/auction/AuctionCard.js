import { Box, Typography, Grid } from '@mui/material'
import ImageTextOverlay from '@/components/ImageTextOverlay/ImageTextOverlay'
import BoxData from '@/components/Cards/AuctionCard/UsegeCard/BoxData'
import Image from 'next/image'

const rowData = [
  [
    {
      type: 'Typography',
      title: 'Make',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Bentley',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Model',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Veyron SS',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Kilometers',
      onclick: '',
    },
    {
      type: 'Typography',
      title: '14,000km',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Year',
      onclick: '',
    },
    {
      type: 'Typography',
      title: '2022',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Fuel Type',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Petrol',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Transmission',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Automatic',
      onclick: '',
    },
  ],
]
const renderData = () => {
  return rowData.map((a, i) => (
    <BoxData key={i} xs={12} style={{ marginBottom: '16px' }} data={a} />
  ))
}
export default function AuctionCard({ link, img, txt, i }) {
  return (
    <>
      <Box key={i} sx={{ marginRight: 4, position: 'relative' }}>
        <Box
          sx={{
            height: 'fill',
            background: '#121212',
            boxShadow: '8px 8px 20px #000000',
            width: '90%',
          }}
        >
          <ImageTextOverlay
            image={img}
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              width: '10px',
              height: '20px',
            }}
          />
          <Grid
            container
            spacing={2}
            sx={{ position: 'relative', padding: '24px' }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '14px',
                lineHeight: '17px',
                marginTop: '15px',

                textTransform: 'uppercase',

                color: '#FFFFFF',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '900',
                  fontSize: '14px',
                  lineHeight: '17px',
                  /* identical to box height */

                  textTransform: 'uppercase',

                  color: '#FFFFFF',
                }}
              >
                bugatti
              </Typography>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '13.9887px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Image
                  src="/imgs/Vector (2).png"
                  layout="responsive"
                  width={18.13}
                  height={13.95}
                />
                <Typography>20</Typography>
              </Typography>
            </Grid>
            <Grid item xs={11} sm={11}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '17px',
                }}
              >
                Veyron 16.4 Super Sport
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={11}
              sx={{
                display: 'flex',
                justifyContent: 'start',

                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  height: '4px',
                  width: '73.2px',
                  margin: '0 auto',
                  backgroundColor: 'white',
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={11}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                marginBottom: '20px',
                alignItems: 'center',
              }}
            >
              <Typography>
                <Image
                  src={'/imgs/Group.png'}
                  layout="responsive"
                  width={25}
                  height={25}
                />
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '12.3913px',
                  lineHeight: '15px',
                  marginLeft: '10px',
                  color: '#00F0A9',
                }}
              >
                SAR 660,000.00
              </Typography>
            </Grid>

            {renderData()}
          </Grid>
        </Box>
      </Box>
    </>
  )
}
