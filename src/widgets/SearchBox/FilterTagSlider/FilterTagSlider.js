import SliderBlock from "@/widgets/SliderBlock/SliderBlock";
import { Button } from "@mui/material";
import { useState } from "react";

const getActiveStyles = (value, selectedValue) => {
  if (value === selectedValue) {
    return {
      background: "transparent",
      boxShadow: "none",
      border: "2px solid #00a876",
      color: "#00a876",
    };
  }
  return {};
};

export default function FilterTagSlider({
  data,
  title,
  onSelect,
  valueKey,
  val,
  full,
  className
}) {
  const [value, setValue] = useState(val);
  const handleSelect = (newVal) => {
    
    if (!full) {
      const obj = {};
      obj[title] = newVal;
      onSelect(obj);
      setValue(newVal);
    } else {
      setValue(newVal?.id);
      onSelect(newVal);
    }
  };

  const renderButtons = data?.map((el, i) => (
    <Button
      key={i}
      variant="contained"
      sx={{
        background: "#121212",
        borderRadius: "12px",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        height: "47px",
        "&:hover": {
          backgroundColor: "transparent",
          color: "primary",
        },
        ...getActiveStyles(value, valueKey ? el[valueKey] : el.catName),
      }}
      onClick={() =>
        handleSelect(full ? el : valueKey ? el[valueKey] : el.catName)
      }
    >
      {el.catName}
    </Button>
  ));

  return (
    <>
      <SliderBlock className={className} slidesPerView="auto">{renderButtons}</SliderBlock>
    </>
  );
}
