import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        usd_buy: 0,
        eur_buy: 0,
        usd_sale: 0,
        eur_sale: 0,
    },
    reducers: {
        setBuyUsd: (state,actions) => { state.usd_buy = actions.payload },
        setBuyEur: (state,actions) => { state.eur_buy = actions.payload },
        setSaleUsd: (state,actions) => { state.usd_sale = actions.payload },
        setSaleEur: (state,actions) => { state.eur_sale = actions.payload },
    }
})
export const { 
    setBuyUsd, setBuyEur, setSaleUsd, setSaleEur
} = reduxSlice.actions

export default reduxSlice.reducer;
