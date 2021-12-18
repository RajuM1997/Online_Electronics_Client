import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../../Components/Data/servicedb.json";

export const fetchServices = createAsyncThunk("book/fetchBooks", async () => {
  // console.log("hi", response);
  const response = await fetch(
    "https://nameless-atoll-45965.herokuapp.com/service"
  ).then((res) => res.json());
  return response;
});
// export const fetchServicedet = createAsyncThunk(
//   "details/fetchServicedet",
//   async (id) => {
//     // console.log("hi", response);
//     const response = await fetch(`http://localhost:5000/service/${id}`).then(
//       (res) => res.json()
//     );
//     return response;
//   }
// );

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    disService: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.disService = action.payload;
    });
    builder.addCase(fetchServices.pending, (state, action) => {
      state.disService = action.payload;
    });
    // builder.addCase(fetchServicedet.fulfilled, (state, action) => {
    //   state.disService = action.payload;
    // });
  },
});

export default serviceSlice.reducer;
