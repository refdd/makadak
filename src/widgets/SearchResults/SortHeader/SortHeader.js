import SectionTitle from "@/components/SectionTitle/SectionTitle";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, Stack, Typography } from "@mui/material";

export default function SortHeader({ resultCount = 0, openSortModal }) {
  return (
    <SectionTitle noMargin>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Button
          onClick={openSortModal}
          variant="outlined"
          sx={{
            height: "50px",
            borderRadius: "12px",
            borderColor: "#2C2A2A",
            padding: 0,
            "@media(max-width: 776px)": {
              width: "37px",
              minWidth: "37px",
              height: "37px",
            },
          }}
        >
          <FilterListIcon
            sx={{
              color: "#fff",
              fontSize: "28px",
              "@media(max-width: 776px)": {
                fontSize: 18
              },
            }}
          />
        </Button>
        <Typography variant="body1" fontWeight={600} sx={{
          "@media(max-width: 776px)": {
            fontSize: 12
          }
        }}>
          {resultCount} Results
        </Typography>
      </Stack>
    </SectionTitle>
  );
}
