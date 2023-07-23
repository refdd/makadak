import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  IconButton,
  Grid,
  Typography,
  Container,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { NextPage } from 'next'
import NewCategoryCard from '../../components/Cards/ProductCard/NewCategoryCard'
const CardData = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleonMove = () => {
    setActiveIndex(index)
  }

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}
    >
      <Grid container spacing={2} style={{ height: '100%' }}>
        <NewCategoryCard
          title={'CATEGORY TITLE'}
          discription={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fermentum urna.'
          }
          images={[
            'https://images.unsplash.com/photo-1601929862217-f1bf94503333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80',
            'https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg',
            'https://e1.pxfuel.com/desktop-wallpaper/421/551/desktop-wallpaper-best-car-iphone-x-today-iphone-mercedes-benz-thumbnail.jpg',
          ]}
          activeIndex={activeIndex}
          handleonMove={handleonMove}
        />
      </Grid>
    </Container>
  )
}
export default CardData
