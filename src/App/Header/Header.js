import React from 'react'
import Logo from './Logo/Logo.js'
import Menu from './Menu/Menu.js'
import Search from './Search/Search.js'
import './Header.css'

const Header = () => {
    return (
        <div className = "class-header">
            <header className = "header">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-2 horizontal-center">
                            <Logo/>
                        </div>
                        <div className = "col-md-6 horizontal-center">
                            <Menu/> 
                        </div>
                        <div className = "col-md-4 flex-end">
                                <Search/>	
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header