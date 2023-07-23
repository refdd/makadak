import { useEffect } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Auth() {
  const authed = false
  const router = useRouter();

  useEffect(() => {
    if (!!authed)
      router.replace('/auth')

  }, [authed]);

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
          justifyContent={'center'}
          direction="column"
          margin={'auto'}
          height={"100%"}
          width={{ sm: '70%', xs: '100%' }}
          textAlign={'center'}
        >
          <Grid item>
            <Typography color="white" textAlign="center">
              You need to sign up or login to access <br /> this feature
            </Typography>
          </Grid>
          <Grid item direction="column" container alignItems="center" sx={{ width: "100%", my: 2 }}>
            <Link href="/signup" style={{ width: '100%', marginBottom: 20 }}>
              <Button variant="outlined" fullWidth color="primary">
                Sign up
              </Button>
            </Link>
            <Typography>
              Already have an account?{" "}
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Typography component="span" color="primary" fontWeight="bold">
                  Login
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}
