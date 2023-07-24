import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import GavelIcon from "@mui/icons-material/Gavel";
const CardFooter = ({ data, price }) => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ padding: "0 10px", paddingTop: 3 }}
    >
      <Grid item>
        <Grid container flex>
          <Grid item>
            {data?.saleType === "auction" && (
              <GavelIcon
                sx={{
                  color: "primary.main",
                  marginRight: 1,
                  fontSize: 16,
                  transform: "scaleX(-1)",
                }}
              />
            )}
            {data?.saleType === "sale" && (
              <ShoppingCartIcon
                sx={{ color: "primary.main", marginRight: 1, fontSize: 16 }}
              />
            )}
          </Grid>
          <Grid item>
            <Typography color={"primary"} fontSize={14}>
              {price?.currency?.code} {price?.amount.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item padding={1}>
        <Grid container spacing={1}>
          <Grid item>
            <Grid container>
              <Grid item>
                <VisibilityIcon sx={{ marginRight: 1, fontSize: 14 }} />
              </Grid>
              <Grid item>
                <Typography fontSize={14}>{data?.views}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container item>
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                {data?.saleType === "auction" && (
                  <GavelIcon
                    sx={{
                      fontSize: 14,
                      marginRight: 1,
                      transform: "scaleX(-1)",
                    }}
                  />
                )}
                {data?.saleType === "sale" && (
                  <ShoppingCartIcon sx={{ fontSize: 14, marginRight: 1 }} />
                )}
              </Grid>
              <Grid item>
                <Typography fontSize={14}>{data?.totalBids}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardFooter;
