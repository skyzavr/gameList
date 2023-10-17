import classes from './notFound.module.css';
import { Icon } from '../assets/404';
import Button from '@shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <section className={classes.wrapper}>
      <Icon />
      <div className={classes.title}>Oups</div>
      <div className={classes.desc}>There is error. Accept it and move</div>
      <Button clickHandler={navigateToHome}>Time to move</Button>
    </section>
  );
};
