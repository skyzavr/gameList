import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { API, GameDescT } from '@constant/params';

import { clearFilterParam } from '@widgets/SettingArea/modal/filterSlice';
import { clearSortParam } from '@widgets/SettingArea/modal/sortSlice';
import { clearSearchQuery } from '@shared/ui/Search/modal/searchSlice';
import { useFetch } from '@shared/hooks/useFetch';

import LinkIcon from './icons/LinkIcon';
import GameInfo from './gameInfo/GameInfo';
import Boundries from './Boundries/GPBoundries';
import Gallery from './gallery/Gallery';

import classes from './gamePage.module.css';

type LocationState = {
  id: number;
};

export const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state as LocationState;
  const { error, isError, isLoading, data } = useFetch(`${API}/game?id=${id}`);
  const [currentData, setCurrentData] = useState<GameDescT>(Object);

  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentData(data as GameDescT);
  }, [data]);

  const handleBack = () => {
    dispatch(clearFilterParam());
    dispatch(clearSortParam());
    dispatch(clearSearchQuery());
    navigate(-1);
  };
  return (
    <Boundries
      error={error}
      isError={isError}
      len={Object.keys(currentData).length}
      isLoading={isLoading}
    >
      <div className={classes.wrapper}>
        <div className={classes.backBtn} onClick={handleBack}>
          <span>↽ Back to list</span>
        </div>
        <section className={classes.gameWrapper}>
          <Gallery data={currentData} />
          <div className={classes.info}>
            <div className={classes.gameTitle}>
              {currentData.title} <LinkIcon link={currentData.game_url} />
            </div>
            <GameInfo gameData={currentData} />
          </div>
        </section>
      </div>
    </Boundries>
  );
};
