import { Grid, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoritesButton from '@/components/favButton/FavoritesButton'
const SmallCardFavData = ({ heading, flag, id, onRemoveFromFavorites }) => {
  return (
    <Grid
      className="small-card-main-data"
      container
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Grid item width={'80%'}>
        <Typography
          fontWeight={600}
          color={'white'}
          margin={'5px 0'}
          sx={{ paddingLeft: 2, textTransform: 'uppercase' }}
          overflow={'hidden'} textOverflow={'ellipsis'}  whiteSpace={'nowrap'} 
    textAlign={'left'}
        >
          {heading}
        </Typography>
      </Grid>
     
    </Grid>
  )
}

export default SmallCardFavData
