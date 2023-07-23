import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomInput from "@/components/CustomInput/CustomInput";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomDialog from "@/components/CustomDialog";
import { wrapper } from "@/redux/store";
import { getRunningMutationsThunk, getRunningQueriesThunk, login, useLoginMutation, useLoginQuery, useLoginStatusQuery } from "@/redux/apis/authApi";
import { setAuth } from "@/redux/slices/auth.slice";
import { Box, FormGroup } from "@mui/material";
import Image from "next/image";

export default function Login() {
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong");
  const state = useSelector(state => state?.auth)
  // useEffect(() => {
  //   console.log({ authed }, { authError });
  //   if (!authed && authError) {
  //     setOpenDialog(true);
  //     if (authError.message == "Validation failed") {
  //       setErrorMessage(authError.payload.validation[0].errors[0].message);
  //     } else {
  //       setErrorMessage(authError.message);
  //     }
  //   } else if (authed) {
  //     router.push("/");
  //   }
  // }, [authed, authError]);

  const router = useRouter();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [loginQ, loginRes] = useLoginMutation();
  const submit = (e) => {
    e.preventDefault()
    const { email, password } = formState;
    switch (true) {
      case !email && !password:
        emailInputRef.current.focus();
        break;
      case !password:
        passwordInputRef.current.focus();
        break;
      default: {
        loginQ(formState).unwrap()
          .then((res) => {
            dispatch(setAuth(res));
            router.replace('/')
          })
          .catch((error) => {
            setErrorMessage(error?.message ?? (error?.payload?.validation.length && [0].errors[0].message));
            setOpenDialog(true);
          });
      }
    }
  }


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
      <Grid item xs={12} sm={6} p={{ xs: 2 }} display='flex' height={'100%'}>
        <Grid
          container
          justifyContent={'center'}
          direction="column"
          margin={'auto'}
          width={{ sm: '70%', xs: '100%' }}
        >
          <CustomDialog
            title={"Error"}
            message={errorMessage}
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
          />
          <Grid
            item
            pb={3}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Link href={"/auth"} style={{ textDecoration: "none" }}>
                <Grid container alignItems="center">
                  <ArrowBackIosIcon sx={{ fontSize: 10 }} fontSize="small" color="primary" />
                  <Typography fontSize={12} color="primary">Back</Typography>
                </Grid>
              </Link>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="inherit" fontWeight="bold">
                Login
              </Typography>
            </Grid>
            <Grid item width={64} />
          </Grid>
          <form onSubmit={submit}>
            <FormGroup>
              <CustomInput
                ref={emailInputRef}
                value={formState.email}
                name="email"
                handleInputChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                label={"Email"}
              />
              <CustomInput
                ref={passwordInputRef}
                value={formState.password}
                name="password"
                isPasswordField
                handleInputChange={(e) =>
                  setFormState({ ...formState, password: e.target.value })
                }
                label={"Password"}
              />
              <Grid container justifyContent={'space-between'}>
                <Link href="/reset-password">
                  <Button
                    variant="text"
                    color="primary"
                    disableRipple
                    sx={{
                      "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
                    }}
                  >
                    Forgot Password?
                  </Button>
                </Link>
                <IconButton
                  sx={{
                    alignSelf: "end",
                    border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  }}
                  type="submit"
                >
                  <CheckIcon color="primary" />
                </IconButton>
              </Grid>
            </FormGroup>
          </form>
        </Grid>
      </Grid>

    </Grid>
  );
}
