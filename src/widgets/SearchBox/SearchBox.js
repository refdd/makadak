import { Grid } from "@mui/material";
import SearchInput from "./SearchInput";
export default function SearchBox({ searchValue, onSearchInputChange }) {
  return (
    <Grid
      position={"relative"}
      container
      width={"100%"}
      padding={"1% 2% 0 3%"}
      rowGap={1}
      sx={{
        "@media(max-width: 776px)": {
          padding :"1% 10px 0 10px"
        }
      }}
    >
      <Grid
        item
        sm={"auto"}
        md={12}
        sx={{
          "@media(max-width: 776px)": {
            width: "100%",
          },
        }}
      >
        <SearchInput
          onChange={onSearchInputChange}
          searchValue={searchValue}
          iconOnly
        />
      </Grid>
    </Grid>
  );
}
