import '../../../styles/CallEntry.scss'
import {formatDateTime} from '../../../shared/utils/formatters'
import '/3dots.svg'

const CallEntry = ({ detail }) => {
    return (
        <div className="call_entry">
            <div className="left_detail">
                <div className='avatar'>{detail.client[0]}</div>
                <div className="detail_and_participants">
                    <div className="call_detail">
                        {detail.description}
                    </div>
                    <div className="participants">
                        {detail.participants.map((p , index) => {
                            return <span key={index}>{p.name[0]}</span>;
                        })}
                    </div>
                </div>
            </div>
            <div className="right_detail">
                <div className="start_time">
                    {formatDateTime(detail.started_at).slice(formatDateTime(detail.started_at).lastIndexOf(',') + 1).trim()}
                </div>
                <div className="three_dots">
                    <img src="/3dots.svg" width={12} height={12} alt="Three dots" />
                </div>
            </div>
        </div>
    )
}

export default CallEntry