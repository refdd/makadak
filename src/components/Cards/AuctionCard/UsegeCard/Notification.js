import { Box, Typography, Grid, Button, Divider } from '@mui/material'
import Image from 'next/image'

export function Notifiaction({ img='/imgs/', description, date, onClick }) {
  // if (!img) {
  //   // Handle the case when img is null or undefined
  //   return null
  // }
  return (
    <>
      <Grid
        item
        xs={3}
        sx={{ cursor: 'pointer', width: '100%' }}
        onClick={onClick}
      >
        <Image
          src={img}
          alt="My Image"
          width={300}
          height={150}
          style={{
            borderRadius: '10px',
          }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        onClick={onClick}
        sx={{ cursor: 'pointer', borderBottom: '1px solid grey' }}
      >
        <Typography>{description} </Typography>
        <Typography sx={{ color: 'grey' }}>{date} </Typography>
      </Grid>
    </>
  )
}
