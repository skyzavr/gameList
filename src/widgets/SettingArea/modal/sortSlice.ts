import { createSlice } from '@reduxjs/toolkit';

const initSortParam: { sortParam: string } = {
  sortParam: 'title',
};
const sortlice = createSlice({
  name: 'state',
  initialState: initSortParam,
  reducers: {
    updateSortParam(state, action: { payload: string }) {
      state.sortParam = action.payload;
    },
    clearSortParam(state) {
      state.sortParam = initSortParam.sortParam;
    },
  },
});
export const { updateSortParam, clearSortParam } = sortlice.actions;
export default sortlice.reducer;
