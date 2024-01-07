import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@shared/ui/Search/modal/searchSlice';
import filterReducer from '@widgets/SettingArea/modal/filterSlice';
import sortReducer from '@widgets/SettingArea/modal/sortSlice';
const rootReducer = {
  reducer: { search: searchReducer, filter: filterReducer, sort: sortReducer },
};
const store = configureStore(rootReducer);
export default store;
export type rootState = ReturnType<typeof store.getState>;
