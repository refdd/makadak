import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function DrawerHeader({onClose}) {
  return (
    <Box display="flex" justifyContent="flex-end">
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  )
}
