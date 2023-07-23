import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'

const NewCategoryCard = ({
  title,
  discription,
  images,
  handleOnMove,
  activeIndex,
}) => {
  return (
    <Grid item xs={12} lg={12} height={'100%'}>
      <Card sx={{ position: 'relative' }}>
        <IconButton
          sx={{
            position: 'absolute',
            top: 30,
            right: 8,
            zIndex: 1,
            fontSize: '20px',
            color: 'white',
          }}
          color="inherit"
          aria-label="close"
          onClick={() => {}}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            position: 'absolute',
            borderRadius: '0 30px 30px 0',
            top: 30,
            left: 0,
            padding: '10px',
            backgroundColor: '#00F0A9',

            display: 'flex',
            gap: '.3rem',
            width: '139px',
            height: '33px',

            alignItems: 'center',
          }}
        >
          <Image src="/imgs\Union.png" alt="star" width={25} height={25} />
          <p
            style={{
              LineHeight: ' 12.19px',
              fontFamily: 'Montserrat',
              fontWaight: 600,
              textTransform: 'uppercase',
              fontSize: '10px',
              color: '#2C2A2A',
            }}
          >
            {title}
          </p>
        </Typography>
        <div
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 600,
            width: '100%',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-5%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="p"
                sx={{
                  fontSize: '18px',
                  lineHeight: '21.94px',
                  fontWaight: 900,
                  textTransform: 'uppercase',

                  color: 'white',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: 'white',
                }}
              >
                {discription}
              </Typography>
            </CardContent>

            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: ' translateX(-50%)',
                display: 'flex',
              }}
            >
              {images.map((image, index) => (
                <span
                  key={index}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'gray',
                    cursor: 'pointer',
                    margin: '0 5px',
                  }}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleOnMove(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default NewCategoryCard
