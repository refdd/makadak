import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef } from 'react';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogActions, IconButton } from '@mui/material';

export default function CustomDialog({ component, open, handleClose, type, title = '', actions, ...rest }) {


    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <Dialog
            PaperProps={{
                sx: {
                    width: {xs:'100vw', sm:'50vw'},
                    // minHeight: '80vh',
                    minWidth:'40vw'
                }
            }}
            {...rest}
            open={open}
            onClose={handleClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >

            <DialogTitle id="scroll-dialog-title">
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1} > {(type === 'sale' ? 'Make Offer' : '') ?? (type === 'sale' ? 'Make Bid' : '')} {title ?? ''}</Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
            </DialogTitle>

            <DialogContent dividers={true}>
                {component}
            </DialogContent>
            {
                actions &&
                <DialogActions>
                    {actions}
                </DialogActions>
            }
        </Dialog>
    );
}