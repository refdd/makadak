import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    bids: [],
    offers: [],
    auctionItems: [],
    saleItems: [],
    favourites: []
}
const filterData = (data, filter) => {
    return data.filter(el => el[filter.key] === filter.value)
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccountData: (state, action ) => {
            state.data = action.payload;
            const offersData = filterData(action.payload, { key: 'offer', value: true });
            const bidsData = filterData(action.payload, { key: 'bid', value: true });
            const myData = filterData(action.payload, { key: 'userId', value: 0 });
            const auctionData = filterData(myData, { key: 'type', value: 'auction' });
            const saleData = filterData(myData, { key: 'type', value: 'sale' });
            const favouritesData = filterData(action.payload, { key: 'favourite', value: true });
            state.offers = offersData;
            state.bids = bidsData;
            state.auctionItems = auctionData;
            state.saleItems = saleData;
            state.favourites = favouritesData;
        }
    },
})


export const { setBids, setOffers, setItems, setFavourites, setAccountData } = accountSlice.actions

export default accountSlice.reducer