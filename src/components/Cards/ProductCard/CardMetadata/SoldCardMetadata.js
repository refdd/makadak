import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Grid, Typography} from "@mui/material";

const SoldCardMetadata = ({category, flag}) => {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{paddingLeft: 2, width: '33%'}}>
            <Typography fontSize={12} sx={{textTransform:'uppercase'}}>{category}</Typography>
        </Grid>
    )
}
export default SoldCardMetadata;