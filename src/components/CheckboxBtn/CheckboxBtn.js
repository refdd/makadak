import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CustomCheckbox({label, value}) {
  return (
    <div>
      <FormControlLabel
      style={{border:'1px solid #2C2A2A', padding:10,borderRadius:12, width:'100%', margin:'3px 0', height:50}}
        label={label}
        control={
            <Checkbox
            sx={{
              '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<CheckCircleIcon  color='primary'/>}
            icon={<CircleOutlinedIcon color='#2C2A2A' />}
            inputProps={{ 'aria-label': `prefrence-${label}` }}
          />
        }
      />
    </div>
  );
}