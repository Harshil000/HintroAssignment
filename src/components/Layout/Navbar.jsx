import { useUser } from '../../shared/hooks/useUser'
import { Menu, Play } from 'lucide-react'
import UserProfileMenu from '../../ui/components/common/UserProfileMenu'
import './Navbar.scss'
import '/3lines.svg'

const Navbar = ({ onMenuClick }) => {
    const { currentUser, logout } = useUser()

    return (
        <nav className="navbar">
            <button type="button" className="mobile_sidebar_3lines" onClick={onMenuClick} aria-label="Open sidebar">
                <Menu size={22} />
            </button>

            <div className="leftContainer">
                Dashboard
            </div>
            <div className="rightContainer">
                <button className="tutorial_button">
                    <Play size={16} fill="#000" />
                    <span className="tutorial_text">Watch Tutorial</span>
                </button>
                <UserProfileMenu currentUser={currentUser} onLogout={logout} />
            </div>
        </nav>
    )
}

export default Navbar