import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        lang: 'eng',
        theme: 'light',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        themeLight: state => { state.theme = 'light' },
        themeDark: state => { state.theme = 'dark' },
    }
})
export const { 
    langEng,langUkr,themeLight,themeDark,
} = reduxSlice.actions

export default reduxSlice.reducer;
