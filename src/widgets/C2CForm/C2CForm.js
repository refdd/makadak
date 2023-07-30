import CustomAutocomplete from "@/components/CustomAutocomplete/CustomAutocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { detailsFields } from "./FormFields";
import RadioMenu from "../RadioMenu/RadioMenu";
import RadioButtons from "@/components/RadioGroup/RadioGroup";
import ItemLocation from "./FormComponents/ItemLocation";
import TermsAndConditions from "./FormComponents/TermsAndConditions";
import PricingInformation from "./FormComponents/PricingInformation";
import SaleType from "./FormComponents/SaleType";
import C2CDescription from "./FormComponents/C2CDescription";
import CompanyInfo from "./FormComponents/CompanyInfo";
import SaleInformation from "./FormComponents/SaleInformation";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFormState } from "@/redux/slices/c2c.slice";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { checkIfNumber } from "@/lib/helpers";
import RadioOffer from "./FormComponents/RadioOffer";

const C2CForm = ({ formState, handleFormContinue, locations, catId }) => {
  const [models, setModels] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleContinue = () => {
    if (!formValid(formState)) {
      console.log(errors);
      return;
    }
    if (formValid(formState) && !readTC) {
      alert("You must accept terms and conditions");
      return;
    }

    handleFormContinue(true);
  };
  const {
    vehicleMakes,
    colors,
    mileages,
    years,
    transmissions,
    fuelTypes,
    cylinders,
    conditions,
    sellerTypes,
  } = useSelector((state) => state.auth.configs);
  const [readTC, setReadTC] = useState(false);
  const [offerTC, setOfferTC] = useState(false);
  const [errors, setErrors] = useState({});
  const formValid = (values) => {
    // console.log(values);
    const filteredData = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v)
    );
    const validationObj = {
      make: "required",
      model: "required",
      km: "required",
      year: "required",
      fuelType: "required",
      transmission: "required",
      cylinders: "required",
      interiorColor: "required",
      exteriorColor: "required",
      condition: "required",
      description: "required",
      saleType: "required",
      sellerType: "required",
      vehiclePrice: "number",
    };
    let validated = true;

    Object.keys(validationObj).forEach((key, i) => {
      if (!filteredData[key]) {
        setErrors((prevState) => ({
          ...prevState,
          [key]: "Field is required",
        }));
        validated = false;
      } else {
        setErrors((prevState) => ({ ...prevState, [key]: "" }));
        validated = validated && true;
      }
    });

    return validated;
  };

  detailsFields.map((field) => {
    switch (field.name) {
      case "make":
        field.options = vehicleMakes?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      case "model":
        field.options = models;
        return field;
      case "km":
        field.options = mileages?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      case "year":
        field.options = years?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      case "transmission":
        field.options = transmissions?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      case "fuelType":
        field.options = fuelTypes?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      case "cylinders":
        field.options = cylinders?.map((option) => {
          return { name: option.name, label: option.name, id: option.id };
        });
        break;
      default:
        return field;
    }
    if (!["make", "model"].includes(field.name)) return field;
  });
  const renderDetailsFields = detailsFields.map(({ name, label, options }) => (
    <CustomAutocomplete
      name={name}
      value={formState[name]}
      setValue={(payload) => dispatch(setFormState(payload))}
      label={label}
      data={name === "year" ? options?.reverse() : options}
      sx={{ width: "100%", marginBottom: "1%" }}
      setModels={setModels}
      key={name}
      required // Add the required attribute for all fields
      error={errors[name]} // Display the error message for this field
      helperText={errors[name]}
    />
  ));

  const extraInfoFields = [
    { name: "interiorColor", label: "Interior Color", options: colors },
    { name: "exteriorColor", label: "Exterior Color", options: colors },
  ];
  const renderExtraInfoFields = extraInfoFields.map(
    ({ name, label, options }) => (
      <CustomAutocomplete
        name={name}
        value={formState[name]}
        setValue={(payload) => dispatch(setFormState(payload))}
        label={label}
        data={options}
        sx={{ width: "100%", marginBottom: "1%" }}
        key={name}
        required // Add the required attribute for all fields
        error={errors[name]} // Display the error message for this field
        helperText={errors[name]}
      />
    )
  );

  const handleSaletypeChange = (payload) => {
    setErrors((prevState) => ({
      ...prevState,
      reservedPrice: "",
      vehiclePrice: "",
      buyNowPrice: "",
    }));
    dispatch(
      setFormState({
        ...payload,
        reservedPrice: "",
        vehiclePrice: "",
        buyNowPrice: "",
      })
    );
  };
  console.log(errors);
  return (
    <Grid
      container
      padding={{ xs: 3 }}
      width={{ xs: "100%", sm: "90%", md: "87%" }}
      margin={{ lg: "auto" }}
      spacing={{ sm: 3 }}
    >
      <Grid item xs={12} sm={6} margin={"auto"}>
        <Grid container flexDirection={"column"}>
          {catId == "1" && (
            <>
              <Grid item py={2} width={"100%"}>
                <Grid container spacing={2}>
                  <Typography fontSize={"1.25rem"} fontWeight={700}>
                    Vehicles Details
                  </Typography>
                  {renderDetailsFields}
                </Grid>
              </Grid>
              <Grid item py={2} my={2}>
                <Grid container spacing={2}>
                  <Typography fontSize={"1.25rem"} fontWeight={700}>
                    Extra Information
                  </Typography>
                  {renderExtraInfoFields}
                </Grid>
              </Grid>
              {!formState.condition ? (
                <Typography
                  component="p"
                  color="#ff1744"
                  fontSize={14}
                  fontWeight={400}
                >
                  Field is required
                </Typography>
              ) : (
                ""
              )}
              <Grid item py={2} my={2}>
                <Grid container spacing={2}>
                  <RadioButtons
                    value={formState.condition}
                    setValue={(payload) => dispatch(setFormState(payload))}
                    label={"Condition"}
                    options={conditions.map((condition) => ({
                      label: condition.name,
                      value: condition.id,
                    }))}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {catId !== "1" && (
            <TextField
              label="Auction Title"
              value={formState.title}
              onChange={(e) =>
                dispatch(setFormState({ title: e.target.value }))
              }
              error={errors.title}
              helperText={errors.title}
            />
          )}

          <Grid item my={2} position={"relative"}>
            <Grid container>
              <C2CDescription
                description={formState.description}
                setFormState={(payload) => dispatch(setFormState(payload))}
                error={errors.description}
                helperText={errors.description}
                required
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid cotaniner flexDirection={"column"}>
          <SaleType
            saleType={formState.saleType}
            handleSaleTypeChange={(payload) => handleSaletypeChange(payload)}
          />
          <RadioOffer errors={errors} offer={offerTC} setoffer={setOfferTC} />
          <Grid
            item
            padding={{ sm: 3 }}
            maxWidth={"100vw"}
            xs={12}
            minWidth={"100%"}
          >
            <RadioMenu
              width={{ xs: "100%", sm: "100%", md: "100%" }}
              title={"Confirm Seller Type"}
              name={"sellerType"}
              value={formState.sellerType}
              setValue={(payload) => dispatch(setFormState(payload))}
              options={sellerTypes.map((condition) => ({
                label: condition.name,
                value: condition.id,
                val: condition.id,
              }))}
            />
          </Grid>
          {formState.sellerType === "companyWithVat" && <CompanyInfo />}
          {formState.saleType === "sale" && (
            <SaleInformation
              setFormState={(payload) => dispatch(setFormState(payload))}
              formState={formState}
              errors={errors}
            />
          )}
          {formState.saleType === "auction" && (
            <PricingInformation
              setFormState={(payload) => dispatch(setFormState(payload))}
              formState={formState}
              errors={errors}
            />
          )}
          <ItemLocation
            value={formState.itemLocation}
            setValue={(payload) => {
              dispatch(setFormState(payload));
            }}
            country={formState.countryId}
            regionState={formState.regionId}
            city={formState.cityId}
          />
          <TermsAndConditions
            errors={errors}
            read={readTC}
            setRead={setReadTC}
          />
        </Grid>
        <Button
          variant="outlined"
          style={{ width: "100%" }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Grid>
    </Grid>
  );
};

export default C2CForm;
