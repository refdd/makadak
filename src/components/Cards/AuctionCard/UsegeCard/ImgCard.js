import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CustomTag from '../../../CustomTag/CustomTag'
import { Box, Typography } from '@mui/material'
import CardMainData from '../CardMainData/CardMainData'
import CardDescription from '../CardDescription/CardDescription'

const DateTag = ({ date }) => (
  <div
    style={{
      color: '#2C2A2A',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
    }}
    dir="ltr"
  >
    <Typography
      fontSize={11}
      fontWeight={600}
      sx={{ paddingTop: 0.5, textTransform: 'uppercase' }}
    >
      {date}
    </Typography>
  </div>
)

export default function ImgCard({ img, date, title, description }) {
  return (
    <>
      <Card
        sx={{
          marginRight: 5,
          width: '100%',
          borderRadius: 3,
          objectFit: 'fill',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            // height="194"
            image={img}
            alt="mercedes"
            sx={{ borderRadius: 2 }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 100,
              left: 0,
              width: '100%',
              color: 'white',
            }}
          >
            <CustomTag color={'#00F0A9'} tagContent={<DateTag date={date} />} />
          </Box>
        </Box>
      </Card>
      <CardContent sx={{ paddingRight: 0 }}>
        <CardMainData
          style={{
            fontWeight: 900,
            fontSize: '22px',
            lineHeight: '27px',

            textTransform: 'uppercase',

            fontWeight: '900',
            fontSize: '22px',
            lineHeight: '27px',
            textTransform: 'uppercase',

            color: ' #FFFFFF',
          }}
          heading={title}
        />
        <CardDescription txt={description} />
      </CardContent>
    </>
  )
}
