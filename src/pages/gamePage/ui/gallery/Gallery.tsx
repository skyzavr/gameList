import { useState } from 'react';

import { GameDescT } from '@constant/params';

import Arrows from './arrows/Arrows';

import classes from './gallery.module.css';

type List = { id: number; image: string };
type Props = { title: string; thumbnail: string; screenshots: List[] };

const Gallery = ({ data }: { data: GameDescT }) => {
  const { title, thumbnail, screenshots }: Props = data;
  const screenShots: Array<List> = [
    { id: 0, image: thumbnail },
    ...screenshots,
  ];
  const [currentImg, setCurrentImg] = useState<List>(screenShots[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (screenShots?.length === 0) return null;

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentImg(screenShots[currentIndex - 1]);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex === screenShots.length - 1) return;
    setCurrentImg(screenShots[currentIndex + 1]);
    setCurrentIndex((prev) => prev + 1);
  };
  const onUpdateImg = (ind: number) => {
    setCurrentIndex(ind);
    setCurrentImg(screenShots[ind]);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.frame}>
        <div className={classes.imgNum}>
          {currentIndex + 1}/{screenShots.length}
        </div>
        <img src={currentImg.image} alt={`${title} screenshot`} />
      </div>
      <Arrows
        onPrev={handlePrev}
        onNext={handleNext}
        currInd={currentIndex}
        imgLen={screenShots.length}
      >
        <div className={classes.dots}>
          {screenShots.map((_, ind) => (
            <div
              key={ind}
              className={`${currentIndex === ind ? classes.active : ''}`}
              onClick={() => onUpdateImg(ind)}
            ></div>
          ))}
        </div>
      </Arrows>
    </div>
  );
};
export default Gallery;
