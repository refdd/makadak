import CustomInput from "@/components/CustomInput/CustomInput";
import Grid  from "@mui/material/Grid";

const CompanyInfo = () => {
    return (
        <Grid item padding={{sm:3}}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput helperTxt='We need this info  to verify your company’s identity' label={'Company Reg Number'} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput helperTxt='We need this info  to verify your company’s identity' label={'Company VAT Number'} />
            </Grid>
        </Grid>
    )
}

export default CompanyInfo;