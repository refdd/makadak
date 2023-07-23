import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import profileStyles from "./profile.module.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import {setLogout} from '@/redux/slices/auth.slice'


import PersonIcon from '@mui/icons-material/Person';
import Link from "next/link";
import {useRouter} from "next/router";
import {useChangeNotificationStatusMutation} from "@/redux/apis/notificationApi";
import {useDeleteProfileMutation} from "@/redux/apis/profile.api";

const ProfileDetails = ({userProfileData}) => {

    const [deleteProfileQuery] = useDeleteProfileMutation();
    const router = useRouter()
    return (
        <Box className={`${profileStyles["profile-container"]}`}
             style={{padding: '3%', height: '100%'}}

        >
            <Grid container justifyContent={'space-between'} p={2}>
                <Grid item>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography fontSize={22} fontWeight={700}> My Profile </Typography>
                        </Grid>


                    </Grid>
                </Grid>
                <Grid item>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        {/* <Link href="/" onClick={() => {
                            deleteProfileQuery();
                            dispatch(setLogout(false))
                        }}
                              style={{textDecoration: 'none', color: 'grey'}}>
                            <DeleteIcon/>
                        </Link> */}
                        <Link href={"profile/edit"} style={{textDecoration: 'none', color: 'grey'}}>
                            <EditIcon/>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Stack
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Box display={"flex"} alignItems={"center"} justifyContent={'center'} pt={3}>
                    <Image
                        src="/imgs/images.jpeg"
                        sizes="(width: 768px) 10vw, (width: 1200px) 10vw, 10vw"
                        width={150}
                        height={150}
                        alt=""
                        style={{borderRadius: '50%'}}
                    />
                </Box>

                <Box justifyContent="flex-start" mx={2} py={4}>
                    <Typography fontWeight={500} color='whitesmoke'>
                        {userProfileData?.firstName}
                    </Typography>
                    <Typography fontWeight={500} color='whitesmoke'>
                        {userProfileData?.email}
                    </Typography>
                    <Typography fontWeight={500} color='whitesmoke'>
                        {userProfileData?.mobile}
                    </Typography>
                </Box>

            </Stack>


        </Box>
    );
};

export default ProfileDetails;
