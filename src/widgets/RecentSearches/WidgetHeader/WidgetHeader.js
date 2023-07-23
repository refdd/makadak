import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function WidgetHeader() {
  return (
    <SectionTitle
      title={"Recent Searches"}
      mobileTitleStyles={{ fontSize: 18 }}
    >
      <Button variant="outlined" sx={{ borderColor: "transparent" }}>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            fontSize: "16px",
            "@media(max-width: 776px)": {
              fontSize: 12,
            },
          }}
        >
          Clear All
        </Typography>
        <CloseIcon
          sx={{
            "@media(max-width: 776px)": {
              fontSize: 12,
            },
          }}
        />
      </Button>
    </SectionTitle>
  );
}
