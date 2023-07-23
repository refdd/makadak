import { Box, Button, Stack } from "@mui/material";
import profileStyles from "../../components/Profile/profile.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const Leasing = () => {
  const router = useRouter();

  return (
    <div style={{height:'100vh'}}>
      <ArrowBackIosRoundedIcon
        onClick={() => router.back()}
        sx={{
          cursor: "pointer",
          marginLeft: "2%",
          marginTop: "2%",
          marginBottom:'1%',
          fontSize:18
        }}
      />

      <div
        className={profileStyles["margin-two-rem"]}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "4%",
        }}
      >
        <Box
          className={`${profileStyles["profile-container"]}`}
          sx={{
            width: {xs:"100%",sm:"30%"},
            minWidth: 200,
            marginBottom: 10,
          }}
        >
          <Stack
            height={'100%'}
            direction="column"
            alignItems="center"
            justifyContent={"center"}
            spacing={2}
            mb={2}
            padding={2}
          >
            <span
              className={`${profileStyles["semi-bold"]} ${profileStyles["font-size-25"]}`}
            >
              Saudi Fransi Leasing
            </span>
            <Link href={'https://www.fransileasing.com/'} target="_black" className={profileStyles["full-width"]}>
              <Button
                variant="outlined"
                className={profileStyles["outlined-black-btn"]}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Box>

        <Box
          className={`${profileStyles["profile-container"]}`}
          sx={{
            width: {xs:"100%",sm:"30%"},
            minWidth: 200,
            marginBottom: 10,
          }}
        >
          <Stack
            height={'100%'}
            direction="column"
            alignItems="center"
            justifyContent={"center"}
            spacing={2}
            mb={2}
          >
            <span
              className={`${profileStyles["semi-bold"]} ${profileStyles["font-size-25"]}`}
            >
              Al Yusr
            </span>

            <Link href={"https://alyusr.com.sa/"} target="_black" className={profileStyles["full-width"]}>
              {" "}
              <Button
                variant="outlined"
                className={profileStyles["outlined-black-btn"]}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Leasing;
