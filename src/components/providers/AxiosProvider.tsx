import { ReactNode, useEffect } from 'react'
import axios from 'axios'

interface AxiosProviderProps {
    children?: ReactNode
}

export function AxiosProvider({ children }: AxiosProviderProps) {
    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:3000'
    }, [])

    return <>{children}</>
}
