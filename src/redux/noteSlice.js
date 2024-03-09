import {createSlice} from '@reduxjs/toolkit';
// const url='http://localhost:8001';
export const fetchNotes= createAsyncThunk('fetchNotes', async()=>{

})
export const noteSlice=createSlice({
    name:'note',
    initialState:{
        notes:[],
        isLoading:false,
        error:null
    },
   
    reducers:{
        // addBlog: async (state,action) =>{ 
        //     state.title=action.payload.title,
        //     state.descreption=action.payload.descreption,
        //     state.tags=action.payload.tags
        //     const fetchApi=await fetch(`${url}/api/add-blog`,{
        //         method:'POST',
        //         headers:{
        //             "Content-Type": "application/json",
        //             "auth-token":localStorage.getItem('token')
        //         },
        //         body:JSON.stringify({state})
        //     });
        //     const responce=fetchApi.json();
        //     return responce;
        // },
        callReducer:(state, action)=>{
state.notes.push(action.payload)
            // console.log(action.payload);
        }
    //     deleteBlog:(state,action)=>{
    //        return state.notes = state.notes.filter((item,i)=> i!==action.payload)
    // }
}});
export const {callReducer} = noteSlice.actions;
export default  noteSlice.reducer;
