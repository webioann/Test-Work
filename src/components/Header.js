import React, {  useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExchangeRate from './ExchangeRate'
import '../CSS/header.scss'

const Header = () => {

    return (
        <header>
            <h2 className='logo'>Currency converter</h2>
            <ExchangeRate/>
        </header>
    )
}

export default Header
