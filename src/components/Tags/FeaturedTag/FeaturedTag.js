import StarRateIcon from '@mui/icons-material/StarRate';
import {Typography} from '@mui/material';

const FeaturedTag = () => {
    return (
        <div style={{color:'#2C2A2A', display:'flex', justifyContent:'left', alignItems:'center'}} dir='ltr'>
            <StarRateIcon style={{marginRight:8, height:20, width:20}} />
            <Typography fontSize={12} fontWeight={600} sx={{paddingTop:.5}}>FEATURED</Typography>
        </div>
    )
}

export default FeaturedTag;