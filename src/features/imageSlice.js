import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../services/axios";

export const searchImageList = createAsyncThunk(
  "image/getImageList",
  async (data) => {
    let response = await axios.get(`search?q=${data}`);
    return response.data.collection.items;
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageLists: [],
    isLoading: false,
  },
  extraReducers: {
    [searchImageList.pending]: (state) => {
      state.isLoading = true;
    },
    [searchImageList.fulfilled]: (state, action) => {
      state.imageLists = action.payload;
      state.isLoading = false;
    },
  },
});

export const imageCollection = (state) => state.image;

export default imageSlice.reducer;
