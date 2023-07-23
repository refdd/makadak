import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ConfettiExplosion from 'react-confetti-explosion'
import { WinnerCard } from '@/components/Cards/WinnerCard'
import { useRouter } from 'next/router'
import { useGetAuctionDetailsbyIDQuery } from '@/redux/apis/auctionApi'
import { useEffect } from 'react'

export default function Winner(params) {
  const router = useRouter()
  const isPaymentComplete = router.query.paymentComplete
  const auctionId = router?.query?.id;
  const getAuctionQ = useGetAuctionDetailsbyIDQuery({ id: auctionId }, { skip: !auctionId });
  useEffect(() => {
    console.log(getAuctionQ);
  }, [getAuctionQ])
  return (
    <Grid
      height={'auto'}
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    // sx={{ mt: 5, padding:10 }}
    >
      <Grid item container direction="column" alignItems="center" spacing={0.5}>
        {isPaymentComplete && (
          <ConfettiExplosion
            colors={['#33f3ba', '#00F0A9', '#00a876']}
            duration={3000}
          />
        )}
        <Grid item>
          <Typography
            variant="inherit"
            textTransform="uppercase"
            fontSize={18}
            fontWeight={700}
          >
            Congratulations!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="inherit" color="#ffffffCC">
            {isPaymentComplete
              ? 'Payment Complete'
              : 'You are the highest bidder.'}
          </Typography>
        </Grid>
        <Grid item marginTop={2}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
              width: 50,
              height: 50,
            }}
          >
            <Typography variant="inherit" color="primary" fontWeight="bold">
              {getAuctionQ?.data?.lot}
            </Typography>
          </Grid>
        </Grid>
        <Grid item mt={1}>
          <WinnerCard
            isPaymentComplete={isPaymentComplete}
            auction={getAuctionQ?.data}
          />
        </Grid>
      </Grid>
      {isPaymentComplete && (
        <Grid item width="100%" container justifyContent="center" px={2} my={3}>
          <Link href="/" style={{ width: "100%", textAlign: "center" }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: { xs: '100%', lg: '25%' } }}
            >
              Back to Home
            </Button>
          </Link>
        </Grid>
      )}
    </Grid>
  )
}
