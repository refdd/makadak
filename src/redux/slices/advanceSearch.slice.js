import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    saleType: 'all'
  },
  data: [],
  vehicleMake: [],
  vehicleModal: [],
  vehicleTrim: [],
};

export const advanceSearchSlice = createSlice({
  name: "advanceSearch",
  initialState,
  reducers: {
    onAddFilter: (state, action) => {
      state.filter = { ...state.filter, ...action?.payload };
    },
    setData: (state, action) => {
      state.data = action?.payload;
    },

    setVehicleMaker: (state, action) => {
      state.vehicleMake = action?.payload;
      state.vehicleModal = [];
      state.vehicleTrim = [];
      state.filter.model = null;
      state.filter.trim = null;
    },
    setVehicleModal: (state, action) => {
      state.vehicleModal = action?.payload;
      state.vehicleTrim = [];
      state.filter.model = null;
      state.filter.trim = null;
    },
    setVehicleTrim: (state, action) => {
      state.vehicleTrim = action?.payload;
      state.filter.trim = null;
    },
    resetSearch: (state, action) => {
      state.filter = {}
      state.data = []
    }
  },
});

export const {
  onAddFilter,
  setData,
  setVehicleTrim,
  setVehicleModal,
  setVehicleMaker,
  resetSearch
} = advanceSearchSlice.actions;

export default advanceSearchSlice.reducer;
