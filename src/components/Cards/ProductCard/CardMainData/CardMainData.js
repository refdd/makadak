import { Grid, Typography } from "@mui/material";

const CardMainData = ({ heading, tag }) => {
  var arabic = /[\u0600-\u06FF]/;
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ paddingBottom: 3 }}
      flexWrap={"nowrap"}
    >
      <Grid
        item
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
      >
        <Typography
          fontWeight={900}
          color={"white"}
          margin={"5px 0"}
          // width={'100%'}
          sx={{
            textTransform: "uppercase",
            direction: arabic.test(heading) ? "rtl" : "ltr",
          }}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item ml={2}>
        {tag}
      </Grid>
    </Grid>
  );
};

export default CardMainData;
