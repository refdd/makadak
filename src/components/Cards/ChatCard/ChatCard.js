import { timeElapsed } from "@/helpers";

const { Grid, Typography, Box, Badge } = require("@mui/material")
const { default: Image } = require("next/image")

const ChatCard = ({ data, handleChatSelected, selected }) => {
    const messageAvailable = data?.messages?.length > 0;
    return (
        <Grid
            onClick={() => handleChatSelected(data.id)} item p={2}
            sx={{ background: selected ? 'rgba(123,123,123,.3)' : 'none', borderRadius: 7 }}
            key={data.id}
        >
            <Grid container justifyContent={'space-between'} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Grid item xs={3} md={2}>
                    <Box
                        position={'relative'}
                        width={40}
                        height={40}
                        borderRadius={4}
                        sx={{ background: 'white' }}
                    >
                        <Image
                            fill
                            style={{ objectFit: 'contain' }}
                            src={'/imgs/logo2.svg'}
                        />
                    </Box>
                </Grid>
                <Grid item xs={8} md={8} px={{xs:2, sm:0}}>
                    <Grid container flexDirection={'column'}>
                        <Grid item>
                            <Typography fontWeight={600}>{data.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontSize={14}>{messageAvailable && data?.messages[0].message}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Grid container alignItems={'end'} flexDirection={'column'}>
                        <Grid item xs={12} width={'100%'} textAlign={'center'}>
                            {
                                messageAvailable &&
                                <Typography fontSize={12}>
                                    {timeElapsed(data?.messages[0].createdAt)}
                                </Typography>
                            }
                        </Grid>
                        <Grid item pr={2}>
                            <Badge badgeContent={data.unreadMessages} color="primary">
                            </Badge>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default ChatCard;