import { useState, useEffect } from 'react'
import EmptyCallHistory from './EmptyCallHistory'
import CallHistoryList from './CallHistoryList'
import '../../../styles/CallHistory.scss'

const CallHistory = ({ callHistory }) => {

    return (
        <div className="call_history_section">
            <h3 className="call_history_header">
                Recent Calls
            </h3>
            <div className="call_history_content">
                {callHistory.callSessions.length === 0 ? <EmptyCallHistory /> : <CallHistoryList callHistory={callHistory.callSessions} />}
            </div>
        </div>
    )
}

export default CallHistory