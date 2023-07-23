import { createSlice } from '@reduxjs/toolkit'
import data from '@/data/data.json';

const initialState = {
    data: data
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addOffer: (state, action) => {
            const updatedData = state.data.map(el => {
                if (el.id === action?.payload?.id) {
                    el.offer = true
                    el.offerAmount = action.payload.amount
                }
                return el;
            })
            state.data = updatedData;
        },
        addItem: (state, action) => {
            const item = {
                "id": state.data.length,
                "userId": 0,
                "img": '/imgs/logo-large.png',
                "heading": "Car Plate",
                "flag": "jo",
                "description": "2005 BMW 5 Series 523i (e60)",
                "note": "4200 km",
                "catId": 5,
                "subcatId": 0,
                "featured": true,
                "addedAt": "07/04/2023",
                "views": 100,
                "clicks": 50,
                "sold": "07/06/2023",
                "isFavourite": false,
                "type": "auction",
                "auctionType": "active",
                "link": "/lot-details"
            }
            state.data.push(item);
        },
        setItem: (state, action) => {
            state.item = state.data.find(el => el.id === action.payload)
        },
        addToFavourite: (state, action) => {
            const updatedData = state.data.map(el => {
                if (el.id === action.payload) {
                    if (el.isFavourite) el.isFavourite = false;
                    else el.isFavourite = true;
                }
                return el;
            })
            state.data = updatedData;
        }
    },
})


export const { addOffer, addItem, setItem, addToFavourite } = dataSlice.actions

export default dataSlice.reducer