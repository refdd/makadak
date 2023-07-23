import React, { useEffect, useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useAddToFavoritesMutation, useRemoveFromFavoritesMutation } from '@/redux/apis/favouriteApi'

const FavoritesButton = ({ id, isFavourite }) => {
  const [removeFromFav] = useRemoveFromFavoritesMutation()
  const [addTofav, addTofavRes] = useAddToFavoritesMutation()
  const [fav, setFav] = useState(isFavourite);
  const handleToggleFavorites = () => {
    if (fav) removeFromFav(id).unwrap()
      .then(res => {
        setFav(false);
      }).catch(e => {
      })
    else addTofav(id).unwrap()
      .then(res => {
        setFav(res.isFavourite);
      }).catch(e => {
        // console.log('##E', e);
      })
  }

  return (
    <button
      style={{
        border: 'none',
        background: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        color: 'inherit',
        textDecoration: 'none',
      }}
      onClick={handleToggleFavorites}
    >
      {
        fav ?
          <BookmarkIcon color="primary" /> :
          <BookmarkBorderIcon />
      }

    </button >
  )
}

export default FavoritesButton
