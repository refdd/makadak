import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CustomTag from '../../CustomTag/CustomTag'
import FeaturedTag from '../../Tags/FeaturedTag/FeaturedTag'
import { Box, Divider, Stack } from '@mui/material'
import SmallCardMetadata from './CardMetadata/SmallCardMetadata'
import SmallCardMainData from './CardMainData/SmallCardMainData'
import TimerTag from '../../Tags/TimerTag/TimerTag'
import SmallCardDescription from './CardDescription/SmallCardDescription'
import CardFooter from './CardFooter/CardFooter'
import Image from 'next/image'
import Link from 'next/link'
import { getCategoryName } from '@/lib/helpers'

export default function ProductCardSmall({ data, tag }) {
  return (
    <Link
      href={{ pathname: data.link }}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          minWidth: 290,
          maxWidth: 290,
          overflow: 'visible',
          borderRadius: 3,
        }}
      >
        <Box sx={{ position: 'relative', height: 200, width: 290 }}>
          <CardMedia
            alt="mercedes"
            xs={{ width: '100%', height: '100%' }}
          >
            <Image
              src={data.img}
              fill
              alt='cardimg'
              style={{ objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
          </CardMedia>
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
          <SmallCardMetadata category={data.catName} flag={data.flagImagesUrl}  lot={data?.id} />
          <SmallCardMainData heading={data.title} />
          <div style={{ paddingLeft: 12, marginBottom: 12 }}>
            <Divider sx={{ borderColor: 'white' }} />
          </div>

          <SmallCardDescription
            note={data.info}
            description={data.description}
            tag={
              <CustomTag
                color={'#FFFFFF'}
                // dir="rtl"
                title={data.title}
                tagContent={<TimerTag deadline={data.deadline} />}
              />
            }
          />
        </CardContent>
        {data.title !== 'UPCOMING LIVE AUCTIONS' && (
          <CardFooter data={{ ...data?.analytics, totalBids: data?.totalBids, saleType: data.saleType }} price={data?.price} />

        )}
      </Card>
    </Link>
  )
}
