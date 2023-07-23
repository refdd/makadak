import { notificationsData } from '@/lib/constants';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notification: null,
    notificationsData: notificationsData
}
export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload;
        }
    },
})


export const { setNotification } = notificationsSlice.actions

export default notificationsSlice.reducer