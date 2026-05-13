import { useMemo } from 'react'
import CallEntry from './CallEntry'
import { formatDateHeader } from '../../../shared/utils/formatters'
import '../../../styles/CallHistoryList.scss'

const CallHistoryList = ({ callHistory, notext }) => {
    const sessions = callHistory

    const groupedByDate = useMemo(() => {
        const map = {}
        sessions.forEach((session) => {
            const started = session.started_at
            if (!started) return
            const d = new Date(started)
            if (isNaN(d.getTime())) return
            const key = d.toISOString().slice(0, 10)
            if (!map[key]) map[key] = []
            map[key].push(session)
        })
        return map
    }, [sessions])

    return (
        <>
            {Object.keys(groupedByDate).map((date) => {
                return (
                    <div key={date} className="call_history_date_group">
                        <div className="call_history_date_header">{formatDateHeader(date)}</div>
                        {groupedByDate[date].map((session) => {
                            return (
                                <CallEntry
                                    key={session._id}
                                    detail={session}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default CallHistoryList
