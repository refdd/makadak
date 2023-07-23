import { Button, Card, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

export default function FilterLabelHeader({
  title,
  value,
  openDrawer,
  disabled,
}) {
  return (
    <Button
      sx={{
        padding: 1,
        paddingInline: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#121212",
        color: "white",
        borderRadius: "12px",
      }}
      disabled={disabled}
      onClick={openDrawer("right", true)}
    >
      <Typography fontWeight={"500"}>{title}</Typography>
      <Typography
        sx={{ display: "flex", gap: "5px", alignItems: "center" }}
        fontWeight={"500"}
      >
        <Typography color="rgba(255, 255, 255, 0.5)" variant="span">
          {value}
        </Typography>
        <ChevronRightIcon />
      </Typography>
    </Button>
  );
}
