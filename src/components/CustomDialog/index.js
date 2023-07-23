import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const CustomDialog = ({ open, title, message, handleClose }) => {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          border: "1px solid #2C2A2A",
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle textAlign="center" sx={{ bgcolor: "#232323" }}>
        <Typography color="#fff">{title}</Typography>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#000" }} p={3}>
        <Typography fontWeight={700} textAlign="center" fontSize={13} pt={3} color="#fff">
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
