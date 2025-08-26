import React from 'react'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const openSidebar = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className='nav'>
                <div className="nav-round">
                    <div className="menu" onClick={openSidebar}>
                        <h1>&nbsp;&nbsp; ☰</h1>
                    </div>
                    <div className="link">
                        <a href="#" >HOME</a>
                    </div>
                    <div className="link">
                        <a href="#" >EVENTS</a>
                    </div>
                    <div className="link">
                        <a href="#" >GALLERY</a>
                    </div>
                    <div className="link">
                        <a href="#" >TEAM</a>
                    </div>
                    <div className="register">
                        <button>REGISTER</button>
                    </div>
                </div>

                {/* Sidebar overlay */}
                {isOpen && (
                    <div className="sidebar-overlay" onClick={closeSidebar}></div>
                )}

                {/* Sidebar */}
                <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                    <div className="sidebar-content">
                        <div className="sidebar-close" onClick={closeSidebar}>
                            <button>×</button>
                        </div>
                        <div className="sidebar-links">
                            <a href="#" className='anim' onClick={closeSidebar}>HOME</a>
                            <a href="#" className='anim' onClick={closeSidebar}>EVENTS</a>
                            <a href="#" className='anim' onClick={closeSidebar}>GALLERY</a>
                            <a href="#" className='anim' onClick={closeSidebar}>TEAM</a>
                            <br />
                            <img className='anim-d' src="/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}