import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './Layout.scss'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsSidebarOpen(false)
    }, [location.pathname])

    return (
        <div className={`layout${isSidebarOpen ? ' layout--sidebar-open' : ''}`}>
            <div className="sidebar_backdrop" onClick={() => setIsSidebarOpen(false)} />
            <div className="sidebar_content">
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>
            <div className="navbar_content">
                <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
            </div>
            <main className="layout__content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout