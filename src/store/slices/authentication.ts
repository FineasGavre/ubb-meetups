import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface AuthenticationRequest {
    email: string
    password: string
}

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
    async (payload: AuthenticationRequest): Promise<AuthenticationResponse> => {
        return (await axios.post<AuthenticationRequest, AuthenticationResponse>('/auth/login', payload)) as AuthenticationResponse
    }
)
