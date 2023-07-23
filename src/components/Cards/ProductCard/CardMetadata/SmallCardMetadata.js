import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Grid, Typography } from "@mui/material";

const SmallCardMetadata = ({ category, flag }) => {
    return (
        <Grid container alignItems={'center'} sx={{ paddingLeft: 2 }}>
            <Typography fontSize={12} sx={{ textTransform: 'uppercase', marginRight: 1 }}>{category}</Typography>
            <span
                style={{ width: 20, height: 12 }}
                className={`fi fi-${flag}`}></span>
        </Grid>
    )
}
export default SmallCardMetadata;