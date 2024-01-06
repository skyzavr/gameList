import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { rootState } from '@app/modal/store';
import { updateSearchQuery } from './modal/searchSlice';

import classes from './search.module.css';

const Search = () => {
  const dispatch = useDispatch();

  const { searchQuery } = useSelector((store: rootState) => store.search);
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(updateSearchQuery(value));
  };

  return (
    <input
      className={classes.search}
      type="search"
      placeholder="Search by game title, like Fall Guys"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};
export default Search;
