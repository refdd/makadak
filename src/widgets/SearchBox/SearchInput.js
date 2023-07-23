import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchInput({
  searchValue,
  onChange,
  iconOnly = false,
  fullWidth = false,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onChange(inputValue);
  };
  const handleInputChange = (e) => {
    onChange(e.target.value)
    setInputValue(e.target.value);
  };

  return (
    <Box
      position={"relative"}
      container
      width={fullWidth ? "calc(100% + 20px)" : "100%"}
      padding={0}
      display={"flex"}
      sx={{
        "@media(max-width: 776px)": {
          width: "100%",
        },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Type to search"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        InputProps={{
          sx: {
            borderRadius: "12px",
            paddingInlineEnd: "30px",
            width: "100%",
            background: "#232323",
            "@media(max-width: 776px)": {
              fontSize: "14px",
              height: "49px",
              paddingInlineEnd: "40px",
            },
          },
        }}
        InputLabelProps={{
          sx: {
            "@media(max-width: 776px)": {
              fontSize: "14px",
            },
          },
        }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          height: "56px",
          borderRadius: "12px",
          color: "black",
          transform: "translateX(-20px)",
          "@media(max-width: 776px)": {
            transform: "translateX(0px)",
            position: "absolute",
            right: "0",
            borderRadius: "12px",
            width: "49px",
            minWidth: "49px",
            height: "100%",
          },
        }}
      >
        {!iconOnly && "Search"}
        <SearchIcon
          sx={{
            color: "black",
            fontSize: "30px",
            "@media(max-width: 776px)": {
              fontSize: 24,
            },
          }}
        />
      </Button>
    </Box>
  );
}
