import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, Typography } from '@mui/material';

const CardMetadata = ({category, flag}) => {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>{category}</Typography>
            <span className={`fi fi-${flag}`}></span>
        </Box>
    )
}
export default CardMetadata;