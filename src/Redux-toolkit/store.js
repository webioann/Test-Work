import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from './reduxSlice'
import { serverApi } from './serverApi'

export default configureStore({
    reducer: {
        redux: reduxSlice,
        [serverApi.reducerPath]: serverApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(serverApi.middleware),

});
