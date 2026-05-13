import axios from 'axios'

// Get the base URL from environment or use a default
const BASE_URL =  'https://mock-backend-hintro.vercel.app/'

// Create axios instance
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

// Add interceptor to include x-user-id header
apiClient.interceptors.request.use(
    (config) => {
        const userId = localStorage.getItem('userId') || 'u1'
        config.headers['x-user-id'] = userId
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)

export default apiClient
