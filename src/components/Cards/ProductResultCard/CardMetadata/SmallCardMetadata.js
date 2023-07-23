import { Box, Grid, Typography } from "@mui/material";

const SmallCardMetadata = ({ category, flag, extra }) => {
  return (
    <Box
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"nowrap"}
      display={"flex"}
      flexDirection={"row"}
    >
      <Grid container alignItems={"center"} sx={{ paddingLeft: 2 }}>
        <Typography
          fontSize={12}
          sx={{ textTransform: "uppercase", marginRight: 1 }}
        >
          {category}
        </Typography>
        <span className={`fi fi-${flag}`}></span>
      </Grid>

      {extra && <Typography fontSize={'13px'}>{extra}</Typography>}
    </Box>
  );
};
export default SmallCardMetadata;
