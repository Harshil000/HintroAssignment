import { useEffect, useState, useMemo } from 'react'
import { useUser } from '../../shared/hooks/useUser'
import { formatDate, formatDateHeader } from '../../shared/utils/formatters'
import FeedbackHistoryList from '../../ui/components/Feedback/FeedbackHistoryList'
import './FeedbackHistoryPage.scss'

const FeedbackHistoryPage = () => {
    const { currentUser } = useUser()
    const [feedbackList, setFeedbackList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            const allFeedback = JSON.parse(localStorage.getItem('userFeedback') || '[]')
            const userFeedback = allFeedback.filter(
                (f) => f.userId === currentUser?._id || f.userId === currentUser?.id
            )
            setFeedbackList(userFeedback)
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [currentUser])

    const groupedByDate = useMemo(() => {
        const map = {}
        feedbackList.forEach((feedback) => {
            const d = new Date(feedback.timestamp)
            const key = d.toISOString().slice(0, 10) // YYYY-MM-DD
            if (!map[key]) map[key] = []
            map[key].push(feedback)
        })
        // Sort by date descending (newest first)
        return Object.keys(map)
            .sort()
            .reverse()
            .reduce((acc, key) => {
                acc[key] = map[key]
                return acc
            }, {})
    }, [feedbackList])

    if (loading) {
        return (
            <div className="feedback-history-page">
                <div className="loading-spinner">Loading your feedback...</div>
            </div>
        )
    }

    return (
        <div className="feedback-history-page">
            <div className="feedback-history-header">
                <h1>Your Feedback History</h1>
                <p className="feedback-count">
                    {feedbackList.length} {feedbackList.length === 1 ? 'submission' : 'submissions'}
                </p>
            </div>

            {feedbackList.length === 0 ? (
                <div className="empty-feedback">
                    <div className="empty-icon">📝</div>
                    <h2>No Feedback Yet</h2>
                    <p>Your feedback submissions will appear here. Share your thoughts to get started!</p>
                </div>
            ) : (
                <div className="feedback-history-list">
                    {Object.keys(groupedByDate).map((date) => (
                        <div key={date} className="feedback-date-group">
                            <h3 className="feedback-date-header">{formatDateHeader(date)}</h3>
                            <div className="feedback-items">
                                {groupedByDate[date].map((feedback) => (
                                    <FeedbackHistoryList key={feedback.id} feedback={feedback} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FeedbackHistoryPage
