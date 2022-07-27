import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from './reduxSlice'
import { currencyApi } from './currencyApi'

export default configureStore({
    reducer: {
        redux: reduxSlice,
        [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(currencyApi.middleware),

});
