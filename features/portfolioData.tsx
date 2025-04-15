import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Axios from "axios";


interface PortfolioData {
  name?: string;
  projects?: any[];
}

interface PortfolioState {
  data: PortfolioData | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: PortfolioState = {
  data: null,
  isLoading: false,
  error: null,
};

export const portfolioData = createAsyncThunk<PortfolioData, void, { rejectValue: string }>(
  'portfolioData/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`https://01.fy25ey02.64mb.io/`, {});
      //console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue("Failed to fetch data");
    }
  }
);

const portfolioDataSlice = createSlice({
  name: 'portfolioData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(portfolioData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(portfolioData.fulfilled, (state, action: PayloadAction<PortfolioData>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(portfolioData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default portfolioDataSlice.reducer;
