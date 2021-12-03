import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Meetup } from '../../services/models/Meetup'
import axios from 'axios'

interface MeetupsState {
    meetups: Meetup[]
}

const initialState: MeetupsState = {
    meetups: []
}

export const syncMeetups = createAsyncThunk(
    'meetups/sync',
    async (): Promise<Meetup[]> => {
        return (await axios.get<Meetup[]>('/meetup')).data
    }
)

export const meetupsSlice = createSlice({
    name: 'meetups',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(syncMeetups.fulfilled, (state, action) => {
            state.meetups = action.payload
        })
    }
})

export default meetupsSlice.reducer

