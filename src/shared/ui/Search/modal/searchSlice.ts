import { createSlice } from '@reduxjs/toolkit';

const initSearchQuery: { searchQuery: string } = {
  searchQuery: '',
};
const searchSlice = createSlice({
  name: 'state',
  initialState: initSearchQuery,
  reducers: {
    updateSearchQuery(state, action: { payload: string }) {
      state.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      state.searchQuery = '';
    },
  },
});
export const { updateSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
