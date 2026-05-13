import '../../../styles/LogoutConfirmModal.scss'

const LogoutConfirmModal = ({ open, onClose, onConfirm }) => {
    if (!open) return null

    return (
        <div className="logout-confirm-modal__overlay" onClick={onClose}>
            <div className="logout-confirm-modal" onClick={(event) => event.stopPropagation()}>
                <h2>Leaving already?</h2>
                <p>You can log back in anytime to continue your meetings with Hintro.</p>

                <div className="logout-confirm-modal__actions">
                    <button
                        type="button"
                        className="logout-confirm-modal__btn logout-confirm-modal__btn--secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="logout-confirm-modal__btn logout-confirm-modal__btn--primary"
                        onClick={onConfirm}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogoutConfirmModal