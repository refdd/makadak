import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Grid, Typography } from "@mui/material";

const SmallCardMainData = ({ heading, color = "#00F0A9" }) => {
  return (
    <Grid
      className="small-card-main-data"
      container
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid item>
        <Typography
          fontWeight={900}
          color={"white"}
          margin={"5px 0"}
          sx={{
            paddingLeft: 2,
            textTransform: "uppercase",
            "@media (max-width: 776px)": {
              fontSize: "12px",
            },
          }}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item>
        <BookmarkBorderIcon
          sx={{
            fill: color ? color : "#00F0A9",
            "@media (max-width: 776px)": {
              fontSize: "16px",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SmallCardMainData;
