import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const SmallCardMainData = ({ heading, flag }) => {
  return (
    <Grid
      className="small-card-main-data"
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"nowrap"}
      maxWidth={"100%"}
    >
      <Grid item maxWidth={"75%"}>
        <Typography
          fontWeight={900}
          color={"white"}
          maxWidth={"100%"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          margin={"5px 0"}
          sx={{ paddingLeft: 2, textTransform: "uppercase" }}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item display="flex" flexDirection={"column"} alignItems={"center"}>
        <BookmarkBorderIcon />
      </Grid>
    </Grid>
  );
};

export default SmallCardMainData;
