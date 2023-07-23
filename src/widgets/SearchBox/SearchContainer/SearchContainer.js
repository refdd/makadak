import { Alert, Box, Button, Grid, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import SearchBox from "../SearchBox";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import { useAddWatchlistMutation } from "@/redux/apis/account/myWatchList.api";
import { useSelector } from "react-redux";
import CustomDialog from "@/components/CustomDialog/CustomDialog";

export default function SearchContainer({
  searchValue,
  onSearchInputChange,
  hideSearch,
}) {
  const [watchlistDialog, setWatchlistDialog] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    type: 'error'
  });
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { filter } = useSelector(
    (state) => state.advanceSearch
  );
  const [addWatchlistQ, { isLoading }] = useAddWatchlistMutation();
  const handleSaveWatchlist = () => {
    setWatchlistDialog(true)
  }
  const handleSubmitWatchlist = () => {
    const filterCopy = { ...filter }
    Object.keys(filterCopy).forEach(key => {
      if (filterCopy[key] == null) {
        delete filterCopy[key];
      }
    });
    addWatchlistQ({ ...filterCopy, ...watchlistState }).unwrap()
      .then(res => {
        setSnackbarState(state => ({
          type: 'success',
          open: true,
          message: 'Saved watchlist successfully'
        }))
        setWatchlistDialog(false);
        setWatchlistState({
          name: '',
          description: ''
        })
      }).catch(e => {
        setSnackbarState(state => ({
          type: 'error',
          open: true,
          message: e.data.payload.validation[0].errors[0].message
        }))
      })
  }
  const [watchlistState, setWatchlistState] = useState({
    name: '',
    description: ''
  })
  const handleInputChange = (e) => {
    setWatchlistState(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  return (
    <>
      <Grid
        container
        width={'100%'}
        alignItems="center"
        justifyContent="center"
        margin={"auto"}
      // rowGap={1}
      >
        {!hideSearch && (
          <SearchBox
            onSearchInputChange={onSearchInputChange}
            searchValue={searchValue}
          />
        )}
        <Grid item xs={12} sm={7} display='flex' justifyContent={{ xs: 'center', sm: 'end' }}>
          <AdvancedSearch
            onSearchInputChange={onSearchInputChange}
            searchValue={searchValue}
          />
        </Grid>
        <Grid item xs={12} sm={5} display='flex' justifyContent={'end'} px={4}>
          <Typography fontSize={14} sx={{ cursor: 'pointer' }} onClick={handleSaveWatchlist}>
            + Add to watchlist
          </Typography>
        </Grid>
        <CustomDialog
          open={watchlistDialog}
          title='Save Watchlist'
          handleClose={() => setWatchlistDialog(false)}
          component={
            <Box justifyContent={'center'} alignItems={'center'} flexDirection={{ sx: 'column', sm: 'row' }}>
              <TextField
                label='Watchlist Name'
                value={watchlistState.name}
                onChange={handleInputChange}
                name='name'
                fullWidth
                sx={{ my: 2 }}
              />
              <TextField
                label='Watchlist Description'
                value={watchlistState.description}
                name='description'
                fullWidth
                onChange={handleInputChange}
              />
              <br />
              <Button
                onClick={handleSubmitWatchlist}
                sx={{ float: 'right' }}
                color='primary'
                disabled={isLoading}
              >
                Save Watchlist
              </Button>
            </Box>
          } />
        <Snackbar
          open={snackbarState.open}
          onClose={() => setSnackbarState(state => ({ ...state, open: false }))}
          autoHideDuration={2000}
        >
          <Alert severity={snackbarState.type}>{snackbarState.message}</Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
