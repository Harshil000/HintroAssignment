import { RouterProvider } from 'react-router'
import { router } from './routes'
import { UserProvider } from './shared/context/UserContext'
import { useUser } from './shared/hooks/useUser'
import LoadingSpinner from './ui/components/common/LoadingSpinner'

const AppContent = () => {
    const { loading } = useUser()

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
                <LoadingSpinner message="Loading..." />
            </div>
        )
    }

    return <RouterProvider router={router} />
}

function App() {
    return (
        <UserProvider>
            <AppContent />
        </UserProvider>
    )
}

export default App