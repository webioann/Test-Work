import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        page: 1
    },
    reducers: {
        setPageNamber: (state,actions) => { state.page = actions.payload },
    }
})
export const { setPageNamber } = reduxSlice.actions

export default reduxSlice.reducer;
