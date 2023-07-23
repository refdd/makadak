import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import { Box, Typography, Grid, Button } from '@mui/material'
import CardAuctionHeader from '@/components/Cards/AuctionCard/UsegeCard/CardAuctionHeader'
import BoxData from '@/components/Cards/AuctionCard/UsegeCard/BoxData'
import ImageTextOverlay from '@/components/ImageTextOverlay/ImageTextOverlay'
import Link from 'next/link'
import ButtonSys from '@/components/Cards/AuctionCard/UsegeCard/Button'
import Carousel from '@/components/Details/Carousel'
import carouselData from '@/data/carouselData.json'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
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
const rowData = [
  [
    {
      type: 'Typography',
      title: 'Make',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Bentley',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Model',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Veyron SS',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Kilometers',
      onclick: '',
    },
    {
      type: 'Typography',
      title: '14,000km',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Year',
      onclick: '',
    },
    {
      type: 'Typography',
      title: '2022',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Fuel Type',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Petrol',
      onclick: '',
    },
  ],
  [
    {
      type: 'Typography',
      title: 'Transmission',
      onclick: '',
    },
    {
      type: 'Typography',
      title: 'Automatic',
      onclick: '',
    },
  ],
]

const renderAuctionData = () =>
  AuctionData.map(({ link, img, txt }, i) => (
    <Link key={i} href={link} style={{ marginRight: 12 }}>
      <ImageTextOverlay image={img} txt={txt} />
    </Link>
  ))

const renderData = () => {
  return rowData.map((a, i) => (
    <BoxData key={i} xs={12} style={{ marginBottom: '16px' }} data={a} />
  ))
}
const renderButton = (buttonData) => {
  return (
    <ButtonSys data={buttonData} xs={12} style={{ marginBottom: '16px' }} />
  )
}

export default function ActiveAuction2(props) {
  const [auctionData, setAuctionData] = useState({});
  const { balance } = useSelector(state => state.user);
  const { data } = useSelector(state => state.data);
  const hasMoney = balance > 9000;
  const router = useRouter();
  useEffect(()=> {
    const auctionData = data.find(el => el.id === Number(router.query.id));
    setAuctionData(auctionData)
  },[data])
  const buttonData = [
    {
      type: 'Button',
      title: 'Make Offer',
      onclick: `/top-up/offer?hasMoney=${hasMoney}&id=${router.query.id}`,
      styleEle: {
        width: '169.78px',
        height: '41.68px',
        border: '1px solid #02FAA8',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.4)',
        borderRadius: ' 50.5px',
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'center',
        backgroundColor: 'black',
        color: '#02FAA8',
        marginRight: 12,
        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.06)',
      },
    },
    {
      type: 'Button',
      title: 'Buy Now',
      onclick: hasMoney ? "/winner" : "/wallet",
      styleEle: {
        width: '169.78px',
        height: '41.68px',
        border: '1px solid #02FAA8',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.4)',
        borderRadius: ' 50.5px',
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
        backgroundColor: 'black',

        textAlign: 'center',

        color: '#02FAA8',

        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.06)',
      },
    },
  ]
  return (
    <div style={{ backgroundColor: 'black' }}>
      <CardAuctionHeader
        title={"Auction Title"}
        discription={
          'Auction detail and information ett lorem ipsum dolor asset ante net.'
        }
      />
      <Grid
        container
        padding={2}
        flexWrap={'nowrap'}
        width={'100%'}
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Carousel data={carouselData} />
      </Grid>
      <Grid container spacing={2} style={{ padding: '24px' }}>
        {renderData()}
        {renderButton(buttonData)}
      </Grid>
    </div>
  )
}
