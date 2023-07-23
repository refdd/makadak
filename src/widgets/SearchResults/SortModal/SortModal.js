import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#232323",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};
const getActiveStyles = (value, selectedValue) => {
  if (value === selectedValue) {
    return {
      fontWeight: "bold",
      color: "white",
    };
  }
  return {
    color: "rgb(255 255 255 / 70%)",
  };
};
export default function SortModal({ open, onClose, onFilter, toggleSortModal, onApplyFilter }) {
  const [selectedValue, setSelectedValue] = useState("popular");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onFilter({ sortBy: event.target.value });
  };
  const applyFilter = () => {
    onApplyFilter();
    toggleSortModal();
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="body2"
            component="p"
            fontSize={"0.9rem"}
            fontWeight={"500"}
          >
            SORT BY
          </Typography>
          <Box>

            <RadioGroup value={selectedValue} onChange={handleChange}>
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="newest"
                control={<Radio />}
                label={
                  <Typography
                    variant="body1"
                    sx={{ ...getActiveStyles("newset", selectedValue) }}
                  >
                    Newest
                  </Typography>
                }
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="endingSoon"
                control={<Radio />}
                label={
                  <Typography
                    variant="body1"
                    sx={{ ...getActiveStyles("endingSoon", selectedValue) }}
                  >
                    Ending Soon
                  </Typography>
                }
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="lowestPrice"
                control={<Radio />}
                label="Price: Low to High"
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="highestPrice"
                control={<Radio />}
                label="Price: High to Low"
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="highestMileage"
                control={<Radio />}
                label="Highest Milage"
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="lowestMileage"
                control={<Radio />}
                label="Lowest Milage"
              />
              <FormControlLabel
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  width: "100%",
                  justifyContent: "space-between",
                  color: "rgb(255 255 255 / 70%)",
                }}
                value="endedAt"
                control={<Radio />}
                label="Ended At"
              />
            </RadioGroup>
          </Box>
          <Button
            variant="outlined"
            sx={{ borderRadius: 4, float:'right', mt:1 }}
            size="small"
            color="secondary"
            onClick={applyFilter}
          >
            Apply Filter
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
