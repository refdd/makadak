import React from "react";
import { useRouter } from "next/navigation";
import Button  from "@mui/material/Button";

const CustomOutLineBtn = ({ width, title, destination }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(destination)}
      variant="outlined"
      sx={{
        borderRadius: "50.50px",
        height: "58px",
        fontSize: "15px",
        marginBottom: 1,
        fontWeight: 600,
        width: width,
        color: "#02FAA8",
        backgroundColor:'#1e1e1e',

        "@media (max-width: 600px)": {
          padding: "10px 10px",
          marginTop: "2%",
        },
        "@media (min-width: 601px)": {
          padding: "0",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CustomOutLineBtn;
