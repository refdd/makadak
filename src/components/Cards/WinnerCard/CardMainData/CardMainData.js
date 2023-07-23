import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CardMainData = ({ heading, tag }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography
          sx={{ textTransform: "uppercase" }}
          fontWeight={900}
          color={"white"}
          marginTop={1}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item>{tag}</Grid>
    </Grid>
  );
};

export default CardMainData;
