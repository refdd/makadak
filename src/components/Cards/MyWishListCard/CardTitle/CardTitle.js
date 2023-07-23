import { Grid, Typography } from "@mui/material";

export default function CardTitle({ title, count }) {
  return (
    <Grid marginTop={1} container flex justifyContent={"center"}>
      <Typography
        textAlign={"center"}
        alignItems={"center"}
        gap={"5px"}
        display="flex"
        fontWeight={800}
        sx={{
          "@media (max-width: 768px)": {
            fontSize: 12,
          },
        }}
      >
        {`${title}`}
        {/* {Icon && (
          <Icon
            sx={{
              color: "primary.main",
              fontSize: 20,
              "@media (max-width: 768px)": {
                fontSize: 14,
              },
            }}
          />
        )} */}
        <Typography
          sx={{
            "@media (max-width: 768px)": {
              fontSize: 12,
            },
          }}
          variant="body2"
          component="span"
          color={"primary"}
        >
          ({count})
        </Typography>

      </Typography>
    </Grid>
  );
}
