import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    balance: 10000000,
    favourites: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        topupBalance: (state, action) => {
            state.balance = state.balance + action.payload;
        },
        deductBalance: (state, action) => {
            state.balance = state.balance - action.payload
        }
    },
})


export const { topupBalance, deductBalance } = userSlice.actions

export default userSlice.reducer