import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CustomTag from '../../CustomTag/CustomTag';
import { Box, Typography } from '@mui/material';
import CardMainData from './CardMainData/CardMainData';
import CardDescription from './CardDescription/CardDescription';
import Link from 'next/link';
import Image from 'next/image';
import TimerTag from '@/components/Tags/TimerTag/TimerTag';


export default function UpcomingLiveAuctionCard({ data }) {

    return (

        <Link href={{ pathname: data.link }} style={{ textDecoration: 'none' }}>
            <Card sx={{ minWidth: 345, maxWidth: 345, marginRight: 5, overflow: 'visible', borderRadius: 3 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        alt="mercedes"
                        sx={{ borderRadius: 2 ,width: '100%', height: '170px'}}
                    >
                        <Image
                            src={data.img}
                            fill
                            alt='cardimg'
                            style={{ objectFit: 'cover', borderTopLeftRadius:12, borderTopRightRadius:12 }}
                        />
                    </CardMedia>
                 
                </Box>
                <CardContent sx={{ paddingRight: 0 }}>
                    <CardMainData
                        heading={data.title}
                        tag={<CustomTag
                            color={'#FFFFFF'}
                            dir="ltr"
                            tagContent={<TimerTag deadline={data?.deadline} />}
                        />}
                    />
                    <CardDescription txt={data.description} />
                </CardContent>
            </Card>
        </Link>
    );
}