import { Typography, Grid, Container } from '@mui/material'
import { FileCopy } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { fontSize } from '@mui/system'

export default function BoxData({ text, onCopy, copied, value }) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        position: 'relative',
        width: '100%'
      }}
      marginTop={{ xs: '10px', sm: 0 }}
      marginBottom={{ xs: '10px', sm: 0 }}
      // flexWrap={'nowrap'}
      width={'100%'}
      sx={{ overflow: 'hidden' }}
    >
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={10} style={{ paddingLeft: '40px' }}>
          <Grid item xs={12} sx={{ color: 'gray' }}>
            {text}
          </Grid>
          <Grid item
            xs={12}
            sx={{
              color: '#00F0A9',
              height: { xs: 40, sm: 'auto' },
            }}

          >
            {
              text === 'Your assigned IBAN' &&
              <Typography fontSize={{ xs: 9, sm: 14 }}>{value}</Typography>
            }
            {
              text !== 'Your assigned IBAN' &&
              <Typography fontSize={14}>{value}</Typography>
            }
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ display: 'flex', justifyContent: 'flex-end', color: 'gray' }}
        >
          <IconButton onClick={onCopy}>
            <FileCopyIcon sx={{ fontSize: { xs: '20px', sm: 'unset' } }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
