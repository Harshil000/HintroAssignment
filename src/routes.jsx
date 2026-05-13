import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout/Layout'
import DashboardPage from './features/dashboard/DashboardPage'
import FeedbackPage from './features/feedback/FeedbackPage'
import FeedbackHistoryPage from './features/feedback/FeedbackHistoryPage'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'feedback-history',
                element: <FeedbackHistoryPage />,
            },
            {
                path: 'feedback',
                element: <FeedbackPage />,
            },
            {
                path: 'dummy',
                element: <h1>Dummy</h1>,
            }
        ]
    }
])