const EmptyState = ({ title = 'No Data', message = 'There is nothing to display yet.' }) => {
    return (
        <div className="empty-state">
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}

export default EmptyState
