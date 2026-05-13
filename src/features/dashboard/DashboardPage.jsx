import { useUser } from '../../shared/hooks/useUser'
import LoadingSpinner from '../../ui/components/common/LoadingSpinner'
import ErrorMessage from '../../ui/components/common/ErrorMessage'
import EmptyState from '../../ui/components/common/EmptyState'
import StatCard from '../../ui/components/Dashboard/StatCard'
import CallHistory from '../../ui/components/Dashboard/CallHistory'
import '../../styles/Dashboard.scss'

const DashboardPage = () => {
    const { currentUser, loading: userLoading, stats, callHistory, dashboardLoading, dashboardError } = useUser()

    if (userLoading || dashboardLoading) {
        return <LoadingSpinner message="Loading dashboard..." />
    }

    if (dashboardError) {
        return <ErrorMessage message={dashboardError} />
    }

    return (
        <section className="dashboard-page">
            <div className="dashboard__header">
                <div className="dashboard_header_left">
                    <h2>Hi, {currentUser?.firstName} Welcome to Hintro</h2>
                    <p className="dashboard__subtitle">
                        Ready to make your next call smarter ?
                    </p>
                </div>
                <div className="dashboard_header_right">
                    <button className="start_call_button">
                        Start New Call
                    </button>
                </div>
            </div>

            <StatCard
                totalSessions={stats?.totalSessions}
                averageDuration={stats?.averageDuration}
                totalAIInteractions={stats?.totalAIInteractions}
                lastSession={stats?.lastSession}
            />

            <CallHistory callHistory={callHistory} />

        </section >
    )
}

export default DashboardPage
