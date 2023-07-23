import { Box, Grid } from '@mui/material';

const CustomTag = ({ tagContent, dir = "rtl", color, styles, title }) => {
  return (
    <div dir={dir} style={{ display: 'flex', justifyContent: 'end' }}>
      <Box sx={{
        backgroundColor: color,
        boxSizing: 'border-box',
        width: 128,
        height: 36,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderStartStartRadius: 15,
        borderEndStartRadius: 15,
        ...(title === 'UPCOMING LIVE AUCTIONS' ? { marginTop: '20px' } : {}),
        ...styles
      }}>
        {tagContent}
      </Box>
    </div>
  );
}

export default CustomTag;
