const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="error-retry-btn">
                    Retry
                </button>
            )}
        </div>
    )
}

export default ErrorMessage
