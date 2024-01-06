import { createSlice } from '@reduxjs/toolkit';

const initSortParam: { filterParam: string } = {
  filterParam: '',
};
const filterlice = createSlice({
  name: 'state',
  initialState: initSortParam,
  reducers: {
    updateFilterParam(state, action: { payload: string }) {
      state.filterParam = action.payload;
    },
    clearFilterParam(state) {
      state.filterParam = initSortParam.filterParam;
    },
  },
});
export const { updateFilterParam, clearFilterParam } = filterlice.actions;
export default filterlice.reducer;
