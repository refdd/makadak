import { createSlice } from '@reduxjs/toolkit';

const filterData = (data, filter) => {
    return data.filter(el => el[filter.key] === filter.value)
}

const initialState = {
    mainData: [],
    featuredData: [],
    saleData: [],
    auctionData: [],
    upcomingAuctions: []
}
export const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {
        initPartner: (state, action) => {
            const auctionData = filterData(state.mainData, { key: 'type', value: "auction" });
            const featuredData = filterData(state.mainData, { key: 'featured', value: true });
            const saleData = filterData(state.mainData, { key: 'type', value: "sale" });
            const upcomingAuctions = filterData(state.mainData, { key: 'auctionType', value: 'upcoming' });
            state.featuredData = featuredData;
            state.auctionData = auctionData;
            state.saleData = saleData;
            state.upcomingAuctions = upcomingAuctions;
        },
        setPartnersData: (state, action) => {
            state.mainData = action.payload
        }
    }
})


export const { initPartner, setPartnersData } = partnersSlice.actions

export default partnersSlice.reducer