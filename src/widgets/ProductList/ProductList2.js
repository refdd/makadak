
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Grid } from '@mui/material';

const ProductList = ({ children, wrap }) => {
    return (
        <Grid container sx={{ display: 'flex', width: '100vw', overflow: 'hidden' }}>
            {
                !wrap &&
                <Grid item display={{ xs: 'none', lg: 'flex' }} sx={{
                    width: '99%',
                    position: 'absolute',
                    justifyContent: 'space-between',
                    top: 250
                }}>
                    <KeyboardArrowLeftIcon
                        onClick={(e) => {
                            e.target.parentElement.parentElement.children[1].scroll({
                                left: -e.target.parentElement.parentElement.children[1].scrollWidth,
                                behavior: "smooth"
                            })
                        }}
                        sx={{
                            fontSize: 65,
                            color: 'whitesmoke',
                            zIndex: 99,
                            cursor: 'pointer',
                            background: 'linear-gradient(to left, rgba(0, 0, 0, .0), rgba(0, 0, 0, .15))'
                        }} />
                    <KeyboardArrowRightIcon onClick={(e) => {
                        e.target.parentElement.parentElement.children[1].scroll({
                            left: e.target.parentElement.parentElement.children[1].scrollWidth,
                            behavior: "smooth"
                        })
                    }} sx={{
                        fontSize: 65,
                        color: 'whitesmoke',
                        zIndex: 99,
                        cursor: 'pointer',
                        background: 'linear-gradient(to right, rgba(0, 0, 0, .0), rgba(0, 0, 0, .15))',

                    }} />
                </Grid>
            }
            <Grid item sx={{ overflow: 'scroll', display: 'flex', flexWrap: wrap ? 'wrap' : '', justifyContent: wrap ? 'space-around' : '' }}>
                {children}
            </Grid>
        </Grid>
    )
}


export default ProductList;