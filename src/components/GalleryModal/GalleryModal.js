import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SliderBlock from '@/widgets/SliderBlock/SliderBlock';
import Image from 'next/image';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    p: 2
};

export default function GalleryModal({
    open,
    handleClose,
    cmp
}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    '& .MuiModal-backdrop': {
                        backgroundColor: 'rgba(0,0,0,.9)'
                    }
                }}
            >
                <Box sx={style}>
                    <CloseFullscreenIcon sx={{width:'60px', fontSize:30}} onClick={handleClose} />
                    {cmp}
                </Box>
            </Modal>
        </div>
    );
}
