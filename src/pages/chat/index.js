import ChatCard from "@/components/Cards/ChatCard/ChatCard";
import ChatMessage from "@/components/ChatMessage/ChatMessage";
import { ChevronLeft } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useGetInboxesQuery, useGetMessagesQuery, useSendMessageMutation } from "@/redux/apis/chat/chatApi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetProfileQuery } from "@/redux/apis/profile.api";


const Chat = () => {
    const router = useRouter();
    const { chatId } = router.query;
    const [message, setMessage] = useState('');
    const [selectedChat, setSelectedChat] = useState(chatId);
    const userProfileQ = useGetProfileQuery();
    const getInboxQ = useGetInboxesQuery();
    const getMessagesQ = useGetMessagesQuery(selectedChat);
    const [sendMessageMutation] = useSendMessageMutation();

    useEffect(() => {
        setSelectedChat(chatId);
        var objDiv = document.getElementById("myDiv");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [chatId])

    const handleChatSelected = (id) => {
        setSelectedChat(id);
    }

    const handleSendMessage = () => {
        sendMessageMutation({ message, inboxId: selectedChat })
            .unwrap()
            .then(res => {
                setMessage('')
            }).catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        var objDiv = document.getElementById("myDiv");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [getMessagesQ?.data?.messages.length])
    return (
        <Grid container width={{ xs: '95vw', sm: '80vw' }} margin='auto' >
            <Grid
                item
                xs={12}
                sm={4}
                display={{ xs: (!!selectedChat ? 'none' : 'block'), sm: 'block' }}
                sx={{ borderRight: { xs: 'none', sm: '1px solid #262626' } }}
            >
                <Grid container flexDirection={'column'} height={'auto'} spacing={3} p={3}>
                    <Grid item>
                        <Typography fontSize={16} fontWeight={700}>
                            Your Chats
                        </Typography>
                    </Grid>
                    <Grid item width={'100%'} maxHeight={'80vh'} overflow={'scroll'}>
                        <Grid container flexDirection={'column'}>
                            {
                                getInboxQ?.data?.map((chat) => <ChatCard
                                    key={chat.id}
                                    data={chat}
                                    handleChatSelected={handleChatSelected}
                                    selected={selectedChat == chat.id}
                                />)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid px={2} item xs={12} sm={8} display={{ xs: (!!selectedChat ? 'flex' : 'none'), sm: 'block' }} height={'100vh'}>
                <Grid container flexDirection={'column'} position={'relative'} height={'95%'}>
                    <Grid item height={'10%'}>
                        <Typography fontWeight={700} fontSize={{ xs: 16, md: 22 }}>
                            <ChevronLeft sx={{ marginRight: 2, display: { sm: 'none' } }} fontSize="14px" onClick={() => setSelectedChat(null)} />
                            {getInboxQ?.data?.find(chat => chat.id === selectedChat)?.title}
                        </Typography>
                    </Grid>
                    <Grid item maxHeight={'70%'} overflow={'scroll'} p={{ sm: 4 }} id='myDiv'>
                        <Grid container>
                            {
                                selectedChat && getMessagesQ?.data?.messages.length > 0 && getMessagesQ?.data?.messages?.map((msg, i) => {
                                    return msg.userId === userProfileQ?.data?.id ?
                                        <Grid item xs={12}>
                                            <ChatMessage data={msg} orientation={'right'} />
                                        </Grid> :
                                        <Grid item xs={12}>
                                            <ChatMessage data={msg} orientation={'left'} />
                                        </Grid>
                                })
                            }
                        </Grid>
                    </Grid>
                    {
                        selectedChat &&
                        <Grid item height={'15%'} mt='auto'>
                            <TextField
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                fullWidth
                                label='type your message'
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            onClick={handleSendMessage}
                                            variant="contained"
                                            size="small"
                                            sx={{ borderRadius: 3, margin: 1 }}
                                        >
                                            <SendIcon sx={{ color: 'black' }} />
                                        </Button>
                                    )
                                }}
                                InputLabelProps={{
                                    sx: {
                                        width:'50%',
                                        overflow:'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow:'ellipsis'
                                    }
                                }}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Chat;