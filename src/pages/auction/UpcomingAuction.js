import React from 'react'
import ImgCard from '@/components/Cards/AuctionCard/UsegeCard/ImgCard'
import { Grid } from '@mui/material'
import ProductList from '@/widgets/ProductList/ProductList2'
import AuctionCard from './AuctionCard'
const AuctionData = [
  {
    txt: 'vehicles',
    img: '/imgs/vehicles.png',
    link: '/category/vehicles',
  },
  {
    txt: 'collectibles',
    img: '/imgs/collectible.png',
    link: '/category/collectible',
  },
  {
    txt: 'lifestyle',
    img: '/imgs/lifestyle.png',
    link: '/category/lifestyle',
  },
  {
    txt: 'electronics',
    img: '/imgs/electronics.png',
    link: '/category/electronics',
  },
  {
    txt: 'collectibles',
    img: '/imgs/collectible.png',
    link: '/category/collectible',
  },
  {
    txt: 'lifestyle',
    img: '/imgs/lifestyle.png',
    link: '/category/lifestyle',
  },
  {
    txt: 'electronics',
    img: '/imgs/electronics.png',
    link: '/category/electronics',
  },
]

const renderAuctionData = () =>
  AuctionData.map(({ link, img, txt }, i) => (
    <AuctionCard key={i} link={link} img={img} txt={txt} />
  ))
export default function UpcompingAcution({ data }) {
  return (
    <>
      <ImgCard
        img={'/imgs/20210624013652_BMW_5_series 5.png'}
        date={'25 Jul 2022 | 14:00'}
        description={
          'Auction detail and information ett lorem ipsum dolor asset ante net.'
        }
        title={'Auction TITLE'}
      />

      <Grid
        container
        padding={2}
        flexWrap={'nowrap'}
        width={'100%'}
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Grid item flexWrap={'nowrap'}>
          <ProductList>{renderAuctionData()}</ProductList>
        </Grid>
      </Grid>
    </>
  )
}
