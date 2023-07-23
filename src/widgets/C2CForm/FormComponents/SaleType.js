import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SaleType = ({ saleType, handleSaleTypeChange }) => {
    const handleInputChange = (e) => {
        handleSaleTypeChange({ saleType: e.target.value })
    }
    return (
        <Grid item padding={{sm:3}}>
            <Typography fontSize={'14px'} fontWeight={700}>Sale Type</Typography>
            <ToggleButtonGroup
                color="primary"
                value={saleType}
                exclusive
                onChange={handleInputChange}
                aria-label="SaleType"
                sx={{
                    '& .Mui-selected': {
                        backgroundColor: 'transparent',
                        color: 'primary',
                        borderColor: 'primary.main',
                        border: '1px solid !important'
                    },
                    '& .MuiToggleButton-root': {
                        border: 'none',
                        fontWeight: 800
                    },
                    padding: '3% 0'
                }}
            >
                <ToggleButton sx={{ marginRight: 2 }} value="sale">Sale</ToggleButton>
                <ToggleButton value="auction">Auction</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    )
}

export default SaleType;