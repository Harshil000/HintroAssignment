import { createContext, useState, useEffect } from 'react'
import { getProfile, dashboardAPI, callSessionsAPI } from '../../services/api/endpoints'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Dashboard data state
    const [dashboardData, setDashboardData] = useState(null)
    const [stats, setStats] = useState(null)
    const [callHistory, setCallHistory] = useState(null)
    const [dashboardLoading, setDashboardLoading] = useState(true)
    const [dashboardError, setDashboardError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                setError(null)

                const cachedUser = localStorage.getItem('currentUser')
                const cachedUserId = localStorage.getItem('userId')

                if (cachedUser && cachedUserId) {
                    setCurrentUser(JSON.parse(cachedUser))
                    setLoading(false)
                    return
                }

                const userId = cachedUserId || 'u1'
                const userData = await getProfile(userId)
                setCurrentUser(userData)
                localStorage.setItem('currentUser', JSON.stringify(userData))
                localStorage.setItem('userId', userId)
            } catch (err) {
                setError(err.message || 'Failed to fetch user')
                console.error('User fetch error:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    const saveUserSession = (userId, userData) => {
        localStorage.setItem('userId', userId)
        localStorage.setItem('currentUser', JSON.stringify(userData))
        setCurrentUser(userData)
    }

    // Fetch dashboard data
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setDashboardLoading(true)
                setDashboardError(null)

                const [dashData, statsData, historyData] = await Promise.all([
                    dashboardAPI.getDashboard(),
                    callSessionsAPI.getStats(),
                    callSessionsAPI.getHistory(10),
                ])

                setDashboardData(dashData)
                setStats(statsData)
                setCallHistory(historyData)
            } catch (err) {
                setDashboardError(err.message || 'Failed to fetch dashboard data')
                console.error('Dashboard data fetch error:', err)
            } finally {
                setDashboardLoading(false)
            }
        }

        if (currentUser) {
            fetchDashboardData()
        }
    }, [currentUser])

    const switchUser = async (userId) => {
        try {
            setLoading(true)
            setError(null)

            const userData = await getProfile(userId)
            saveUserSession(userId, userData)
        } catch (err) {
            setError(err.message || 'Failed to switch user')
            console.error('Switch user failed:', err)
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            const currentUserId = localStorage.getItem('userId') || 'u1'
            const nextUserId = currentUserId === 'u1' ? 'u2' : 'u1'
            await switchUser(nextUserId)
        } catch (e) {
            console.error('Logout failed', e)
        }
    }

    return (
        <UserContext.Provider
            value={{
                currentUser,
                loading,
                error,
                switchUser,
                logout,
                dashboardData,
                stats,
                callHistory,
                dashboardLoading,
                dashboardError,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
