import { Box, Drawer } from "@mui/material";
import SearchInput from "../SearchInput";
import React, { useEffect, useState } from "react";
import FilterLabelList from "./FilterLabelList/FilterLabelList";
import FilterLabelHeader from "./FilterLabelHeader/FilterLabelHeader";
import DrawerHeader from "../AdvancedSearch/DrawerHeader/DrawerHeader";

export default function FilterLabelWithChoices({
  onSelect,
  title,
  value,
  data,
  selectedValue,
  disabled,
  filterKey
}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const [values, setValues] = React.useState([]);

  useEffect(() => {
    setValues(data);
  }, [data]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };
  return (
    <>
      <FilterLabelHeader
        title={title}
        disabled={disabled}
        value={value}
        openDrawer={toggleDrawer}
      />
      <div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          PaperProps={{
            style: {
              width: 400,
              maxWidth: "100%",
              background: "#000",
            },
          }}
          onClose={toggleDrawer("right", false)}
        >
          <Box
            role="presentation"
            sx={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            padding={"5%"}
          >
            <DrawerHeader onClose={toggleDrawer("right", false)} />
            <SearchInput
              onChange={(e) => {
                if (e) {
                  setValues(
                    data?.filter((ele) =>
                      ele?.name.toLowerCase().includes(e.toLowerCase())
                    )
                  );
                } else {
                  setValues(data);
                }
              }}
              iconOnly={true}
              fullWidth={true}
            />
            <FilterLabelList
              onSelect={onSelect}
              data={values ?? data}
              title={title}
              selectedValue={selectedValue}
              filterKey={filterKey}
              setState={setState}
            />
          </Box>
        </Drawer>
      </div>
    </>
  );
}
