import { Grid, Typography } from "@mui/material";

export default function SectionTitle({ title, children, fullWidth, noMargin,mobileStyles,mobileTitleStyles }) {
  return (
    <Grid container width={"100%"}>
      <Grid
        item
        width={fullWidth ? "100%" : "auto"}
        marginBottom={noMargin ? 0 : 2}
        sx={{
          "@media (max-width: 777px)": {
            ...mobileStyles
          },
        }}
      >
        <Grid
          container
          flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"10px"}
        >
          {title && (
            <Grid item>
              <Typography
                color="secondary"
                fontWeight={900}
                fontSize={22}
                style={{ marginRight: 4, color: "rgb(226 232 240)" }}
                sx={{
                  textTransform: "uppercase",
                  "@media (max-width: 777px)": {
                    fontSize:'14px',
                    ...mobileTitleStyles
                  },
                }}
              >
                {title}
              </Typography>
            </Grid>
          )}
          <Grid item>{children}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
