
import ProfileDetails from "@/components/Profile/ProfileDetails";
import Settings from "@/components/Profile/settings/SettingsContainer";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Grid } from "@mui/material";
import * as React from "react";
import { useGetProfileQuery } from "@/redux/apis/profile.api";
import { useRouter } from "next/router";

export default function Profile(props) {
  const router = useRouter();
  const profileQuery = useGetProfileQuery({}, { refetchOnMountOrArgChange: true });
  
  return (
    <>
      <Grid px={{ lg: 4, md: 1 }}>
        <ArrowBackIosRoundedIcon fontSize="20" onClick={() => router.push('/')} />
      </Grid>
      <Grid
        container
        spacing={{ md: 2 }}
        height={"auto"}
        padding={{ lg: 3 }}
        width={{ lg: "70vw" }}
        style={{ margin: "auto" }}
      >
        <Grid item xs={12} md={4} my={{ xs: 2, md: 0 }}>
          <ProfileDetails userProfileData={profileQuery?.data} />
        </Grid>
        <Grid item xs={12} md={8} height={"100%"}>
          <Settings />
        </Grid>
      </Grid>
    </>
  );
}
