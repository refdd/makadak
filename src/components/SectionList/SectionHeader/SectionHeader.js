import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

const SectionHeader = ({ title, link, mini,mobileTitleStyles }) => {
  return (
    <Box
      sx={{
        padding: mini ? 0 : "12px 0",
        margin: mini ? 0 : "12px 0px",
        '@media (max-width: 768px)': {
          padding: mini ? 0 : '0',
          margin: mini ? 0 : '0 0 15px 0',
        },
      }}
    >
      <Grid container flex alignItems={"center"}>
        <Typography
          color="secondary"
          fontWeight={900}
          fontSize={22}
          style={{ marginRight: 4, color: "rgb(226 232 240)" }}
          sx={{
            textTransform: "uppercase",
            "@media (max-width: 768px)": {
              fontSize: 14,
              ...mobileTitleStyles
            },
          }}
        >
          {title}
        </Typography>
        {link && (
          <Link href={link} style={{ textDecoration: "none" }}>
            <Grid container flex>
              <Grid item alignSelf="center">
                <Typography fontWeight={400} fontSize={12} color="primary">
                  see all
                </Typography>
              </Grid>
              <Grid item alignItems={"center"}>
                <KeyboardArrowRightIcon style={{ fontSize: 12 }} />
              </Grid>
            </Grid>
          </Link>
        )}
      </Grid>
    </Box>
  );
};

export default SectionHeader;
