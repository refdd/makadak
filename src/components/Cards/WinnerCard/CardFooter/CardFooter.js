import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const CardFooter = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 1 }}
      spacing={0.5}
    >
      <Grid item sx={{ borderTop: "1px solid white", width: "90%", mt: 1 }} />
      <Grid item>
        <Link href="/payment">
          <Button
            variant="text"
            color="primary"
            sx={{ textTransform: "none", borderRadius: "30px", px: 2 }}
          >
            Make payment now
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CardFooter;
