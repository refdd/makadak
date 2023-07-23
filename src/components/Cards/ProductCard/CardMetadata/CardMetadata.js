import { Box, Grid, Typography } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import Image from 'next/image'
import FavoritesButton from '@/components/favButton/FavoritesButton'
import { useDispatch, useSelector } from "react-redux";

const CardMetadata = ({ category, flag, fav, lot }) => {
  const { authed } = useSelector((state) => state.auth);
  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{ width: '100%' }}
    >
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ paddingRight: 2, width: '60%' }}
      >
      { authed && <FavoritesButton
          id={fav?.id}
          isFavourite={fav?.isFav}
        />}
        <Typography
          maxWidth={100}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
          textTransform={'uppercase'}
          fontSize={12}
        >
          {category}
        </Typography>
        <Image
          src={flag}
          alt='flag'
          width={18}
          height={12}
        />
      </Grid>
      <Grid
        container
        justifyContent={'flex-end'}
        alignItems={'center'}
        sx={{ paddingRight: 1, width: '40%' }}
      >
        <Typography
          maxWidth={100}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
          textTransform={'uppercase'}
          fontSize={12}
        >
          #{lot}
        </Typography>
      </Grid>
    </Grid>
  )
}
export default CardMetadata