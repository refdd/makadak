import { Box, Button, Grid, Typography } from "@mui/material";
import profileSettings from "../profile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Settings = () => {
  const router = useRouter();
  const settings = [
    { id: 1, name: "Wallet", img: "wallet.svg", route: "/wallet" },
    { id: 2, name: "Favourites", img: "favIcon.svg", route: "/favourite" },
    { id: 3, name: "Support", img: "question.svg", route: "/support" },
    { id: 4, name: "About", img: "about.svg", route: "/about" },
    // { id: 5, name: "Security", img: "security.svg", route: "/security" },
    { id: 6, name: "Leasing", img: "leasing.svg", route: "/leasing" },
    { id: 7, name: "Reports", img: "reports.svg", route: "/report" },
    // { id: 8, name: "T’s & C’s", img: "ts-cs.svg", route: "/terms-and-conditions" }
  ];

  const navigate = (name) => {
    router.push({
      pathname: name,
    });
  };

  return (
    <Grid
      container
      spacing={2}
    >
      {settings?.map((ele, i) => (
        <Grid
          key={i}
          item
          xl={4}
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <Box
            direction="column"
            justifyContent="center"
            alignItems="center"
          >

            <Button
              className={`${profileSettings["setting-card"]}`}
              onClick={() => navigate(ele?.route)}
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor:'#232323'
              }}
            >
              <Typography fontWeight={700} color='white'>
                {ele?.name}
              </Typography>
              <Image
                src={`/imgs/${ele?.img}`}
                width={"25"}
                height={"25"}
              >
              </Image>
            </Button>


          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Settings;
