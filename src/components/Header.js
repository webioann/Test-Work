import React from 'react'
import { useFetchCurrencyQuery } from '../Redux-toolkit/currencyApi'
import '../CSS/header.scss'

function Header() {

    const { data=[] } = useFetchCurrencyQuery()
    console.log(`data -> ${JSON.stringify(data)}`)
    return (
        <header>
            <h2 className='logo'>Currency converter</h2>
            {  data.map( item => (
                <p key={item.ccy}>{item.buy}</p>
            ))}
        </header>
    )
}

export default Header