import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface AuthenticationResponse {
    access_token: string
}

interface AuthenticationState {
    isAuthenticated: boolean
    accessToken: string
}

const initialState: AuthenticationState = {
    isAuthenticated: false,
    accessToken: ''
}

export const authenticate = createAsyncThunk(
    'authentication/authenticate',
    async (payload): Promise<AuthenticationResponse> => {
        return (await axios.post('/auth/login', payload)).data as AuthenticationResponse
    }
)
