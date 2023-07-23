import { Box, Typography, Grid, Button } from '@mui/material'

export default function BoxData({ xs, style, data }) {
  const gridItemStyle = {
    position: 'relative',
    display: 'flex',
    boxSizing: 'borderBox',

    justifyContent: 'space-between',
    alignItems: 'center',
    width: '348.94px',
    height: '55px',
    padding: '24px',
    background: '#121212',
    border: '1px solid #2C2A2A',
    borderRadius: '12px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '13px',
  }
  return (
    <Grid item xs={xs} style={{ ...gridItemStyle, ...style }}>
      {data?.map((a, i) => (
        <a.type key={i} onClick={a.onClick} style={{ ...a.styleEle }} variant="body1">
          {a.title}
        </a.type>
      ))}
    </Grid>
  )
}
