import { Grid, Typography } from "@mui/material";
import NotificationCard from "@/components/NotificationCard/NotificationCard";
import * as React from 'react';
import Button from '@mui/material/Button';
import NotificationsDialog from "@/components/NotificationsDialog/NotificationsDialog";
import { useChangeNotificationStatusMutation, useGetNotificationsQuery } from "@/redux/apis/notificationApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const NotificationPage = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const dispatch = useDispatch();
    const notificationQuery = useGetNotificationsQuery(selectedFilter);
    const [changeNotificationStatusQ] = useChangeNotificationStatusMutation();
    const handleNotificationClick = (id) => {
        changeNotificationStatusQ(id).unwrap()
            .then(res => {
                console.log('##RES', res);
            }).catch(e => {
                console.log('##E', e);
            })
    }
    const renderNotification = notificationQuery?.data?.data?.map((note) => {
        return (
            <Grid item key={note?.id} onClick={() => handleNotificationClick(note?.id)}>
                <NotificationCard
                    onClick={() => dispatch(setNotification(note.id))}
                    date={note?.createdAt}
                    description={note?.text}
                    title={note?.title}
                    img={note?.imageUrl}
                    createdAt={note?.createdAt}
                    status={note?.status}
                />
            </Grid>
        )
    })

    return (
        <Grid container flexDirection={'column'} width={{ xs: '100%', md: '50%' }} margin={'auto'} spacing={1}>
            <Grid item>
                <Grid container flex justifyContent={'space-between'}>
                    <Grid item>
                        <Typography fontSize={20} fontWeight={900}>Notifications</Typography>
                    </Grid>
                    <Grid item>
                        <NotificationsDialog />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    sx={{
                        background: selectedFilter === null ? "#121212" : 'transparent',
                        borderRadius: "12px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        height: "47px",
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "primary",
                        },

                        boxShadow: selectedFilter === null ? "none" : "",
                        border: selectedFilter === null ? "2px solid #00a876" : '',
                        color: selectedFilter === null ? "#00a876" : "",
                    }}
                    onClick={() => setSelectedFilter(null)}
                >
                    All
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        background: selectedFilter === 'unread' ? "#121212" : 'transparent',
                        borderRadius: "12px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        height: "47px",
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "primary",
                        },

                        boxShadow: selectedFilter === 'unread' ? "none" : "",
                        border: selectedFilter === 'unread' ? "2px solid #00a876" : '',
                        color: selectedFilter === 'unread' ? "#00a876" : "",
                    }}
                    onClick={() => setSelectedFilter('unread')}
                >
                    Unread
                </Button>
            </Grid>
            <Grid item>
                <Grid container flexDirection={'column'} spacing={2}>
                    <Grid item>
                        <Typography fontWeight={700}>New</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container flexDirection={'column'} spacing={2} overflowX={'scroll'}>
                            {renderNotification}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default NotificationPage;

