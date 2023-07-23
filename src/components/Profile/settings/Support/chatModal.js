import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import profileStyles from "../../profile.module.css";
import { useInitiateSupportChatMutation } from "@/redux/apis/chat/chatApi";
import { useState } from "react";
import { useRouter } from "next/router";
import CustomizedSnackbars from "@/components/CustomSnackbar/CustomSnackbar";
const ChatModal = ({ onClose, open }) => {
  const [chatInput, setChatInput] = useState('');
  const [initiateChatQ] = useInitiateSupportChatMutation()
  const router = useRouter();
  const handleClose = () => {
    onClose();
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarMessage, setSnackbarMessage] = useState('');
  const handleSubmit = () => {
    initiateChatQ(chatInput)
      .unwrap().then(res => {
        if (res?.id)
          router.replace(`/chat?chatId=${res.id}`)
      }).catch(e => {
        setSnackbarMessage(e.data.payload.validation[0].errors[0].message)
        setOpenSnackbar(true)
      })
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Box display={"flex"} justifyContent={"center"} p={0}>
            <p className={profileStyles["bold"]}>Chat With Us</p>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="What can we help you with?"
            fullWidth
            variant="outlined"
            autoComplete={'off'}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>

        <CustomizedSnackbars
          title={snackBarMessage}
          open={openSnackbar}
          setOpen={setOpenSnackbar}
        />
      </Dialog>
    </>
  );
};

export default ChatModal;
