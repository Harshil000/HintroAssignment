import '../../../styles/StatCard.scss'
import '/TotalSession.svg'
import '/Duration.svg'
import '/AiUsed.svg'
import '/LastSession.svg'
import {formatSecondsToTime, formatDate} from '../../../shared/utils/formatters'

const StatCard = ({ totalSessions, averageDuration, totalAIInteractions, lastSession }) => {
    averageDuration = formatSecondsToTime(averageDuration)
    lastSession = formatDate(lastSession[0])
    return (
        <div className="stat-card-container">

            <div className="stat-card">
                <img src="/TotalSession.svg" alt="Sessions Icon" className="stat-icon" />
                <div className="stat-body">
                    <span className="stat-label">Total Sessions</span>
                    <span className="stat-value">{totalSessions}</span>
                </div>
            </div>
            <div className="stat-card">
                <img src="/Duration.svg" alt="Duration Icon" className="stat-icon" />
                <div className="stat-body">
                    <span className="stat-label">Average Duration</span>
                    <span className="stat-value">{averageDuration}</span>
                </div>
            </div>
            <div className="stat-card">
                <img src="/AiUsed.svg" alt="AI Used Icon" className="stat-icon" />
                <div className="stat-body">
                    <span className="stat-label">AI Used</span>
                    <span className="stat-value">{totalAIInteractions}</span>
                </div>
            </div>
            <div className="stat-card">
                <img src="/LastSession.svg" alt="Last Session Icon" className="stat-icon" />
                <div className="stat-body">
                    <span className="stat-label">Last Session</span>
                    <span className="stat-value">{lastSession}</span>
                </div>
            </div>
        </div>
    )
}

export default StatCard