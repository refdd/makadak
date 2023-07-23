import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CustomTag from '../../CustomTag/CustomTag'
import FeaturedTag from '../../Tags/FeaturedTag/FeaturedTag'
import { Box, Divider, Stack } from '@mui/material'
import FavMetaData from './CardMetadata/FavMetaData'
import SmallCardFavData from './CardMainData/SmallCardFavData'
import TimerTag from '../../Tags/TimerTag/TimerTag'
import SmallCardFavDisc from './CardDescription/SmallCardFavDisc'
import FavoritesButton from '@/components/favButton/FavoritesButton'

import CardFooter from './CardFooter/CardFooter'
import Image from 'next/image'
import { getCategoryName } from '@/lib/helpers'

export default function FavouriteCard({
  data,
  onRemoveFromFavorites,
  tag,
  link = '/',
}) {

  

  const cardData = {
    country: data?.country?.countryCode,
    img: data?.mediaPhotos?.length ? data?.mediaPhotos[0].url : '',
    title: data?.title,
    info: data?.smallInfo,
    description: data?.description,
    analytics: data?.analytics,
    price: data?.vehiclePrice ?? (data?.highestBidPrice || data?.startingPrice),
    deadline: data?.endAt,
    isFav: data?.isFavourite,
    totalBids: data?.totalBids,
    featured: data?.featured,
    id: data?.id,
    startAt: data?.startAt,
    link: `/lot-details/${data?.id}`,
    flag: data?.country?.flagImagesUrl,
  }

  return (
    <Card
      sx={{
        padding: 1,
        minWidth: 300,
        maxWidth: 300,
        overflow: 'hidden',
        borderRadius: 3,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="194"
          image={cardData?.img}
          alt="mercedes"
          sx={{ borderRadius: 2 }}
        />
        {tag && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              left: 0,
              width: '100%',
              color: 'white',
            }}
          >
            <CustomTag color={'#00F0A9'} tagContent={<FeaturedTag />} />
          </Box>
        )}
      </Box>

      <CardContent sx={{ paddingLeft: 0, paddingBottom: 0 }}>
        {/* <FavMetaData category={data?.category} /> */}
        {/* <Grid display="flex" alignItems="center" item> */}
        <FavoritesButton
          id={data?.id}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
        {/* <BookmarkIcon style={{ color: 'green', cursor: 'pointer' }} /> */}
        <span
          style={{ width: 20, height: 12 }}
          className={`fi fi-${cardData?.flag}`}
        ></span>
      {/* </Grid> */}
        <SmallCardFavData
          heading={data?.title}
          flag={cardData?.flag}
          id={data?.id}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
        <div style={{ paddingLeft: 12, marginBottom: 12 }}>
          <Divider sx={{ borderColor: 'white' }} />
        </div>

        <SmallCardFavDisc
          note={data?.mileage}
          description={data?.descriptionInfo}
          tag={
            <CustomTag
              styles={{ fontWeight: 450, fontSize: 12.5 }}
              color={'#FFFFFF'}
              dir="rtl"
              tagContent={<TimerTag />}
            />
          }
        />
      </CardContent>
      <CardFooter
        color={'white'}
        title={data?.title}
        flag={data?.flag}
        type={data?.category}
      />
    </Card>
  )
}
