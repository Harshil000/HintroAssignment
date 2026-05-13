import '../../../styles/EmptyCallHistory.scss'
import '/Calander.svg'

const EmptyCallHistory = () => {
    return (
        <div className="empty_call_history">
            <div className="empty_call_history_content">
                <img src="/Calander.svg" width={50} height={50} alt="No Calls Icon" className="empty_icon" />
                <div className="empty_call_history_content_text">
                    <h4>No Recent Calls</h4>
                    <p>connect your Google Calendar to see upcoming meetings,</p>
                    <p>get reminders , and join calls directly from Hintro</p>
                </div>
            </div>
            <button className="empty_action_button">
                Start a call
            </button>
        </div>
    )
}

export default EmptyCallHistory