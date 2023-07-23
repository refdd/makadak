import {Typography, Grid} from "@mui/material"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Link from "next/link";

const SubcategoryHeader = ({title, count}) => (
    <Grid container justifyContent={'space-between'} alignItems={'center'} margin={'12px 0'} padding={2}>
        <Link href={'/'}  style={{textDecoration:'none'}}>
            <Typography color='primary'>
                <KeyboardArrowLeftOutlinedIcon color="primary" style={{fontSize:10}} />
                Back
            </Typography>
        </Link>
        <Typography fontWeight={'900'}
                    sx={{textTransform: 'uppercase', fontSize: (theme) => theme.breakpoints.up('md') ? 36 : 24}}>
            {title}
        </Typography>
        <Typography>
            {count} Items
        </Typography>
    </Grid>
)

export default SubcategoryHeader