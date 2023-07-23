import { Grid, Typography } from "@mui/material";

const CardDescription = ({ description, info }) => {
  var arabic = /[\u0600-\u06FF]/;
  return (
    <Grid container flex justifyContent={'space-between'} alignItems={'end'} sx={{ paddingRight: 2, minHeight: '52px' }}>
      <Grid item sx={{ width: '62%', minHeight: '60%' }} >
        <Typography
          sx={{ direction: arabic.test(description) ? "rtl" : "ltr" }}
          fontWeight={600}
          textAlign={"left"}
          fontSize={14}
        >
          {description?.substring(0, 35)}...
        </Typography>
      </Grid>
      <Grid item width={'38%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
        <Typography sx={{ direction: arabic.test(description) ? 'rtl' : 'ltr' }}
          overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}
          fontSize={14}
          color='grey'
        >
          {info}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardDescription;
