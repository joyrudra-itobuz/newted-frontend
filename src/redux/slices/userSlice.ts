import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";

const nameSpace = "userData";

interface InitialState {
  updatedUserData: null | any;
  UserData: any;
  loading: boolean;
  error: null | Error;
  success: boolean;
}

const initialState: InitialState = {
  updatedUserData: null,
  UserData: null,
  loading: false,
  error: null,
  success: false,
};

export const login = createAsyncThunk(
  `${nameSpace}/getAllPackages`,
  async (loginDetails, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/login", loginDetails);

      if (data) return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {
    userDetails: (state) => {
      state.UserData = null;
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state, action) => {
      state.success = false;
      state.UserData = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.UserData = action.payload.data;
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(login.rejected, (state: any, action) => {
      state.UserData = null;
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

export default userSlice.reducer;
export const { userDetails } = userSlice.actions;
