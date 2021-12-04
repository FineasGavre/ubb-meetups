import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Meetup } from '../../services/models/Meetup'
import axios from 'axios'

interface MeetupsState {
    meetups: Meetup[]
    pendingServerSync: Meetup[]
}

const initialState: MeetupsState = {
    meetups: [],
    pendingServerSync: [],
}

export const getAllMeetups = createAsyncThunk('meetups/getAll', async (): Promise<Meetup[]> => {
    return (await axios.get<Meetup[]>('/meetup')).data
})

export const meetupsSlice = createSlice({
    name: 'meetups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMeetups.fulfilled, (state, action) => {
            state.meetups = action.payload
        })
    },
})

export default meetupsSlice.reducer
