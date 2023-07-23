import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { FileCopy } from '@mui/icons-material'

const CopyToClipboardButton = ({onCopy}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      onCopy()
      setOpen(true)
    }
    
    return (
        <>
        <FileCopy onClick={handleClick} />
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message="Copied to clipboard "
          />
        </>
    )
}

export default CopyToClipboardButton