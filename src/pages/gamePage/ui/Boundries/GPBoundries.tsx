import { ReactNode } from 'react';

import Spin from '@shared/ui/Spin/Spin';

import classes from './gpBoundries.module.css';

type Props = {
  error: string;
  isError: boolean;
  isLoading: boolean;
  len: number;
  children: ReactNode;
};

const Boundries = ({ error, isError, isLoading, len, children }: Props) => {
  if (isLoading) return <Spin />;
  if (isError) return <h1 className={classes.message}>{error}</h1>;
  if (len > 0) return <>{children}</>;
};
export default Boundries;
