import { Typography, Grid, Container } from '@mui/material'
import CopyToClipboardButton from '@/components/CopyToClipboard/CopyToClipboard'

export default function BoxData({ text, value, onCopy }) {
  return (
    <Grid
      container
      spacing={2}
      position={'relative'}
      // flexWrap={'nowrap'}
      
      width={'100%'}
      sx={{ overflow: 'hidden' }}
    >
      <Grid
        container
        spacing={2}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={8} style={{ paddingLeft: '40px' }}>
          <Grid item xs={12} sx={{ color: 'gray' }}>
            {text}
          </Grid>
          <Grid item xs={12} sx={{ color: '#00F0A9' }} fontWeight={600}>
            {value}
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            color: 'gray',
          }}
        >
          {/* <FileCopy onClick={onCopy} /> */}
          <CopyToClipboardButton onCopy={onCopy}/>
        </Grid>
      </Grid>
    </Grid>
  )
}