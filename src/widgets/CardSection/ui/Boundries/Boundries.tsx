import { ReactNode } from 'react';
import Spin from '@shared/ui/Spin/Spin';

import classes from './boundries.module.css';

type Props = {
  error: string;
  isError: boolean;
  isLoading: boolean;
  dataLen: number;
  children: ReactNode;
};

const Boundries = ({ error, isError, isLoading, dataLen, children }: Props) => {
  if (isLoading) return <Spin />;
  if (isError) return <h1 className={classes.message}>{error}</h1>;
  if (dataLen === 0)
    return <h1 className={classes.message}>Looks like it's empty here :(</h1>;
  return <>{children}</>;
};
export default Boundries;
