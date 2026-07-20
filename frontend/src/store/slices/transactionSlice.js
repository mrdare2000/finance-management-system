import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import transactionService from '../../services/transactionService';

const initialState = {
  transactions: [],
  categories: {},
  isLoading: false,
  isError: false,
  message: ''
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (filters, thunkAPI) => {
    try {
      const response = await transactionService.getAll(filters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const createTransaction = createAsyncThunk(
  'transactions/create',
  async (transactionData, thunkAPI) => {
    try {
      const response = await transactionService.create(transactionData);
      return response.data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await transactionService.getCategories();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  }
});

export default transactionSlice.reducer;
