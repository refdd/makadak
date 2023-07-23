import { Grid, Typography } from "@mui/material";

const CardMainData = ({ heading, tag }) => {
    var arabic = /[\u0600-\u06FF]/;
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
            <Grid item width={'60%'}>
                <Typography
                    fontWeight={900}
                    color={'white'}
                    margin={'5px 0'}
                    sx={{textTransform: 'uppercase', direction:arabic.test(heading) ? 'rtl' : 'ltr'}}
                    overflow={'hidden'} textOverflow={'ellipsis'}  whiteSpace={'nowrap'}
                >
                    {heading}
                </Typography>
            </Grid>
            <Grid item>
                {tag}
            </Grid>
        </Grid>
    )
}


export default CardMainData