import ReportIcon from '@mui/icons-material/Report';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const WarningParagraph = ({ txt }) => {
    return (
        <Box width={'100%'} display={'flex'}>
            <ReportIcon sx={{ color: '#FF9700', marginRight: 1 }} />
            <Typography
                fontSize={14}
                fontWeight={400}
                variant='subtitle1'
                display={'inline-block'}>{txt}</Typography>
        </Box>
    )
}

export default WarningParagraph;