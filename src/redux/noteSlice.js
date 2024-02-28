import {createSlice} from '@reduxjs/toolkit';
export const noteSlice=createSlice({
    name:'note',
    initialState:{
        notes:[],
        isLoading:false,
        error:null
    }
})