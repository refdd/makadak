import { createSlice } from '@reduxjs/toolkit'

import cookieCutter from 'cookie-cutter'

const initialState = {
    token: {},
    user: {},
    authed: false,
    configs: []
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            cookieCutter.set('accessToken', action.payload.token.accessToken, { expires: action.payload.expiresIn })
            state.authed = true;
        },
        setLogout: (state, action) => {
            state.authed = false;
            delete state.user;
            delete state.token;
            cookieCutter.set('accessToken', '', { expires: new Date(0) });
        },
        isAuthed: (state, action, user) => {
            state.authed = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        setConfigs: (state, action) => {
            state.configs = action.payload
        },
        setTokenStore: (state, action) => {
            state.token = {}
            state.token.accessToken = action.payload
        }
    },
})


export const { setAuth, setLogout, isAuthed, setConfigs, setTokenStore } = authSlice.actions;

export default authSlice.reducer