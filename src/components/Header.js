import React from 'react'
import '../CSS/header.scss'

const Header = ({ children }) => {

    return (
        <header>
            <h2 className='logo'>Currency converter</h2>
            { children }
        </header>
    )
}

export default Header
