import { ReactNode } from 'react';

import ArrowIcon from './ArrowIcon';

import classes from './arrows.module.css';

type Props = {
  onPrev: () => void;
  onNext: () => void;
  currInd: number;
  imgLen: number;
  children: ReactNode;
};

const Arrows = (props: Props) => {
  const { onPrev, onNext, currInd, imgLen, children } = props;
  return (
    <div className={classes.arrows}>
      <div
        onClick={onPrev}
        className={`${currInd === 0 ? classes.disabled : ''}`}
      >
        <ArrowIcon path="M10.5 2L3 9.5L10.5 17" />
      </div>
      {children}
      <div
        onClick={onNext}
        className={`${currInd === imgLen - 1 ? classes.disabled : ''}`}
      >
        <ArrowIcon path="M2 17L9.5 9.5L2 2" />
      </div>
    </div>
  );
};
export default Arrows;
