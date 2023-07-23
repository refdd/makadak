import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import RadioFilter from "../../RadioFilters/RadioFilter/RadioFilter";

export default function FilterLabelList({
  onSelect,
  data,
  title,
  selectedValue,
  filterKey = null,
  setState
}) {
  const [value, setValue] = useState(selectedValue);

  const handleClick = (newVal) => {
    if (newVal !== value) {
      setValue(newVal);
      const obj = {};
      obj[filterKey || title.toLowerCase()] = newVal;
      onSelect(obj);
      setState({ right: false });
    }
  };


  return (
    <Box
      role="presentation"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        overflowY: "auto",
      }}
    >
      <RadioFilter
        currentSelection={value}
        onClick={handleClick}
        label={"All"}
        value=""
      />
      {data &&
        data?.map((ele, i) => (
          <RadioFilter
            key={i}
            currentSelection={value}
            onClick={handleClick}
            label={ele?.name}
            value={ele?.id}
          />
        ))}
      {/* <RadioFilter
        currentSelection={value}
        onClick={handleClick}
        label={"Mercedes"}
        value="1"
      />
      <RadioFilter
        currentSelection={value}
        onClick={handleClick}
        label={"BMW"}
        value="2"
      /> */}
    </Box>
  );
}
