import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API base URL
const url = 'http://localhost:5000';
const headers={
"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjU5ZWI4ZjY3NmIxMjgzMTE2YjhhOWFiIiwiaWF0IjoxNzA0OTAxMDI2fQ.dvwbY_07zEOpMQiEoor7x3CRlIPcER0XHT3och0jQuc",
"Content-Type":"application/json"
}
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get(url + '/api/show-blogs',{headers});
  return response.data;
});
export const addNote = createAsyncThunk('notes/addNotes', async(blog)=>{
const response=await axios.post(url+'/api/add-blog',{title:blog.title,descreption:blog.descreption,tags:blog.tags},{headers});
return response.data;
})
export const deleteBlog=createAsyncThunk("deleteBlog",async(id)=>{
const response = await axios.delete(url+`/api/delete/${id}`,{headers});
return response.data;
})
export const updateBlog=createAsyncThunk("updateBlog",async(blog)=>{
const response = await axios.put(url+`/api/update/${blog.id}`,{title:blog.title,descreption:blog.descreption,tags:blog.tags},{headers});
return response.data;
})

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
    isLoading: false,
    msg:null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.isLoading = true;
        state.error = null; 
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.notes.push(action.payload);
        state.notes = action.payload;
        // console.log(action.payload)
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
      builder.addCase(addNote.fulfilled, (state, action) => {
        state.msg= action.payload.msg;
        
      })
      builder.addCase(deleteBlog.fulfilled, (state, action) => {
        state.msg= action.payload.msg;
        
      })
      builder.addCase(updateBlog.fulfilled, (state, action) => {
        state.msg= action.payload.msg;
        
      })
      // .addCase(deleteBlog.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(deleteBlog.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   // Remove the deleted blog from the state
      //   state.notes = state.notes;
      //   state.msg = "Blog deleted successfully";
      // })
      // .addCase(deleteBlog.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.error.msg; // Assuming the error message is in action.error.message
      // });
  },
});

export const { callReducer } = noteSlice.actions;
export default noteSlice.reducer;
