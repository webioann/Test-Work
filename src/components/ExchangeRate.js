import React from 'react';
import { useSelector } from 'react-redux';
import '../CSS/exchange-rate.scss';

const ExchangeRate = () => {

    const usd_buy = useSelector(state => state.redux.usd_buy)
    const usd_sale = useSelector(state => state.redux.usd_sale)
    const eur_buy = useSelector(state => state.redux.eur_buy)
    const eur_sale = useSelector(state => state.redux.eur_sale)

    return (
        <section>
            <div className='currency'>
                <p>USD</p>
                    <p>{usd_buy.toFixed(2)}</p>
                    <p>{usd_sale.toFixed(2)}</p>
            </div>
            <div className='currency'>
                <p>EUR</p>
                <p>{ eur_buy.toFixed(2) }</p>
                <p>{ eur_sale.toFixed(2) }</p>
            </div>
        </section>
    )
}

export default ExchangeRate;