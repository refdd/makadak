import Timer from "@/components/Timer/Timer";
import { Typography } from "@mui/material";

const TimerTag = ({ styles = {}, deadline }) => {
    return (
        <Typography  sx={{ ...styles, direction:'ltr' }} fontWeight={700} fontSize={14} color={'rgb(3 7 18)'}>
            <Timer deadline={deadline}/>
        </Typography>)

}

export default TimerTag