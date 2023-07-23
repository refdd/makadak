import  Box   from '@mui/material/Box'
import  Card  from '@mui/material/Card'
import  CardMedia from '@mui/material/CardMedia'
import  Divider  from '@mui/material/Divider'
import  Typography  from '@mui/material/Typography'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';

const LotItemsCard = ({lotTitle, title, description, image}) => {

    const router = useRouter();

  return (
    <Card sx={{padding:2, marginTop:'1%', borderRadius:'12px', backgroundColor:'#121212','@media screen and (max-width: 600px)': {marginTop: '2%'}}}>
        <Box sx={{display:'flex'}}>
            <CardMedia sx={{width:'15%', marginBottom:2, '@media screen and (max-width: 600px)': {width: '30%'}}}>
                <Image src={image} alt='' width={100} height={100} style={{borderRadius:'12px',width:'100%', height:'100%'}}/>
            </CardMedia>
            <Box sx={{display:'flex', flexDirection:'column', gap:2, marginLeft:2}}>
                <Typography sx={{fontWeight:400,fontSize:'10px',textTransform:'uppercase',color:'#FFFFFF'}}>{lotTitle}</Typography>
                <Typography sx={{fontWeight:900,fontSize:'14px', textTransform:'capitalize'}}>{title}</Typography>
                <Typography sx={{fontWeight:600, fontSize:'14px', color:'#FFFFFF'}}>{description} </Typography>
            </Box>
        </Box>
        <Divider   sx={{borderBottomWidth: 2, backgroundColor:'white'}}/>
        <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width:'100%',marginTop:1,marginBottom:1}}>
            <Typography sx={{fontWeight:600, fontSize:'14px'}}>SAR 3,000,000 </Typography>
            <Typography sx={{fontWeight:600, fontSize:'14px', display:'flex', alignItems:'center',gap:1,cursor:'pointer'}} onClick={() => router.push(`/detail-lots/${Math.random()}`)}>
                View Detail 
            <ArrowForwardIosRoundedIcon  /> 
                
                </Typography>
            

        </Box>
            <Divider   sx={{borderBottomWidth: 2, backgroundColor:'white'}}/>

    </Card>
  )
}

export default LotItemsCard