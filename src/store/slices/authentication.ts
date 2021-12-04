import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

const setupAuthInterceptor = (accessToken: string) => {
    axios.interceptors.request.use((config) => {
        if (config.headers) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
    })
}

const getAndSetAccessToken: () => string | undefined = () => {
    if (localStorage.getItem('access_token')) {
        const accessToken = localStorage.getItem('access_token')
        setupAuthInterceptor(accessToken!)
        return accessToken!
    }
}

const hasAccessToken = () => {
    return !!localStorage.getItem('access_token')
}

const initialState: AuthenticationState = {
    isAuthenticated: hasAccessToken(),
    accessToken: hasAccessToken() ? getAndSetAccessToken()! : '',
}

export const authenticate = createAsyncThunk(
    'authentication/authenticate',
    async (payload: AuthenticationRequest): Promise<AuthenticationResponse> => {
        // @ts-ignore
        return (await axios.post<AuthenticationRequest, AuthenticationResponse>('/auth/login', payload)).data
    }
)

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticate.fulfilled, (state, action) => {
            localStorage.setItem('access_token', action.payload.access_token)
            setupAuthInterceptor(action.payload.access_token)

            state.accessToken = action.payload.access_token
            state.isAuthenticated = true
        })
    },
})

export default authenticationSlice.reducer
