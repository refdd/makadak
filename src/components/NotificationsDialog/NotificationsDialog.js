import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import IOSSwitch from '../IOSSwitch/IOSSwitch';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { useGetPreferencesQuery, useUpdNotificationPreferencesMutation, useUpdateNotificationPreferenceMutation } from '@/redux/apis/notificationApi';
import { useEffect } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    background: '',
    borderRadius: '12px'
  },
  '& .MuiPaper-rounded': {
    borderRadius: '12px'
  }

}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function NotificationsDialog() {
  const [open, setOpen] = React.useState(false);
  const [updatePrefQ] = useUpdateNotificationPreferenceMutation();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const settingsMapping = {
    'bids': 'Bids',
    'auctions': 'Your Auctions',
    'watchlists': 'Watchlists',
    'favorites': 'Favourites',
    'weekly-updates': 'Weekly Updates',
    'chat': 'Chat',
    'support': 'Contact Us',
    'news-and-offers': 'News and Offers'
  }

  const getPrefsQ = useGetPreferencesQuery();
  useEffect(() => {
    console.log(getPrefsQ);
  }, [getPrefsQ])

  const handleInputChange = (category, checked) => {
    updatePrefQ({ category, checked }).unwrap()
      .then(res => {
        console.log('PREFRES', res);
      }).catch(e => {
        console.log('PREFERR', e);
      })
  }
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <SettingsIcon />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notifications Settings
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ width: { xs: '80vw', sm: '80vw', md: '30vw' } }}>
          <Grid container spacing={1} flexDirection={'column'} padding={{ xl: 1 }}>
            {
              getPrefsQ?.data?.data?.map((setting, i) =>
                <Grid item key={i}>
                  <Grid container justifyContent={'space-between'}>
                    <Grid item>
                      <Typography fontWeight={600}>{settingsMapping[setting.category]}</Typography>
                    </Grid>
                    <Grid item>
                      <IOSSwitch
                        checked={setting.opted}
                        onChange={(e) =>
                          handleInputChange(setting.category, e.target.checked)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            }
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
