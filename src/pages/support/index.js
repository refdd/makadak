import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import profileStyles from "../../components/Profile/profile.module.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatModal from "@/components/Profile/settings/Support/chatModal";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useRouter } from "next/router";
import CustomizedSnackbars from "@/components/CustomSnackbar/CustomSnackbar";

const Support = () => {
  const [isChatModalOpen, setChatModalOpen] = useState(false);

  const openChatModal = () => {
    setChatModalOpen(true);
  };
  const router = useRouter()

  return (
    <Grid sx={{ width: { xs: '100%', md: '40%' }, margin: 'auto' }}>
      <Box className={`${profileStyles["margin-two-rem"]}`}>
        <ArrowBackIosRoundedIcon
          onClick={() => router.back()}
          style={{ cursor: "pointer", position: 'absolute', marginLeft: '-2%', marginTop: '.3%' }}
        />
        <p
          className={`${profileStyles["bold"]} ${profileStyles["font-size-25"]}`}
          style={{ textAlign: 'center' }}
        >
          Support Contact Info
        </p>
        <List>
          <ListItem
            disablePadding
            className={`${profileStyles["dark-grey-background"]} ${profileStyles["border-radius-top"]}`}
          >
            <ListItemButton
              className={profileStyles["padding-one-rem-responsive"]}
              onClick={openChatModal}
            >
              <Stack
                sx={{ width: "100%" }}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={"row"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <ListItemIcon className={profileStyles["min-width-37px-sm"]}>
                    <ChatOutlinedIcon color={"primary"} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span
                        className={`${profileStyles["bold"]} ${profileStyles["text"]}`}
                      >
                        Chat With Us
                      </span>
                    }
                  />
                </Box>

                <KeyboardArrowRightOutlinedIcon color={"primary"} />
              </Stack>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            className={`${profileStyles["dark-grey-background"]} ${profileStyles["margin-column-one-rem"]}`}
          >
            {" "}
            <a
              href={"https://wa.me/+966920026625"}
              target="_blank"
              className={`${profileStyles["full-width"]}  ${profileStyles["text-decoration-none"]} `}
            >
              <ListItemButton
                className={profileStyles["padding-one-rem-responsive"]}
              >
                <Stack
                  sx={{ width: "100%" }}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <ListItemIcon
                      className={profileStyles["min-width-37px-sm"]}
                    >
                      <WhatsAppIcon color={"primary"} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span
                          className={`${profileStyles["bold"]} ${profileStyles["color-white"]} ${profileStyles["text"]}`}
                        >
                          Connect Us On WhatsApp
                        </span>
                      }
                    />
                  </Box>

                  <KeyboardArrowRightOutlinedIcon color={"primary"} />
                </Stack>
              </ListItemButton>{" "}
            </a>
          </ListItem>

          <ListItem
            disablePadding
            className={`${profileStyles["dark-grey-background"]} ${profileStyles["margin-column-one-rem"]}`}
          >
            <a
              href="tel:920025525"
              className={`${profileStyles["full-width"]}  ${profileStyles["text-decoration-none"]} `}
            >
              {" "}
              <ListItemButton
                className={profileStyles["padding-one-rem-responsive"]}
              >
                <Stack
                  sx={{ width: "100%" }}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={{ xs: '', sm: "center" }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <ListItemIcon
                      className={profileStyles["min-width-37px-sm"]}
                    >
                      <SupportAgentIcon color={"primary"} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span
                          className={`${profileStyles["bold"]} ${profileStyles["color-white"]} ${profileStyles["text"]}`}
                        >
                          Phone Number
                        </span>
                      }
                    />
                  </Box>

                  <Typography
                    color="primary"
                    className={`${profileStyles["underline"]} ${profileStyles["text"]}`}
                  >
                    920025525
                  </Typography>
                </Stack>
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem
            disablePadding
            className={`${profileStyles["dark-grey-background"]} ${profileStyles["margin-column-one-rem"]} ${profileStyles["border-radius-bottom"]}`}
          >
            <a
              href="mailto:support@mazadak.com"
              className={`${profileStyles["full-width"]}  ${profileStyles["text-decoration-none"]} `}
            >
              {" "}
              <ListItemButton
                className={profileStyles["padding-one-rem-responsive"]}
              >
                <Stack
                  sx={{ width: "100%" }}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={{ xs: '', sm: "center" }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <ListItemIcon
                      className={profileStyles["min-width-37px-sm"]}
                    >
                      <EmailOutlinedIcon color={"primary"} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span
                          className={`${profileStyles["bold"]} ${profileStyles["color-white"]} ${profileStyles["text"]}`}
                        >
                          Email
                        </span>
                      }
                    />
                  </Box>

                  <Typography
                    color="primary"
                    className={`${profileStyles["underline"]} ${profileStyles["text"]}`}
                  >
                    support@mazadak.com
                  </Typography>
                </Stack>
              </ListItemButton>
            </a>
          </ListItem>
        </List>
      </Box>

      {isChatModalOpen && (
        <ChatModal
          onClose={() => setChatModalOpen(false)}
          open={isChatModalOpen}
        ></ChatModal>
      )}
    </Grid>
  );
};

export default Support;
