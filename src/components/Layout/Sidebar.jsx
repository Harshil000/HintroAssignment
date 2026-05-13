import './Sidebar.scss'
import { NavLink } from 'react-router'
import { X } from 'lucide-react'

const Sidebar = ({ onClose }) => {
    const navItems = [
        { label: 'Dashboard', icon: '/Dashboard.svg', to: '/' },
        { label: 'Call Insights', icon: '/phone.svg', to: '/dummy' },
        { label: 'Knowledge Base', icon: '/Subtract.svg', to: '/dummy' },
        { label: 'Prompts', icon: '/chat.svg', to: '/dummy' },
        { label: 'Boxy Controls', icon: '/support.svg', to: '/dummy' },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar__brand-row">
                <button type="button" className="sidebar__close-btn" onClick={onClose} aria-label="Close sidebar">
                    <X size={20} />
                </button>
                <div className="sidebar__brand">
                    <NavLink to={"/"}>Hintro</NavLink>
                </div>
            </div>

            <nav className="sidebar__nav" aria-label="Sidebar navigation">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        end={item.to === '/'}
                        onClick={onClose}
                        className={({ isActive }) =>
                            `sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`
                        }
                    >
                        <span className="sidebar__nav-icon" aria-hidden="true">
                            <img src={item.icon} alt="" className="sidebar__nav-icon-image" />
                        </span>
                        <span className="sidebar__nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar__footer">
                <NavLink
                    to="/feedback-history"
                    onClick={onClose}
                    className={({ isActive }) =>
                        `sidebar__footer-link${isActive ? ' sidebar__footer-link--active' : ''}`
                    }
                >
                    <span className="sidebar__footer-icon" aria-hidden="true">
                        <img src="/inbox-in.svg" alt="" className="sidebar__footer-icon-image" />
                    </span>
                    <span className="sidebar__footer-label">Feedback History</span>
                </NavLink>
                <NavLink
                    to="/feedback"
                    onClick={onClose}
                    className={({ isActive }) =>
                        `sidebar__footer-link${isActive ? ' sidebar__footer-link--active' : ''}`
                    }
                >
                    <span className="sidebar__footer-icon" aria-hidden="true">
                        <img src="/gift.svg" alt="" className="sidebar__footer-icon-image" />
                    </span>
                    <span className="sidebar__footer-label">Feedback</span>
                </NavLink>
                <button type="button" className="sidebar__upgrade-btn">
                    Upgrade
                </button>
            </div>
        </aside>
    )
}

export default Sidebar