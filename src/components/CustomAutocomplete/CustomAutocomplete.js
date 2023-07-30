import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Autocomplete, TextField } from "@mui/material";
import { fetchApi } from "@/helpers/fetchApi";

export default function CustomAutocomplete({
  data,
  label,
  value,
  setModels,
  setValue,
  name,
  required,
  error,
  helperText,
  ...rest
}) {
  const handleChange = (val) => {
    setValue({ [name]: val });
  };
  return (
    <Autocomplete
      {...rest}
      fullWidth
      options={
        name === "year"
          ? Object.values(
              data.reduce((acc, obj) => {
                acc["" + obj.id] = obj;
                return acc;
              }, {})
            ).reverse()
          : Object.values(
              data.reduce((acc, obj) => {
                acc["" + obj.id] = obj;
                return acc;
              }, {})
            )
      }
      getOptionLabel={(option) => option.label || option.name}
      id="controlled-autocomplete"
      value={value}
      onChange={async (event, newValue) => {
        if (name == "make") {
          const makeId = newValue?.id;
          const makeModels = await fetchApi(
            { url: `vehicle-makes/${makeId}` },
            true
          );
          const modelsArray = makeModels?.vehicleModels;
          const modelData = modelsArray.map((option) => {
            return { id: option.id, name: option.name, label: option.name };
          });
          setModels(modelData);
        }
        handleChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          required
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
