import { Avatar, Grid, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import Image from "next/image";

const NotificationCard = ({
    popUp = false, date,
    description,
    title,
    image,
    createdAt,
    status
}) => {
    return (
        <Grid container flex spacing={2} alignItems={'center'}>
            <Grid item xs={11}>
                <Grid container spacing={2} alignItems={'self-start'}>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'white', width: 55, height: 55 }} aria-label="recipe">
                            <Image
                                src={image || '/imgs/logo2.svg'}
                                fill
                            />
                        </Avatar>
                    </Grid>
                    <Grid item xs={8} sm={popUp ? 9 : 10} >
                        <Typography>{title}</Typography>
                        {!popUp && <Typography fontSize={12}>{description}</Typography>}
                        <Typography color={'primary'} fontSize={10} fontWeight={600}>{createdAt}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                {status === 'unread' && <CircleIcon color='primary' fontSize="10" />}
            </Grid>
        </Grid>
    )
}
export default NotificationCard;