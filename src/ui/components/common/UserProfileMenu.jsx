import { useEffect, useRef, useState } from 'react'
import { ChevronDown, LogOut } from 'lucide-react'
import { getInitials } from '../../../shared/utils/formatters'
import LogoutConfirmModal from './LogoutConfirmModal'
import '../../../styles/UserProfileMenu.scss'

const UserProfileMenu = ({ currentUser, onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false)
    const dropdownRef = useRef(null)

    const initials = currentUser ? getInitials(currentUser.firstName, currentUser.lastName) : '-'

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }

        return undefined
    }, [dropdownOpen])

    if (!currentUser) return null

    const openLogoutConfirm = () => {
        setDropdownOpen(false)
        setLogoutConfirmOpen(true)
    }

    const confirmLogout = () => {
        setLogoutConfirmOpen(false)
        onLogout?.()
    }

    return (
        <>
            <div className="user-profile" ref={dropdownRef}>
                <button
                    className="profile-trigger"
                    onClick={() => setDropdownOpen((open) => !open)}
                    title={`${currentUser.firstName} ${currentUser.lastName}`}
                    type="button"
                >
                    <div className="user-avatar">{initials}</div>
                    <ChevronDown
                        size={18}
                        className={`profile-arrow ${dropdownOpen ? 'open' : ''}`}
                    />
                </button>

                {dropdownOpen && (
                    <div className="profile-dropdown">
                        <div className="profile-info">
                            <p className="profile-name">
                                {currentUser.firstName} {currentUser.lastName}
                            </p>
                            <p className="profile-email">{currentUser.email}</p>
                        </div>
                        <button className="logout-btn" onClick={openLogoutConfirm} type="button">
                            <LogOut size={16} />
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>

            <LogoutConfirmModal
                open={logoutConfirmOpen}
                onClose={() => setLogoutConfirmOpen(false)}
                onConfirm={confirmLogout}
            />
        </>
    )
}

export default UserProfileMenu