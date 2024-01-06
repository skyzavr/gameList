import { useContext, FC, useState, useEffect, memo } from 'react';

import {
  ThemeContext,
  ThemeContextType,
} from '../../../app/context/ThemeContext';

import DarkIcon from './icons/DarkIcon';
import LightIcon from './icons/LightIcon';

import classes from './themeSwitcher.module.css';

const ThemeSwitcher: FC = memo(() => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const [checked, setChecked] = useState<boolean>(
    theme === 'light' ? false : true
  );
  const themeToggle = () => {
    setTheme(checked ? 'light' : 'dark');
    setChecked(!checked);
  };

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, checked]);

  return (
    <div className={classes.wrapper}>
      <LightIcon />
      <label className={classes.switch}>
        <input type="checkbox" onChange={themeToggle} checked={checked} />
        <span className={classes.slider}></span>
      </label>
      <DarkIcon />
    </div>
  );
});
export default ThemeSwitcher;
