import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography, Grid } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
const CardFooter = ({ leftTextColor = "white" , price, views}) => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ padding: "0 10px", paddingTop: 1 }}
    >
      <Grid item>
        <Grid container flex>
          <Grid item>
            <Typography
              color={leftTextColor}
              fontSize={14}
              sx={{
                "@media (max-width: 776px)": {
                  fontSize: 11,
                },
              }}
            >
             {price?.code + " " + price?.amount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        padding={1}
        sx={{
          "@media (max-width: 776px)": {
            padding: 0,
          },
        }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <Grid container>
              <Grid item>
                <VisibilityIcon
                  sx={{
                    marginRight: 1,
                    fontSize: 14,
                    "@media (max-width: 776px)": {
                      fontSize: 11,
                    },
                  }}
                />
              </Grid>
              <Grid item alignItems={"center"} display={"flex"}>
                <Typography
                  fontSize={14}
                  sx={{
                    "@media (max-width: 776px)": {
                      fontSize: 11,
                    },
                  }}
                >
                  {views}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems={"center"} display={"flex"}>
              <Grid item>
                <GavelIcon
                  sx={{
                    fontSize: 14,
                    marginRight: 1,
                    "@media (max-width: 776px)": {
                      fontSize: 11,
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={14}
                  sx={{
                    "@media (max-width: 776px)": {
                      fontSize: 11,
                    },
                  }}
                >
                  0
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardFooter;
