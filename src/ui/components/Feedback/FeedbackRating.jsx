import { useState } from 'react'
import { Star } from 'lucide-react'
import '../../../styles/FeedbackRating.scss'

const FeedbackRating = ({ value = 0, onChange }) => {
    const [hoverRating, setHoverRating] = useState(0)

    return (
        <div className="rating-field form-group">
            <label className="form-label">
                How would you rate Hintro? <span className="required">*</span>
            </label>
            <div className="rating-stars" aria-label="Rating selector">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= (hoverRating || value) ? 'active' : ''}`}
                        onClick={() => onChange?.(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                        aria-pressed={star <= value}
                    >
                        <Star size={28} fill="currentColor" />
                    </button>
                ))}
            </div>
            {value > 0 && <p className="rating-text">{value} out of 5 stars</p>}
        </div>
    )
}

export default FeedbackRating