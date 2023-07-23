import { Button, Card } from "@mui/material";
import React from "react";

export default function DrawerFooter({showResults,onSubmit,onClose}) {
  
  const handleSubmit = () => {
    onSubmit()
  }

  return (
    <Card sx={{ height: "12%",padding:'3% 5%',background: '#000' }}>
      <Button
      onClick={handleSubmit}
        variant="outlined"
        color="primary"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          fontWeight: 'bold',
            borderRadius:'30px',
            
        }}
      >
        Show Results
      </Button>
    </Card>
  );
}
