import { useState } from 'react'
import { useUser } from '../../shared/hooks/useUser'
import { useForm } from '../../shared/hooks/useForm'
import { Send } from 'lucide-react'
import FeedbackRating from '../../ui/components/Feedback/FeedbackRating'
import './FeedbackForm.scss'

const FeedbackForm = () => {
    const { currentUser } = useUser()
    const [rating, setRating] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const { formValues, handleChange } = useForm({
        feedbackType: 'general',
        subject: '',
        message: '',
        email: currentUser?.email || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const feedbackData = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            feedbackType: formValues.feedbackType,
            rating: rating,
            subject: formValues.subject,
            message: formValues.message,
            email: formValues.email,
            userId: currentUser?._id || currentUser?.id,
        }

        const existingFeedback = JSON.parse(localStorage.getItem('userFeedback') || '[]')
        existingFeedback.push(feedbackData)
        localStorage.setItem('userFeedback', JSON.stringify(existingFeedback))

        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            document.querySelector('.feedback-form')?.reset()
            setRating(0)
        }, 3000)
    }

    return (
        <div className="feedback-form-container">
            <div className="feedback-form-header">
                <h1>Share Your Feedback</h1>
                <p>Help us improve Hintro by sharing your thoughts and suggestions</p>
            </div>

            {submitted && (
                <div className="feedback-success-message">
                    ✓ Thank you! Your feedback has been submitted successfully.
                </div>
            )}

            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="feedbackType" className="form-label">
                        Feedback Type <span className="required">*</span>
                    </label>
                    <select
                        id="feedbackType"
                        name="feedbackType"
                        value={formValues.feedbackType}
                        onChange={handleChange}
                        className="form-input form-select"
                        required
                    >
                        <option value="general">General Feedback</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <FeedbackRating value={rating} onChange={setRating} />

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                        Subject <span className="required">*</span>
                    </label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Brief subject of your feedback"
                        maxLength={100}
                        required
                    />
                    <span className="char-count">{formValues.subject.length}/100</span>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Detailed Feedback <span className="required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        className="form-input form-textarea"
                        placeholder="Please provide detailed feedback..."
                        maxLength={1000}
                        rows={6}
                        required
                    />
                    <span className="char-count">{formValues.message.length}/1000</span>
                </div>

                <button type="submit" className="submit-btn" disabled={submitted}>
                    <Send size={18} />
                    <span>Submit Feedback</span>
                </button>
            </form>
        </div>
    )
}

export default FeedbackForm