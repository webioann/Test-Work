import React, {  useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../CSS/header.scss'

function Header() {

const usd_buy = useSelector(state => state.redux.usd_buy)
const usd_sale = useSelector(state => state.redux.usd_sale)
const eur_buy = useSelector(state => state.redux.eur_buy)
const eur_sale = useSelector(state => state.redux.eur_sale)

    return (
        <header>
            <h2 className='logo'>Currency converter</h2>
            <table className='exchange-rate'>
                <thead>
                    <tr>
                        <th></th>
                        <th>купівля</th>
                        <th>продаж</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='currency'>
                        <td>USD</td>
                        <td>{ usd_buy.toFixed(2) }</td>
                        <td>{ usd_sale.toFixed(2) }</td>
                    </tr>
                    <tr className='currency'>
                        <td>EUR</td>
                        <td>{ eur_buy.toFixed(2) }</td>
                        <td>{ eur_sale.toFixed(2) }</td>
                    </tr>
                </tbody>
            </table>
        </header>
    )
}

export default Header