import { Box, Card, Collapse, Slider, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";

export default function PriceFilter({ title, from, to, onSelect }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = React.useState([from, to]);
  const [percentageValue, setPercentage] = useState([from, to]);

  const handleChange = (event, newValue) => {
    const calculatedValue = [
      (200 * newValue[0]) / 100,
      (200 * newValue[1]) / 100,
    ];
    setValue(calculatedValue);
    setPercentage(newValue);
    onSelect({
      priceFrom: calculatedValue[0],
      priceTo: calculatedValue[1],
    });
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <Card
        sx={{
          padding: 1,
          paddingInline: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: expanded ? "12px 12px 0 0" : "12px",
        }}
        onClick={handleToggle}
      >
        <Typography fontWeight={"500"}>{title}</Typography>
        <Typography
          sx={{ display: "flex", gap: "5px", alignItems: "center" }}
          fontWeight={"500"}
        >
          <Typography color="rgba(255, 255, 255, 0.5)" variant="span">
            SAR {value[0]} - {value[1]}
          </Typography>
          <ChevronRightIcon
            sx={{
              transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              transform: expanded ? "rotate(90deg)" : "none",
            }}
          />
        </Typography>
      </Card>
      <Collapse sx={{ zIndex: 1, position: "relative" }} in={expanded}>
        <Card
          sx={{
            paddingInline: 2,
            paddingTop: 1.5,
          }}
        >
          <Slider value={percentageValue} onChange={handleChange} />
        </Card>
      </Collapse>
    </Box>
  );
}
