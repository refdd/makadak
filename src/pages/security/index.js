import { Box, Button, Stack, Switch } from "@mui/material";
import profileStyles from "../../components/Profile/profile.module.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import { useRouter } from "next/router";

const Security = () => {
  const router = useRouter()
  return (
    <>
      <div className={profileStyles["margin-two-rem"]}>
        <Box className={`${profileStyles["profile-container"]}`}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            spacing={2}
            padding={1}
          >
          <ArrowBackIosRoundedIcon
          onClick={() => router.back()}
          style={{ cursor: "pointer", position:'absolute', marginLeft:'-2%', marginTop:'.3%' }}
        />
            <span
              className={`${profileStyles["semi-bold"]} ${profileStyles["font-size-25"]}`}
              justify="align"
            >
              Lorem Ipsum is simply dummy
            </span>

            <Switch color="primary" />
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default Security;
