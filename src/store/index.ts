import { configureStore } from '@reduxjs/toolkit'
import MeetupsReducer from './slices/meetups'


export const store = configureStore({
    reducer: {
        meetups: MeetupsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
