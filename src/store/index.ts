import { configureStore } from '@reduxjs/toolkit'
import MeetupsReducer from './slices/meetups'
import AuthenticationReducer from './slices/authentication'

export const store = configureStore({
    reducer: {
        meetups: MeetupsReducer,
        authentication: AuthenticationReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
