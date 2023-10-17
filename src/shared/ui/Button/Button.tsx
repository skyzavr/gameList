import classes from './button.module.css';
import { ReactNode } from 'react';

type Props = {
  clickHandler: () => void;
  children: ReactNode;
};

const Button = ({ clickHandler, children }: Props) => {
  return (
    <button onClick={clickHandler} className={classes.button}>
      {children}
    </button>
  );
};
export default Button;
