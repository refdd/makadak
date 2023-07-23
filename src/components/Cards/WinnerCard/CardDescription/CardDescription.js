import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardDescription = ({ txt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 1,
      }}
    >
      <Typography color="#ffffffCC">{txt}</Typography>
    </Box>
  );
};

export default CardDescription;
