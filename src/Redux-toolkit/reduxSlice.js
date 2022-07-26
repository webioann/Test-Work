import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        test: 'TEST',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
    }
})
export const { 
    langEng,langUkr
} = reduxSlice.actions

export default reduxSlice.reducer;
