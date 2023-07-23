import { Chip, Grid, Stack } from "@mui/material";
import WidgetHeader from "./WidgetHeader/WidgetHeader";

export default function RecentSearches() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        width={"100%"}
        padding={"1% 1% 0 1%"}
        sx={{
          "@media(max-width: 776px)": {
            padding :"1% 10px 0 10px"
          }
        }}
      >
        <WidgetHeader />

        <Stack direction="row" flexWrap={"wrap"} gap={2}>
          <Chip sx={{
            borderRadius:'12px',
            paddingBlock: 3,
          }} label="BMW" variant="outlined" onDelete={handleDelete} />
        </Stack>
      </Grid>
    </>
  );
}
