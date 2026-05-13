import apiClient from './client'

export const getProfile = async (userId) => {
    const response = await apiClient.get('/api/auth/profile', {
        headers: {
            ...(userId ? { 'x-user-id': userId } : {}),
        },
    })
    return response.data
}

export const dashboardAPI = {
    getDashboard: async () => {
        const response = await apiClient.get('/api/auth/dashboard')
        return response.data
    },
}

export const callSessionsAPI = {
    getStats: async () => {
        const response = await apiClient.get('/api/call-sessions/stats')
        return response.data
    },

    getHistory: async (limit = 10) => {
        const response = await apiClient.get('/api/call-sessions', {
            params: { limit },
        })
        return response.data
    },
}
