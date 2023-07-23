import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

export default function RadioButtons({ label, options, value, setValue }) {
    const renderOptions = options.map(({ value, label }, i) => <FormControlLabel key={i} value={value} control={<Radio />} label={label} />)
    return (
        <FormControl>
            <Typography fontSize={'1.25rem'} fontWeight={700}>{label}</Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={value}
                name="radio-buttons-group"
                onChange={(e) => { setValue({ condition: e.target.value }) }}
            >
                {renderOptions}
            </RadioGroup>
        </FormControl>
    );
}
