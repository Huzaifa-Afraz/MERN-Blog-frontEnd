import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API base URL
const url = 'http://localhost:5000';

export const fetchNotes = createAsyncThunk('notes/fetchnotes', async () => {
  const response = await axios.get(url + '/api/show-blogs');
  return response.data;
});

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
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes.push(action.payload);
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.msg;
      });
  },
});

export const { callReducer } = noteSlice.actions;
export default noteSlice.reducer;
