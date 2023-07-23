import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Grid, Typography } from '@mui/material'

const FavMetaData = ({ category, flag }) => {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{ paddingLeft: 2 }}
      color={'gray'}
    >
      <Typography fontSize={10}>{category}</Typography>
      <Typography fontSize={10}>#7208</Typography>
    </Grid>
  )
}
export default FavMetaData
