import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Typography, Grid} from '@mui/material';

const CardFooter = () => {
    return (
        <Grid container justifyContent={'space-between'} padding={'3px 0'} sx={{paddingBottom:12}}>
            <Grid item>
                <ShoppingCartIcon style={{color: 'primary.main', fontSize:14, marginRight:1}} />
                <Typography color={'primary'} fontSize={12} >SAR 130,000.00</Typography>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid>
                        <VisibilityIcon  className='text-lg mr-1' />
                        <p  className='text-sm'>200</p>
                    </Grid>
                    <Grid>
                        <ShoppingCartIcon className='text-lg mr-1' />
                        <p  className='text-sm'>3</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default CardFooter;