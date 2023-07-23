import { useState, useEffect } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomInput from "@/components/CustomInput/CustomInput";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import CustomDialog from "@/components/CustomDialog";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { useResetPasswordMutation } from "@/redux/apis/authApi";
import { Box, FormGroup } from "@mui/material";
import Image from "next/image";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  console.log(userEmail);

  const [resetPassword] = useResetPasswordMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    resetPassword(userEmail)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.error("Reset password failed", error);
      });
  };


  const handleDialogClose = () => {
    console.log("closing");
    dispatch(
      setAuthState({
        error: null,
        success: false,
      })
    );
    setOpenDialog(false);
  };

  return (
    <Grid
      container
      width={{ lg: '70vw' }}
      height={'70vh'}
      margin={{ lg: 'auto' }}
      style={{ marginTop: 25 }}
      sx={{ background: '#262626', borderRadius: 4 }}
    >
      <Grid
        item xs={12} sm={6}
        sx={{
          background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .9));',
          borderRadius: '0 12px 12px 0',
          display: { xs: 'none', sm: 'flex' }
        }}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        width={'100%'}
        height={'100%'}
      >
        <Box
          position={'relative'}
          display='flex'
          alignItems={'center'}
          height={'50%'}
          width={'50%'}
        >
          <Image
            style={{ objectFit: 'contain' }}
            fill
            src={'/imgs/logo-large.png'}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} p={{ xs: 2 }} height={'100%'}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          m="auto"
          width={{ xs: "100%", sm: '70%' }}
          wrap="nowrap"
          height={'100%'}
        >
          <CustomDialog
            title={'title'}
            message={'msg'}
            open={openDialog}
            handleClose={() => handleDialogClose()}
          />
          <Grid
            item
            pb={4}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Link href={"/login"} style={{ textDecoration: 'none' }}>
                <Grid container alignItems="center">
                  <ArrowBackIosIcon sx={{ fontSize: 10 }} fontSize="small" color="primary" />
                  <Typography fontSize={12} color="primary">Login</Typography>
                </Grid>
              </Link>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="inherit" fontWeight="bold">
                Forgot Password
              </Typography>
            </Grid>
            <Grid item width={64} />
          </Grid>
          <Box sx={{ width: '100%' }}>

            <form onSubmit={handleFormSubmit}>
              <FormGroup>

                <CustomInput
                  value={userEmail}
                  name="email"
                  handleInputChange={(e) => setUserEmail(e.target.value)}
                  label={"Email"}
                />

                <IconButton
                  disabled={!userEmail}
                  sx={{
                    border: (theme) => `1px solid ${theme.palette.primary.main}`,
                    p: 2,
                    mt: 4,
                    alignSelf: "end",
                    "&:disabled": {
                      opacity: 0.4,
                    },
                  }}
                >
                  <CheckIcon color="primary" />
                </IconButton>
              </FormGroup>
            </form>
          </Box>

        </Grid>
      </Grid>

    </Grid>
  );
}
