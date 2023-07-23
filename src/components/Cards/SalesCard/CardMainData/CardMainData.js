import {Grid, Typography} from "@mui/material";
const CardMainData = ({heading}) => {
    return (
        <Grid container>
            <Grid item sx={{display:'flex'}}>
                <Typography
                    sx={{textTransform: 'uppercase'}}
                    fontWeight={900}
                    color={'white'}
                    margin={'5px 0'}>
                    {heading}
                </Typography>
            </Grid>
        </Grid>
    )
}


export default CardMainData