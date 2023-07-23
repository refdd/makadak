import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CustomCheckbox from '../CheckboxBtn/CheckboxBtn';
import TuneIcon from '@mui/icons-material/Tune';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
  maxHeight: 500,
  height: 500,
  overflow: 'hidden',
  borderRadius: '25px',
};

const boxes = [
  'cars',
  'watercrafts',
  'Residential Real Estate',
  'Motorbikes',
  'Residential Real Estate',
  'Commercial Real Estate',
  'Aircraft',
  'Watches',
  'Industrial Real Estate',
  'Jewellery'
]

export default function FilterModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TuneOutlinedIcon sx={{ fontSize: 45, paddingTop: 1 }} color='primary' onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2px 0', padding: 8 }}>
            <Typography textAlign={'center'} variant='h6' fontWeight={'bold'}>Your Preferences</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }} >
              <TuneIcon sx={{ marginRight: 1 }} />
              <Typography variant='caption'>
                Select the categories you would like to see.<br /> <b>Tip</b>: You can select multiple items.
              </Typography>
            </div>
          </div>
          <div style={{ overflow: 'scroll', height: 320, padding: 16 }}>
            {
              boxes.map((el, i) => <CustomCheckbox key={i} label={el} />)
            }

          </div>
          <div style={{ position: 'fixed', height: 50, bottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 20 }}>
            <div style={{ width: '95%' }}>
              <Button onClick={() => { setOpen(false) }} variant="outlined" sx={{ width: '100%', borderRadius: '20px', height: 50 }}>Update Filters</Button>
            </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
}