import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './noteSlice.js'
export default configureStore({
    reducer:{
        note:noteReducer
    }
})