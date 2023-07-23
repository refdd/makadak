import CustomInput from "@/components/CustomInput/CustomInput";
import WarningParagraph from "./WarningParagraph";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const PricingInformation = ({ formState, setFormState, errors }) => {
    
    return (<Grid item padding={{ sm: 3 }}>
        <Typography fontWeight={700}>Pricing Information</Typography>
        <Typography fontWeight={600}>What’s your minimum acceptable price of the car?</Typography>
        <Typography fontWeight={400}>The starting bid for your auction will be 50% of your reserve
            price.</Typography>
        <CustomInput 
            error={errors.reservedPrice}
            helperTxt={errors.reservedPrice}
            handleInputChange={(e) => setFormState({ ...formState, reservedPrice: e.target.value })}
            label={'Reserve Price (SAR)'} />
        <WarningParagraph
            txt={'Note that the fees are inclusive of 15% VAT for private users and will apply the VAT for companies on the final price. Therefore, for companies you need to enter the amount including the VAT.'} />
        <Typography fontSize={14} fontWeight={600}>If you also want to set a fixed price for buyers to “buy now”,
            you can enter it below.</Typography>
        <CustomInput
            error={errors.vehiclePrice}
            helperTxt={errors.vehiclePrice}
            label={'Buy Now (SAR)'}
            handleInputChange={(e) => setFormState({ ...formState, vehiclePrice: e.target.value })}
        />
    </Grid>)
}

export default PricingInformation;