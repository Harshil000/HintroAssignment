import { Star, MessageCircle, Mail, Tag } from 'lucide-react'
import { formatDateTime } from '../../../shared/utils/formatters'
import './FeedbackHistoryList.scss'

const FeedbackHistoryList = ({ feedback }) => {
    const getFeedbackTypeLabel = (type) => {
        const types = {
            general: 'General Feedback',
            bug: 'Bug Report',
            feature: 'Feature Request',
            complaint: 'Complaint',
            other: 'Other',
        }
        return types[type] || type
    }

    const getFeedbackTypeColor = (type) => {
        const colors = {
            general: '#3498db',
            bug: '#e74c3c',
            feature: '#2ecc71',
            complaint: '#f39c12',
            other: '#95a5a6',
        }
        return colors[type] || '#3498db'
    }

    return (
        <div className="feedback-history-item">
            <div className="feedback-header">
                <div className="feedback-type-badge" style={{ backgroundColor: `${getFeedbackTypeColor(feedback.feedbackType)}20`, borderColor: getFeedbackTypeColor(feedback.feedbackType) }}>
                    <Tag size={16} style={{ color: getFeedbackTypeColor(feedback.feedbackType) }} />
                    <span style={{ color: getFeedbackTypeColor(feedback.feedbackType) }}>
                        {getFeedbackTypeLabel(feedback.feedbackType)}
                    </span>
                </div>
                <span className="feedback-time">{formatDateTime(feedback.timestamp)}</span>
            </div>

            <div className="feedback-content">
                <h3 className="feedback-subject">{feedback.subject}</h3>
                <p className="feedback-message">{feedback.message}</p>
            </div>

            <div className="feedback-footer">
                <div className="feedback-rating">
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={16}
                                className={star <= feedback.rating ? 'star-filled' : 'star-empty'}
                                fill={star <= feedback.rating ? '#ffc107' : 'none'}
                            />
                        ))}
                    </div>
                    <span className="rating-text">{feedback.rating}/5</span>
                </div>

                <div className="feedback-email">
                    <Mail size={16} />
                    <span>{feedback.email}</span>
                </div>
            </div>
        </div>
    )
}

export default FeedbackHistoryList
