import { Typography, Grid, Container } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { green } from '@mui/material/colors'
import { Avatar } from '@mui/material'
import BoxData from '@/components/Cards/BoxData'
import { Warning } from '@mui/icons-material'
import { orange } from '@mui/material/colors'
import { useEffect, useState } from 'react'

export default function TopUp() {
  const [copied, setCopied] = useState(false)
  const renderBox = () => {
    let BoxTes = [
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur22',
      'Lorem ipsum dolor sit amet, consectetur33',
      'Lorem ipsum dolor sit amet, consectetur44',
    ]
    const boxes = []
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <BoxData
          key={i}
          text={BoxTes[i]}
          onCopy={() => {
            navigator.clipboard.writeText(BoxTes[i])
            setCopied(true)
          }}
          copied={copied}
        />,
      )
    }
    return boxes
  }

  useEffect(() => {
    if (copied) {
      navigator.clipboard.readText().then((copiedText) => {
        console.log('Copied Text:', copiedText)
        // Do something with the copied text
      })
    }
    console.log(copied, 'sssssssssssssssssssssssssss')
  }, [copied])

  return (
    <>
      <Grid
        container
        width={'100%'}
        alignItems={'center'}
        padding={1}
        sx={{
          width: '100%',
          padding: '1rem',
          '@media (min-width:960px)': {
            maxWidth: '50%',
            margin: 'auto',
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: '30px' }}
          >
            <Avatar sx={{ bgcolor: green[500] }}>
              <CheckCircle sx={{ color: 'white' }} />
            </Avatar>{' '}
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            TipTop
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            style={{ textAlign: 'center' }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              velit fermentum, semper libero eu, feugiat tortor. Ut consectetur
              odio in ipsum ullamcorper tincidunt. Cras eu magna in lacus
              lobortis fringilla.
            </Typography>
          </Grid>
        </Grid>

        {renderBox()}
        <Grid
          item
          xs={12}
          container
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          <Avatar sx={{ bgcolor: orange[500], width: '40px', height: '40px' }}>
            <Warning sx={{ color: 'black', fontSize: '24px' }} />
          </Avatar>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          </Typography>
        </Grid>
      </Grid>{' '}
    </>
  )
}
