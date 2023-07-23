import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RadioMenu({
  value,
  title,
  options,
  setValue,
  name,
  handleChange,
}) {
  const setHandleChange = (event) => {
    setValue({ [name]: event.target.value });
  };
  const theme = useTheme();
  const lgBreakpoint = useMediaQuery(theme.breakpoints.up("lg"));

  const renderOptions = options.map(({ val, label, subLabel, extras, handleChange }, i) => {
    let last = i === options.length - 1;
    return (
      <Box
        key={i}
        variant="outlined"
        square={"true"}
        elevation={2}
        sx={{
          py: 1.5,
          border: "1px solid #232323",
          borderEndStartRadius: last ? 14 : 0,
          borderEndEndRadius: last ? 14 : 0,
        }}
      >
        <FormControlLabel
          sx={{
            px: 1.5,
            opacity: value !== val ? "50%" : "100%",
          }}
          value={val}
          control={<Radio checkedIcon={<CheckCircleIcon  color="white"/>} />}
          onChange={ handleChange}
          label={
            <Typography
              fontSize={14}
              variant="body1"
              color="white"
              fontWeight="bold"
            >
              {label}{" "}
              {subLabel && (
                <Typography variant="caption" color="#cbcbcb">
                  ({subLabel})
                </Typography>
              )}
            </Typography>
          }
          style={{
            flexDirection: "row-reverse",
            justifyContent: lgBreakpoint ? "flex-end" : "space-between",
            width: "100%",
            margin: 0,
          }}
        />
        {extras && value === val && (
          <>
            <Box pt={1} borderBottom="1px solid #232323" />
            <RadioGroup
              name={extras.name}
              value={extras.value || "f"}
              onChange={extras.handleChange}
            >
              {extras.addresses.map((address, i) => (
                <FormControlLabel
                  key={i}
                  value={address.val}
                  sx={{
                    width: "100%",
                    margin: 0,
                    alignItems: "center",
                    justifyContent: 'space-between',
                    opacity: extras.value !== address.val ? "50%" : "100%",
                    "& .MuiFormControlLabel-label": {
                      width: "100%",
                    },
                  }}
                  control={<Radio checkedIcon={<CheckCircleIcon />} />}
                  label={
                    <Grid
                      container
                      wrap="nowrap"
                      my={1}
                      position="relative"
                    >
                      <Grid item my={2}>
                        <Typography minWidth={180} fontSize={14}>
                          {address.address}
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                />
              ))}
            </RadioGroup>
            {extras && extras.links && (
              <Grid container justifyContent="end">
                {extras.links}
              </Grid>
            )}
          </>
        )}
      </Box>
    );
  });

  return (
    <FormControl style={{ width: "100%" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        paddingX={2}
        sx={{
          background: "#232323",
          borderStartStartRadius: 14,
          borderStartEndRadius: 14,
          height: "60px",
        }}
      >
        <Typography fontWeight="bold" textAlign="center" fontSize={15}>
          {title}
        </Typography>
      </Grid>
      <RadioGroup
        name={name}
        value={value || "f"}
        onChange={!!setValue ? setHandleChange : handleChange}
      >
        {renderOptions}
      </RadioGroup>
    </FormControl>
  );
}
