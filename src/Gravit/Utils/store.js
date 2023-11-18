import { configureStore } from "@reduxjs/toolkit";
import reducer from './Slice'
const store = configureStore({
    reducer: {
        stors: reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })

})
export default store