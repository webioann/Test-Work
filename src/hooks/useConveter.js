import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useConveter = (enter_value, enter_currency, result_currency) => {

    const [converted,setConverted] = useState(0)
    const {usd_buy, eur_buy, usd_sale, eur_sale} = useSelector(state => state.redux)

    useEffect(() => {
        if( enter_value ) {
            if( enter_currency === result_currency ) {
                setConverted(enter_value)
            }
            // first currency is UAH
            if( enter_currency === 'UAH' && result_currency === 'USD' ) {
                let res = enter_value / usd_sale
                setConverted(res.toFixed(2))
            }
            if( enter_currency === 'UAH' && result_currency === 'EUR' ) {
                let res = enter_value / eur_sale
                setConverted(res.toFixed(2))
            }

            // first currency is USD
            if( enter_currency === 'USD' && result_currency === 'UAH' ) {
                let res = enter_value * usd_buy
                setConverted(res.toFixed(2))
            }
            if( enter_currency === 'USD' && result_currency === 'EUR' ) {
                let res = enter_value * usd_buy / eur_sale
                setConverted(res.toFixed(2))
            }

            // first currency is EUR
            if( enter_currency === 'EUR' && result_currency === 'UAH' ) {
                let res = enter_value * eur_buy
                setConverted(res.toFixed(2))
            }
            if( enter_currency === 'EUR' && result_currency === 'USD' ) {
                let res = enter_value * eur_buy / usd_sale
                setConverted(res.toFixed(2))
            }
        }
        else {
            setConverted(0)
        }
    }, [enter_value, enter_currency, result_currency])

    return converted
}