import { Box, Typography, Grid, Button } from '@mui/material'
import Link from 'next/link'
const gridItemStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '348.94px',
  height: '55px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '13px',
}
export default function ButtonSys({
  data,
  xs,
  style,
  buyDest = '/top-up/offer',
  offerDest = '/top-up/offer',
}) {
  return (
    <>
      <Grid item xs={xs} style={{ ...gridItemStyle, ...style }}>
        {data?.map((a, i) => (
          <Link key={i} href={a.onclick}>
            <Button variant="body1" style={{ ...a.styleEle }}>
              {a.title}
            </Button>
          </Link>
        ))}
      </Grid>
    </>
  )
}
