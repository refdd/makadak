import { Card, Collapse, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";

export default function RadioFilters({ title,children }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card
        sx={{
          padding: 1,
          paddingInline: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          background: "transparent",
          boxShadow: 0
        }}
        onClick={handleToggle}
      >
        <Typography fontWeight={"bold"}>{title}</Typography>
        <Typography
          sx={{ display: "flex", gap: "5px", alignItems: "center" }}
          fontWeight={"500"}
        >
          
          <ChevronRightIcon sx={{
            transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            transform: expanded ? 'rotate(90deg)' : 'none'
          }} />
        </Typography>
      </Card>
      <Collapse sx={{zIndex:1,position:'relative'}} in={expanded}>
        <Card
          sx={{
            paddingInline: 0,
            paddingTop:0.5,
            background: "transparent",
            boxShadow: 0
          }}
        >
          {children}
        </Card>
      </Collapse>
    </div>
  );
}
