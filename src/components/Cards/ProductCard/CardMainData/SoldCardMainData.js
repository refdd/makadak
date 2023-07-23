import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Grid, Typography } from "@mui/material";
import Image from 'next/image';

const SoldCardMainData = ({ heading, flag }) => {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'}
            flexWrap={'nowrap'}
            maxWidth={'100%'}>
            <Grid item maxWidth={'75%'}>
                <Typography overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} fontWeight={900} color={'white'}
                    margin={'5px 0'} sx={{ paddingLeft: 2, textTransform: 'uppercase' }}>{heading}</Typography>
            </Grid>
            <Grid item>
                <Image
                    src={flag}
                    alt='flag'
                    width={18}
                    height={12}
                />
            </Grid>
        </Grid>
    )
}


export default SoldCardMainData