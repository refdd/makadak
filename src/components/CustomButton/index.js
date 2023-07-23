import { Button } from '@mui/material'

const CustomButton = (props) => {
  return (
    <Button variant={props.variant || 'outlined'} {...props}>
      {props.label}
    </Button>
  )
}

export default CustomButton
