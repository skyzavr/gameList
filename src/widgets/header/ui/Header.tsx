import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearSearchQuery } from '@shared/ui/Search/modal/searchSlice';
import { clearSortParam } from '@widgets/SettingArea/modal/sortSlice';
import { clearFilterParam } from '@widgets/SettingArea/modal/filterSlice';

import ThemeSwitcher from '@shared/ui/themeSwitcher/ThemeSwitcher';

import classes from './header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    dispatch(clearSearchQuery());
    dispatch(clearSortParam());
    dispatch(clearFilterParam());
    navigate('/');
  };

  return (
    <header>
      <div className={classes.topWrapper}>
        <div className={classes.title} onClick={navigateToHome}>
          Game List
        </div>
        <ThemeSwitcher />
      </div>
      <div className={classes.line}></div>
    </header>
  );
};
