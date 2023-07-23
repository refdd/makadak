import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import profileStyles from "../../components/Profile/profile.module.css";
import { useRouter } from "next/router";
export default function About() {
const router = useRouter()

  return (
    <div className={profileStyles["margin-two-rem"]}>
      <Box className={`${profileStyles["profile-container"]}`}>
        <Stack direction="row" alignItems="center" spacing={2} mb={2} padding={2}>
        <ArrowBackIosRoundedIcon
        onClick={() => router.back()}
        style={{ cursor: "pointer", position:'absolute', marginLeft:'-2%', marginTop:'.3%' }}
      />
          <div>
            <span
              className={`${profileStyles["bold"]} ${profileStyles["font-size-25"]}`}
            >
              Contact Info
            </span>
          </div>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Box justifyContent="flex-start">
            <p
              className={`${profileStyles["margin-bottom-half-rem"]} ${profileStyles["break-all"]} ${profileStyles["bold"]} ${profileStyles["font-size-20"]}`}
            >
              For all business inquiries:
            </p>{" "}
            <Box display={"flex"} flexDirection={"row"}>
              <p
                className={`${profileStyles["margin-bottom-half-rem"]} ${profileStyles["break-all"]} ${profileStyles["text"]}`}
              >
                Phone:{" "}
              </p>{" "}
              <a color={"primary"} href="tel:920026625">
                {" "}
                <Typography
                  mx={1}
                  color={"primary"}
                  className={profileStyles["underline"]}
                >
                  920026625{" "}
                </Typography>
              </a>{" "}
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <p
                className={`${profileStyles["margin-bottom-half-rem"]} ${profileStyles["break-all"]} ${profileStyles["text"]}`}
              >
                Email:{" "}
              </p>{" "}
              <a href="mailto:info@mazadak.com">
                {" "}
                <Typography
                  mx={1}
                  color={"primary"}
                  className={profileStyles["underline"]}
                >
                  info@mazadak.com
                </Typography>
              </a>{" "}
            </Box>
          </Box>
        </Stack>

        <Box mt={2}>
          <p
            className={`${profileStyles["margin-bottom-half-rem"]} ${profileStyles["break-all"]} ${profileStyles["bold"]} ${profileStyles["font-size-20"]}`}
          >
            Address:
          </p>

          <p
            className={`${profileStyles["margin-zero"]} ${profileStyles["text"]}`}
          >
            Al Rawdah, Jaddah, Saudi Arabia
          </p>
        </Box>
      </Box>

      <p className={`${profileStyles['text']}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the {"industry's"} standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
