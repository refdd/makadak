import React, { useState } from 'react'
import { Typography, Grid, Container, Button } from '@mui/material'

import { TextField } from '@mui/material'
import { useGetProfileAmountQuery, useRequestWithdrawMutation } from '@/redux/apis/walletApi';

export default function Withdraw() {


  const [withdrawState, setWithdrawState] = useState({
    amount: null,
    iban: null,
    name: null,
    mobile: null
  });
  const [requestWithdraw, requestRes] = useRequestWithdrawMutation();
  const profileDetails = useGetProfileAmountQuery();

  const handleWithdraw = () => {
    requestWithdraw({
      amount: withdrawState.amount,
      currencyCode: profileDetails?.data?.currency?.code,
      iban: withdrawState.iban,
      name: withdrawState.name,
      mobile: withdrawState.mobile,
    });
  }

  const handleInputChange = (e) => {
    setWithdrawState(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  return (
    <Grid
      container
      width={'100%'}
      alignItems={'center'}
      padding={1}
      sx={{
        width: '100%',
        padding: '1rem',
        '@media (min-width:960px)': {
          maxWidth: '50%',
          margin: 'auto',
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: '30px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            tortor facilisis, faucibus enim ac, varius libero. Nunc auctor augue
            id metus
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          width={'100%'}
          display="flex"
          sx={{ marginTop: '30px', borderRadius: '20px' }}
        >
          <TextField
            name='amount'
            onChange={handleInputChange}
            variant="outlined"
            label={
              <>
                Enter amount{' '}
                <span style={{ color: 'red', width: '200px' }}>*</span>
              </>
            }
            defaultValue={0}
            InputLabelProps={{
              shrink: true,
              style: {
                transformOrigin: 'top left',
                top: '-1px',
                left: '6px',
              },
            }}
            fullWidth
            sx={{ borderRadius: '30px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Extra Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField

            name='iban'
            onChange={handleInputChange}
            variant="outlined"
            label=""
            defaultValue={'IBAN'}
            InputLabelProps={{
              shrink: true,
              style: {
                transformOrigin: 'top left',
                top: '-1px',
                left: '6px',
              },
            }}
            fullWidth
            sx={{ borderRadius: '30px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='name'
            onChange={handleInputChange}
            variant="outlined"
            label={
              <>
                Account holder{"'"}s name{' '}
                <span style={{ color: 'red', width: '200px' }}>*</span>
              </>
            }
            defaultValue={0}
            InputLabelProps={{
              shrink: true,
              style: {
                transformOrigin: 'top left',
                top: '-1px',
                left: '6px',
              },
            }}
            fullWidth
            sx={{ borderRadius: '30px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField

            name='mobile'
            onChange={handleInputChange}
            variant="outlined"
            label={
              <>
                Mobile phone number
                <span style={{ color: 'red', width: '200px' }}>*</span>
              </>
            }
            defaultValue={'+966'}
            InputLabelProps={{
              shrink: true,
              style: {
                transformOrigin: 'top left',
                top: '-1px',
                left: '6px',
              },
            }}
            fullWidth
            sx={{ borderRadius: '30px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleWithdraw}
            fullWidth
            variant="outlined"
            color="primary"
            style={{
              borderColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '30px',
              marginTop: '20px',
              height: '60px',
            }}
          >
            WITHDRAW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
