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
const response=await axios.post(url+'/api/create-blog',{...blog},{headers})
return response.data;
})

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
        console.log('pending state')
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes.push(action.payload);
        console.log('pending fulfilled')
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        console.log('pending rejected')
      });
  },
});

export const { callReducer } = noteSlice.actions;
export default noteSlice.reducer;
