import React from 'react'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

const DetailHeader = ({ title }) => {
  const router = useRouter()
  return (
    <Box
      sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
    >
      <ArrowBackIosRoundedIcon
        onClick={() => router.back()}
        style={{ cursor: 'pointer' }}
      />

      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      <BookmarkBorderIcon
        style={{
          marginTop: '10px',
          marginLeft: '20px',
          color: '#00F0A9',
          cursor: 'pointer',
        }}
      />
    </Box>
  )
}

export default DetailHeader
