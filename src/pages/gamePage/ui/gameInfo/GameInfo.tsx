import { GameDescT, GameRS, options } from '@constant/params';

import DescArea from '@shared/ui/DescriptionArea/DescArea';
import GameDesc from '../descArea/GameDesc';

import classes from './gameInfo.module.css';

type Props = {
  gameData: GameDescT;
};

const GameInfo = ({ gameData }: Props) => {
  const {
    title,
    description,
    genre,
    platform,
    publisher,
    developer,
    release_date: date,
    minimum_system_requirements: minSR,
  }: GameDescT = gameData;

  const { os, processor, memory, graphics, storage }: GameRS = minSR;

  const releaseDate = new Date(date).toLocaleDateString('en', options);

  const addData = [
    { id: 'id1', name: 'Genre', value: genre },
    { id: 'id2', name: 'Platform', value: platform },
    { id: 'id3', name: 'Publisher', value: publisher },
    { id: 'id4', name: 'Developer', value: developer },
    { id: 'id5', name: 'Release', value: releaseDate },
  ];
  const reqData = [
    { id: 'id1', name: 'OS', value: os },
    { id: 'id2', name: 'Processor', value: processor },
    { id: 'id3', name: 'Memory', value: memory },
    { id: 'id4', name: 'Graphics', value: graphics },
    { id: 'id5', name: 'Storage', value: storage },
  ];

  return (
    <>
      <div className={classes.gameInfo}>
        <div className={classes.textTitle}>Additional Information</div>
        <DescArea data={addData} />
      </div>
      <GameDesc title={title} desc={description} />
      <div className={classes.gameInfo}>
        <div className={classes.textTitle}>Minimum system requirements</div>
        <DescArea data={reqData} />
      </div>
    </>
  );
};
export default GameInfo;
