import { useState } from 'react';

import classes from './gameDesc.module.css';

type Prop = { title: string; desc: string };

const GameDesc = ({ title, desc }: Prop) => {
  const isDescLong = desc.length > 300;
  const [isShowFullDesc, setIsShowFullDesc] = useState(
    isDescLong ? false : true
  );

  const getShortDesc = (str: string) => {
    const sliceLen = 250;
    const endPosition = str.slice(sliceLen).indexOf('.') + 1;
    return str.slice(0, sliceLen + endPosition);
  };

  if (isDescLong)
    return (
      <div className={classes.wrapper}>
        <div className={classes.title}>About {title}</div>
        <div className={classes.desc}>
          {isShowFullDesc ? desc : getShortDesc(desc)}
        </div>
        <div
          className={classes.descBtn}
          onClick={() => setIsShowFullDesc((prev) => !prev)}
        >
          {isShowFullDesc ? 'Show less' : ' Show more'}
        </div>
      </div>
    );

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>About {title}</div>
      <div className={classes.desc}>{desc}</div>
    </div>
  );
};
export default GameDesc;
