import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CustomTag from '../../CustomTag/CustomTag';
import { Box, Divider, Typography } from '@mui/material';
import SoldCardMetadata from './CardMetadata/SoldCardMetadata';
import SoldCardMainData from './CardMainData/SoldCardMainData';
import CardFooter from './CardFooter/CardFooter';
import StarRateIcon from '@mui/icons-material/StarRate';
import SmallCardDescription from './CardDescription/SmallCardDescription';
import Image from 'next/image';

const SoldTag = () => {
    return (
        <div style={{ color: '#2C2A2A', display: 'flex', justifyContent: 'left', alignItems: 'center' }} dir='ltr'>
            <StarRateIcon style={{ marginRight: 2, height: 16, width: 16 }} />
            <Typography fontSize={14} fontWeight={600} sx={{ paddingTop: .5, textTransform: 'uppercase' }}>Sold</Typography>
        </div>
    )
}

const SaleEndedTag = () => {
    return (
        <div style={{ color: '#2C2A2A', display: 'flex', justifyContent: 'left', alignItems: 'center' }} dir='ltr'>
            <Typography fontSize={12} fontWeight={700} sx={{ textTransform: 'uppercase' }}>sale
                ended</Typography>
        </div>
    )
}
export default function SoldProductCard({ data }) {
    return (
        // <Link href={{ pathname: link + `/${id}` }} style={{ textDecoration: 'none' }}>
        <Card sx={{ minWidth: 290, maxWidth: 290, marginRight: 5, overflow: 'visible', borderRadius: 3 }}>

            <Box sx={{ position: 'relative', height: 200, width: 290 }}>
                <CardMedia
                    alt="card"
                    sx={{ borderRadius: 2 }}
                    xs={{ width: '100%', height: '100%' }}
                >
                    <Image
                        src={data?.img}
                        fill
                        alt='cardimg'
                        style={{ objectFit: 'fill', borderTopLeftRadius:12, borderTopRightRadius:12 }}
                    />
                </CardMedia>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, .7)',
                    }}
                ></Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        left: 0,
                        width: '100%',
                        color: 'white'
                    }}
                >
                    <CustomTag color={'#00F0A9'} tagContent={<SoldTag />} />
                </Box>
            </Box>
            <CardContent sx={{ paddingLeft: 0, paddingBottom: 0 }}>
                <SoldCardMetadata category={data.catName} />
                <SoldCardMainData heading={data.title} flag={data.flag} />
                <div style={{ paddingLeft: 12, marginBottom: 12 }}>
                    <Divider sx={{ borderColor: 'white' }} />
                </div>
                <SmallCardDescription
                    note={data.info}
                    description={data.description}
                    tag={<CustomTag
                        color={'#FFFFFF'}
                        dir="rtl"
                        tagContent={<SaleEndedTag />}
                    />} />

            </CardContent>
            <CardFooter data={{ ...data?.analytics, totalBids: data?.totalBids, saleType: data?.saleType }} price={data?.price} />
        </Card>
        // </Link>
    );
}